import { useEffect } from 'react'

export default function AnimatedBackground() {
  useEffect(() => {
    const bg = document.getElementById('bg');
    if (!bg) return;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bg.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(61, 35, 122,0.8), #000)`;
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
  return null;
}
