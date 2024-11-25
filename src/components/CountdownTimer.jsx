import { useState, useEffect } from "react";
import UseAppContext from "../hook/UseAppContext";
import { AppContext } from "../App";

const CountdownTimer = () => {
  const { darkMode } = UseAppContext(AppContext);
  const [time, setTime] = useState(0); // Tempo em milésimos de segundo
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 10); // Decrementa em 10 milésimos de segundo (0.01s)
      }, 10); // Atualiza a cada 10 milésimos de segundo
    }
    if (time === 0 && isRunning) {
      alert("Tempo acabou!");
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [time, isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Formatar o tempo para minutos, segundos e milésimos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000); // 60000 ms = 1 minuto
    const seconds = Math.floor((time % 60000) / 1000); // Restante em segundos
    const milliseconds = time % 1000; // Restante em milésimos de segundo

    return `${minutes}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`; // Formata como mm:ss:ms
  };

  return (
    <div className="w-full p-6">
      <h1
        style={{
          color: darkMode ? "rgb(178 0 255)" : "rgb(0, 0, 255)", // Cor vermelha no modo escuro e azul no modo claro
        }}
        className="text-2xl font-bold mb-4"
      >
        Timer com Alerta
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="number"
          min="0"
          value={time / 1000} // Dividido por 1000 para exibir o valor em segundos
          onChange={(e) => setTime(Number(e.target.value) * 1000)} // Multiplicado por 1000 para converter para milésimos de segundo
          className={`flex-1 border rounded-lg px-4 py-2 bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        />
      </div>
      <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button onClick={() => setIsRunning(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Iniciar
        </button>
        <button onClick={() => setIsRunning(false)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Pausar
        </button>
        <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Resetar
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
