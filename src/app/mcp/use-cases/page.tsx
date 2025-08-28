import Quiz from "./Quiz";

export default function UseCases() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">MCP Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sharing user context between AI models and applications</li>
        <li>Building modular, context-aware chatbots</li>
        <li>Integrating context from multiple sources in enterprise systems</li>
        <li>Standardizing context for analytics and personalization</li>
      </ul>
      <Quiz
        question="Which is a use case for MCP?"
        options={["Building modular, context-aware chatbots", "Making coffee", "Drawing images", "Sending emails automatically"]}
        answer={0}
      />
    </main>
  );
}
