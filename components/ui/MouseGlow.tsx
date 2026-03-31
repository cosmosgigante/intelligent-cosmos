'use client';

import { useEffect } from 'react';
import { useMousePosition } from '@/lib/hooks/useMousePosition';

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  }, [x, y]);

  return null; // This component doesn't render anything
}
