"use client"
import { Dispatch, FC, SetStateAction } from "react"
import { Button } from "./ui/button"
import { useWallet } from "@solana/wallet-adapter-react"
import axios from "axios"

interface SignatureMessage {
  message: string
  publicKey: string
  timestamp: number
}

interface SignatureRequest {
  message: SignatureMessage
  signature: {
    data: number[]
    type: string
  }
  wallet: string
}

function SignRugcheck({
  setSignedAction,
}: {
  setSignedAction: Dispatch<SetStateAction<boolean>>
}) {
  const { publicKey, signMessage } = useWallet()
  const RugCheckApi = "https://api.rugcheck.xyz/v1/auth/login/solana"
  const message: string = "Sign-in to Rugcheck.xyz"

  const createSignMessage = (
    message: string,
    publicKey: string
  ): SignatureMessage => {
    return {
      message,
      publicKey,
      timestamp: Date.now(),
    }
  }

  async function handleRugCheckApi(): Promise<void> {
    if (!publicKey || !signMessage) {
      console.error("Wallet not connected")
      return
    }

    try {
      // Create the message to sign
      const signInMessage = createSignMessage(message, publicKey.toBase58())

      // Convert message to bytes for signing
      const messageBytes = new TextEncoder().encode(
        JSON.stringify(signInMessage)
      )

      // Sign the message
      const signature = await signMessage(messageBytes)

      // Prepare the request body
      const requestBody: SignatureRequest = {
        message: signInMessage,
        signature: {
          data: Array.from(signature),
          type: "ed25519",
        },
        wallet: publicKey.toBase58(),
      }

      // Send request to RugCheck API
      const { data } = await axios.post(RugCheckApi, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      // Store the JWT token
      if (data.token) {
        localStorage.setItem("rugcheck_token", data.token)
        setSignedAction(true)
      }
    } catch (error: any) {
      console.error("Error during RugCheck authentication:", error)
      setSignedAction(false)
    }
  }

  return <Button onClick={handleRugCheckApi}>Sign</Button>
}

export default SignRugcheck