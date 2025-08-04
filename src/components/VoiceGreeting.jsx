import { useEffect, useState, useCallback } from 'react';

const VoiceGreeting = () => {
  const [greeted, setGreeted] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  // Function to speak greeting with sexy, girlish Indian female voice
  const speakGreeting = useCallback(() => {
    if (!window.speechSynthesis || greeted) return;

    // Always start with "Namaste, welcome to Phantom hack club" and then add a tagline
    const taglines = [
      "I'm so excited to see you here!",
      "We've been waiting for you!",
      "where innovation meets community!",
      "where we turn ideas into reality!"
    ];

    // Construct greeting with required format
    const greeting = "Namaste, welcome to Phantom hack club. " + taglines[Math.floor(Math.random() * taglines.length)];
    
    // Create utterance with the greeting
    const utterance = new SpeechSynthesisUtterance(greeting);
    
    // Get all available voices
    const voices = window.speechSynthesis.getVoices();
    
    // Debug available voices to console
    console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`));
    
    // Priority for female voices with a preference hierarchy
    // First try Google's female voices which tend to sound more natural
    let selectedVoice = voices.find(voice => 
      voice.name.includes('Google') && 
      (voice.name.toLowerCase().includes('female') || voice.name.includes('Female'))
    );
    
    // If no Google female voice, try Microsoft's female voices (often more expressive)
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => 
        voice.name.includes('Microsoft') && 
        (voice.name.toLowerCase().includes('female') || voice.name.includes('Female') || 
         voice.name.includes('Zira') || voice.name.includes('Sonia'))
      );
    }
    
    // Prioritize Indian female voices
    if (!selectedVoice) {
      // First try explicitly for Google's Indian female voices
      selectedVoice = voices.find(voice => 
        (voice.lang === 'hi-IN' || voice.lang === 'en-IN') && 
        voice.name.includes('Google') &&
        (voice.name.toLowerCase().includes('female') || voice.name.includes('Female'))
      );
      
      // Then try any Indian female voice
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => 
          (voice.lang === 'hi-IN' || voice.lang === 'en-IN') && 
          (voice.name.toLowerCase().includes('female') || voice.name.includes('Female'))
        );
      }
      
      // Then try any Indian voice (if gender-specific voices aren't available)
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => 
          voice.lang === 'hi-IN' || voice.lang === 'en-IN'
        );
      }
    }
    
    // Try for any female voice
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.includes('Female') ||
        voice.name.includes('Samantha') ||  // Common female voice
        voice.name.includes('Zira') ||      // Microsoft female voice
        voice.name.includes('Karen') ||     // Australian female voice
        voice.name.includes('Moira') ||     // Irish female voice
        voice.name.includes('Tessa')        // South African female voice
      );
    }
    
    // Set the voice if found
    if (selectedVoice) {
      console.log("Selected voice:", selectedVoice.name);
      utterance.voice = selectedVoice;
    }
    
    // Adjust pitch and rate for more feminine and natural sound
    // Higher pitch for more feminine sound, slightly slower rate for clarity
    utterance.pitch = 1.4;     // Increased pitch for more feminine sound
    utterance.rate = 0.85;     // Slightly slower for more expressive speech
    utterance.volume = 1.0;    // Full volume
    
    // Speak the greeting
    window.speechSynthesis.speak(utterance);
    setGreeted(true);
  }, [greeted]);

  useEffect(() => {
    // Create function to handle voices being loaded
    const handleVoicesChanged = () => {
      setVoicesLoaded(true);
    };

    // Add event listener for voices loaded
    if (window.speechSynthesis) {
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    }

    // Check if voices are already available
    if (window.speechSynthesis && window.speechSynthesis.getVoices().length > 0) {
      setVoicesLoaded(true);
    }

    // Cleanup
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Automatically speak 2-3 seconds after page load when voices are loaded
  useEffect(() => {
    if (voicesLoaded) {
      // Set a timeout to automatically trigger the greeting after 2.5 seconds
      const autoGreetingTimer = setTimeout(() => {
        speakGreeting();
      }, 2500); // 2.5 seconds delay
      
      return () => {
        // Cleanup
        clearTimeout(autoGreetingTimer);
      };
    }
  }, [voicesLoaded, speakGreeting]);

  return null; // This component doesn't render anything visible
};

export default VoiceGreeting;