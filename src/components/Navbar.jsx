import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Create pulsing glow effect
    const glowInterval = setInterval(() => {
      setGlowing(prev => !prev);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glowInterval);
    };
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || mobileMenuOpen ? 'bg-black/95 shadow-[0_0_20px_#00ffff80]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo-container relative">
          <Link to="/">
            <img 
              src="/assets/images/phantom_hack_club_logo.png" 
              alt="Phantom Hack Club Logo" 
              className={`h-20 md:h-28 filter ${glowing ? 'drop-shadow-[0_0_15px_#00ffff]' : 'drop-shadow-[0_0_8px_#00ffff]'} transition-all duration-1000 hover:scale-105`}
            />
          </Link>
          {/* Decorative element */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" current={location.pathname} label="Home" />
          <NavLink to="/events" current={location.pathname} label="Events" />
          <NavLink to="/projects" current={location.pathname} label="Projects" />
          <NavLink to="/contact" current={location.pathname} label="Contact" />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 relative"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#00ffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            {/* Animated pulse for mobile menu button */}
            <span className={`absolute inset-0 rounded-full ${mobileMenuOpen ? 'bg-[#00ffff]/10' : ''} ${!mobileMenuOpen && scrolled ? 'animate-ping-slow bg-[#00ffff]/5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-[#00ffff]/30 py-4 border-b border-[#00ffff]/30 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-4">
              <MobileNavLink to="/" current={location.pathname} label="Home" />
              <MobileNavLink to="/events" current={location.pathname} label="Events" />
              <MobileNavLink to="/projects" current={location.pathname} label="Projects" />
              <MobileNavLink to="/contact" current={location.pathname} label="Contact" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// NavLink component for desktop
const NavLink = ({ to, current, label }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`font-orbitron font-bold transition-all duration-300 py-2 px-4 relative group ${
        isActive 
          ? 'text-[#00ffff] shadow-glow' 
          : 'text-white hover:text-[#00ffff]'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00ffff] transform transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );
};

// NavLink component for mobile
const MobileNavLink = ({ to, current, label }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`font-orbitron font-bold text-lg w-full text-center py-3 px-6 ${
        isActive 
          ? 'bg-[#00ffff]/10 text-[#00ffff] border-l-4 border-[#00ffff]' 
          : 'text-white hover:bg-[#00ffff]/5 hover:text-[#00ffff]'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;