import { Link } from 'react-router-dom';
const Header = ({ description, title, bgImageUrl, benefits }) => {
    const containerStyle = {
        width: '100%',
        height: '100%',
        backgroundColor:  "#1C1C1C",
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      };


    return (
        <div style={containerStyle}>
            <section>
                <div className="flex flex-col py-10 space-y-6 lg:py-16 lg:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-sec">
                                {title}
                            </h1>
                            <p className='mt-4 text-gray-400'>{description}</p>

                            <div className="mt-8 space-y-5">

                                {benefits.map(benefit => (
                                    <p className="flex items-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-2 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="mx-2"><p className='text-white text-xl'>{benefit}</p></span>
                                    </p>
                                ))}
                                

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={bgImageUrl} alt="glasses photo" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
