import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1); // Incrementa os segundos
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Função para formatar o tempo em horas, minutos e segundos
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600); // 3600 segundos = 1 hora
    const minutes = Math.floor((seconds % 3600) / 60); // Restante para minutos
    const remainingSeconds = seconds % 60; // Restante para segundos

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`; // Formato HH:mm:ss
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Temporizador</h1>
      <div className="text-4xl font-bold mb-4">{formatTime(seconds)}</div> {/* Exibe o tempo formatado */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

export default Timer;
