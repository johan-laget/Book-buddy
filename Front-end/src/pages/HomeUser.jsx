import React, { useState } from "react";
import CarouselSpacing from "@/layout/CarouselSpacing";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import CardAdd from "@/layout/CardAdd"; // Assurez-vous de l'importer correctement depuis l'endroit où il est défini.

const HomeUser = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold underline mb-4">
        Mes Livres:
      </h1>
      <CarouselSpacing/>
      
      <h1 className="text-3xl font-bold underline mt-8 mb-4">
        En cours de lecture
      </h1>
      <CarouselSpacing/>
      
      <h1 className="text-3xl font-bold underline mt-8 mb-4">
        A commencer
      </h1>
      <CarouselSpacing/>
      
      <h1 className="text-3xl font-bold underline mt-8 mb-4">
        Ajouter un livre
      </h1>
      <Button className="w-[130px] h-[200px] bg-gray-700" onClick={handleAddButtonClick}>
        <X className="text-black w-12 h-24" />
      </Button>
      
      {isCardOpen && <CardAdd onClose={handleCloseCard} />}
    </div>
  );
};

export default HomeUser;
