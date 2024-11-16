import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x201',
  'https://via.placeholder.com/300x202',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Galeria de Imagens</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="cursor-pointer border rounded hover:opacity-75"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative">
            <img src={selectedImage} alt="Imagem Ampliada" className="rounded shadow-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
