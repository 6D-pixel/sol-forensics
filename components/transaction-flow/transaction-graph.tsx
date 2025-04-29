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
import LayoutControler from "./layoutControler"
import { ZoomIn, ZoomOut, Focus } from "lucide-react"
import getCSSVar from "@/util/getcssvar"
import { EdgeCurvedArrowProgram } from "@sigma/edge-curve"
import { NodeBorderProgram } from "@sigma/node-border"
import GraphEvents from "./graphEvents"
import HighlightNeighbors from "./HighlightNeighbors"
import { useLayoutCirclepack } from "@react-sigma/layout-circlepack"
export default function TransactionGraph({
  preData,
  isLoading,
  hasData,
  parameters,
}: TransactionGraphProps) {
  const [graphData, setGraphData] = useState<GraphData | null>(null)

  // Process data when preData changes
  useEffect(() => {
    if (preData) {
      const processed = processData(preData, parameters)
      setGraphData(processed)
    }
  }, [preData])

  //Get balance once graphData is available
  // useEffect(() => {
  //   const updateBalance = async () => {
  //     if(graphData){
  //       const newNodeMap = await processBalance(graphData.nodesMap)
  //       if (newNodeMap) {
  //         setGraphData(prevGraphData => ({
  //           ...prevGraphData!,
  //           nodesMap: newNodeMap
  //         }))
  //       }
  //     }
  //   }
  //   updateBalance()
  // },[graphData])

  const LoadGraph = () => {
    const loadGraph = useLoadGraph()
    const { assign } = useLayoutCirclepack()

    useEffect(() => {
      if (!graphData) return
      const graph = new Graph()

      // Add nodesMap
      for (const [_, node] of graphData.nodesMap) {
        graph.addNode(node.address, {
          x: node.x,
          y: node.y,
          size: node.balance
            ? Math.min(25, Math.max(9, Math.log10(node.balance) * 2))
            : node.size,
          hidden: false,
          borderColor: "#532d88",
          balance: node.balance,
        })
      }

      // Add edges
      for (const edge of graphData.edges) {
        try {
          graph.addEdge(edge.from, edge.to, {
            size: 2,
            label: `${edge.transferAmount} SOL`,
            from: edge.from,
            to: edge.to,
            signature: edge.signature,
            txType: edge.txType,
            source: edge.source,
            timestamp: edge.timestamp,
            description: edge.description,
          })
        } catch (error) {
          console.warn("Failed to add edge:", error)
        }
      }

      loadGraph(graph)
      //apply layout
      assign()
    }, [graphData, loadGraph, preData, assign])

    return null
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-foreground/30 border-t-foreground"></div>
        <span className="text-sm text-muted-foreground">Loading graph data...</span>
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
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 bg-foreground/50 rounded-full"></div>
          <div className="w-2 h-2 bg-foreground/50 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-foreground/50 rounded-full animate-pulse delay-150"></div>
          <span className="ml-2">Processing graph data...</span>
        </div>
      </div>
    )
  }

  const sigmaStyle = {
    cursor: "move",
  }
  const nodeColor = getCSSVar("--chart-4")
  const edgeColor = getCSSVar("--chart-3")

  const settingCustom = {
    allowInvalidContainer: true,
    renderEdgeLabels: true,
    defaultNodeColor: nodeColor,
    defaultEdgeColor: edgeColor,
    minEdgeThickness: 3.5,
    autoRescale: true,
    defaultEdgeType: "curvedArrow",
    edgeLabelWeight: "bold",
    edgeProgramClasses: {
      curvedArrow: EdgeCurvedArrowProgram,
    },
    defaultNodeType: "bordered",
    nodeProgramClasses: {
      bordered: NodeBorderProgram,
    },
    enableEdgeEvents: true,
    zIndex: true,
  }

  return (
    <section className="w-full h-full">
      <SigmaContainer style={sigmaStyle} settings={settingCustom}>
        <LoadGraph />
        <ControlsContainer
          position={"bottom-left"}
          style={{
            marginLeft: "1rem",
            marginBottom: "2rem",
            backgroundColor: "transparent",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <ZoomControl
            labels={{ zoomIn: "PLUS", zoomOut: "MINUS", reset: "RESET" }}
          >
            <ZoomIn
              color="var(--foreground)"
              className="transition-colors hover:bg-foreground/10"
            />
            <ZoomOut
              color="var(--foreground)"
              className="transition-colors hover:bg-foreground/10"
            />
            <Focus
              color="var(--foreground)"
              className="transition-colors hover:bg-foreground/10"
            />
          </ZoomControl>
        </ControlsContainer>
        <ControlsContainer position="top-left">
          <LayoutControler />
        </ControlsContainer>
        <GraphEvents />
        <HighlightNeighbors parameters={parameters} />
      </SigmaContainer>
    </section>
  )
}
