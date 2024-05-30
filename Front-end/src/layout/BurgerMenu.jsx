import { AlignJustify, X } from 'lucide-react';
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
      <AlignJustify/>
      </button>

      {/* Menu coulissant */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
        <h2 className='font-irish-grover mb-4 text-2xl border-b-4 border-white'>La caverne de l'Ickabog</h2>
          <button className="text-white absolute top-4 right-4" onClick={toggleMenu}><X /></button>
          <ul className='text-white flex flex-col items-center'>
            <li className="mb-4"><Link to="/user">Acceuil</Link></li>
            <li className="mb-4"><Link to="/user/favoris">Favoris</Link></li>
            <li className="mb-4"><Link to="/user/profil">Profil</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
