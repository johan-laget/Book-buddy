// CarouselSpacing.jsx

import React from "react";
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

const CarouselSpacing = ({ books }) => {
  const { removeFavorite } = useBooks(); // Utiliser la fonction removeFavorite du contexte

  const handleToggleFavorite = (id) => {
    removeFavorite(id); // Appeler la fonction removeFavorite avec l'ID du livre
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
                    <button className="absolute top-2 right-2" onClick={() => handleToggleFavorite(book.id)}>
                      <Heart color={book.favorite ? "red" : "gray"} />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSpacing;
