"use client"

import { useState } from "react"
import TransactionGraph from "@/components/transaction-graph"
import { InputParametersSheet } from "@/components/input-parameters-sheet"
import { Header } from "@/components/header"
import { ParametersTypes } from "../../types"

export default function TransactionVisualizerPage() {
  const [parameters, setParameters] = useState<ParametersTypes>({
    address: "",
    startDate: null,
    endDate: null,
    minValue: 0,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [hasData, setHasData] = useState(false)

  const handleParametersChange = (newParameters: ParametersTypes) => {
    setParameters(newParameters)

    // Simulate loading state
    if (newParameters.address) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setHasData(true)
      }, 1500)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex">
        <InputParametersSheet
          parameters={parameters}
          onParametersChange={handleParametersChange}
        />
        <div className="flex-1">
          <TransactionGraph
            parameters={parameters}
            isLoading={isLoading}
            hasData={hasData}
          />
        </div>
      </main>
    </div>
  )
}
