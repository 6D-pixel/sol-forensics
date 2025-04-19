"use client"
import { useEffect, useState } from "react"
import Graph from "graphology"
import { SigmaContainer, useLoadGraph } from "@react-sigma/core"
import "@react-sigma/core/lib/style.css"
import { TransactionGraphProps } from "@/app/types"
import processData from "@/lib/process-data"

export default function TransactionGraph({
  preData,
  isLoading,
  hasData,
}: TransactionGraphProps) {
  // Component that loads the graph
  const [graphData, setGraphData] = useState<undefined>(); //types
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
        hidden: false,
      })
      loadGraph(graph)
    }, [loadGraph])

    return null
  }

  if (false) {
    //need to use isLoading update Dynamical
    return <div>spinning Graph animation...</div>
  }

  if(!graphData){
    //call worker send data
    processData(preData);
    return <div>Processing data...</div>
  }
  
  const sigmaStyle = {
    backgroundColor: "var(--background)",
    textColor: "white",
  }
  return (
    <section className="w-full h-[90vh] md:h-screen">
      <SigmaContainer
        style={sigmaStyle}
        settings={{ labelColor: { color: "black" } }}
      >
        <LoadGraph />
      </SigmaContainer>
    </section>
  )
}
