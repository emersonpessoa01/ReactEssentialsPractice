import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Contador Simples</h1>
      <p className="text-lg mb-4">Valor atual: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrementar
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
};

export default Counter;
