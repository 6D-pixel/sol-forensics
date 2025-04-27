"use client"

import { useCallback } from "react"
//layouts
import { useLayoutCirclepack } from "@react-sigma/layout-circlepack"
import { useLayoutCircular } from "@react-sigma/layout-circular"
import { useWorkerLayoutForce } from "@react-sigma/layout-force"
import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2"
import {
  useLayoutNoverlap,
  useWorkerLayoutNoverlap,
} from "@react-sigma/layout-noverlap"
import { useLayoutRandom } from "@react-sigma/layout-random"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import {
  CircleDot,
  Network,
  Circle,
  Waypoints,
  Fingerprint,
  Shuffle,
  LayoutGrid,
  Workflow,
  Blend,
} from "lucide-react"

export default function LayoutControler() {
  //init layouts
  const circlepack = useLayoutCirclepack()
  const circular = useLayoutCircular()
  const force = useWorkerLayoutForce()
  const fa2 = useWorkerLayoutForceAtlas2({
    settings: {
      gravity: 1,
    },
  })
  const noverlap = useWorkerLayoutNoverlap()
  const NoverLap = useLayoutNoverlap({
    settings: {
      gridSize: 30,
      margin: 10,
    },
  })
  const random = useLayoutRandom()

  //start and kill
  const stopAll = useCallback(() => {
    ;[force, fa2, noverlap].forEach((l) => l.stop())
  }, [force, fa2, noverlap])

  const apply = useCallback(
    async (
      which: "circlepack" | "circular" | "force" | "fa2" | "noverlap" | "random"
    ) => {
      // First stop any running layouts
      stopAll()

      switch (which) {
        case "circlepack":
          circlepack.assign()
          NoverLap.assign()
          break
        case "circular":
          circular.assign()
          break
        case "force":
          force.start()
          // Run noverlap after force layout
          break
        case "fa2":
          fa2.start()
          // Run noverlap after force atlas 2
          break
        case "noverlap":
          NoverLap.assign()
          break
        case "random":
          random.assign()
          break
      }
    },
    [circlepack, circular, force, fa2, noverlap, random, stopAll]
  )

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 text-xs">
            <Workflow className="mr-1.5 h-3.5 w-3.5" />
            Layout
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem
            onClick={() => apply("circlepack")}
            className="text-xs py-1.5"
          >
            <CircleDot className="mr-1.5 h-3.5 w-3.5" />
            <span>Circle Pack</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => apply("circular")}
            className="text-xs py-1.5"
          >
            <Circle className="mr-1.5 h-3.5 w-3.5" />
            <span>Circular</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => apply("force")}
            className="text-xs py-1.5"
          >
            <Network className="mr-1.5 h-3.5 w-3.5" />
            <span>Force</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => apply("fa2")}
            className="text-xs py-1.5"
          >
            <Waypoints className="mr-1.5 h-3.5 w-3.5" />
            <span>Force Atlas 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => apply("random")}
            className="text-xs py-1.5"
          >
            <Shuffle className="mr-1.5 h-3.5 w-3.5" />
            <span>Random</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => apply("noverlap")}
        variant="outline"
        size="sm"
        className="h-7 text-xs"
      >
        <Blend className="mr-1.5 h-3.5 w-3.5" />
        No Overlap
      </Button>
    </div>
  )
}
