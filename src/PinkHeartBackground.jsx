import { useState, useEffect } from "react";

export default function PinkHeartBackground({ children }) {
  const [hearts, setHearts] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 120 - 20, // Start some above viewport
      size: Math.random() * 30 + 25,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -10, // Negative delay for varied start
      opacity: Math.random() * 0.5 + 0.2,
      rotation: Math.random() * 360,
    }));
    setHearts(newHearts);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 bg-linear-to-br from-pink-100 via-rose-100 to-pink-200 pointer-events-none" >
      {/* Pixelated Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute will-change-transform"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              opacity: heart.opacity,
              animation: `float-drift ${heart.duration}s ease-in-out infinite`,
              animationDelay: `${heart.delay}s`,
              transform: `translate(${mousePosition.x * ((heart.id % 4) * 0.3)}px, ${mousePosition.y * ((heart.id % 4) * 0.3)}px) rotate(${heart.rotation}deg)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            {/* Pixel Heart SVG */}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              style={{ imageRendering: 'pixelated' }}
            >
              {/* Top row */}
              <rect x="2" y="2" width="2" height="2" fill="#ec4899" />
              <rect x="4" y="2" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="2" width="2" height="2" fill="#ec4899" />
              <rect x="12" y="2" width="2" height="2" fill="#ec4899" />
              
              {/* Second row */}
              <rect x="0" y="4" width="2" height="2" fill="#f472b6" />
              <rect x="2" y="4" width="2" height="2" fill="#ec4899" />
              <rect x="4" y="4" width="2" height="2" fill="#f472b6" />
              <rect x="6" y="4" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="4" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="4" width="2" height="2" fill="#f472b6" />
              <rect x="12" y="4" width="2" height="2" fill="#ec4899" />
              <rect x="14" y="4" width="2" height="2" fill="#f472b6" />
              
              {/* Third row */}
              <rect x="0" y="6" width="2" height="2" fill="#f472b6" />
              <rect x="2" y="6" width="2" height="2" fill="#ec4899" />
              <rect x="4" y="6" width="2" height="2" fill="#f472b6" />
              <rect x="6" y="6" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="6" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="6" width="2" height="2" fill="#f472b6" />
              <rect x="12" y="6" width="2" height="2" fill="#ec4899" />
              <rect x="14" y="6" width="2" height="2" fill="#f472b6" />
              
              {/* Fourth row */}
              <rect x="0" y="8" width="2" height="2" fill="#f472b6" />
              <rect x="2" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="4" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="6" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="12" y="8" width="2" height="2" fill="#ec4899" />
              <rect x="14" y="8" width="2" height="2" fill="#f472b6" />
              
              {/* Fifth row */}
              <rect x="2" y="10" width="2" height="2" fill="#ec4899" />
              <rect x="4" y="10" width="2" height="2" fill="#ec4899" />
              <rect x="6" y="10" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="10" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="10" width="2" height="2" fill="#ec4899" />
              <rect x="12" y="10" width="2" height="2" fill="#ec4899" />
              
              {/* Sixth row */}
              <rect x="4" y="12" width="2" height="2" fill="#ec4899" />
              <rect x="6" y="12" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="12" width="2" height="2" fill="#ec4899" />
              <rect x="10" y="12" width="2" height="2" fill="#ec4899" />
              
              {/* Bottom point */}
              <rect x="6" y="14" width="2" height="2" fill="#ec4899" />
              <rect x="8" y="14" width="2" height="2" fill="#ec4899" />
            </svg>
          </div>
        ))}
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-pink-50/30 to-rose-200/40 pointer-events-none" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-drift {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(10px, -30px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translate(-5px, -60px) rotate(-3deg) scale(1);
          }
          75% {
            transform: translate(-15px, -30px) rotate(4deg) scale(1.03);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}