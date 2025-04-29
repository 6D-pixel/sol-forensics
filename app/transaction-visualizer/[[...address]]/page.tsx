"use client"

import { useState } from "react"
import { InputParametersSheet } from "@/components/input-parameters-sheet"
import { ParametersTypes } from "../../types"
import axios from "axios"
import dynamic from "next/dynamic"

const TransactionGraph = dynamic(
  () => import("@/components/transaction-flow/transaction-graph"),
  {
    ssr: false,
  }
)

export default function TransactionVisualizerPage() {
  const [parameters, setParameters] = useState<ParametersTypes>({
    address: "",
    startDate: null,
    endDate: null,
    minValue: 0,
  })
  const [preData, setPreData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [hasData, setHasData] = useState(false)

  const handleParametersChange = async (newParameters: ParametersTypes) => {
    setParameters(newParameters)
    if (!newParameters.address) {
      return
    }

    setIsLoading(false)
    const Response = await axios.post("/api/address", {
      parameters: newParameters,
    })

    setPreData(Response.data)
    setHasData(true)
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <main className="flex-1 flex relative">
        <InputParametersSheet
          parameters={parameters}
          onParametersChangeAction={handleParametersChange}
        />
        <div className="flex-1 w-full">
          <TransactionGraph
            parameters={parameters}
            preData={preData}
            isLoading={isLoading}
            hasData={hasData}
          />
        </div>
      </main>
    </div>
  )
}
