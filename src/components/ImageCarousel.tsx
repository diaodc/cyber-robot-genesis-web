
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
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
    <div className={`relative w-full ${className}`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
                {overlay && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md border border-cyber-blue/30 p-3 rounded-lg">
                      <div className="text-cyber-blue font-mono text-xs">NEXUS AI VISION</div>
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
      
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-cyber-blue w-4' 
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
