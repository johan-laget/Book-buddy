import React from "react";
import monsterImage from "../assets/monster.png";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Importez votre image d'arrière-plan
import bgImage from "../assets/bgbiblio.jpg";

const Root = () => {
  return (
    <div className="relative h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Image de couverture */}
      <img
        className="max-w-xl mx-auto"
        src={monsterImage}
        alt="Image de couverture"
      />
      
      {/* Contenu superposé */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl text-black font-bold mt-32 mb-4 font-irish-grover">Identifies toi auprès de l’Ickabog</h1>
          <p className="text-2xl text-black font-bold mt-2 mb-4 font-irish-grover">Bienvenue dans votre propre librairie de livre</p>
          <Button><Link to="/auth/registerform" className="text-white no-underline">S'inscrire</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default Root;
