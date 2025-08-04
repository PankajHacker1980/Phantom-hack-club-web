import { useState } from 'react';

const Contact = ({ expanded = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-container">
      {!expanded && (
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">
          Get In Touch
        </h2>
      )}
      
      <div className={expanded ? "" : "max-w-2xl mx-auto"}>
        {formSubmitted ? (
          <div className="bg-[#00ffff]/20 border border-[#00ffff] p-6 rounded-lg text-center animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#00ffff] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-[#00ffff]">Thank You!</h3>
            <p className="mb-4">Your message has been sent. We'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-[#00ffff] focus:ring focus:ring-[#00ffff]/20 focus:outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-[#00ffff] focus:ring focus:ring-[#00ffff]/20 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-[#00ffff] focus:ring focus:ring-[#00ffff]/20 focus:outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-[#00ffff] focus:ring focus:ring-[#00ffff]/20 focus:outline-none transition-all resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-lg hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
              >
                Send Message to Pankaj
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;