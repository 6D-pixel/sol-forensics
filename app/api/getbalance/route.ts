import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchBalanceWithRetry(
  address: string,
  rpcUrl: string,
  retries = 2,
  delayMs = 1000
) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(rpcUrl, {
        jsonrpc: "2.0",
        id: new Date().getTime().toString(),
        method: "getBalance",
        params: [address],
      })

      return {
        address,
        balance: response.data.result?.value / 1_000_000_000 || 0,
      }
    } catch (error: any) {
      if (error.response?.status === 429 && i < retries - 1) {
        console.log(
          `Rate limited for ${address}, retrying after ${delayMs}ms...`
        )
        await delay(delayMs * (i + 1)) // Exponential backoff
        continue
      }
      console.error(`Error fetching balance for ${address}:`, error)
      return {
        address,
        balance: 0,
      }
    }
  }
  return {
    address,
    balance: 0,
  }
}

export async function POST(req: NextRequest) {
  try {
    const { addrs } = await req.json()
    const walletAddress: Array<string> = addrs
    const heliusApiKey = process.env.HELIUS_API

    if (!heliusApiKey) {
      console.error("Helius API error")
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      )
    }

    const rpcUrl = `https://mainnet.helius-rpc.com/?api-key=${heliusApiKey}`

    // Process addresses in chunks to avoid rate limits
    const chunkSize = 9
    const results = []

    for (let i = 0; i < walletAddress.length; i += chunkSize) {
      const chunk = walletAddress.slice(i, i + chunkSize)
      const chunkPromises = chunk.map((address) =>
        fetchBalanceWithRetry(address, rpcUrl)
      )

      const chunkResults = await Promise.all(chunkPromises)
      results.push(...chunkResults)

      if (i + chunkSize < walletAddress.length) {
        await delay(1000) // Wait 1 second between chunks
      }
    }

    return NextResponse.json(results)
  } catch (e: any) {
    return NextResponse.json(
      { error: "failed to fetch data", details: e.message || "Unknown error" },
      { status: 500 }
    )
  }
}
