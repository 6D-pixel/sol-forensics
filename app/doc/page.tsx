import { Card, CardContent } from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Solana Forensics Tool Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <Card className="p-6">
          <CardContent>
            <p className="text-lg mb-4">
              The Solana Forensics Tool is a comprehensive platform for analyzing and visualizing transactions
              on the Solana blockchain. It provides powerful features for tracking fund movements,
              analyzing wallet activities, and identifying patterns in transaction flows.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">1. Transaction Visualizer</h3>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interactive visualization of transaction flows</li>
                <li>Detailed metadata inspection for each transaction</li>
                <li>Flow diagrams showing fund movements</li>
                <li>Filtering capabilities by date ranges and amounts</li>
              </ul>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                [Screenshot: Transaction Visualizer Interface]
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">2. Wallet Analysis</h3>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deep dive into wallet activities and holdings</li>
                <li>Track complete fund history and sources</li>
                <li>Analysis of transaction patterns</li>
                <li>Detection of suspicious behaviors</li>
              </ul>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                [Screenshot: Wallet Analysis Dashboard]
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">3. Cluster Detection</h3>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identification of related transaction clusters</li>
                <li>Analysis of wallet relationships</li>
                <li>Visualization of connected networks</li>
                <li>Pattern-based cluster identification</li>
              </ul>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                [Screenshot: Cluster Analysis View]
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">4. Entity Labeling</h3>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Database of known addresses and services</li>
                <li>Custom labeling system for entities</li>
                <li>Detection of known entity patterns</li>
                <li>Integration with known entity datasets</li>
              </ul>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                [Screenshot: Entity Labeling Interface]
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
            <CardContent>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Enter an Address or Transaction</p>
                  <p>Start by entering a Solana wallet address or transaction signature in the search bar.</p>
                </li>
                <li>
                  <p className="font-semibold">Choose Analysis Type</p>
                  <p>Select whether you want to perform wallet analysis, transaction visualization, or cluster detection.</p>
                </li>
                <li>
                  <p className="font-semibold">Explore the Data</p>
                  <p>Use the interactive visualizations to explore transaction flows, patterns, and relationships.</p>
                </li>
                <li>
                  <p className="font-semibold">Apply Filters</p>
                  <p>Refine your analysis using date ranges, amount thresholds, and other available filters.</p>
                </li>
              </ol>
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                [Screenshot: Getting Started Guide]
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tips and Best Practices</h2>
        
        <Card className="p-6">
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start with a specific transaction or wallet address of interest</li>
              <li>Use filters to narrow down large datasets</li>
              <li>Save interesting findings using the labeling system</li>
              <li>Export data for further analysis when needed</li>
              <li>Check the cluster analysis for hidden connections</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Support</h2>
        
        <Card className="p-6">
          <CardContent>
            <p className="mb-4">
              For additional support or questions, please visit our GitHub repository or contact the development team.
            </p>
            <p>
              This tool is open-source and continuously improving. Your feedback and contributions are welcome!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}