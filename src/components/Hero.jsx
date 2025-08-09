import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [time, setTime] = useState('');
  const [glitchText, setGlitchText] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Welcome to Phantom Hack Club';
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Clock update
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);
    
    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    // Mouse parallax effect
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize particles
    if (window.particlesJS && particlesRef.current) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00ffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
    
    return () => {
      clearInterval(clockInterval);
      clearInterval(glitchInterval);
      clearInterval(typeInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate parallax effect based on mouse position
  const getParallaxStyle = (depth = 20) => {
    if (heroRef.current) {
      const centerX = heroRef.current.offsetWidth / 2;
      const centerY = heroRef.current.offsetHeight / 2;
      const moveX = (mousePosition.x - centerX) / depth;
      const moveY = (mousePosition.y - centerY) / depth;
      return { transform: `translate(${moveX}px, ${moveY}px)` };
    }
    return {};
  };

  return (
    <section id="home" ref={heroRef} className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
      {/* Particles Background */}
      <div id="particles-js" ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      {/* Neon circle decoration */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-400 to-[#00ffff] rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      {/* 3D Rotating cube */}
      <div className="absolute left-10 bottom-20 hidden md:block z-10">
        <div className="cube">
          <div className="cube-face cube-face-front"></div>
          <div className="cube-face cube-face-back"></div>
          <div className="cube-face cube-face-right"></div>
          <div className="cube-face cube-face-left"></div>
          <div className="cube-face cube-face-top"></div>
          <div className="cube-face cube-face-bottom"></div>
        </div>
      </div>
      
      {/* Binary code decoration */}
      <div className="absolute right-5 top-40 hidden lg:block opacity-20 font-mono text-xs text-[#00ffff] binary-rain">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="binary-column" style={{ animationDelay: `${i * 0.5}s` }}>
            {Array.from({ length: 20 }).map((_, j) => (
              <span key={j} className="inline-block">{Math.round(Math.random())}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="relative glitch-container" style={getParallaxStyle(50)}>
            <h2 className={`font-orbitron text-4xl md:text-6xl font-bold ${glitchText ? 'text-red-500' : 'text-[#00ffff]'} mb-2 relative glitch`} data-text={typewriterText}>
              {typewriterText}
              <span className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-[#00ffff] to-blue-300 w-full transform scale-x-0 animate-expand-width"></span>
            </h2>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl font-light text-white/90 mt-6 backdrop-blur-lg bg-black/40 p-4 rounded-lg border border-[#00ffff]/20 shadow-lg" style={getParallaxStyle(30)}>
            Empowering young innovators through code, creativity, and community. 
            <span className="block mt-2 text-[#00ffff]">Join us in building the future of tech.</span>
          </p>
          
          <div id="clock" className="font-orbitron text-2xl text-[#00ffff] mt-6 shadow-neon p-3 border-2 border-[#00ffff]/50 rounded-lg backdrop-blur-lg bg-black/40 hover:bg-black/60 transition duration-300" style={getParallaxStyle(20)}>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></span>
              {time}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link to="/events" className="neon-button px-8 py-3 bg-transparent border-2 border-[#00ffff] text-[#00ffff] font-orbitron rounded-md hover:bg-[#00ffff]/10 transform hover:scale-105 transition duration-300 relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00ffff]/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Events
              </span>
            </Link>
            <Link to="/projects" className="neon-button-filled px-8 py-3 bg-gradient-to-r from-blue-600 to-[#00ffff] text-black font-orbitron rounded-md transform hover:scale-105 transition duration-300 shadow-lg relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-white/30 transform skew-x-12 group-hover:w-full transition-all duration-700"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Explore Projects
              </span>
            </Link>
          </div>
          
          {/* Floating tech icons with enhanced animations */}
          <div className="absolute bottom-20 left-40 hidden lg:block z-10">
            <div className="text-[#00ffff]/60 text-6xl animate-float-slow transform rotate-12 hover:text-[#00ffff] transition-colors duration-300 cursor-pointer tech-icon">
              &lt;/&gt;
            </div>
          </div>
          <div className="absolute top-40 right-40 hidden lg:block z-10">
            <div className="text-[#00ffff]/60 text-5xl animate-float transform -rotate-12 hover:text-[#00ffff] transition-colors duration-300 cursor-pointer tech-icon">
              { }
            </div>
          </div>
          <div className="absolute top-1/2 right-20 hidden lg:block z-10">
            <div className="text-[#00ffff]/60 text-4xl animate-float-slow transform rotate-45 hover:text-[#00ffff] transition-colors duration-300 cursor-pointer tech-icon" style={{animationDelay: '1s'}}>
              #
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 animate-bounce-slow">
            <span className="text-[#00ffff]/70 text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ffff]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;