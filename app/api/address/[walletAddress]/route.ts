import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, {params}:{params:Promise<any>}) {
  const {walletAddress} = await params
  return NextResponse.json({ message: "hello ", walletAddress })
}