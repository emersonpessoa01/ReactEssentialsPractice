import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

const Home = () => {
  const activities = [
    "Contador Simples",
    "Alteração de Cor de Fundo",
    "Lista de Tarefas",
    "Temporizador",
    "Filtro de Lista",
    "Formulário de Registro",
    "Requisição de Dados",
    "Galeria de Imagens",
    "Timer com Intervalo",
    "Tabs Navegáveis",
  ];

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard de Atividades</h1>
        <DarkModeToggle />
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <Link to={`/activity${index + 1}`} key={index} className="p-4 border rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            {activity}
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Home;
