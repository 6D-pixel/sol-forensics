"use client"

import { useWallet } from "@/lib/context/WalletContext"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export default function ConnectWallet() {
  const { connect, disconnect, isConnected, publicKey } = useWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isConnected) {
    return (
      <Button
        onClick={connect}
        className="bg-primary"
      >
        Connect Wallet
      </Button>
    )
  }

  return (
    <Button
      onClick={disconnect}
      variant="outline"
      className="font-mono hover:bg-red-500/10"
    >
      {publicKey?.toBase58().slice(0, 4)}...
      {publicKey?.toBase58().slice(-4)}
    </Button>
  )
}
