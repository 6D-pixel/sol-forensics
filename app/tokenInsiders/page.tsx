"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react"
import dynamic from "next/dynamic"

const InsiderGraph = dynamic(
  () => import("@/components/InsiderGraph/InsiderGraph"),
  {
    ssr: false,
  }
)

function page() {
  const [tokenAddr, setTokenAddr] = useState<string>("")
  const [graphData, SetGraphData] = useState(null)

  async function handleToken() {
    try {
      const response = await axios.get(
        `https://api.rugcheck.xyz/v1/tokens/${tokenAddr}/insiders/graph`
      )
      console.log(response.data[0])
      SetGraphData(response.data[0]) // Set the first item from the array as graph data
    } catch (error) {
      console.error("Error fetching graph data:", error)
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="w-full max-w-2xl mx-auto py-6 px-4 space-y-4">
        <div className="flex gap-4">
          <Input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTokenAddr(e.target.value)
            }
            value={tokenAddr}
            placeholder="Token Address"
            className="flex-1"
          />
          <Button onClick={handleToken}>Get Insider Graph</Button>
        </div>
        <div className="h-px bg-border" />
      </div>
      <div className="flex-1 w-full">
        {graphData && <InsiderGraph graphData={graphData} />}
      </div>
    </div>
  )
}
export default page
