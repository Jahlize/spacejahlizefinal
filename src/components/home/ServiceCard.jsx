import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, price, subtitle, features, onClick, delay = 0 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`);
    
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180;
    setGlareStyle({ opacity: 0.12, background: `linear-gradient(${angle}deg, rgba(255,255,255,0.25) 0%, transparent 80%)` });
  };

  const handleMouseLeave = () => {
    setTransform('');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group cursor-pointer rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      style={{ transform, transition: transform ? 'none' : 'transform 0.5s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Glare */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300" style={glareStyle} />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display font-bold text-lg text-foreground tracking-wide">{title}</h3>
        <p className="text-primary font-semibold text-sm mt-1">{price}</p>
        {subtitle && <p className="text-[11px] text-muted-foreground mt-0.5">{subtitle}</p>}
        {features && features.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-primary font-semibold tracking-wider">VER MÁS →</span>
      </div>
    </motion.div>
  );
}