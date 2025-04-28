
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
    src: "https://images.unsplash.com/photo-1619867350067-769ca9596186?q=80&w=2574&auto=format&fit=crop",
    alt: "Tesla Model Y Exterior Front",
  },
  {
    src: "https://images.unsplash.com/photo-1617788138017-80ad41b9b648?q=80&w=2574&auto=format&fit=crop",
    alt: "Tesla Model Y Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1660412310039-abad91e62442?q=80&w=1887&auto=format&fit=crop",
    alt: "Tesla Model Y Side View",
  },
  {
    src: "https://images.unsplash.com/photo-1619841586: q=80&w=2574&auto=format&fit=crop",
    alt: "Tesla Model Y Rear View",
  },
  {
    src: "https://images.unsplash.com/photo-1621807725245-a58ba952f3e6?q=80&w=2574&auto=format&fit=crop",
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
