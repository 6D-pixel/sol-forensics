import { ParametersTypes } from "@/app/types"
import { useSigma } from "@react-sigma/core"
import { useEffect, useState } from "react"

const HighlightNeighbors = ({
  parameters,
}: {
  parameters: ParametersTypes
}) => {
  const sigma = useSigma()
  const graph = sigma.getGraph()
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  useEffect(() => {
    // Highlight on node click
    const enterHandler = (e: any) => setSelectedNode(e.node)
    // Clear highlight on mouse exit
    const leaveHandler = () => setSelectedNode(null)

    sigma.on("clickNode", enterHandler)
    sigma.on("leaveNode", leaveHandler)

    sigma.setSetting("nodeReducer", (node, data) => {
      if (!selectedNode) {
        if (node === parameters.address) {
          data.color = "#9400d3"
        }
        return data
      }
      const neighbors = new Set(graph.neighbors(selectedNode))

      if (node === parameters.address) {
        data.color = "#9400d3"
      }

      return node === selectedNode || neighbors.has(node)
        ? data
        : { ...data, hidden: true }
    })

    sigma.setSetting("edgeReducer", (edge, data) => {
      if (!selectedNode) return data

      return graph.source(edge) === selectedNode ||
        graph.target(edge) === selectedNode
        ? { ...data, forceLabel: true }
        : { ...data, hidden: true }
    })

    return () => {
      sigma.off("clickNode", enterHandler)
      sigma.off("leaveNode", leaveHandler)
    }
  }, [sigma, selectedNode, graph])

  return null
}

export default HighlightNeighbors
