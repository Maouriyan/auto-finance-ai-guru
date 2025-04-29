
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const carImages = [
  {
    src: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-4892258161772696808-1024x768.jpeg",
    alt: "Tesla Model Y Exterior Front",
  },
  {
    src: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-1815517476776107293-1024x768.jpeg",
    alt: "Tesla Model Y Interior",
  },
  {
    src: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-7592748677561844775-1024x768.jpeg",
    alt: "Tesla Model Y Side View",
  },
  {
    src: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-1844255080935123153-1024x768.jpeg",
    alt: "Tesla Model Y Rear View",
  },
  {
    src: "https://static.cargurus.com/images/forsale/2025/04/24/11/50/2020_tesla_model_y-pic-3910404572005777552-1024x768.jpeg",
    alt: "Tesla Model Y Wheel Detail",
  }
];

const CarGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="container max-w-6xl py-8" id="gallery">
      <h2 className="text-2xl font-bold mb-6">Vehicle Gallery</h2>
      <div className="flex flex-col space-y-6">
        {/* Main image display */}
        <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={carImages[activeImage].src} 
            alt={carImages[activeImage].alt}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm">
            {activeImage + 1} / {carImages.length}
          </Badge>
        </div>
        
        {/* Carousel thumbnails */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {carImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/5 md:basis-1/5 lg:basis-1/5">
                <div className="p-1">
                  <Card 
                    className={`cursor-pointer overflow-hidden ${
                      index === activeImage ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default CarGallery;
