import { useState } from 'react';

const tabsContent = {
  Sobre: 'Bem-vindo à aba Sobre! Aqui você encontrará informações sobre nós.',
  Contato: 'Entre em contato conosco através do e-mail ou telefone.',
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Sobre');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tabs Navegáveis</h1>
      <div className="flex space-x-4 mb-4">
        {Object.keys(tabsContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border p-4 rounded bg-gray-100">
        {tabsContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
