import { useState, useEffect } from "react";
import Spinners from "../spinners/Spinners";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        try {
          const postsFetch = "https://dummyjson.com/c/8f9f-90ea-49c0-a764"; // URL fornecida
          const response = await fetch(postsFetch);
          const data = await response.json();

          console.log("Resposta da API:", data);

          // Verifica se há imagens disponíveis
          if (data && Array.isArray(data.images)) {
            setPosts(data.images.slice(0, 6)); // Limita a 6 imagens
          } else {
            console.error("Formato de dados inesperado:", data);
          }
        } catch (error) {
          console.error("Erro ao buscar os posts:", error);
        } finally {
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Imagens</h1>

      {/* Botão para recarregar os posts */}
      <button
        onClick={fetchPosts}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center">
            <i className="fas fa-spinner fa-spin mr-2"></i> Carregando...
          </span>
        ) : (
          "Recarregar"
        )}
      </button>

      {/* Preloader exibido enquanto os dados são carregados */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition duration-1000 ease-in-out">
          <Spinners />
        </div>
      )}

      {/* Conteúdo após o carregamento */}
      {!loading && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <li key={index} className="rounded-md border shadow hover:shadow-xl transition duration-300 ease-in-out overflow-hidden">
              <div className="w-full overflow-hidden">
                <img
                  src={post.url}
                  alt={post.description || `Imagem ${index + 1}`}
                  className="margin-auto rounded-t-md w-full h-full block max-w-screen-sm transform scale-100 hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <p className="p-2 pt-4">{post.description || "Sem descrição"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchPosts;
