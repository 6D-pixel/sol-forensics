"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

export function BlockchainAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate random nodes and connections
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
  }))

  const connections = []
  for (let i = 0; i < nodes.length; i++) {
    const numConnections = Math.floor(Math.random() * 3) + 1
    for (let j = 0; j < numConnections; j++) {
      const target = Math.floor(Math.random() * nodes.length)
      if (target !== i) {
        connections.push({
          source: i,
          target,
        })
      }
    }
  }

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
          <linearGradient id="solana-gradient-anim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFA3" />
            <stop offset="100%" stopColor="#DC1FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
