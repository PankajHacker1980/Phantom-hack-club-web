import { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set initial volume
      
      // Add event listeners
      audioRef.current.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      
      // Auto-play when loaded (after user interaction)
      if (isLoaded) {
        playAudio();
      }
    }
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {});
      }
    };
  }, [isLoaded]);
  
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
      setIsPlaying(true);
    }
  };
  
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const togglePlayback = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center space-x-2 bg-black/70 p-3 rounded-full border border-[#00ffff]/30 hover:shadow-glow transition-all">
      <audio ref={audioRef} loop>
        <source src="/assets/audio/club_intro.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      <button
        onClick={togglePlayback}
        className="text-[#00ffff] hover:text-white transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      
      <span className="text-xs text-[#00ffff]/80 hidden sm:block">
        Phantom Club Intro
      </span>
    </div>
  );
};

export default AudioPlayer;