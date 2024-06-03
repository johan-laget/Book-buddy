import React, { useState, useEffect } from "react";
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
import CardBook from "./CardBook";

const CarouselSpacing = ({ books }) => {
  const { toggleFavorite } = useBooks(); // Utiliser la fonction toggleFavorite du contexte
  const [selectedBook, setSelectedBook] = useState(null);

  const openCardBook = (book) => {
    setSelectedBook(book);
  };

  const closeCardBook = () => {
    setSelectedBook(null);
  };

  const handleHeartClick = (e, id) => {
    e.stopPropagation();
    toggleFavorite(id); // Appeler la fonction toggleFavorite avec l'ID du livre
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
                      <Heart color={book.favorite ? "red" : "gray"} /> {/* Utiliser book.favorite */}
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

      {selectedBook && <CardBook book={selectedBook} onClose={closeCardBook} />}
    </div>
  );
};

export default CarouselSpacing;
