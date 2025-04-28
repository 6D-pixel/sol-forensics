"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { PublicKey, Transaction } from "@solana/web3.js"

interface PhantomProvider {
  publicKey: PublicKey | null
  isConnected: boolean
  signMessage: (message: Uint8Array) => Promise<Uint8Array>
  signAndSendTransaction: (transaction: Transaction) => Promise<string>
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

interface WalletContextType {
  wallet: PhantomProvider | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  isConnected: boolean
  publicKey: PublicKey | null
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  connect: async () => {},
  disconnect: async () => {},
  isConnected: false,
  publicKey: null,
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<PhantomProvider | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const provider = (window as any).phantom?.solana

      if (provider?.isPhantom) {
        setWallet(provider)
        if (provider.isConnected) {
          setIsConnected(true)
        }
      }
    }
  }, [])

  const connect = async () => {
    try {
      if (wallet) {
        await wallet.connect()
        setIsConnected(true)
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error)
    }
  }

  const disconnect = async () => {
    try {
      if (wallet) {
        await wallet.disconnect()
        setIsConnected(false)
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error)
    }
  }

  return (
    <WalletContext.Provider
      value={{
        wallet,
        connect,
        disconnect,
        isConnected,
        publicKey: wallet?.publicKey || null,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
