import { useRegisterEvents } from "@react-sigma/core"
import { useEffect, useState } from "react"

function GraphEvents() {
  const registerEvents = useRegisterEvents()
  const [HoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    registerEvents({
      enterNode: (event) => console.log("enterNode", event.node),
      leaveNode: (event) => console.log("leaveNode", event.node),
    })
  }, [registerEvents])
  return null
}

export default GraphEvents
