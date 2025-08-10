import { useEffect, useState } from "react";
import Projects from "../components/Projects";
import ParticlesBackground from "../components/ParticlesBackground";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Phantom Hack Club | Projects";
    window.scrollTo(0, 0);
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">
              Featured Projects
            </h2>
            <Projects showAll={true} />
          </div>

          {/* Success Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "EcoTrack",
                  description:
                    "An environmental monitoring app developed during our hackathon that went on to win national recognition and secure funding for further development.",
                  tags: ["National Award Winner", "Seed Funding"],
                  image: "/images/pic13.png",
                  details:
                    "EcoTrack helps communities track air, water, and soil quality in real time using IoT sensors and AI-powered analytics. It was built in just 48 hours during a hackathon and later received a national innovation award. The project secured seed funding to expand deployment in rural areas."
                },
                {
                  title: "ConnectEd",
                  description:
                    "An educational platform connecting students with mentors, which expanded from a club project to serving five local schools with over 500 active users.",
                  tags: ["500+ Users", "5 School Partnership"],
                  image: "/images/pic14.jpeg",
                  details:
                    "ConnectEd bridges the gap between students and mentors by providing an intuitive platform for scheduling, chat, and resource sharing. The project scaled from a prototype to an active network across multiple schools, positively impacting hundreds of students."
                }
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00ffff]/10 text-[#00ffff] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="mt-2 px-5 py-2 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-semibold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_10px_#00ffff]"
                  >
                    View More Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Contributions - Matching Style but No Images */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-white">
              Open Source Contributions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "HackClub Resources",
                  description:
                    "Contributing learning materials and project guides to the global Hack Club community.",
                  details:
                    "Our members regularly publish programming guides, workshop materials, and starter kits for the Hack Club network, reaching thousands of young developers worldwide."
                },
                {
                  title: "AI Study Group",
                  description:
                    "Open source machine learning models and study materials for beginners.",
                  details:
                    "A collaborative initiative where members build and share beginner-friendly AI models, tutorials, and datasets to help others learn and experiment with machine learning."
                },
                {
                  title: "Web Dev Starter Kit",
                  description:
                    "A collection of templates and components for beginner web developers.",
                  details:
                    "We designed an open-source kit containing responsive templates, reusable UI components, and starter code for HTML, CSS, and JavaScript projects."
                }
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300 group text-center"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00ffff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="mt-2 px-5 py-2 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-semibold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_10px_#00ffff]"
                  >
                    View More Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Start Your Project */}
          <div className="mb-20 bg-black/50 p-8 rounded-xl border border-[#00ffff]/30">
            <h2 className="text-3xl font-bold text-center mb-6 font-orbitron text-white">
              Start Your Project
            </h2>
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

      {/* Enlarged Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-black p-6 rounded-2xl border border-[#00ffff] shadow-lg max-w-2xl w-full transform scale-100 animate-fadeIn">
            <button
              onClick={closeModal}
              className="text-[#00ffff] text-lg font-bold float-right"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4 text-[#00ffff]">
              {selectedProject.title}
            </h2>
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-300 mb-4">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
