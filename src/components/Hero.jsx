import { useState, useEffect } from 'react';

const Hero = () => {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    
    // Update the clock immediately and set interval
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-[#00ffff] typewriter-effect">
            Welcome to Phantom Hack Club
          </h2>
          
          <p className="max-w-2xl text-lg md:text-xl font-light text-white/90 mt-6">
            Empowering young innovators through code, creativity, and community. Join us in building the future of tech.
          </p>
          
          <div id="clock" className="font-orbitron text-2xl text-[#00ffff] mt-6 glow-text">
            {time}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;