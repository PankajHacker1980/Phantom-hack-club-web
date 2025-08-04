import { useState, useRef, useEffect } from 'react';

const PhantomBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! I am PhantomBot. How can I help you learn about Phantom Hack Club?' }
  ]);
  const chatEndRef = useRef(null);

  // Bot responses based on keywords
  const botResponses = {
    'hello': 'Hello there! How can I assist you today?',
    'hi': 'Hi! How can PhantomBot help you?',
    'about': 'Phantom Hack Club is a community of coders, hackers, and tech enthusiasts who collaborate on exciting projects and share knowledge!',
    'join': 'To join Phantom Hack Club, fill out the contact form on our website or email us at phantom@hackclub.com',
    'event': 'Our next hackathon is coming up soon! Check out the Events section for details and countdown.',
    'project': 'We work on various coding projects including web development, game design, AI, and hardware hacking. Check out our Projects section!',
    'contact': 'You can reach us through the contact form on our website or email phantom@hackclub.com',
    'help': 'I can answer questions about Phantom Hack Club, our events, how to join, or about our projects. Just ask away!',
    'thank': 'You\'re welcome! Anything else you\'d like to know about Phantom Hack Club?',
    'bye': 'Goodbye! Feel free to return if you have more questions about Phantom Hack Club.'
  };

  // Auto-scroll chat to bottom when new messages appear
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = { sender: 'user', text: message };
    setChatHistory([...chatHistory, userMessage]);
    
    // Generate bot response
    setTimeout(() => {
      const botMessage = { sender: 'bot', text: getBotResponse(message) };
      setChatHistory(prev => [...prev, botMessage]);
    }, 500);
    
    setMessage('');
  };
  
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (input.includes(keyword)) {
        return response;
      }
    }
    
    // Default responses if no keyword matches
    const defaultResponses = [
      "Interesting question! Let me connect you with a Phantom Hack Club member who can help with that.",
      "I'm still learning about that. You can find more information on our website or contact us directly.",
      "That's a great question about Phantom Hack Club! Check out our About section for more details.",
      "I'm not sure I understood. Could you ask about our events, projects, or how to join?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <>
      {/* Bot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-8 bottom-24 z-50 p-3 rounded-full transition-all duration-300 ${
          isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-black/70 border border-[#00ffff]/30 hover:shadow-glow'
        }`}
        aria-label="Toggle Phantom Bot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Bot chat window */}
      {isOpen && (
        <div className="fixed right-8 bottom-36 w-80 sm:w-96 bg-black/90 border border-[#00ffff]/30 rounded-lg shadow-glow overflow-hidden z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900/60 to-cyan-900/60 p-3 flex items-center justify-between border-b border-[#00ffff]/30">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-[#00ffff] animate-pulse-slow"></div>
              <h3 className="text-[#00ffff] font-audiowide text-sm">PhantomBot</h3>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600/30 text-white rounded-tr-none' 
                      : 'bg-gray-800 text-[#00ffff] rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-[#00ffff]/30 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about Phantom Hack Club..."
              className="flex-1 bg-gray-800 border border-[#00ffff]/20 rounded-l-lg p-2 text-white focus:outline-none focus:border-[#00ffff]/50"
            />
            <button 
              type="submit"
              className="bg-[#00ffff]/20 hover:bg-[#00ffff]/30 text-[#00ffff] p-2 rounded-r-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PhantomBot;