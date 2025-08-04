import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (window.particlesJS && particlesRef.current) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ 
        background: `
          repeating-linear-gradient(
            45deg,
            rgba(0, 255, 255, 0.03),
            rgba(0, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 40px
          ),
          radial-gradient(circle at center, rgba(0,255,255,0.05) 0%, transparent 70%),
          radial-gradient(circle at top right, rgba(0,255,255,0.03), transparent 80%)
        `
      }}
    />
  );
};

export default ParticlesBackground;