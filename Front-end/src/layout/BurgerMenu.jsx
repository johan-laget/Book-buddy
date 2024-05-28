import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Bouton Burger */}
      <button className="focus:outline-none" onClick={toggleMenu}>
        Menu
      </button>

      {/* Menu coulissant */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <button className="text-white absolute top-4 right-4" onClick={toggleMenu}>X</button>
          <h2 className="text-xl text-white font-bold mb-4">Menu</h2>
          <ul className='text-white flex flex-col items-center'>
            <li className="mb-2 border-b border-white w-full"><Link to="/">Acceuil</Link></li>
            <li className="mb-2 border-b border-white w-full"><Link to="/Favoris">Favoris</Link></li>
            <li className="mb-2 border-b border-white w-full"><Link to="/profile">Profile</Link></li>
            <li className="mb-2 border-b border-white w-full"><Link to="/Ajouter-un-livre">Ajouter un livre</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
