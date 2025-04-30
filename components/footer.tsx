import Link from "next/link"
import { SolanaLogo } from "@/components/solana-logo"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <SolanaLogo className="h-8 w-8" />
            <span className="font-bold text-lg">Solana Forensics</span>
          </div>
          <a
            href="https://github.com/6D-pixel/sol-forensics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
