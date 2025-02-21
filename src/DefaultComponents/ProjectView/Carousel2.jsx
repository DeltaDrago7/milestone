import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Carousel2 = ({pics, loc, size, time, description,  parent, title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pics.length - 1 : prevIndex - 1
      );
    };
     

  return (
    <section className="">
          <div className={parent == "residential" ? "flex w-full items-center justify-center relative" : "gap-16 items-center lg:grid lg:grid-cols-3"}>
          <div className="lg:col-span-2 relative w-full ">


            <button onClick={prevSlide} className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2  w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-20 text-white touch-manipulation bg-black bg-opacity-50 backdrop-blur-md">
                <svg data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
            </button>

            <button onClick={nextSlide} className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-20 text-white touch-manipulation bg-black bg-opacity-50 backdrop-blur-md">
                <svg data-slot="icon" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                </svg>
              </button>

            <div className="relative rounded-md h-[400px] sm:h-[500px] md:h-[500px] overflow-hidden">
              {pics.map((pic, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
                      index === currentIndex
                        ? "opacity-100 translate-x-0"
                        : index === (currentIndex - 1 + pics.length) % pics.length
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                    }`}
                  >
                    <div className="w-full h-full pb-4 md:pb-8 ">
                      <div className="w-full h-full rounded-md overflow-hidden relative group">
                        
                          <img
                            src={pic}
                            className="absolute inset-0 w-full h-full object-cover "
                          />
                  
                        
                    

                      </div>
                    </div>
                  </div>
              ))}
            </div>

            <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
              {pics.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-black/60" : "bg-black/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
            {parent !== "residential" ? (
              <div className="h-full items-start lg:col-span-1">
                
                <div className=" mt-8 lg:mt-2 w-full">
                  <h2 className="mb-2 ">{title}</h2>
                  <span class="inline-block mb-3 w-24 h-1 bg-black rounded-full"></span>
                  <p className="">{description}</p>
                  <div>
                    <div className="mt-4 gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-2">

                      <div className="mt-2 flex flex-row items-center">
                        <svg className="h-14 w-14 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                        </svg>
                        <div>
                          < p className="text-xl text-gray-900">Size</p>
                          <p className="text-gray-900">{size}m<sup>2</sup></p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-row items-center">
                        <svg className="h-14 w-14 mr-2 " data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                        <div>
                          < p className="text-xl text-gray-900">Period</p>
                          <p className="text-gray-900">{time} weeks</p>
                        </div>
                      </div>
                      <div className="mt-2 col-span-2 flex flex-row items-center">
                        <svg className="h-14 w-14 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
                        <div>
                          < p className="text-xl text-gray-900">Location</p>
                          <p className="text-gray-900">{loc}</p>
                          </div>
                        </div>
                    </div>

                    </div>
                    
                            
                            
                </div>
                
              </div>
            ) : (<div></div>)}

            
        </div>
    </section>
    
  );
};

export default Carousel2;

{/*
  <div className="bg-pri backdrop-filter backdrop-blur-lg rounded-xl p-8 ">
                                <ul className="space-y-4"> 

                                    <li className="text-lg">
                                        < p className="text-gray-400">Location</p>
                                        <div className='flex flex-row items-center'>
                                            <h3 className="text-white">{loc}</h3>
                                        </div>
                                    </li>

                                    <li className="text-lg">
                                        <div className='flex flex-row items-center'>
                                            < p className="text-gray-400">Area</p>
                                        </div>
                                        <h3 className="text-white">{size}m<sup>2</sup></h3>
                                    </li>

                                    <li className="text-lg">
                                    < p className="text-gray-400">Time</p>
                                        <div className='flex flex-row items-center'>
                   
                                            <h3 className="text-white">{time} weeks</h3>
                                        </div>
                                        
                                    </li>
                                    
                                </ul>
                                <hr className="h-px my-6 border-none bg-gray-700"></hr>
                                <p className="text-gray-400">{description}</p>
                            </div>
  */}
