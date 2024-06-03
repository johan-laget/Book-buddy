import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
                <Card className="w-[130px] h-[200px] flex items-center justify-center">
                  <CardContent className="p-0 w-full h-full flex items-center justify-center">
                    
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
