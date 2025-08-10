import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = ({ limit = 0, showAll = false }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PhantomBot AI Assistant",
      description: "An AI-powered virtual assistant built with NLP to help club members access resources and information quickly.",
      detailedDescription: "PhantomBot is a cutting-edge AI assistant tailored for student clubs. It integrates natural language processing, event reminders, and project documentation search. Members can ask questions, retrieve files, or get updates instantly. It also connects with APIs like Google Drive and GitHub for real-time collaboration, making it the ultimate productivity booster.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      image: "/images/pic11.jpeg",
    },
    {
      id: 2,
      title: "AR Campus Navigator",
      description: "Augmented reality app that helps new students navigate the campus with interactive waypoints.",
      detailedDescription: "AR Campus Navigator transforms any smartphone into a real-time campus guide. Using ARCore, it overlays directions, facility details, and event markers on live camera feed. Students can search for classrooms, labs, and offices. The app supports indoor positioning for multi-floor navigation, ensuring no student gets lost during their first week.",
      technologies: ["Unity", "ARCore", "C#", "3D Modeling"],
      image: "/images/pic12.jpeg",
    },
    {
      id: 3,
      title: "Eco-Track Monitoring System",
      description: "IoT-based environmental monitoring with a real-time dashboard.",
      detailedDescription: "Eco-Track monitors air quality, temperature, and humidity in urban areas. It uses Arduino-based sensors to collect environmental data, which is then displayed on a React-powered dashboard. The system can send alerts if pollution exceeds safe limits, and it allows city planners to analyze trends for better decision-making.",
      technologies: ["Arduino", "IoT", "React", "Express", "MongoDB"],
      image: "/images/pic13.png",
    },
    {
      id: 4,
      title: "StudyBuddy Platform",
      description: "A collaborative learning platform connecting students with study partners.",
      detailedDescription: "StudyBuddy matches students based on subject interest and learning style. It features live video study rooms, shared note boards, and gamified challenges. Using WebRTC, it enables real-time communication while keeping the platform lightweight and accessible from any device.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebRTC"],
      image: "/images/pic14.jpeg",
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain.",
      detailedDescription: "This blockchain-powered voting system ensures tamper-proof student elections. Each vote is stored as a block, making results verifiable and resistant to fraud. The platform has a user-friendly interface and supports multiple voting rounds, with instant result tallying.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      image: "/images/pic15.png",
    },
    {
      id: 6,
      title: "Health Tracker App",
      description: "Mobile app for tracking activity, nutrition, and wellbeing.",
      detailedDescription: "Health Tracker helps users set fitness goals, monitor daily calorie intake, and track workouts. It uses TensorFlow Lite to analyze activity patterns and provides AI-generated health tips. Data syncs with cloud storage for backup and cross-device access.",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite", "REST API"],
      image: "/images/pic16.jpeg",
    }
  ];

  const displayProjects = limit > 0 ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-container relative">
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
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 bg-[#00ffff]/20 hover:bg-[#00ffff]/40 border border-[#00ffff] text-[#00ffff] text-center rounded-md transition-colors"
              >
                View More Details
              </button>
            </div>
          </div>
        ))}
      </div>

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

      {/* Enlarged Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black border-4 border-[#00ffff] rounded-xl p-8 max-w-3xl w-full transform scale-90 opacity-0 animate-[zoomIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4 border border-[#00ffff]/50"
            />
            <h2 className="text-3xl font-bold text-[#00ffff] mb-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-6">{selectedProject.detailedDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 px-6 py-2 bg-[#00ffff]/20 hover:bg-[#00ffff]/40 border border-[#00ffff] text-[#00ffff] rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
