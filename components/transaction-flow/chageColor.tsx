"use client"
import { ParametersTypes } from "@/app/types"
import { useSigma } from "@react-sigma/core"
import { useEffect } from "react"

interface ChangeNodeColorProps {
  parameters: ParametersTypes
}

// Change Node color
function ChangeNodeColor({ parameters }: ChangeNodeColorProps) {
  const sigma = useSigma()
  useEffect(() => {
    sigma.setSetting("nodeReducer", (node, data) => {
      const newData = { ...data }
      console.log(parameters)
      console.log(node)
      if (node === parameters.address) {
        newData.color = "#FF0000" // Red, for example
      }
      return newData
    })
    sigma.refresh()
  }, [sigma, parameters.address])
  return null
}
export default ChangeNodeColor
