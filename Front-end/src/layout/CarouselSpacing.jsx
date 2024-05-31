import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardWidth = "200px"; // Largeur de la carte
const CardHeight = "300px"; // Hauteur de la carte

const CarouselSpacing = () => {
  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-screen-lg">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/6"
            >
              <div className="p-0 ml-2 mr-2">
                <Card
                  className={`p-0 w-${CardWidth} h-${CardHeight} flex items-center justify-center`}
                >
                  <CardContent className="p-0 w-full h-full flex items-center justify-center">
                    <img src={`image-${index}.jpg`} alt={`Image ${index}`} />
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
