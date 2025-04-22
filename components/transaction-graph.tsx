"use client"
import { useEffect, useState } from "react"
import Graph from "graphology"
import {
  SigmaContainer,
  useLoadGraph,
  ControlsContainer,
  ZoomControl,
} from "@react-sigma/core"
import "@react-sigma/core/lib/style.css"
import { TransactionGraphProps } from "@/app/types"
import processData from "@/lib/process-data"
import { GraphData } from "@/app/types"

export default function TransactionGraph({
  preData,
  isLoading,
  hasData,
}: TransactionGraphProps) {
  const [graphData, setGraphData] = useState<GraphData | null>(null)

  // Process data when preData changes
  useEffect(() => {
    if (preData) {
      const processed = processData(preData)
      setGraphData(processed)
    }
  }, [preData])

  const LoadGraph = () => {
    const loadGraph = useLoadGraph()

    useEffect(() => {
      if (!graphData) return
      const graph = new Graph()

      // Add nodesMap
      for (const [_, node] of graphData.nodesMap) {
        graph.addNode(node.address, {
          x: node.x,
          y: node.y,
          size: node.size,
          label: node.address.substring(0, 4),
          color: node.color,
          hidden: false,
        })
      }

      // Add edges
      for (const edge of graphData.edges) {
        try {
          graph.addEdge(edge.from, edge.to, {
            size: 2,
            color: "white",
            label: `${edge.transferAmount} SOL`,
            type: "arrow",
          })
        } catch (error) {
          console.warn("Failed to add edge:", error)
        }
      }

      loadGraph(graph)
    }, [graphData, loadGraph])

    return null
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        Loading transaction data...
      </div>
    )
  }

  if (!hasData) {
    return (
      <div className="flex justify-center items-center h-full">
        No transaction data available
      </div>
    )
  }

  if (!graphData) {
    return (
      <div className="flex justify-center items-center h-full">
        Processing graph data...
      </div>
    )
  }

  const sigmaStyle = {
    backgroundColor: "var(--background)",
    textColor: "node",
  }
  const settingCustom = {
    allowInvalidContainer: true,
    renderEdgeLabels: true,
    defaultEdgeType: "straight",
    edgeProgramClasses: {
      // straight: EdgeArrowProgram,
      // curved: EdgeCurveProgram,
    },
    labelColor: { color: "white" },
  }

  return (
    <section className="w-full h-full">
      <SigmaContainer style={sigmaStyle} settings={settingCustom}>
        <LoadGraph />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
        </ControlsContainer>
      </SigmaContainer>
    </section>
  )
}
