import { Link } from 'react-router-dom';

const Header = ({title, bg, loc, size, time, description,  parent}) => {
    const containerStyle = {
        width: '100%',
        height: '100%',
        backgroundColor:  "#1C1C1C",
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      };

      const imgPath = `/Projects/${parent}/${title}/1.jpg`;
  
      return (
        <div className="bg-cover bg-center bg-no-repeat" style={{  backgroundImage: `url("${imgPath}")`  }}>
            <div className="relative">
            <div className="absolute inset-0 bg-pri/75 sm:bg-transparent sm:from-pri/95 sm:to-pri/70 sm:bg-gradient-to-r"></div>
                
            <section>  {/* Set height for the header section */}
                
                {/*
                {parent != "residential" ?
                (<div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:gap-20 lg:flex-row lg:justify-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                    <div className="flex items-center">
                        <img 
                            src={`/Projects/Logos/${title}.png`} 
                            alt="Logo" 
                            className="h-24 w-24 rounded-full object-cover mr-4"
                        />
                        <h1 className="text-left text-sec">{title}</h1>
                    </div>


                        <p className=" mt-4 text-justify text-xl sm:text-justify text-gray-100">
                            {description}
                        </p>
                        <Link to={`/${parent}`}>
                            <p className="text-sec flex justify-left items-center space-x-1">
                                
                                <span>
                                    <svg className="h-6 w-6 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
                                    </svg>
                                </span>
                                Back
                            </p>
                        </Link>

                    </div>
                    <div className="mt-8 lg-mt-0 w-full md:w-1/2 md:pl-12">
                            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                                <ul className="space-y-4"> 

                                    <li className="text-lg">
                                        < p className="text-white">Location</p>
                                        <div className='flex flex-row items-center'>
                                            <h3 className="text-sec">{loc}</h3>
                                        </div>
                                    </li>

                                    <li className="text-lg">
                                        <div className='flex flex-row items-center'>
                                            < p className="text-white">Area</p>
                                        </div>
                                        <h3 className="text-sec">{size}m<sup>2</sup></h3>
                                    </li>

                                    <li className="text-lg">
                                    < p className="text-white">Time</p>
                                        <div className='flex flex-row items-center'>
                   
                                            <h3 className="text-sec">{time} weeks</h3>
                                        </div>
                                        
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                </div>) :
                (<div className="relative mx-auto max-w-screen-xl px-4 py-44 sm:px-6 lg:flex lg:items-start lg:gap-20 lg:flex-row lg:justify-start lg:px-8">
                    <div className="max-w-xl text-left"> 
                        <h1 className="text-left text-sec">{title}</h1>
                
                        <Link to={`/${parent}`}>
                            <p className="text-sec flex justify-start items-center space-x-1 text-left">
                                <span>
                                    <svg className="h-6 w-6 mr-2" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
                                    </svg>
                                </span>
                                Back
                            </p>
                        </Link>
                    </div>
                </div>
                )}*/}

                <div className="relative w-full mx-auto  px-4 py-44 sm:px-6 lg:flex lg:items-start lg:gap-20 lg:flex-row justify-start lg:px-8">
                    {parent != "residential" ?
                    (<div className=" flex justify-stretch items-center">
                        <img 
                            src={`/Projects/Logos/${title}.png`} 
                            alt="Logo" 
                            className="h-24 w-24 rounded-full object-cover mr-4"
                        />
                        <div className='w-full'>
                            <h1 className="text-left text-white">{title}</h1>
                            
                            <Link to={`/${parent}`}>
                                <p className="text-sec flex justify-start items-center space-x-1 text-left">
                                    <span>
                                        <svg className="h-6 w-6 mr-2" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
                                        </svg>
                                    </span>
                                    Back
                                </p>
                            </Link>
                        </div>
                        
                        
                    </div>) : (<div>
                            <h1 className="text-left text-sec">{title}</h1>
                            <Link to={`/${parent}`}>
                                <p className="text-sec flex justify-start items-center space-x-1 text-left">
                                    <span>
                                        <svg className="h-6 w-6 mr-2" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
                                        </svg>
                                    </span>
                                    Back
                                </p>
                            </Link>
                        </div>)}
                </div>

            </section>
            </div>
        </div>

      
    );
  };
  
  export default Header;
  