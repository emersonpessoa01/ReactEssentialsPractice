import React, { useState, useEffect } from 'react';
import generateRandomColor from '../utils/generateRandomColor'; // Função de cor aleatória

const ChangeBackground = () => {
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Alteração de Cor de Fundo</h1>
      <button
        onClick={() => setColor(generateRandomColor())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Mudar Cor
      </button>
    </div>
  );
};

export default ChangeBackground;
