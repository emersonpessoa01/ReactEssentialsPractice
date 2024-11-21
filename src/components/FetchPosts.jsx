import { useState, useEffect } from "react";
import Spinners from "../spinners/Spinners";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      // Atraso para mostrar a animação de carregamento
      setTimeout(async () => {
        try {
          const postsFetch = "https://jsonplaceholder.typicode.com/posts";
          const response = await fetch(postsFetch);
          const data = await response.json();
          setPosts(data.slice(0, 10)); // Limitando a 10 posts
        } catch (error) {
          console.error("Erro ao buscar os posts:", error);
        } finally {
          setLoading(false);
        }
      }, 3000); // Atraso de 500ms (meio segundo)
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Posts</h1>

      {/* Botão para recarregar os posts */}
      <button
        onClick={fetchPosts}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
        disabled={loading} // Desativa o botão enquanto carrega
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
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchPosts;
