"use client"

import { useState } from "react"
import { InputParametersSheet } from "@/components/input-parameters-sheet"
import { Header } from "@/components/header"
import { ParametersTypes } from "../../types"
import axios from "axios"
import dynamic from "next/dynamic"

const TransactionGraph = dynamic(
  () => import("@/components/transaction-graph"),
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

    if (newParameters.address) {
      const Response = await axios.post("/api/address", {
        parameters,
      })

      setPreData(Response.data)
      setIsLoading(false)
      setHasData(true)

      console.log(Response.data)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex relative">
        <InputParametersSheet
          parameters={parameters}
          onParametersChange={handleParametersChange}
        />
        <div className="flex-1 w-full">
          <TransactionGraph
            preData={preData}
            isLoading={isLoading}
            hasData={hasData}
          />
        </div>
      </main>
    </div>
  )
}
