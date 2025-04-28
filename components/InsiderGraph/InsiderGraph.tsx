"use client"

import { useEffect, useState } from "react"
import Graph from "graphology"
import {
  SigmaContainer,
  useLoadGraph,
  ControlsContainer,
  ZoomControl,
  useSigma,
} from "@react-sigma/core"
import "@react-sigma/core/lib/style.css"
import { TransactionGraphProps } from "@/app/types"
import processData from "@/lib/process-data"
import { GraphData } from "@/app/types"
import { ZoomIn, ZoomOut, Focus } from "lucide-react"
import getCSSVar from "@/util/getcssvar"
import { EdgeCurvedArrowProgram } from "@sigma/edge-curve"
import { NodeBorderProgram } from "@sigma/node-border"
import { useLayoutCirclepack } from "@react-sigma/layout-circlepack"
import LayoutControler from "../transaction-flow/layoutControler"
import InsiderEvents from "./InsiderEvents"
import HighlightNeighbors from "../transaction-flow/HighlightNeighbors"

function InsiderGraph({ graphData }: { graphData: any }) {
  const LoadGraph = () => {
    const loadGraph = useLoadGraph()
    const { assign } = useLayoutCirclepack()

    useEffect(() => {
      if (!graphData || !graphData.nodes || graphData.nodes.length === 0) return
      const graph = new Graph()

      const maxHoldings = Math.max(
        ...graphData.nodes.map((node: any) => node.holdings || 0)
      )

      const calculateNodeSize = (
        holdings: number,
        currentMaxHoldings: number
      ): number => {
        const minSize = 15
        const maxSize = 50

        if (currentMaxHoldings <= 0) {
          return minSize
        }

        const scaledSize =
          minSize + (holdings / currentMaxHoldings) * (maxSize - minSize)

        return Math.max(minSize, Math.min(maxSize, scaledSize))
      }

      // Add nodesMap
      for (const node of graphData.nodes) {
        const nodeSize = calculateNodeSize(node.holdings || 0, maxHoldings)
        graph.addNode(node.id, {
          size: nodeSize,
          hidden: false,
          borderColor: "#532d88",
          holdings: node.holdings,
          participant: String(node.participant),
          x: node.x,
          y: node.y,
        })
      }

      // Add edges
      for (const edge of graphData.links) {
        try {
          graph.addEdge(edge.source, edge.target, {
            size: 2,
            source: edge.source,
            target: edge.target,
          })
        } catch (error) {
          console.warn("Failed to add edge:", error)
        }
      }

      loadGraph(graph)
      //apply layout
      assign()
    }, [graphData, loadGraph, assign])

    return null
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
  if (!graphData) {
    return (
      <div className="flex justify-center items-center h-full">
        Processing graph data...
      </div>
    )
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
        <InsiderEvents />
        <HighlightNeighbors parameters={{ address: "" }} />
      </SigmaContainer>
    </section>
  )
}
export default InsiderGraph
