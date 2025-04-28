"use client"
import { Dispatch, SetStateAction } from "react"
import { Button } from "./ui/button"
import { useWallet } from "@/lib/context/WalletContext"
import axios from "axios"

// These interfaces match the exact API specification
interface SignMessage {
  message: string
  publicKey: string
  timestamp: number
}

interface AuthRequest {
  message: SignMessage
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
  const { wallet, isConnected, publicKey } = useWallet()
  const RugCheckApi = "https://api.rugcheck.xyz/v1/auth/login/solana" // Matches the exact API endpoint
  const message = "Sign-in to Rugcheck.xyz"

  async function handleRugCheckApi(): Promise<void> {
    if (!isConnected || !wallet || !publicKey) {
      console.error("Wallet not connected")
      return
    }

    try {
      // Create the message object exactly as specified
      const signMessage: SignMessage = {
        message,
        publicKey: publicKey.toString(),
        timestamp: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
      }

      // Convert message to bytes for signing
      const messageBytes = new TextEncoder().encode(JSON.stringify(signMessage))

      // Sign the message
      const signature = await wallet.signMessage(messageBytes)

      // Convert signature to number array as specified
      const signatureArray = Array.from(new Uint8Array(signature))

      // Construct the request body exactly as specified in the API docs
      const requestBody: AuthRequest = {
        message: signMessage,
        signature: {
          data: signatureArray,
          type: "ed25519",
        },
        wallet: publicKey.toString(),
      }

      // Make the API request with exact headers from the docs
      const response = await axios.post(RugCheckApi, requestBody, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      if (response.data?.token) {
        localStorage.setItem("rugcheck_token", response.data.token)
        setSignedAction(true)
      }
    } catch (error: any) {
      console.error("Auth Error:", {
        message: error?.response?.data?.message || error.message,
        status: error?.response?.status,
        data: error?.response?.data,
      })
      setSignedAction(false)
    }
  }

  return (
    <Button
      onClick={handleRugCheckApi}
      className="w-full"
      disabled={!isConnected}
    >
      {isConnected ? "Sign with Wallet" : "Connect Wallet First"}
    </Button>
  )
}

export default SignRugcheck
