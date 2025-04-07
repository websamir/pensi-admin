import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Oops! La página que buscas no se pudo encontrar.
        </p>
        <Link
          to="/"
          className="text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5"
        >
          Volver al Inicio
        </Link>
      </div>
      <div className="mt-10 text-gray-500">
        <p>Si crees que esto es un error, por favor contacta al soporte técnico.</p>
      </div>
    </div>
  );
};

export default NotFound;
