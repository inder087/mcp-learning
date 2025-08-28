export default function Examples() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">MCP Examples</h2>
      <p className="mb-4">Here is a simple example of an MCP context object:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">{`{
  "user": {
    "id": "123",
    "name": "Alice"
  },
  "session": {
    "id": "abc",
    "startTime": "2025-08-28T10:00:00Z"
  },
  "preferences": {
    "language": "en",
    "theme": "dark"
  }
}`}</pre>
      <p>This structure can be extended and adapted for different applications.</p>
    </main>
  );
}
