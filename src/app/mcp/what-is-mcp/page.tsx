import Quiz from "../Quiz";

export default function WhatIsMCP() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">What is MCP?</h2>
      <p className="mb-4">MCP stands for <strong>Model Context Protocol</strong>. It is a standard for structuring, sharing, and interacting with context data between models, applications, and services. MCP enables interoperability, modularity, and clarity in how context is managed and exchanged.</p>
      <p className="mb-4">MCP is designed to help developers build more robust, context-aware systems by providing a common language and set of rules for context data.</p>
      <Quiz
        question="What does MCP stand for?"
        options={["Model Context Protocol", "Modular Communication Platform", "Main Control Process", "Machine Contextualization Program"]}
        answer={0}
      />
    </main>
  );
}
