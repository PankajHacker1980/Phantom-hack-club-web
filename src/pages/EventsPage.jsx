import { useEffect, useState } from 'react';
import Events from '@/components/Events';
import ParticlesBackground from '@/components/ParticlesBackground';

function EventsPage() {
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    document.title = "Phantom Hack Club | Events";
    window.scrollTo(0, 0);
  }, []);

  const handleIdeaClick = (e) => {
    e.preventDefault();
    setMessageVisible(true);
    setTimeout(() => {
      window.location.href = "/contact";
    }, 1500); // Wait 1.5s before redirect
  };

  return (
    <div className="min-h-screen relative pt-32">
      <ParticlesBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff] mb-6">
              Our Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for exciting hackathons, workshops, tech talks, and networking events designed to inspire innovation and foster a community of tech enthusiasts.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">Upcoming Events</h2>
            <Events showAll={true} />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">Past Events Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* --- Past Event Cards --- */}
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">Summer Hackathon 2024</h3>
                <p className="text-gray-300 mb-4">A 48-hour coding marathon where participants built innovative solutions for environmental challenges.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">50+ Participants</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">12 Projects</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">June 2024</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic1.jpg"
                    alt="Summer Hackathon 2024" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">AI Workshop Series</h3>
                <p className="text-gray-300 mb-4">A series of hands-on workshops exploring the fundamentals of artificial intelligence and machine learning.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">4 Sessions</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">30+ Attendees</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">May 2024</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic4.jpg"  
                    alt="AI Workshop Series" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">Tech Talk: Future of Web3</h3>
                <p className="text-gray-300 mb-4">An insightful discussion on blockchain technology, cryptocurrencies, and the future of decentralized web.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">Guest Speaker</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">75 Attendees</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">April 2024</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic2.jpg"  
                    alt="Web3 Tech Talk" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">Game Development Workshop</h3>
                <p className="text-gray-300 mb-4">A hands-on workshop on building interactive games using modern frameworks and game engines.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">2-Day Workshop</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">20 Projects</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">March 2024</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic1.jpg"  
                    alt="Game Development Workshop" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Proposal Section */}
          <div className="mb-20 bg-black/50 p-8 rounded-xl border border-[#00ffff]/30">
            <h2 className="text-3xl font-bold text-center mb-6 font-orbitron text-white">Want to Propose an Event?</h2>
            <p className="text-center text-lg mb-8">
              Have an idea for a workshop, hackathon, or tech talk? We'd love to hear from you!
            </p>
            <div className="text-center">
              <a 
                href="/contact" 
                onClick={handleIdeaClick}
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
              >
                Submit Your Idea
              </a>
              {messageVisible && (
                <p className="mt-4 text-[#00ffff] font-bold">
                  Mail us your idea at phantompulse@hackclub.com
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
