import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Events = ({ limit = 0, showAll = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Sample event data - in a real application, this would come from an API or database
  const events = [
    {
      id: 1,
      title: "Fall Hackathon 2025",
      date: "2025-09-15T09:00:00",
      description: "A 48-hour coding marathon focused on building solutions for climate tech innovations.",
      location: "Innovation Hub, Main Campus",
      image: "/images/pic7.jpg"
    },
    {
      id: 2,
      title: "Web3 Workshop Series",
      date: "2025-08-20T18:00:00",
      description: "A four-part workshop series exploring blockchain technology and Web3 development.",
      location: "Virtual Event",
      image: "/images/pic6.png"
    },
    {
      id: 3,
      title: "AI Ethics Panel Discussion",
      date: "2025-10-05T14:00:00",
      description: "Expert panel discussing the ethical implications of artificial intelligence in today's world.",
      location: "Auditorium A, Science Building",
      image: "/images/pic9.jpg"
    },
    {
      id: 4,
      title: "Game Development Jam",
      date: "2025-11-12T10:00:00",
      description: "A weekend-long game development marathon. Create a game from scratch in 48 hours!",
      location: "Computer Lab 3, Tech Center",
      image: "/images/pic10.png"
    }
  ];

  // Filter events if a limit is provided
  const displayEvents = limit > 0 ? events.slice(0, limit) : events;

  // Set up countdown timer for the next event
  useEffect(() => {
    const targetDate = new Date(events[0].date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Helper to format date
  const formatEventDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="events-container">
      {/* Countdown for first upcoming event */}
      <div className="mb-12 bg-black/50 p-6 rounded-xl border border-[#00ffff]/30 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-center mb-4">Next Event: {events[0].title}</h3>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-[#00ffff]">{timeLeft.days}</div>
            <div className="text-sm text-gray-400">Days</div>
          </div>
          <div className="text-2xl">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-[#00ffff]">{timeLeft.hours}</div>
            <div className="text-sm text-gray-400">Hours</div>
          </div>
          <div className="text-2xl">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-[#00ffff]">{timeLeft.minutes}</div>
            <div className="text-sm text-gray-400">Minutes</div>
          </div>
          <div className="text-2xl">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-[#00ffff]">{timeLeft.seconds}</div>
            <div className="text-sm text-gray-400">Seconds</div>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-4">{events[0].description}</p>
          <p className="font-bold">
            <span className="text-[#00ffff]">When:</span> {formatEventDate(events[0].date)}
          </p>
          <p className="font-bold">
            <span className="text-[#00ffff]">Where:</span> {events[0].location}
          </p>
        </div>
      </div>
      
      {/* List of upcoming events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayEvents.map((event, index) => (
          <div 
            key={event.id}
            className="bg-black/50 rounded-xl border border-[#00ffff]/30 overflow-hidden hover:border-[#00ffff] transition-all duration-300 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ffff] transition-colors">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ffff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatEventDate(event.date)}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00ffff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show "See All Events" button only on homepage */}
      {!showAll && limit > 0 && events.length > limit && (
        <div className="text-center mt-10">
          <Link 
            to="/events" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black font-bold rounded-full hover:from-[#00ccff] hover:to-[#0055ff] transition-all duration-300 shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff]"
          >
            See All Events
          </Link>
        </div>
      )}
    </div>
  );
};

export default Events;