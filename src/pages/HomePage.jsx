import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ParticlesBackground from '../components/ParticlesBackground';

function HomePage() {
  useEffect(() => {
    document.title = "Phantom Hack Club | Home";
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="events-preview" className="py-20 bg-black/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">
              Upcoming Events
            </h2>
            <div className="text-center mb-8">
              <p className="text-xl mb-8">Get a preview of our upcoming exciting events!</p>
              <Events limit={2} />
              <div className="mt-10">
                <a 
                  href="/events" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
                >
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects-preview" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">
              Featured Projects
            </h2>
            <Projects limit={3} />
            <div className="text-center mt-10">
              <a 
                href="/projects" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
        
        <section id="contact-preview" className="py-20 bg-black/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">
              Get in Touch
            </h2>
            <p className="text-center mb-8">Have questions or want to join? Reach out to us!</p>
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;