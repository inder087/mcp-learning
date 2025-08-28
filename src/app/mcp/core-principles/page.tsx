import Quiz from "./Quiz";

export default function CorePrinciples() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Core Principles of MCP</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Interoperability:</strong> MCP enables different systems to understand and use context data seamlessly.</li>
        <li><strong>Modularity:</strong> Context is broken into reusable, composable parts.</li>
        <li><strong>Clarity:</strong> Clear definitions and schemas for context data.</li>
        <li><strong>Extensibility:</strong> Easily extend context models for new use cases.</li>
      </ul>
      <Quiz
        question="Which of the following is NOT a core principle of MCP?"
        options={["Interoperability", "Clarity", "Extensibility", "Proprietary Lock-in"]}
        answer={3}
      />
    </main>
  );
}
