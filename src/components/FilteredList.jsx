import { useState } from "react";

const FilterList = () => {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const [filter, setFilter] = useState("");
  const [darkMode] = useState(names);

  const filteredNames = names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Filtro de Lista</h1>
      <input
        type="text"
        placeholder="Filtrar nomes"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={`border rounded p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${
          darkMode ? "text-gray-800 !bg-transparent" : "!text-gray-800 !bg-white"
        }`}
      />
      {filteredNames.length > 0 ? (
        <ul className="space-y-2">
          {filteredNames.map((name, index) => (
            <li key={index} className="p-2 border rounded">
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
