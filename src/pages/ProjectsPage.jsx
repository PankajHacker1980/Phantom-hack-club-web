import { useEffect } from 'react';
import Projects from '../components/Projects';
import ParticlesBackground from '../components/ParticlesBackground';

function ProjectsPage() {
  useEffect(() => {
    document.title = "Phantom Hack Club | Projects";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative pt-32">
      <ParticlesBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff] mb-6">
              Our Projects
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the innovative projects created by our talented Phantom Hack Club members, showcasing creativity, technical skills, and problem-solving abilities.
            </p>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">Featured Projects</h2>
            <Projects showAll={true} />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">EcoTrack</h3>
                <p className="text-gray-300 mb-4">An environmental monitoring app developed during our hackathon that went on to win national recognition and secure funding for further development.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">National Award Winner</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">Seed Funding</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic13.png"
                    alt="EcoTrack Project" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">ConnectEd</h3>
                <p className="text-gray-300 mb-4">An educational platform connecting students with mentors, which expanded from a club project to serving five local schools with over 500 active users.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">500+ Users</span>
                  <span className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm">5 School Partnership</span>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/pic14.png"
                    alt="ConnectEd Project" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">Open Source Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold mb-3">HackClub Resources</h3>
                <p className="text-gray-300 mb-4">Contributing learning materials and project guides to the global Hack Club community.</p>
                <a href="#" className="text-[#00ffff] hover:underline">View on GitHub</a>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold mb-3">AI Study Group</h3>
                <p className="text-gray-300 mb-4">Open source machine learning models and study materials for beginners.</p>
                <a href="#" className="text-[#00ffff] hover:underline">View on GitHub</a>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold mb-3">Web Dev Starter Kit</h3>
                <p className="text-gray-300 mb-4">A collection of templates and components for beginner web developers.</p>
                <a href="#" className="text-[#00ffff] hover:underline">View on GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="mb-20 bg-black/50 p-8 rounded-xl border border-[#00ffff]/30">
            <h2 className="text-3xl font-bold text-center mb-6 font-orbitron text-white">Start Your Project</h2>
            <p className="text-center text-lg mb-8">
              Have a project idea? Join Phantom Hack Club and turn your vision into reality with mentorship and collaboration.
            </p>
            <div className="text-center">
              <a               
               href="https://dashboard.hackclub.com/join-club?code=3UOM9TXZ" 
               target="_blank" 
               rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
              >
                Join Phantom Hack Club
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;