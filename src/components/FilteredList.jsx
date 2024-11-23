import { useState } from "react";

const FilterList = () => {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Emerson"];
  const [filter, setFilter] = useState("");
  const [darkMode, setDarkMode] = useState(false); // Agora é um estado booleano para alternar entre os temas

  const filteredNames = names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className={`p-6 w-full h-full ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
      <h1 className="text-2xl font-bold mb-4">Filtro de Lista</h1>
      <button
        onClick={() => setDarkMode(!darkMode)} // Alterna o modo escuro
        className={`px-4 py-2 mb-4 rounded ${darkMode ? "bg-gray-200 text-gray-600" : "bg-gray-600 text-gray-100"}`}
      >
        {darkMode ? "Modo Escuro" : "Modo Claro"}
      </button>
      <input
        autoFocus
        type="text"
        placeholder="Filtrar nomes"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={`border rounded p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
      />
      {filteredNames.length > 0 ? (
        <ul className="space-y-2">
          {filteredNames.map((name, index) => (
            <li key={index} className={`p-2 border rounded shadow-md ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-800"}`}>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500">Nenhum nome encontrado.</p>
      )}
    </div>
  );
};

export default FilterList;
