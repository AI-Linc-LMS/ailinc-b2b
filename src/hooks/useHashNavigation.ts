// hooks/useHashNavigation.ts
"use client"
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function useHashNavigation() {
  const pathname = usePathname();
  const lastHash = useRef('');

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      lastHash.current = hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      // Add a delay to ensure animations have time to render
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          lastHash.current = '';
        }
      }, 500); // Increased delay for Framer Motion animations
    }
  }, [pathname]);

  return null;
}
