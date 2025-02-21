import vid from '../assets/My Movie 1 (1).mp4';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <main className="relative min-h-screen"> 
            <video 
                className="absolute inset-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <section className="text-white overflow-hidden">
                
                
                {/* Video Background */}
                

                {/* Subtle Overlay */}
                

                {/* Content */}
                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex items-center justify-center" style={{ height: '100%' }}>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        
                        {/* Left Side: Company Info */}
                        <div className="w-full md:w-1/2 mb-12 md:mr-20 md:mb-0 flex flex-col items-center sm:items-start sm:justify-normal justify-center">
                            <h1 className="mb-6 leading-tight sm:text-left text-center">
                                Precision.<br />Quality.<br />Excellence.<br /><span className='text-sec'>Every Time.</span>
                            </h1>
                            <p className="text-xl mb-8 text-gray-300 text-center sm:text-left">
                                Transforming spaces with superior craftsmanship, efficiency, and integrity.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center">
                                <Link to="/contact-us">
                                    <button className="bg-sec px-12 py-3 rounded-full">
                                        <p className='text-center text-lg font-semibold text-pri'>Contact Us</p>
                                    </button>
                                </Link>
                                <Link to="/about-us">
                                    <button className="border-2 border-white px-12 py-3 rounded-full text-center">
                                        <p className='text-center text-lg text-white font-semibold'>Learn More</p>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        
                        {/* Right Side: Features */}
                        <div className="w-full md:w-1/2 md:pl-12">
                            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                                <h2 className="text-2xl font-semibold mb-6">Why Milestone?</h2>
                                <ul className="space-y-4"> 

                                    <li className="text-lg">
                                        <div className='flex flex-row items-center'>
                                            <svg className="w-8 h-8 mr-2" data-slot="icon" fill="#85BB65" stroke-width="1.5" stroke="#6cfe0f" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
                                            </svg>
                                            Cost-effective
                                        </div>
                                    </li>

                                    <li className="text-lg">
                                        <div className='flex flex-row items-center'>
                                            <svg className="w-8 h-8 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="#f9cb0a " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                                            </svg>
                                            High Quality
                                        </div>
                                    </li>

                                    <li className="text-lg">
                                        <div className='flex flex-row items-center'>
                                            <svg className="w-8 h-8 mr-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="#00C3FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                            </svg>
                                            Lightning-quick Results
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        </main>
    );
};

export default Hero;
