import ClubLeader from './ClubLeader';

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">
        About Phantom Hack Club
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-orbitron">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Phantom Hack Club is a community of tech enthusiasts, innovators, and problem-solvers dedicated to exploring and pushing the boundaries of technology. Our mission is to create a space where members can learn, collaborate, and build amazing projects together.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe in the power of hands-on learning and peer mentorship. Through hackathons, workshops, and collaborative projects, we empower our members to develop technical skills, foster creativity, and make meaningful contributions to the tech ecosystem.
          </p>
        </div>
        
        <div className="bg-black/50 p-8 rounded-xl border border-[#00ffff]/30">
          <h3 className="text-2xl font-bold font-orbitron mb-6">What We Offer</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="text-[#00ffff] mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Regular Hackathons</h4>
                <p className="text-gray-300">Participate in themed coding events and build innovative solutions in a collaborative environment.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-[#00ffff] mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Workshops & Training</h4>
                <p className="text-gray-300">Learn new skills through workshops on programming, AI, cybersecurity, web development, and more.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-[#00ffff] mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Project Collaboration</h4>
                <p className="text-gray-300">Work on team projects with fellow members, building real-world applications and solutions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-[#00ffff] mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Networking</h4>
                <p className="text-gray-300">Connect with industry professionals, mentors, and like-minded peers in the tech community.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="text-[#00ffff] mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Community Support</h4>
                <p className="text-gray-300">Get help, feedback, and encouragement from a supportive community at every step of your tech journey.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-black/50 p-8 rounded-xl border border-[#00ffff]/30 mb-16">
        <h3 className="text-2xl font-bold font-orbitron mb-6 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-[#00ffff] text-4xl mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Collaboration</h4>
            <p className="text-gray-300">We believe in the power of working together to achieve more than what's possible alone.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="text-[#00ffff] text-4xl mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Innovation</h4>
            <p className="text-gray-300">We encourage creative thinking and exploring new approaches to solving problems.</p>
          </div>
          
          <div className="text-center p-4">
            <div className="text-[#00ffff] text-4xl mb-4 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
            <p className="text-gray-300">We foster a culture of lifelong learning, curiosity, and knowledge sharing.</p>
          </div>
        </div>
      </div>
      
      <ClubLeader />
    </div>
  );
};

export default About;