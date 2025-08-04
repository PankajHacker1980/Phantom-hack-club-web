import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen ? 'bg-black/95 shadow-[0_0_20px_#00ffff80]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo-container">
          <Link to="/">
            <img 
              src="/assets/images/phantom_hack_club_logo.png" 
              alt="Phantom Hack Club Logo" 
              className="h-20 md:h-28 filter drop-shadow-[0_0_10px_#00ffff] hover:drop-shadow-[0_0_30px_#00ffff] transition-all duration-300 animate-pulse-slow"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center">
          <Link to="/" className={`mx-4 font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow transition-all duration-300 ${location.pathname === '/' ? 'text-[#00ffff] shadow-glow' : ''}`}>Home</Link>
          <Link to="/events" className={`mx-4 font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow transition-all duration-300 ${location.pathname === '/events' ? 'text-[#00ffff] shadow-glow' : ''}`}>Events</Link>
          <Link to="/projects" className={`mx-4 font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow transition-all duration-300 ${location.pathname === '/projects' ? 'text-[#00ffff] shadow-glow' : ''}`}>Projects</Link>
          <Link to="/contact" className={`mx-4 font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow transition-all duration-300 ${location.pathname === '/contact' ? 'text-[#00ffff] shadow-glow' : ''}`}>Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
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
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-[#00ffff]/30 py-4">
            <nav className="flex flex-col items-center space-y-4">
              <Link to="/" className={`font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow ${location.pathname === '/' ? 'text-[#00ffff] shadow-glow' : ''}`}>Home</Link>
              <Link to="/events" className={`font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow ${location.pathname === '/events' ? 'text-[#00ffff] shadow-glow' : ''}`}>Events</Link>
              <Link to="/projects" className={`font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow ${location.pathname === '/projects' ? 'text-[#00ffff] shadow-glow' : ''}`}>Projects</Link>
              <Link to="/contact" className={`font-orbitron font-bold hover:text-[#00ffff] hover:shadow-glow ${location.pathname === '/contact' ? 'text-[#00ffff] shadow-glow' : ''}`}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;