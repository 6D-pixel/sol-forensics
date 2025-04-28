# Solana Forensics Platform

## Overview

The Solana Forensics Platform is a web-based tool designed to analyze and visualize transaction flows on the Solana blockchain. It provides users with powerful tools to investigate wallet activity, trace fund movements, and uncover insights into blockchain interactions. The platform leverages Next.js, Tailwind CSS, and shadcn/ui for a seamless user experience.

## Features

- **Transaction Flow Analysis**: Visualize the flow of funds between wallets with interactive graphs.
- **Wallet Analysis**: Dive deep into wallet activity, holdings, and transaction patterns.
- **Transaction Clustering**: Group related transactions and identify associated wallets.
- **Interactive Graphs**: Zoom, pan, and explore transaction data with ease.
- **Custom Filters**: Filter transactions by date, amount, and other parameters.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: shadcn/ui (Radix UI primitives styled with Tailwind CSS)
- **CSS**: Tailwind CSS
- **Graph Visualization**: Sigma.js and Graphology
- **Backend**: Next.js API Routes
- **Caching**: Valkey for API response caching

## Project Structure

```
app/
  api/          # Backend API routes
  doc/          # Documentation pages
  transaction-visualizer/  # Transaction visualizer pages
components/
  ui/           # shadcn/ui components
  transaction-flow/  # Graph-related components
lib/            # Utility functions and helpers
public/         # Static assets
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd sol-forensics
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

3. Start the Valkey Docker instance:

   ```bash
   docker run --name some-valkey -d -p 6379:6379 valkey/valkey
   ```

4. Run the development server:

   ```bash
   pnpm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

- Navigate to the **Transaction Visualizer** to analyze wallet transactions.
- Use the **Input Parameters Sheet** to specify wallet addresses and filters.
- Explore the interactive graph to uncover transaction patterns and connections.

## License

This project is open-source and available under the [MIT License](LICENSE).
