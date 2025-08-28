
import Link from "next/link";

export default function Home() {

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to MCP Learning</h1>
      <p className="mb-6 text-lg">Learn the fundamentals and core concepts of the Model Context Protocol (MCP).</p>
      <nav className="mb-8">
        <ul className="space-y-2">
          <li><Link href="/mcp/what-is-mcp" className="text-blue-600 hover:underline">What is MCP?</Link></li>
          <li><Link href="/mcp/core-principles" className="text-blue-600 hover:underline">Core Principles</Link></li>
          <li><Link href="/mcp/use-cases" className="text-blue-600 hover:underline">Use Cases</Link></li>
          <li><Link href="/mcp/examples" className="text-blue-600 hover:underline">Examples</Link></li>
        </ul>
      </nav>
      <footer className="text-gray-500 text-sm">&copy; 2025 MCP Learning. All rights reserved.</footer>
    </main>
  );
}
