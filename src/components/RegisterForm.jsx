import { useState } from "react";
import UseAppContext from "../hook/UseAppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const { darkMode } = UseAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Controle para exibir/ocultar senha
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "A senha é obrigatória.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "A senha deve ter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("");
    } else {
      setErrors({});
      setMessage(`Bem-vindo, ${formData.name.charAt(0).toUpperCase() + formData.name.slice(1)}!`);
      setFormData({ name: "", email: "", password: "" }); // Reseta os campos
    }
  };

  return (
    <div className={`w-full p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-4">Formulário de Registro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <input
            autoFocus
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* E-mail */}
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Senha */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={`border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 ${darkMode ? "bg-gray-800" : "bg-white"}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-blue-500 focus:outline-none"
          >
            {/* Ícone de olho */}
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Botão de Registrar */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
          Registrar
        </button>
      </form>

      {/* Mensagem de sucesso */}
      {message && <p className="mt-4 text-green-600 font-bold">{message}</p>}
    </div>
  );
};

export default RegisterForm;
