"use client"
import { useEffect } from "react"
import Graph from "graphology"
import { SigmaContainer, useLoadGraph } from "@react-sigma/core"
import "@react-sigma/core/lib/style.css"
import { TransactionGraphProps } from "@/app/types"

export default function TransactionGraph({
  preData,
  isLoading,
  hasData,
}: TransactionGraphProps) {
  // Component that loads the graph
  const LoadGraph = () => {
    const loadGraph = useLoadGraph()

    useEffect(() => {
      const graph = new Graph()
      graph.addNode("first", {
        x: 0,
        y: 0,
        size: 15,
        label: "My first node",
        color: "red",
        hidden:false
      })
      loadGraph(graph)
    }, [loadGraph])

    return null
  }

  if (false) {
    return <div>spinning Graph animation...</div>
  }

  const sigmaStyle = { backgroundColor: "var(--background)", textColor: "white" };
  return (
    <section className="w-full h-[90vh] md:h-screen">
      <SigmaContainer style={sigmaStyle} settings={{labelColor: {color:"black"}}}>
        <LoadGraph />
      </SigmaContainer>
    </section>
  )
}
