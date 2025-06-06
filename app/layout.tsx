import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/header"
import { WalletProvider } from "@/lib/context/WalletContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Solana Blockchain Forensics Platform",
  description:
    "Advanced tools for investigating transactions, analyzing patterns, and uncovering insights within the Solana ecosystem.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <WalletProvider>
            <Header />
            {children}
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
