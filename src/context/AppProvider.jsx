import { useReducer } from "react";
import { AppContext } from "./AppContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: action.payload };
    case "SET_CURRENT_MODE":
      return { ...state, currentMode: action.payload, count: 0 }; // Zera o contador
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "SET_BACKGROUND_COLOR":
      return { ...state, backgroundColor: action.payload };

    // Ações para o TodoList
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };
    default:
      return state;
  }
};

// AppProvider com o estado inicial atualizado
export default function AppProvider({ children }) {
  /* const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentMode, setCurrentMode] = useState("counter");
  const [loading, setLoading] = useState(false);

  const handleModuleChange = (moduleId) => {
    setLoading(true);
    setCurrentMode(moduleId);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }; */
  const [state, dispatch] = useReducer(reducer, {
    darkMode: false,
    sidebarOpen: false,
    currentMode: "counter",
    loading: false,
    count: 0,
    backgroundColor: "#fff",
    todos: [],
  });

  const handleModuleChange = (id) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    //Retorna o valor inicial do backgroundColor
    dispatch({
      type: "SET_BACKGROUND_COLOR",
      payload: "rgba(255,255,255,0.0)", //Transparente - Retorna o valor inicial do backgroundColor
    });
    dispatch({
      type: "SET_CURRENT_MODE",
      payload: id,
    });
    setTimeout(() => {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }, 2000);
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
  };

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const editTodo = (id, text) => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id,
        text,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const { darkMode, sidebarOpen, currentMode, loading, count, backgroundColor, todos } = state;
  return (
    /* <AppContext.Provider
      value={{ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, currentMode, setCurrentMode, loading, setLoading, handleModuleChange }}
    > */
    <AppContext.Provider
      value={{
        darkMode,
        sidebarOpen,
        currentMode,
        loading,
        count,
        backgroundColor,
        todos,
        handleModuleChange,
        addTodo,
        editTodo,
        deleteTodo,
        toggleComplete: (id) => dispatch({ type: "TOGGLE_COMPLETE", payload: id }),
        setDarkMode: (payload) => dispatch({ type: "SET_DARK_MODE", payload }),
        setSidebarOpen: (payload) => dispatch({ type: "TOGGLE_SIDEBAR", payload }),
        setCurrentMode: (payload) => dispatch({ type: "SET_CURRENT_MODE", payload }),
        setLoading: (payload) => dispatch({ type: "SET_LOADING", payload }),
        setCount: (payload) => {
          if (typeof payload === "function") {
            dispatch({ type: "SET_COUNT", payload: payload(state.count) });
          } else {
            dispatch({ type: "SET_COUNT", payload });
          }
        },
        setBackgroundColor: (payload) => dispatch({ type: "SET_BACKGROUND_COLOR", payload }),
      }}
    >
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-indigo-950"}`}>{children}</div>
    </AppContext.Provider>
  );
}
import PropTypes from "prop-types";

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
