import { useState, useEffect } from "react";
import residentialImage from '../assets/residential1.jpg';
import fitoutImage from '../assets/fitout1.jpg';
import banking from '../assets/banking.jpg';
import retail from '../assets/retail.jpg';
import fb from '../assets/f&b.jpg';
import { Link } from "react-router-dom"; // Import Link for navigation

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    const slides = [
      {
        id: 1,
        title: 'F&B',
        imgSrc: fb,  // Using imported image
        link: '/f&b',
        description: "We build high-quality restaurants, cafes, and commercial kitchens, ensuring efficient layouts, compliance with hygiene standards, and a great customer experience.",
      },
      {
        id: 2,
        title: 'Retail',
        imgSrc: retail,  // Using imported image
        link: '/retail',
        description: "We create engaging, customer-centric retail spaces that enhance shopping experiences, optimize layouts, and reflect your brand’s identity",
      },
      {
        id: 3,
        title: 'Commercial & Offices',
        imgSrc: fitoutImage,  // Using imported image
        link: '/commercial-and-offices',
        description: "We create modern, functional workspaces that enhance productivity, employee comfort, and brand identity, tailored to your business needs.",
      },
      {
        id: 4,
        title: 'Banking',
        imgSrc: banking,  // Using imported image
        link: '/banking',
        description: "We construct secure, sophisticated banking spaces with advanced safety features, seamless customer flow, and a professional atmosphere.",
      },
      {
        id: 5,
        title: 'Residential',
        imgSrc: residentialImage,  // Using imported image
        link: '/residential',
        description: "We build high-quality homes and apartments with superior craftsmanship, smart designs, and lasting comfort, tailored to modern living",
      }
    ];

  return (
    <div className="flex w-full items-center justify-center relative">


      <div className="relative w-full max-w-6xl">
        <div className="absolute top-0 left-0 right-0 h-2 bg-slate-500/20 rounded-full overflow-hidden z-20">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sec to-[#ffeca5]"
            style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        <button onClick={prevSlide} className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2  w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-20 text-white touch-manipulation bg-black bg-opacity-50 backdrop-blur-md">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
        </button>

        <button onClick={nextSlide} className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-20 text-white touch-manipulation bg-black bg-opacity-50 backdrop-blur-md">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
               <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
         </button>

        <div className="relative h-[400px] sm:h-[400px] md:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <Link to={slide.link}>
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index === (currentIndex - 1 + slides.length) % slides.length
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="w-full h-full p-4 sm:p-8">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                    
                      <img
                        src={slide.imgSrc}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110"
                      />
              
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/25"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} mix-blend-overlay`}></div>
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                        {slide.title}
                      </h3>
              
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-black/40" : "bg-black/20"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
