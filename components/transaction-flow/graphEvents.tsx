import { useRegisterEvents, useSigma } from "@react-sigma/core"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface NodeData {
  address: string
  x: number
  y: number
}

interface EdgeData {
  from: string
  to: string
  amount?: string
  timestamp?: string
  signature?: string
  txType?: string
  source?: string
  description?: string
  x: number
  y: number
}

interface EdgeAttributes {
  source: string
  target: string
  amount?: string
  timestamp?: string
}

function GraphEvents() {
  const registerEvents = useRegisterEvents()
  const sigma = useSigma()
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null)
  const [hoveredEdge, setHoveredEdge] = useState<EdgeData | null>(null)

  // Add cursor styles
  useEffect(() => {
    // Get the sigma canvas container
    const container = sigma.getContainer()

    // Add cursor styles
    container.style.cursor = "default"

    registerEvents({
      enterNode: (event) => {
        container.style.cursor = "pointer"
        const node = event.node
        setHoveredNode({
          address: node,
          x: event.event.x,
          y: event.event.y,
        })
        setHoveredEdge(null)
      },
      leaveNode: () => {
        container.style.cursor = "move"
        setTimeout(() => setHoveredNode(null), 10000)
        
      },
      enterEdge: (event) => {
        container.style.cursor = "pointer"
        const edge = sigma.getGraph().getEdgeAttributes(event.edge)
        console.log("edge :", edge)
        setHoveredEdge({
          from: edge.from || "",
          to: edge.to || "",
          amount: edge.label,
          signature: edge.signature,
          txType: edge.type,
          source: edge.source,
          timestamp: edge.timestamp,
          description: edge.description,
          x: event.event.x,
          y: event.event.y,
        })
        setHoveredNode(null)
      },
      leaveEdge: () => {
        container.style.cursor = "move"
        setTimeout(() => setHoveredEdge(null), 10000)
      },
    })
  }, [registerEvents, sigma])

  if (!hoveredNode && !hoveredEdge) return null

  return (
    <>
      {hoveredNode && (
        <div
          style={{
            position: "fixed",
            top: "4rem",
            right: "1rem",
            zIndex: 100,
          }}
        >
          <Card className="w-[300px] bg-transparent">
            <CardHeader>
              <CardTitle className="text-sm">Node Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-mono break-all">
                {hoveredNode.address}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {hoveredEdge && (
        <div
          style={{
            position: "fixed",
            top: "4rem",
            right: "1rem",
            zIndex: 100,
          }}
        >
          <Card className="w-[300px] bg-transparent">
            <CardHeader>
              <CardTitle className="text-sm">Transaction Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">From</p>
                <p className="text-sm font-mono break-all">
                  {hoveredEdge.from}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">To</p>
                <p className="text-sm font-mono break-all">{hoveredEdge.to}</p>
              </div>
              {hoveredEdge.amount && (
                <div>
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="text-sm">{hoveredEdge.amount}</p>
                </div>
              )}
              {hoveredEdge.signature && (
                <div>
                  <p className="text-xs text-muted-foreground">Signature</p>
                  <p className="text-sm font-mono break-all">
                    {hoveredEdge.signature}
                  </p>
                </div>
              )}
              {hoveredEdge.txType && (
                <div>
                  <p className="text-xs text-muted-foreground">txType</p>
                  <p className="text-sm">{hoveredEdge.txType}</p>
                </div>
              )}
              {hoveredEdge.source && (
                <div>
                  <p className="text-xs text-muted-foreground">Source</p>
                  <p className="text-sm">{hoveredEdge.source}</p>
                </div>
              )}
              {hoveredEdge.timestamp && (
                <div>
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="text-sm">
                    {new Date(hoveredEdge.timestamp).toLocaleString()}
                  </p>
                </div>
              )}
              {hoveredEdge.description && (
                <div>
                  <p className="text-xs text-muted-foreground">Description</p>
                  <p className="text-sm break-words whitespace-pre-wrap">
                    {hoveredEdge.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default GraphEvents
