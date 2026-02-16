import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'triangle' | 'square' | 'hexagon' | 'circle';
  floatSpeed: number;
  floatPhase: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<FloatingShape[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(150, Math.floor(window.innerWidth / 10));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;
    };

    const createShapes = () => {
      const shapes: FloatingShape[] = [];
      const shapeCount = Math.min(20, Math.floor(window.innerWidth / 100));
      const types: FloatingShape['type'][] = ['triangle', 'square', 'hexagon', 'circle'];

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 30,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005,
          opacity: Math.random() * 0.08 + 0.02,
          type: types[Math.floor(Math.random() * types.length)],
          floatSpeed: Math.random() * 0.0005 + 0.0002,
          floatPhase: Math.random() * Math.PI * 2,
        });
      }
      shapesRef.current = shapes;
    };

    const drawShape = (shape: FloatingShape, scrollOffset: number) => {
      const adjustedY = shape.y - scrollOffset * 0.3;
      const floatOffset = Math.sin(timeRef.current * shape.floatSpeed * 1000 + shape.floatPhase) * 20;
      
      ctx.save();
      ctx.translate(shape.x, adjustedY + floatOffset);
      ctx.rotate(shape.rotation + timeRef.current * shape.rotationSpeed * 100);
      ctx.globalAlpha = shape.opacity;
      ctx.strokeStyle = `hsla(45, 100%, 51%, 1)`;
      ctx.lineWidth = 1;

      switch (shape.type) {
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.stroke();
          break;
        case 'square':
          ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case 'hexagon':
          ctx.beginPath();
          for (let j = 0; j < 6; j++) {
            const angle = (Math.PI / 3) * j;
            const px = Math.cos(angle) * shape.size / 2;
            const py = Math.sin(angle) * shape.size / 2;
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          break;
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const drawParticles = () => {
      timeRef.current += 0.016;
      const scrollOffset = scrollRef.current;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating shapes first (behind particles)
      shapesRef.current.forEach((shape) => {
        drawShape(shape, scrollOffset);
      });

      // Draw flowing lines
      ctx.beginPath();
      ctx.strokeStyle = `hsla(45, 100%, 51%, 0.03)`;
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 5) * i + Math.sin(timeRef.current + i) * 50 - scrollOffset * 0.1;
        ctx.moveTo(0, y);
        for (let x = 0; x <= canvas.width; x += 50) {
          const waveY = y + Math.sin(x * 0.01 + timeRef.current * 2 + i) * 30;
          ctx.lineTo(x, waveY);
        }
      }
      ctx.stroke();

      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Pulsing size
        const pulseSize = particle.size + Math.sin(timeRef.current * 50 * particle.pulseSpeed + particle.pulsePhase) * 0.5;

        // Mouse interaction with larger radius
        const dx = mouseRef.current.x - particle.x;
        const dy = (mouseRef.current.y + scrollOffset) - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          particle.vx -= dx * force * 0.015;
          particle.vy -= dy * force * 0.015;
        }

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Damping
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Add some random movement
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 3
        );
        gradient.addColorStop(0, `hsla(45, 100%, 51%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(45, 100%, 51%, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'hsla(45, 100%, 51%, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(45, 100%, 51%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections with curved lines
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const connDx = particle.x - otherParticle.x;
          const connDy = particle.y - otherParticle.y;
          const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

          if (connDist < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            
            // Add a slight curve
            const midX = (particle.x + otherParticle.x) / 2;
            const midY = (particle.y + otherParticle.y) / 2 + Math.sin(timeRef.current * 2) * 5;
            ctx.quadraticCurveTo(midX, midY, otherParticle.x, otherParticle.y);
            
            ctx.strokeStyle = `hsla(45, 100%, 51%, ${0.2 * (1 - connDist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    resizeCanvas();
    createParticles();
    createShapes();
    drawParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
      createShapes();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
