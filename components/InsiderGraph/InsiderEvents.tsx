import { useRegisterEvents, useSigma } from "@react-sigma/core"
import { useEffect, useState, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface NodeData {
  address: string
  x?: number
  y?: number
  participant: boolean
  holdings: any
}

interface EdgeData {
  source: string
  target: string
}

interface EdgeAttributes {
  source: string
  target: string
  amount?: string
  timestamp?: string
}

function InsiderEvents() {
  const registerEvents = useRegisterEvents()
  const sigma = useSigma()
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null)
  const [hoveredEdge, setHoveredEdge] = useState<EdgeData | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Add cursor styles
  useEffect(() => {
    // Get the sigma canvas container
    const container = sigma.getContainer()

    // Add cursor styles
    container.style.cursor = "default"

    registerEvents({
      enterNode: (event) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        container.style.cursor = "pointer"
        const node = sigma.getGraph().getNodeAttributes(event.node)
        setHoveredNode({
          address: event.node,
          holdings: node.holdings,
          participant: node.participant,
        })
        setHoveredEdge(null)
      },
      leaveNode: () => {
        container.style.cursor = "move"
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => setHoveredNode(null), 10000)
      },
      enterEdge: (event) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        container.style.cursor = "pointer"
        const edge = sigma.getGraph().getEdgeAttributes(event.edge)

        setHoveredEdge({
          source: edge.source || "",
          target: edge.target || "",
        })
        setHoveredNode(null)
      },
      leaveEdge: () => {
        container.style.cursor = "move"
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => setHoveredEdge(null), 10000)
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
            <CardContent className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="text-sm font-mono break-all">
                  {hoveredNode.address}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://solscan.io/account/${hoveredNode.address}`}
                  >
                    <ExternalLink className="inline-block ml-2 w-4 h-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors" />
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Holdings</p>
                <p className="text-sm font-mono break-all">
                  {hoveredNode.holdings}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Participant</p>
                <p className="text-sm font-mono break-all">
                  {hoveredNode.participant}
                </p>
              </div>
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
                <p className="text-xs text-muted-foreground">Source</p>
                <p className="text-sm font-mono break-all">
                  {hoveredEdge.source}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://solscan.io/account/${hoveredEdge.source}`}
                  >
                    <ExternalLink className="inline-block ml-2 w-4 h-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors" />
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Target</p>
                <p className="text-sm font-mono break-all">
                  {hoveredEdge.target}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://solscan.io/account/${hoveredEdge.target}`}
                  >
                    <ExternalLink className="inline-block ml-2 w-4 h-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors" />
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default InsiderEvents
