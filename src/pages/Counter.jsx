import UseAppContext from "../hook/UseAppContext";

export default function Counter() {
  const { count, setCount } = UseAppContext();

  return (
    <div className="bg-gray-100 rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold">Counter</h2>
      <div className="text-4xl font-bold">{count}</div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="grid grid-cols-1 w-full sm:w-auto sm:grid-cols-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
          className="grid grid-cols-1 w-full sm:w-auto sm:grid-cols-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
