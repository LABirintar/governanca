
import React from 'react';
import { Persona } from '../types';
import { COLORS } from '../constants';

interface InteractiveCardProps {
  persona: Persona;
  title: string;
  subtitle: string;
  hoverText: string;
  icon: React.ReactNode;
  onClick: (persona: Persona) => void;
  color: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ persona, title, subtitle, hoverText, icon, onClick, color }) => {
  return (
    <div
      onClick={() => onClick(persona)}
      className="group relative w-full h-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2"
      style={{'--card-color': color} as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-[var(--card-color)] transition-all duration-500 group-hover:opacity-0 flex flex-col justify-center items-center p-4 text-center">
        <div className="text-white">{icon}</div>
        <h3 className="text-2xl font-bold text-white font-serif">{title}</h3>
        <p className="text-white/90">{subtitle}</p>
      </div>
      <div className="absolute inset-0 bg-white transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center">
        <h3 className="text-2xl font-bold text-[var(--card-color)] font-serif">{title}</h3>
        <p className="mt-4 text-gray-700">{hoverText}</p>
      </div>
    </div>
  );
};

export default InteractiveCard;
