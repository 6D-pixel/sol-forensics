import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
import { ApiResponseSignature, ParametersTypes } from "../types"
import redis from "@/lib/redis"

//gets wallet history
export async function GET(
  req: NextRequest,
  { params }: { params: { walletAddress: string } }
) {
  try {
    const { walletAddress } = params

    const heliusUrl = process.env.HELIUS_URL
    const heliusApiKey = process.env.HELIUS_API

    if (!heliusApiKey || !heliusUrl) {
      console.error("Helius API or Url error")
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      )
    }

    const ulr: string = `${heliusUrl}/addresses/${walletAddress}/transactions?api-key=${heliusApiKey}`

    const response = await axios.get(ulr)

    return NextResponse.json(response.data)
  } catch (e: any) {
    console.error("error fetching wallet history from Helius", e)

    return NextResponse.json(
      { error: "failed to fetch data", details: e.message || "Unknown error" },
      { status: 500 }
    )
  }
}

//post request to get all Transactions
export async function POST(req: NextRequest) {
  try {
    const { parameters } = await req.json()
    const heliusApiKey = process.env.HELIUS_API
    const walletAddress = parameters.address

    if (!heliusApiKey) {
      console.error("Helius API error")
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500 }
      )
    }

    //check redis
    const catchData = await redis.get(walletAddress)
    if (catchData) {
      console.log("cache hit for wallet: ", walletAddress)
      return NextResponse.json(JSON.parse(catchData))
    }

    // Get signatures from address
    const rpcUrl = `https://mainnet.helius-rpc.com/?api-key=${heliusApiKey}`

    const response: ApiResponseSignature = await axios.post(rpcUrl, {
      jsonrpc: "2.0",
      id: new Date().getTime().toString(),
      method: "getSignaturesForAddress",
      params: [walletAddress, { limit: 100 }],
    })

    // get parsed transaction as batch
    //push transaction to array
    let transactions: Array<string> = []

    const results = Array.isArray(response.data.result)
      ? response.data.result
      : []
    results.forEach((element) => {
      if (element.err === null) {
        //check for success
        transactions.push(element.signature)
      }
    })

    //get transaction data for all the tx hash

    const txUrl = `https://api.helius.xyz/v0/transactions`

    const txResponse = await axios.post(`${txUrl}?api-key=${heliusApiKey}`, {
      transactions: transactions, //passing transactions array MAX 100 limit
    })

    //set redis
    await redis.set(walletAddress, JSON.stringify(txResponse.data), "EX", 3600)

    return NextResponse.json(txResponse.data)
  } catch (e: any) {
    console.error("error fetching wallet history from Helius", e)

    return NextResponse.json(
      { error: "failed to fetch data", details: e.message || "Unknown error" },
      { status: 500 }
    )
  }
}
