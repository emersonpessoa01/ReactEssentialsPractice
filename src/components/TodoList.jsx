import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

export const TodoList = () => {
  const { todos, toggleComplete, addTodo, editTodo, deleteTodo, darkMode } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro
  const [filter, setFilter] = useState("all"); // Estado para o filtro
  const inputRef = useRef(null);

  // Função para adicionar ou atualizar a tarefa
  const handleAddOrUpdate = () => {
    if (!inputValue.trim()) {
      setErrorMessage("A entrada não pode estar vazia!"); // Define a mensagem de erro
      return;
    }

    if (editId) {
      editTodo(editId, inputValue);
      setEditId(null);
    } else {
      addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
      });
    }
    setInputValue(""); // Limpa o campo após a operação
    setErrorMessage(""); // Limpa a mensagem de erro

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Captura o Enter no input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddOrUpdate();
    }
  };

  // Garante que o foco fique no input ao editar
  useEffect(() => {
    if (editId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  // Função para filtrar tarefas
  const getFilteredTodos = () => {
    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  return (
    <div className="w-full p-6 space-y-4">
  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
    <input
      autoFocus
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Add or edit todo..."
      className={`flex-1 min-w-0 border rounded-lg px-4 py-2 bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    />
    <button
      onClick={handleAddOrUpdate}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 w-full sm:w-auto"
    >
      {editId ? "Update" : "Add"}
    </button>
  </div>
  {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <button
      onClick={() => setFilter("all")}
      className={`px-4 py-2 rounded-lg ${
        filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      All
    </button>
    <button
      onClick={() => setFilter("pending")}
      className={`px-4 py-2 rounded-lg ${
        filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Pending
    </button>
    <button
      onClick={() => setFilter("completed")}
      className={`px-4 py-2 rounded-lg ${
        filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >
      Completed
    </button>
  </div>

  <ul className="space-y-2">
    {getFilteredTodos().map((todo) => (
      <li
        key={todo.id}
        className={`flex items-center justify-between p-4 rounded-lg shadow ${
          darkMode
            ? "border border-slate-800 bg-gray-700 text-white"
            : "border bg-white text-gray-800"
        }`}
      >
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span
            className={`${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.text}
          </span>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => {
              setInputValue(todo.text);
              setEditId(todo.id);
            }}
            className="text-blue-500"
          >
            Edit
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};
