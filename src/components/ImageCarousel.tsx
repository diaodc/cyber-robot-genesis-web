
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/lovable-uploads/4cad9fc6-0026-46cc-b9e7-aa787f40131c.png",
    alt: "Advanced Cybernetic White Robot"
  },
  {
    src: "/lovable-uploads/7ef40193-d54f-4ed7-b816-b081b72a2425.png",
    alt: "Futuristic Digital AI Face"
  },
  {
    src: "/lovable-uploads/81388846-aa1c-4182-a98c-6f2023492e28.png",
    alt: "Advanced Purple Robot Interface"
  },
  {
    src: "/lovable-uploads/a014ca76-8ffa-4f72-8e2e-3f31acef7d73.png",
    alt: "Advanced Cybernetic Neural Robot"
  },
  {
    src: "/lovable-uploads/166c0bc3-980f-4c17-a4de-ccff839c5261.png",
    alt: "Cutting-Edge AI Robotic Humanoid"
  }
];

interface ImageCarouselProps {
  className?: string;
  overlay?: boolean;
  autoSlide?: boolean;
  interval?: number;
}

const ImageCarousel = ({ className = "", overlay = true, autoSlide = true, interval = 5000 }: ImageCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoSlide, interval]);

  return (
    <div className={`relative w-full ${className} transition-all duration-500 hover:scale-105`}>
      <AspectRatio ratio={1} className="w-full h-full">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  {overlay && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md border border-cyber-purple/30 p-3 rounded-lg">
                        <div className="text-cyber-purple font-mono text-xs">NEXUS AI VISION</div>
                        <div className="text-white font-bold text-sm">{image.alt}</div>
                      </div>
                    </>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </AspectRatio>
      
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-cyber-purple w-4' 
                : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
