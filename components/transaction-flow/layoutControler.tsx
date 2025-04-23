"use client"

import { useCallback, useRef } from "react"
//layouts
import { useLayoutCirclepack } from "@react-sigma/layout-circlepack"
import { useLayoutCircular } from "@react-sigma/layout-circular"
import { useLayoutForce, useWorkerLayoutForce } from "@react-sigma/layout-force"
import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2"
import { useWorkerLayoutNoverlap } from "@react-sigma/layout-noverlap"
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
} from "lucide-react"

export default function LayoutControler() {
// Track active worker-based layout
  const activeWorkerLayout = useRef<string | null>(null)

  //init layouts
  const circlepack = useLayoutCirclepack()
  const circular = useLayoutCircular()
  const force = useWorkerLayoutForce()
  const fa2 = useWorkerLayoutForceAtlas2()
  const noverlap = useWorkerLayoutNoverlap()
  const random = useLayoutRandom()

  //start and kill
  const stopAll = useCallback(() => {
    [force, fa2, noverlap].forEach((l) => l.kill());
  }, [force, fa2, noverlap]);

  const apply = useCallback(
    async (
      which: "circlepack" | "circular" | "force" | "fa2" | "noverlap" | "random"
    ) => {
      stopAll()

      await new Promise((resolve) => setTimeout(resolve, 100))

      switch (which) {
        case "circlepack":
          circlepack.assign()
          break
        case "circular":
          circular.assign()
          break
        case "force":
          force.start()
          break
        case "fa2":
          fa2.start()
          break
        case "noverlap":
          noverlap.start()
          break
        case "random":
          random.assign()
          break
      }
    },
    [circlepack, circular, force, fa2, noverlap, random, stopAll]
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
          <span className="sr-only">Toggle layout</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => apply("circlepack")}>
          <CircleDot className="mr-2 h-4 w-4" />
          <span>Circle Pack</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => apply("circular")}>
          <Circle className="mr-2 h-4 w-4" />
          <span>Circular</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => apply("force")}>
          <Network className="mr-2 h-4 w-4" />
          <span>Force</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => apply("fa2")}>
          <Waypoints className="mr-2 h-4 w-4" />
          <span>Force Atlas 2</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => apply("noverlap")}>
          <Fingerprint className="mr-2 h-4 w-4" />
          <span>No Overlap</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => apply("random")}>
          <Shuffle className="mr-2 h-4 w-4" />
          <span>Random</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
