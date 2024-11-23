import { useState } from "react";
import UseAppContext from "../hook/UseAppContext";

const images = ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x201", "https://via.placeholder.com/300x202"];

const ImageGallery = () => {
  const { darkMode } = UseAppContext();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImages = (direction) => {
    if (selectedImageIndex === null) return;

    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Galeria de Imagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full sm:w-auto gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="w-full cursor-pointer border rounded hover:opacity-75"
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative flex flex-col items-center w-full">
            <img src={images[selectedImageIndex]} alt={`Imagem ${selectedImageIndex + 1}`} className="p-4 rounded-3xl w-full max-w-screen-sm" />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => navigateImages("prev")}
                className={`bg-white rounded-full px-4 py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              >
                ⬅ Anterior
              </button>
              <button onClick={closeModal} className="bg-red-500 text-white rounded-full px-4 py-2">
                Fechar
              </button>
              <button onClick={() => navigateImages("next")} className={`bg-white rounded-full px-4 py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                Próxima ➡
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
