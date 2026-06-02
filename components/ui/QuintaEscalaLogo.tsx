'use client';

import React from 'react';

interface QuintaEscalaLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function QuintaEscalaLogo({ size = 32, className = '', showText = false }: QuintaEscalaLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Terminal Icon Symbol - Ultra Bold for Max Legibility */}
        <path d="M25 30L5 50L25 70" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M75 30L95 50L75 70" stroke="#4FD1C5" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 85L58 15" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.6" />
      </svg>
      {showText && (
        <span className="font-display font-extrabold tracking-tighter text-2xl uppercase text-white">
          Quinta Escala
        </span>
      )}
    </div>
  );
}
