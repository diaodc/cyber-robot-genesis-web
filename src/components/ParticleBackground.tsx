
import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
};

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const shootingStars = useRef<ShootingStar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create glow points
    const glowPoints = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 180, color: 'rgba(0, 240, 255, 0.05)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 220, color: 'rgba(155, 48, 255, 0.05)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.2, radius: 150, color: 'rgba(51, 255, 0, 0.05)' },
      { x: canvas.width * 0.3, y: canvas.height * 0.8, radius: 200, color: 'rgba(0, 240, 255, 0.05)' },
      { x: canvas.width * 0.7, y: canvas.height * 0.4, radius: 170, color: 'rgba(155, 48, 255, 0.05)' },
    ];

    // Initialize particles
    particles.current = [];
    const particleCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      // Choose color randomly from our cyber colors
      const colors = ['#00f0ff', '#9b30ff', '#ffffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      };
      
      particles.current.push({
        x,
        y,
        radius,
        color,
        velocity,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }
    
    // Initialize shooting stars
    shootingStars.current = [];

    // Function to add a new shooting star
    const addShootingStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.5); // Only in the top half
      const length = Math.random() * 80 + 50;
      const speed = Math.random() * 5 + 3;
      const angle = Math.PI / 4 + (Math.random() * Math.PI / 4); // Angle between 45 and 90 degrees
      const maxLife = Math.random() * 100 + 50;
      
      const star: ShootingStar = {
        x,
        y,
        length,
        speed,
        angle,
        color: '#ffffff',
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife
      };
      
      shootingStars.current.push(star);
    };

    // Add initial shooting stars
    for (let i = 0; i < 3; i++) {
      addShootingStar();
    }

    const shootingStarInterval = setInterval(() => {
      // Only add a new shooting star if there are fewer than 5
      if (shootingStars.current.length < 5 && Math.random() < 0.3) {
        addShootingStar();
      }
    }, 2000); // Check every 2 seconds

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw glow effects first
      for (const point of glowPoints) {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0, 
          point.x, point.y, point.radius
        );
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Make glow points float
        point.x += Math.sin(Date.now() * 0.0005) * 0.5;
        point.y += Math.cos(Date.now() * 0.0005) * 0.5;
      }
      
      // Update and draw particles
      particles.current.forEach((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Wrap particles around canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Update and draw shooting stars
      shootingStars.current = shootingStars.current.filter(star => {
        star.life += 1;
        if (star.life > star.maxLife) return false;
        
        const fade = 1 - (star.life / star.maxLife);
        const currentAlpha = star.alpha * fade;
        
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Draw shooting star (a line with gradient)
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;
        
        const gradient = ctx.createLinearGradient(
          tailX, tailY, star.x, star.y
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${currentAlpha})`);
        
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw a small circle at the head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
        
        return true;
      });
      
      // Draw connections between particles
      ctx.lineWidth = 0.2;
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.globalAlpha = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = p1.color;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      requestAnimationFrame(drawParticles);
    };

    // Start animation
    const animationId = requestAnimationFrame(drawParticles);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
