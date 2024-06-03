// src/layout/CarouselSpacing.jsx

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";
import { useBooks } from "../layout/BookContext";
import CardBook from "./CardBook"; // Importer le composant CardBook

const CarouselSpacing = ({ books, toggleFavorite }) => {
  const [selectedBook, setSelectedBook] = useState(null); // State pour le livre sélectionné
  const { removeFavorite } = useBooks(); // Utiliser la fonction removeFavorite du contexte

  // State local pour gérer le favori
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = (id) => {
    toggleFavorite(id); // Appeler la fonction toggleFavorite avec l'ID du livre
    setIsFavorite(!isFavorite); // Mettre à jour l'état local du favori
  };

  const openCardBook = (book) => {
    setSelectedBook(book); // Mettre à jour le livre sélectionné pour afficher CardBook
  };

  const closeCardBook = () => {
    setSelectedBook(null); // Fermer CardBook en réinitialisant le livre sélectionné
  };

  const handleHeartClick = (e, id) => {
    e.stopPropagation(); // Arrêter la propagation de l'événement pour éviter d'ouvrir CardBook
    handleToggleFavorite(id); // Appeler la fonction toggleFavorite avec l'ID du livre
  };

  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-screen-lg">
        <CarouselContent className="-ml-1">
          {books.map((book) => (
            <CarouselItem key={book.id} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/6 relative">
              <div className="p-0 ml-2 mr-2">
                <Card className="w-[130px] h-[200px] relative">
                  <CardContent className="p-0 w-full h-full relative">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                    <button
                      className="absolute top-2 right-2 z-20"
                      onClick={(e) => handleHeartClick(e, book.id)}
                    >
                      <Heart color={isFavorite ? "red" : "gray"} />
                    </button>
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                      onClick={() => openCardBook(book)}
                    >
                      {/* Overlay pour ouvrir CardBook */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Conditionnellement afficher CardBook */}
      {selectedBook && <CardBook book={selectedBook} onClose={closeCardBook} />}
    </div>
  );
};

export default CarouselSpacing;
