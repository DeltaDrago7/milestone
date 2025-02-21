import { Link } from 'react-router-dom';
const ServicesHeader = ({ title, subtitle, description, bgImageUrl, button1Text, button2Text }) => {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImageUrl})` }}>
            <div className="relative">
            <div className="absolute inset-0 bg-pri/75 sm:bg-transparent sm:from-pri/95 sm:to-pri/40 sm:bg-gradient-to-r"></div>
                    
                <section>  {/* Set height for the header section */}
                    
                    <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:px-8">
                        <div className="max-w-xl text-center sm:text-left">
                            <h1 className="text-white">
                                {title}
                                <strong className="block font-extrabold text-sec"> {subtitle} </strong>
                            </h1>

                            <p className="mt-4 text-center sm:text-left text-white">
                                {description}
                            </p>

                            <div className="mt-6 flex flex-col sm:justify-start sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center">
                                    <Link to="/contact-us">
                                        <button className="bg-sec px-12 py-3 rounded-full text-center">
                                            <p className='text-center text-lg font-semibold text-pri'>{button1Text}</p>
                                        </button>
                                    </Link>
                                    <Link to="/about-us">
                                        <button className="border-2 border-white px-12 py-3 rounded-full  text-center">
                                            <p className='text-center text-lg text-white font-semibold'>{button2Text}</p>
                                        </button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesHeader;
