import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VoiceGreeting from './components/VoiceGreeting';
import AudioPlayer from './components/AudioPlayer';
import PhantomBot from './components/PhantomBot';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Start voice greeting after 2-3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const voiceGreeting = document.getElementById('voice-greeting-button');
      if (voiceGreeting) {
        voiceGreeting.click();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <VoiceGreeting />
        <AudioPlayer />
        <PhantomBot />
      </div>
    </Router>
  );
}

export default App;