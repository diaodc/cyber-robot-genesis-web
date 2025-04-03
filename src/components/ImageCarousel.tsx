
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/lovable-uploads/57a69ae9-f497-4c17-9739-fe011b774445.png",
    alt: "Advanced White Robot with Blue Accents"
  },
  {
    src: "/lovable-uploads/0929a7ef-9acf-4590-9943-444ffe650386.png",
    alt: "Futuristic Robot with Purple Highlights"
  },
  {
    src: "/lovable-uploads/22880109-428b-46f1-83b8-5163cb19abd5.png",
    alt: "Glowing Digital AI Face"
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
      <AspectRatio ratio={8/6} className="w-full h-full">
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
      </AspectRatio>
      
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
