import { useEffect, useState } from "react";
import UseAppContext from "../hook/UseAppContext";
import AOS from "aos";
import "aos/dist/aos.css";

const media = [
  // { type: "image", src: "https://via.placeholder.com/300x200" },
  // { type: "image", src: "https://via.placeholder.com/300x201" },
  { type: "image", src: "https://i.imgur.com/p3uXStT.jpeg" },
  { type: "image", src: "https://i.imgur.com/0dhzi23.jpeg" },
  { type: "image", src: "https://i.imgur.com/es2yhM0.jpeg" },
  { type: "image", src: "https://i.imgur.com/DpN66MB.jpeg" },
  { type: "image", src: "https://i.imgur.com/BzOzJTe.jpeg" },
  { type: "image", src: "https://i.imgur.com/ypUAccM.jpeg" },
  { type: "video", src: "https://i.imgur.com/8vsNSs7.mp4" }, // Exemplo de vídeo
  { type: "video", src: "https://i.imgur.com/ah32PRd.mp4" }, // Exemplo de vídeo
  { type: "video", src: "https://i.imgur.com/AEnTwW8.mp4" }, // Exemplo de vídeo
  { type: "video", src: "https://i.imgur.com/AmYbvx1.mp4" }, // Exemplo de vídeo
  { type: "video", src: "https://i.imgur.com/l81pTJX.mp4" }, // Exemplo de vídeo
  { type: "video", src: "https://i.imgur.com/sXbWaFL.mp4" }, // Exemplo de vídeo
];

const MediaGallery = () => {
  const { darkMode } = UseAppContext();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração padrão da animação
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Função para calcular o delay
  const calculateDelay = (index) => {
    const baseDelay = 600; // Primeiro intervalo
    const step = 200; // Intervalo entre cada item
    return baseDelay + Math.floor(index / 2) * 400 + (index % 2) * step;
  };

  const closeModal = () => {
    setSelectedMediaIndex(null);
  };

  const navigateMedia = (direction) => {
    if (selectedMediaIndex === null) return;

    if (direction === "prev") {
      setSelectedMediaIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : media.length - 1));
    } else if (direction === "next") {
      setSelectedMediaIndex((prevIndex) => (prevIndex < media.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="w-full h-full">
      <h1
        style={{
          color: darkMode ? "rgb(178 0 255)" : "rgb(0, 0, 255)",
        }}
        className="text-2xl text-center pt-4 font-bold mb-4"
      >
        Galeria de Mídia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full sm:w-auto gap-4 p-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer border rounded overflow-hidden hover:opacity-75"
            onClick={() => setSelectedMediaIndex(index)}
            data-aos="fade-up"
            data-aos-delay={calculateDelay(index)} // Delay calculado para cada par
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`Mídia ${index + 1}`} className="w-full" />
            ) : (
              <video src={item.src} className="w-full" muted loop />
            )}
          </div>
        ))}
      </div>
      {selectedMediaIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative flex flex-col items-center w-full">
            {media[selectedMediaIndex].type === "image" ? (
              <img
                src={media[selectedMediaIndex].src}
                alt={`Mídia ${selectedMediaIndex + 1}`}
                className="image-modal p-4 rounded-3xl w-full max-w-screen-sm"
              />
            ) : (
              <video src={media[selectedMediaIndex].src} controls autoPlay className="video-modal p-4 rounded-3xl w-full max-w-screen-sm" />
            )}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => navigateMedia("prev")}
                className={`bg-white rounded-full px-4 py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              >
                ⬅ Anterior
              </button>
              <button onClick={closeModal} className="bg-red-500 text-white rounded-full px-4 py-2">
                Fechar
              </button>
              <button
                onClick={() => navigateMedia("next")}
                className={`bg-white rounded-full px-4 py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              >
                Próxima ➡
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
