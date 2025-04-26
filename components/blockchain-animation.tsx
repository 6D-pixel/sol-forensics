"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

export function BlockchainAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Static predefined nodes arranged in 'S' shape
  const nodes = [
    { id: 0, x: 20, y: 15, size: 8 }, // Top of S
    { id: 1, x: 35, y: 10, size: 8 },
    { id: 2, x: 50, y: 15, size: 8 },
    { id: 3, x: 65, y: 25, size: 8 },
    { id: 4, x: 60, y: 40, size: 8 }, // Middle curve of S
    { id: 5, x: 45, y: 45, size: 8 },
    { id: 6, x: 30, y: 40, size: 8 },
    { id: 7, x: 25, y: 55, size: 8 },
    { id: 8, x: 35, y: 70, size: 8 }, // Bottom curve of S
    { id: 9, x: 50, y: 75, size: 8 },
    { id: 10, x: 65, y: 70, size: 8 },
    { id: 11, x: 75, y: 60, size: 8 },
  ]

  // Connections forming the S shape
  const connections = [
    // Top curve connections
    { source: 0, target: 1 },
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    // Middle connections
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 7 },
    // Bottom curve connections
    { source: 7, target: 8 },
    { source: 8, target: 9 },
    { source: 9, target: 10 },
    { source: 10, target: 11 },
    // Additional connections for network effect
    { source: 1, target: 5 },
    { source: 2, target: 4 },
    { source: 6, target: 8 },
    { source: 7, target: 9 },
    { source: 5, target: 9 },
  ]

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <svg className="w-full h-full">
        {connections.map((connection, i) => {
          const source = nodes[connection.source]
          const target = nodes[connection.target]
          return (
            <motion.line
              key={`connection-${i}`}
              x1={`${source.x}%`}
              y1={`${source.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.5,
                transition: {
                  delay: i * 0.01,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
            />
          )
        })}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#solana-gradient-anim)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.7,
              transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          />
        ))}
        <defs>
          <linearGradient
            id="solana-gradient-anim"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00FFA3" />
            <stop offset="100%" stopColor="#DC1FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
