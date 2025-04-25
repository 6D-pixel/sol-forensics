"use client"

import { motion } from "framer-motion"
import { Network, Wallet, GitMerge, Tag, ArrowRight } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Transaction Visualizer",
    description:
      "Visualize and analyze individual transactions on the Solana blockchain with detailed flow diagrams and metadata inspection.",
    icon: Network,
    color: "from-blue-500 to-cyan-500",
    link: "/transaction-visualizer",
  },
  {
    title: "Wallet Analyzer",
    description:
      "Deep dive into wallet activity, holdings, and transaction patterns to identify suspicious behavior and track fund movements.",
    icon: Wallet,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cluster Detection",
    description:
      "Identify and analyze transaction clusters and relationships between wallets to uncover hidden connections and networks.",
    icon: GitMerge,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Entity Labeling",
    description:
      "Label and categorize entities within the Solana ecosystem to build a comprehensive database of known addresses and services.",
    icon: Tag,
    color: "from-green-500 to-emerald-500",
  },
]

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Comprehensive Forensics Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides powerful tools to investigate and analyze
            blockchain activity with precision and depth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.color} text-white mb-4`}
                  >
                    <feature.icon size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
