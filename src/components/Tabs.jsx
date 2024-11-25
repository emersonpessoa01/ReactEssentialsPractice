import { useState } from "react";
import UseAppContext from "../hook/UseAppContext";

const tabsContent = {
  Plano:
    "Um plano de estudo bem estruturado é essencial para organizar o tempo e os conteúdos a serem aprendidos. Ele deve incluir metas claras, um cronograma realista e uma abordagem sistemática para cobrir todo o material necessário. A consistência no cumprimento do plano garante um progresso contínuo no aprendizado.",
  Meta_Diária:
    "Estabelecer metas diárias é uma maneira eficaz de manter a motivação e garantir pequenos avanços diários. Essas metas devem ser específicas, mensuráveis, alcançáveis, relevantes e temporais (SMART). Cumprir pequenas metas diárias contribui para o alcance de objetivos maiores e mais complexos.",
  disciplina:
    "A disciplina é a capacidade de manter o foco e seguir um conjunto de regras ou padrões, mesmo quando é difícil. É a base para alcançar qualquer objetivo, pois requer consistência e perseverança. A prática constante e o comprometimento ajudam a fortalecer a disciplina ao longo do tempo.",
  Prática:
    "A prática é fundamental para a maestria em qualquer área. A repetição constante e o aperfeiçoamento das habilidades são essenciais para melhorar o desempenho. Praticar regularmente e buscar sempre novas maneiras de melhorar ajuda a consolidar o conhecimento e a experiência adquirida.",
};

const Tabs = () => {
  const { darkMode } = UseAppContext();
  const [activeTab, setActiveTab] = useState("Plano");

  return (
    <div className="w-full p-6">
      <h1
        style={{
          color: darkMode ? "rgb(178 0 255)" : "rgb(0, 0, 255)", // Cor vermelha no modo escuro e azul no modo claro
        }}
        className="text-xl font-bold mb-4 text-blue-700"
      >
        Excelência Pessoal: A Força da Disciplina, Planejamento, Metas e Prática
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={`border mt-2 p-4 rounded bg-gray-100 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        {tabsContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
