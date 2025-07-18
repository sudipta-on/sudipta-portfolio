import React, { useEffect } from 'react';
import { animate } from 'animejs';

const Layout = ({ children }) => {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');

    particles.forEach((particle) => {
      animate(particle, {
        translateX: () => Math.random() * 100 - 50,
        translateY: () => Math.random() * 100 - 50,
        opacity: () => Math.random() * 0.5 + 0.5,
        duration: () => Math.random() * 4000 + 2000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      });
    });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / innerWidth;
      const offsetY = (e.clientY - innerHeight / 2) / innerHeight;

      particles.forEach((particle) => {
        particle.style.transform = `translate(${offsetX * 20}px, ${offsetY * 20}px)`;
      });
    };

    const shootStar = () => {
      const star = document.querySelector('.shooting-star');
      if (!star) return;

      star.style.top = '-10px';
      star.style.left = `${Math.random() * 90 + 5}%`;
      star.style.opacity = 1;

      animate(star, {
        translateX: 200,
        translateY: 200,
        opacity: [1, 0],
        duration: 1200,
        easing: 'easeOutQuad',
        complete: () => {
          setTimeout(shootStar, Math.random() * 5000 + 3000);
        },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    shootStar();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-black to-purple-900 overflow-hidden">
      {/* Persistent background particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 400 }).map((_, i) => (
          <div
            key={i}
            className="particle w-[4px] h-[4px] bg-white rounded-full absolute shadow-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.3,
            }}
          />
        ))}
        <div className="shooting-star absolute w-[2px] h-[2px] bg-white rounded-full z-10 opacity-0" />
      </div>

      {/* Page-specific content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
