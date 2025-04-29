import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Solana Forensics Tool Documentation
      </h1>

      {/* Overview Section -- MODIFIED */}
      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Overview</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              The Solana Forensics Tool is a web-based platform designed for
              visualizing and analyzing transaction flows and token holder connections
              on the Solana blockchain. It helps users trace fund movements, understand wallet
              interactions, investigate on-chain activity, and identify potential token insider patterns
              through interactive graph interfaces.
            </p>
            <p className="text-lg mb-4">
              By inputting a Solana wallet address or token mint address, users can generate visual
              representations of recent activity and connections, aiding in
              forensic analysis, due diligence, compliance checks, or general blockchain
              exploration.
            </p>
            {/* Updated paragraph with internal links */}
            <p className="text-lg mb-2">To quickly find what you need:</p>
            <ul className="list-disc pl-6 space-y-1 text-lg mb-4">
              <li>
                Learn how to begin with the{" "}
                <a
                  href="#getting-started"
                  className="text-blue-400 hover:underline"
                >
                  Getting Started
                </a>{" "}
                guide.
              </li>
              <li>
                Discover the capabilities, including Transaction Visualization and Insider Analysis, in the{" "}
                <a href="#features" className="text-blue-400 hover:underline">
                  Core Features
                </a>{" "}
                section. {/* Updated text slightly */}
              </li>
               {/* Optional: Direct link if preferred, see note below */}
              {/* <li>
                Analyze potential insider activity with the{" "}
                <a href="#insider-trader-feature" className="text-blue-400 hover:underline">
                  Insider Trader Analysis
                </a>{" "}
                tool.
              </li> */}
              <li>
                Understand how it works under the hood in{" "}
                <a
                  href="#architecture"
                  className="text-blue-400 hover:underline"
                >
                  Technical Architecture
                </a>
                .
              </li>
              <li>
                Review the{" "}
                <a
                  href="#limitations"
                  className="text-blue-400 hover:underline"
                >
                  Limitations & Known Issues
                </a>
                .
              </li>
              <li>
                Find helpful hints in{" "}
                <a href="#tips" className="text-blue-400 hover:underline">
                  Tips & Best Practices
                </a>
                .
              </li>
               {/* Support link - was missing before */}
               <li>
                 Get help or contribute via the{" "}
                 <a href="#support" className="text-blue-400 hover:underline">
                   Support & Contribution
                 </a>{" "}
                 section.
               </li>
            </ul>
            {/* Optional: Placeholder for a high-level screenshot */}
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
          Getting Started
        </h2>
        {/* Maybe split getting started per tool? For now, keeping it general */}
         <Card>
           <CardHeader>
             <CardTitle>General Steps</CardTitle>
             <CardDescription>Follow these steps to start visualizing transactions or insider data.</CardDescription>
           </CardHeader>
           <CardContent>
             <ol className="list-decimal pl-6 space-y-6">
               <li>
                 <p className="font-semibold text-lg">Navigate to the Correct Tool</p>
                 <p>
                    Select either the "Transaction Visualizer" or the "Insider Trader" tool/page.
                 </p>
               </li>
               <li>
                 <p className="font-semibold text-lg">
                   Enter Required Input
                 </p>
                 <p>Depending on the tool:</p>
                 <ul className="list-disc pl-6 mt-2 space-y-1">
                   <li><strong>Transaction Visualizer:</strong> Enter the Solana Wallet Address you want to investigate. Optionally, add date or amount filters.</li>
                   <li><strong>Insider Trader:</strong> Enter the Token Mint Address for the specific Solana token you want to analyze.</li>
                 </ul>
               </li>
               <li>
                 <p className="font-semibold text-lg">Submit and Visualize</p>
                 <p>
                   After entering the required address/ID, submit the form. The tool will fetch data (from Helius or Rugcheck respectively) and display the relevant graph.
                 </p>
               </li>
               <li>
                 <p className="font-semibold text-lg">Explore the Graph</p>
                 <p>
                   Interact with the generated graph. See the specific tool's description in the <a href="#features" className="text-blue-400 hover:underline">Core Features</a> section below for interaction details (hovering, clicking, layouts etc.).
                 </p>
               </li>
             </ol>
             <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
               [Screenshot/GIF: Illustrating the input fields for both tools]
             </div>
           </CardContent>
         </Card>
      </section>

      {/* Features Section -- MODIFIED */}
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
                Interactive graph display of wallet connections and recent SOL transactions.
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
                  recent transactions associated with the input wallet address (via Helius API).
                </li>
                <li>
                  <strong>Node Information (Wallets):</strong> Hovering over a
                  node (circle) reveals the wallet address and its current SOL
                  balance.
                  <em className="block text-sm text-gray-600">
                    Note: Balance fetching may be limited by API rate limits on
                    the free tier. See <a href="#limitations" className="text-blue-400 hover:underline">Limitations</a>.
                  </em>
                </li>
                <li>
                  <strong>Edge Information (Transactions):</strong> Hovering
                  over an edge (line) displays details about the transaction,
                  including the SOL amount transferred and the
                  transaction signature.
                </li>
                <li>
                  <strong>Node Isolation:</strong> Clicking on a specific node
                  isolates it, showing only its direct connections and hiding
                  other unrelated nodes for focused analysis. Click the
                  background to reset the view.
                </li>
                 <li><strong>Controls:</strong> Uses standard graph controls like layout selection, overlap prevention, zoom/pan, and focus.</li>
              </ul>
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Example Transaction Graph Visualization]
              </div>
            </CardContent>
          </Card>

          {/* Insider Trader Analysis -- NEW FEATURE */}
          <Card id="insider-trader-feature"> {/* Added ID here */}
            <CardHeader>
              <CardTitle>2. Insider Trader Analysis</CardTitle>
              <CardDescription>
                 Visualize potential insider activity and token holdings for a specific Solana token.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <p className="mb-4">This tool helps identify wallets potentially associated with a token's launch or team ("insiders") and visualizes their holdings and connections.</p>
              <ul className="list-disc pl-6 space-y-3">
                 <li>
                   <strong>Input:</strong> Requires the Token Mint Address of the Solana token you wish to analyze.
                 </li>
                 <li>
                   <strong>Data Source:</strong> Utilizes the Rugcheck API to identify potential insider wallets and their token balances.
                 </li>
                <li>
                  <strong>Visual Representation:</strong> Displays identified insider wallets as nodes. Edges represent known connections or interactions between these wallets.
                </li>
                <li>
                  <strong>Node Size by Holdings:</strong> The size of each node is proportional to the amount of the specified token held by that wallet, making it easy to spot large holders.
                </li>
                <li>
                  <strong>Connection Mapping:</strong> Shows the relationships between these key wallets, potentially revealing clusters or coordinated activity.
                </li>
                <li><strong>Layout Controls:</strong> Provides the same layout options as the Transaction Visualizer (e.g., Circle Pack, Circular, Force Atlas 2, Random, No Overlap) allowing for flexible exploration of the data.</li>
              </ul>
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Input field for Token Mint Address]
              </div>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                [Screenshot: Example Insider Trader Graph showing node sizes and connections]
              </div>
            </CardContent>
          </Card>

          {/* Graph Interaction Controls (Now maybe less prominent or integrated into above?) */}
          {/* Consider removing this as a separate #3 if controls are mentioned within each tool */}
          <Card>
            <CardHeader>
              <CardTitle>3. Common Graph Interaction Controls</CardTitle>
              <CardDescription>
                Tools available in both visualizers to manipulate and refine the graph view.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Layout Selection:</strong> Choose from different graph
                  layout algorithms (e.g., Circle Pack, Circular, Force, Force Atlas
                  2, Random) located at the top to
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
                [Screenshot: Highlighting the common Layout selection, No Overlap,
                Zoom, and Focus buttons]
              </div>
            </CardContent>
          </Card>

          {/* Data Input & Filtering */}
           <Card>
             <CardHeader>
               <CardTitle>4. Data Input & Filtering</CardTitle> {/* Renumbered */}
               <CardDescription>
                 Refine the data used for visualization based on the tool.
               </CardDescription>
             </CardHeader>
             <CardContent>
               <ul className="list-disc pl-6 space-y-3">
                  <li>
                     <strong>Transaction Visualizer Inputs:</strong> Wallet Address (required), Date Range (optional), Minimum SOL Amount (optional).
                  </li>
                 <li>
                    <strong>Insider Trader Input:</strong> Token Mint Address (required).
                 </li>
               </ul>
               <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                 [Screenshot: Input area showing fields for both tools]
               </div>
             </CardContent>
           </Card>

        </div>
      </section>

      {/* Architecture Section -- MODIFIED */}
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
                  className="text-blue-400 hover:underline"
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
                Blockchain Data Providers:
              </h4>
              <p className="mb-1">APIs are used for retrieving Solana blockchain data:</p>
              <ul className="list-disc pl-6 mt-1">
                 <li>
                    <strong>Transaction Visualizer:</strong> Uses the {" "}
                    <a
                       href="https://www.helius.dev/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-400 hover:underline"
                     > Helius API</a>
                     <ul className="list-circle pl-6 mt-1">
                        <li><code>getSignaturesForAddress</code>: Fetches recent transaction signatures.</li>
                        <li><code>parseTransaction</code>: Gets detailed, parsed transaction information.</li>
                     </ul>
                 </li>
                 <li className="mt-2">
                    <strong>Insider Trader:</strong> Uses the Rugcheck API (link if available) to get insider wallet data and token holdings based on the mint address.
                 </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Data Processing:</h4>
              <p>
                Fetched data is processed and structured into a
                graph format suitable for visualization via Graphology.
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
                  className="text-blue-400 hover:underline"
                >
                  Sigma.js
                </a>{" "}
                combined with{" "}
                <a
                  href="https://graphology.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Graphology
                </a>
                . Utilizes WebGL for potentially better rendering performance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Caching:</h4>
              <p>
                <a
                  href="https://redis.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Redis
                </a>{" "}
                is implemented for caching API responses (primarily Helius). This
                reduces direct API calls, improves response times, and helps manage API rate limits.
              </p>
            </div>
            {/* Placeholder for an Architecture Diagram */}
            <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
              [Diagram: Updated High-level Architecture Flow including Rugcheck API]
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
           <CardHeader>
              <CardTitle>Current Constraints</CardTitle>
              <CardDescription>Be aware of the following limitations.</CardDescription>
            </CardHeader>
           <CardContent className="pt-6"> {/* Removed pt-6 redundancy */}
             <ul className="list-disc pl-6 space-y-3">
               <li>
                  <strong>Transaction History Depth:</strong> The Transaction Visualizer currently
                  shows only the 100 most recent transactions (Helius limitation/choice).
               </li>
               <li>
                  <strong>Balance Display Accuracy (Transaction Visualizer):</strong> Fetching real-time SOL
                  balances is subject to Helius API rate limits and may be inconsistent on free tiers.
               </li>
                <li>
                  <strong>Insider Data Scope (Insider Trader):</strong> The accuracy and completeness of insider identification depend entirely on the data provided by the Rugcheck API.
               </li>
               <li>
                 <strong>Data Completeness:</strong> Visualization relies on parsed data from APIs (Helius/Rugcheck). Complex or non-standard transactions/setups might not be fully represented.
               </li>
                <li><strong>API Rate Limits:</strong> Both Helius and Rugcheck APIs may have rate limits, especially on free tiers, which could affect usability during periods of heavy use or analysis of very active addresses/tokens.</li>
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
                 <strong>Use the Right Tool:</strong> Choose the Transaction Visualizer for wallet activity/SOL flows and the Insider Trader for token-specific holder analysis.
              </li>
              <li>
                <strong>Start Focused:</strong> Begin with a specific wallet or token address of interest.
              </li>
              <li>
                <strong>Leverage Node Size (Insider Trader):</strong> Pay attention to node sizes in the Insider Trader view to quickly identify major token holders within the potential insider group.
              </li>
              <li>
                <strong>Use Node Isolation:</strong> Click on nodes to simplify complex graphs and trace specific paths or connections more easily in both tools.
              </li>
              <li>
                <strong>Experiment with Layouts:</strong> Different layouts can reveal different structural patterns in the data.
              </li>
              <li>
                <strong>Understand Data Source:</strong> Remember the Transaction Visualizer uses Helius (recent 100 txns), while Insider Trader uses Rugcheck (token holder data).
              </li>
              <li>
                <strong>Cross-Reference:</strong> Use transaction signatures or wallet addresses found in one tool to investigate further in the other tool or on blockchain explorers (Solscan, Solana Explorer).
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

       {/* Support & Contribution Section -- ADDED */}
       <section id="support">
         <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Support & Contribution</h2>
         <Card>
           <CardContent className="pt-6">
             <p className="mb-4">
               This tool is open-source. For issues, questions, or feature requests, please visit the GitHub repository:
             </p>
             <p className="mb-4">
               <a href="[Link to Your GitHub Repository]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">[Link to Your GitHub Repository]</a> {/* Ensure link color matches others */}
             </p>
             <p>
               Your feedback and contributions (e.g., reporting bugs, suggesting features, submitting pull requests) are highly welcome and help improve the tool for everyone!
             </p>
              {/* Optional: Add contact info if desired */}
              {/* <p className="mt-4">You can also contact the development team at [Your Contact Email/Method].</p> */}
           </CardContent>
         </Card>
       </section>
    </div>
  );
}