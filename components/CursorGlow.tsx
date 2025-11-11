
import React, { useState, useEffect } from 'react';

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#9B30FF] rounded-full filter blur-3xl opacity-10 transition-transform duration-200 ease-out"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CursorGlow;
