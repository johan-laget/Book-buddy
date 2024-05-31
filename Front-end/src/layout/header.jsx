// src/components/Header.jsx
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Assurez-vous que ce chemin est correct
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-3 flex items-center justify-between">
      <h1 className="text-2xl font-irish-grover">La caverne de l'Ickabog</h1>

      <div className="flex items-center space-x-2 w-1/2 bg-white p-3 rounded-[10px]">
        <Select>
          <SelectTrigger className="w-[180px] bg-white text-black rounded-r-md p-2">
            <SelectValue placeholder="Thème" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black">
                      <SelectItem value="Rommance">Rommance</SelectItem>
                      <SelectItem value="Action">Action</SelectItem>
                      <SelectItem value="Commique">Commique</SelectItem>
                      <SelectItem value="Historique">Historique</SelectItem>
                      <SelectItem value="Aventure">Aventure</SelectItem>
                      <SelectItem value="Fantasy">Fantasy</SelectItem>
                      <SelectItem value="ScienceFiction">Science Fiction</SelectItem>
                      <SelectItem value="Psychologique">Psychologique</SelectItem>
                      <SelectItem value="Satire">Satire</SelectItem>
                      <SelectItem value="Apprentissage">Apprentissage</SelectItem>
                    </SelectContent>
        </Select>
        <input
          type="text"
          className="flex-grow text-black p-2 rounded-l-md border-none outline-none"
          placeholder="Rechercher..."
        />
      </div>

      {/* Lien de navigation à droite */}
      <nav>
      <BurgerMenu />
      </nav>
    </header>
  );
}

export default Header;
