
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Advanced neural circuit technology"
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    alt: "Humanoid robot with advanced AI"
  },
  {
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    alt: "Next generation quantum processor"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "AI robot interface system"
  },
  {
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Advanced AI code visualization"
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
      <Carousel className="w-full" selectedIndex={currentSlide} setSelectedIndex={setCurrentSlide}>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0xIDFoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                    
                    {/* Tech spec overlay */}
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
