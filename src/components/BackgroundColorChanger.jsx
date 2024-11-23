import { useEffect } from "react";
import UseAppContext from "../hook/UseAppContext";

export default function BackgroundGradientChanger() {
  const { backgroundColor, setBackgroundColor } = UseAppContext();

  // Função para gerar um gradiente aleatório
  const generateRandomGradient = () => {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
    setBackgroundColor(gradient);
  };

  // Função para gerar uma cor aleatória no formato hex
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  // useEffect para aplicar o gradiente ao corpo da página
  useEffect(() => {
    document.body.style.background = backgroundColor;
    return () => {
      document.body.style.background = "#ffffff"; // Cleanup
    };
  }, [backgroundColor]);

  return (
    <div
      className="w-full p-6 rounded-lg"
      style={{
        background: backgroundColor,
        minHeight: "200px",
        transition: "background 0.5s ease-in-out", // Transição suave
      }}
    >
      <button
        onClick={generateRandomGradient}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Change Gradient Color
      </button>
    </div>
  );
}
