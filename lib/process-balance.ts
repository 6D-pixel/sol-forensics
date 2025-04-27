import { NodeMap } from "@/app/types"
import axios from "axios"

async function processBalance(nodeMaps: Map<string, NodeMap>) {
  if (!nodeMaps) {
    console.log("empty nodeMaps")
    return null
  }

  const addrs: Array<string> = []
  for (const [_, node] of nodeMaps) {
    addrs.push(node.address)
  }

  try {
    const response = await axios.post("/api/getbalance", {
      addrs,
    })

    if (!response.data || !Array.isArray(response.data)) {
      console.error("Invalid response format from balance API")
      return nodeMaps
    }

    for (const data of response.data) {
      if (nodeMaps.has(data.address)) {
        const node = nodeMaps.get(data.address)!
        nodeMaps.set(data.address, {
          ...node,
          balance: data.balance ?? 0, // Use nullish coalescing to handle null/undefined
        })
      }
    }

    return nodeMaps
  } catch (error: any) {
    console.error("Error fetching balances:", error.message)
    // Return the original nodeMaps without balances rather than failing completely
    return nodeMaps
  }
}

export default processBalance
