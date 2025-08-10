import { Link } from 'react-router-dom';

const Projects = ({ limit = 0, showAll = false }) => {
  // Sample project data - in a real application, this would come from an API or database
  const projects = [
    {
      id: 1,
      title: "PhantomBot AI Assistant",
      description: "An AI-powered virtual assistant built with natural language processing to help club members access resources and information.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      image: "/images/pic11.jpeg",
      link: "https://github.com/phantomhackclub/phantom-bot"
    },
    {
      id: 2,
      title: "AR Campus Navigator",
      description: "Augmented reality application that helps new students navigate the campus with interactive waypoints and information overlays.",
      technologies: ["Unity", "ARCore", "C#", "3D Modeling"],
      image: "/images/pic12.jpeg",
      link: "https://github.com/phantomhackclub/ar-navigator"
    },
    {
      id: 3,
      title: "Eco-Track Monitoring System",
      description: "IoT-based environmental monitoring system that tracks air quality, temperature, and humidity with a real-time dashboard.",
      technologies: ["Arduino", "IoT", "React", "Express", "MongoDB"],
      image: "/images/pic13.png",
      link: "https://github.com/phantomhackclub/eco-track"
    },
    {
      id: 4,
      title: "StudyBuddy Platform",
      description: "A collaborative learning platform connecting students with study partners and resources for various subjects and courses.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebRTC"],
      image: "/images/pic14.jpeg",
      link: "https://github.com/phantomhackclub/study-buddy"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology for student government elections.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      image: "/images/pic15.png",
      link: "https://github.com/phantomhackclub/block-vote"
    },
    {
      id: 6,
      title: "Health Tracker App",
      description: "Mobile application for tracking physical activity, nutrition, and mental wellbeing with personalized insights.",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite", "REST API"],
      image: "/images/pic16.jpeg",
      link: "https://github.com/phantomhackclub/health-track"
    }
  ];

  // Filter projects if a limit is provided
  const displayProjects = limit > 0 ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-black/50 rounded-xl border border-[#00ffff]/30 overflow-hidden hover:border-[#00ffff] transition-all duration-300 group flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ffff] transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-bold text-sm text-[#00ffff] mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-[#00ffff]/10 text-[#00ffff] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#00ffff]/20 hover:bg-[#00ffff]/40 border border-[#00ffff] text-[#00ffff] text-center rounded-md transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show "See All Projects" button only on homepage */}
      {!showAll && limit > 0 && projects.length > limit && (
        <div className="text-center mt-10">
          <Link 
            to="/projects" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
          >
            See All Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;