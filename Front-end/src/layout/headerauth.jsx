// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Headerauth = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-irish-grover">La caverne de l'Ickabog</h1>
      <nav>
        <Link to="/" className="text-xl font-irish-grover">Home</Link>
      </nav>
    </header>
  );
}

export default Headerauth;
