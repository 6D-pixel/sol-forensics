import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Solana Forensics Tool Documentation
      </h1>

      {/* Overview Section */}
      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Overview</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              The Solana Forensics Tool is a web-based platform designed for
              visualizing and analyzing transaction flows on the Solana
              blockchain. It helps users trace fund movements, understand wallet
              interactions, and investigate on-chain activity through an
              interactive graph interface.
            </p>
            <p className="text-lg">
              By inputting a Solana wallet address, users can generate a visual
              representation of recent transactions and connections, aiding in
              forensic analysis, compliance checks, or general blockchain
              exploration.
            </p>
            {/* Optional: Placeholder for a high-level screenshot of the main tool interface */}
            <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              [Optional: Screenshot/GIF showing the main tool interface in
              action]
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
          Getting Started: Your First Investigation
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Guide</CardTitle>
            <CardDescription>
              Follow these steps to start visualizing transactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-6">
              <li>
                <p className="font-semibold text-lg">Navigate to the Tool</p>
                <p>
                  From the main page, click the "Start Investigation" button (or
                  navigate directly to the visualization page).
                </p>
              </li>
              <li>
                <p className="font-semibold text-lg">
                  Enter Investigation Parameters
                </p>
                <p>You will find input fields for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Wallet Address:</strong> The Solana public key you
                    want to investigate.
                  </li>
                  <li>
                    <strong>Date Range (Optional):</strong> Specify start and
                    end dates to filter transactions .
                  </li>
                  <li>
                    <strong>Minimum SOL Amount (Optional):</strong> Filter
                    transactions based on a minimum Solana value .
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-semibold text-lg">Submit and Visualize</p>
                <p>
                  After entering the wallet address (and any optional filters),
                  submit the form. The tool will fetch the data and display the
                  transaction graph.
                </p>
              </li>
              <li>
                <p className="font-semibold text-lg">Explore the Graph</p>
                <p>
                  Interact with the generated graph to analyze connections and
                  transactions. See the "Features" section below for interaction
                  details.
                </p>
              </li>
            </ol>
            {/* Placeholder for a GIF demonstrating the getting started steps */}
            <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              [Screenshot/GIF: Illustrating the input fields and submitting an
              investigation]
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section id="features" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
          Core Features
        </h2>
        <div className="space-y-8">
          {/* Transaction Graph Visualization */}
          <Card>
            <CardHeader>
              <CardTitle>1. Transaction Graph Visualization</CardTitle>
              <CardDescription>
                Interactive graph display of wallet connections and
                transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Visual Representation:</strong> Displays the target
                  wallet and connected wallets as nodes, with transactions
                  represented as edges (lines) between them.
                </li>
                <li>
                  <strong>Recent Transactions:</strong> Shows the 100 most
                  recent transactions associated with the input wallet address.
                </li>
                <li>
                  <strong>Node Information (Wallets):</strong> Hovering over a
                  node (circle) reveals the wallet address and its current SOL
                  balance.
                  <em className="block text-sm text-gray-600">
                    Note: Balance fetching may be limited by API rate limits on
                    the free tier.
                  </em>
                </li>
                <li>
                  <strong>Edge Information (Transactions):</strong> Hovering
                  over an edge (line) displays details about the transaction,
                  including the amount transferred (e.g., SOL amount) and the
                  transaction signature.
                </li>
                <li>
                  <strong>Node Isolation:</strong> Clicking on a specific node
                  isolates it, showing only its direct connections and hiding
                  other unrelated nodes for focused analysis. Click the
                  background to reset the view.
                </li>
              </ul>
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Example Graph Visualization showing Nodes and
                Edges]
              </div>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Example of Hovering over a Node/Edge to show info]
              </div>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Example of Node Isolation after clicking a node]
              </div>
            </CardContent>
          </Card>

          {/* Graph Interaction Controls */}
          <Card>
            <CardHeader>
              <CardTitle>2. Graph Interaction Controls</CardTitle>
              <CardDescription>
                Tools to manipulate and refine the graph view.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Layout Selection:</strong> Choose from different graph
                  layout algorithms [circle Pack, circular, Force, Force Atlas
                  2, Random] located at the top of the visualization area to
                  change the arrangement of nodes and edges.
                </li>
                <li>
                  <strong>Node Overlap Prevention:</strong> Utilize the "No
                  Overlap" button to apply algorithms that attempt to space out
                  nodes, reducing visual clutter.
                </li>
                <li>
                  <strong>Zoom & Pan:</strong> Use standard mouse controls
                  (scroll wheel, drag) or dedicated buttons to zoom in/out and
                  pan across the graph.
                </li>
                <li>
                  <strong>Focus/Center:</strong> A button to automatically
                  adjust the view to fit the entire graph within the viewport.
                </li>
              </ul>
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Highlighting the Layout selection, No Overlap,
                Zoom, and Focus buttons]
              </div>
            </CardContent>
          </Card>

          {/* Data Input & Filtering (If applicable beyond basic address) */}
          <Card>
            <CardHeader>
              <CardTitle>3. Data Input & Filtering</CardTitle>
              <CardDescription>
                Refine the data used for visualization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Wallet Address Input:</strong> The primary input to
                  start the analysis.
                </li>
                <li>
                  <strong>Date Range Filtering (Potential Feature):</strong>{" "}
                  Allows narrowing the analysis to transactions within a
                  specific timeframe.
                </li>
                <li>
                  <strong>Amount Filtering (Potential Feature):</strong> Focuses
                  on transactions exceeding a certain SOL value.
                </li>
              </ul>
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Input area showing address, date, and amount fields
                if available]
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
          Technical Architecture
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>How It's Built</CardTitle>
            <CardDescription>
              An overview of the technologies and services used.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Frontend:</h4>
              <p>
                Built with{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Next.js
                </a>{" "}
                (React framework).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Backend:</h4>
              <p>
                Leverages Next.js API routes for server-side logic and data
                fetching.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Blockchain Data Provider:
              </h4>
              <p>
                <a
                  href="https://www.helius.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Helius API
                </a>{" "}
                is used for retrieving Solana blockchain data:
              </p>
              <ul className="list-disc pl-6 mt-1">
                <li>
                  <code>getSignaturesForAddress</code>: To fetch the signatures
                  of the 100 most recent transactions for the specified wallet.
                </li>
                <li>
                  <code>parseTransaction</code>: To get detailed, parsed
                  information about each transaction obtained from the
                  signatures.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Data Processing:</h4>
              <p>
                The fetched transaction data is processed and structured into a
                graph format suitable for visualization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Graph Visualization Library:
              </h4>
              <p>
                <a
                  href="https://www.sigmajs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Sigma.js
                </a>{" "}
                combined with{" "}
                <a
                  href="https://graphology.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Graphology
                </a>
                . This choice utilizes WebGL for rendering, offering potentially
                better performance for complex graphs compared to SVG-based
                libraries like D3.js.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Caching:</h4>
              <p>
                <a
                  href="https://redis.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Redis
                </a>{" "}
                is implemented for caching API responses from Helius. This
                reduces the number of direct API calls, improves response times
                for repeated requests, and helps manage API rate limits.
              </p>
            </div>
            {/* Placeholder for an Architecture Diagram */}
            <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              Diagram: High-level Architecture Flow - e.g., User -{">"} Next.js
              Frontend -{">"} Next.js API Route -{">"} Redis Cache -{">"} Helius
              API -{">"} Data Processing -{">"} Sigma.js/Graphology
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Limitations Section */}
      <section id="limitations" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
          Limitations & Known Issues
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Transaction History Depth:</strong> The tool currently
                visualizes only the 100 most recent transactions for a given
                address due to API limitations.
              </li>
              <li>
                <strong>Balance Display Accuracy:</strong> Fetching real-time
                balances for all nodes in the graph can be intensive and subject
                to Helius API rate limits, especially on free tiers. While
                implemented, this feature might be inconsistent or disabled by
                default. Users exploring the code can potentially re-enable it (
                `// uncomment this line...` ) but may hit rate limits quickly.
              </li>
              <li>
                <strong>Data Completeness:</strong> The visualization relies on
                the data provided by the Helius parseTransaction API. Complex or
                non-standard transactions might not be fully represented.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Tips and Best Practices Section */}
      <section id="tips" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
          Tips & Best Practices
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Start Focused:</strong> Begin with a specific wallet
                address of interest rather than a very high-traffic one
                initially.
              </li>
              <li>
                <strong>Use Node Isolation:</strong> Click on nodes to simplify
                complex graphs and trace specific paths more easily.
              </li>
              <li>
                <strong>Experiment with Layouts:</strong> Different layouts can
                reveal different structural patterns in the data.
              </li>
              <li>
                <strong>Understand Recency:</strong> Remember you are primarily
                viewing the *most recent* 100 transactions, not the entire
                history.
              </li>
              <li>
                <strong>Check Edge Info:</strong> Hover over transaction lines
                (edges) to quickly see amounts and get the transaction signature
                for further lookup on explorers like Solscan or Solana Explorer.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
