import { useState } from "react";
import UseAppContext from "../hook/UseAppContext";

const RegisterForm = () => {
  const { darkMode } = UseAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("Por favor, preencha todos os campos.");
    } else {
      setMessage(`Bem-vindo, ${formData.name}!`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Formulário de Registro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          autoFocus
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`border rounded p-2 w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`border rounded p-2 w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={`border rounded p-2 w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
          Registrar
        </button>
      </form>
      {message && <p className="mt-4 text-red-600 font-bold">{message}</p>}
    </div>
  );
};

export default RegisterForm;
