import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    if (time === 0 && isRunning) {
      alert('Tempo acabou!');
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [time, isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Timer com Alerta</h1>
      <div className="mb-4">
        <input
          type="number"
          min="0"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <div className="text-4xl font-bold mb-4">{time}s</div>
      <div className="space-x-4">
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Iniciar
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Pausar
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
