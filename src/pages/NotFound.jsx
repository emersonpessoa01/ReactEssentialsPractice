import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Ops! Página não encontrada.</p>
      <p className="text-gray-500 mt-2">
        A página que você está tentando acessar não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;
