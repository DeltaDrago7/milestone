import { Link } from 'react-router-dom';

const ServicesCTA = () => {
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
            <section className=''>
                <div className="container flex flex-col items-center text-center">
                    <h2 className="text-center text-sec">
                        Try something really different right now.
                    </h2>

                    <p className="mt-4 mb-4 text-gray-400 text-center">
                        From expert contracting to seamless project management, we bring your vision to life with precision, quality, and integrity. Explore our services and discover how we can make your next project a success.
                    </p>

                    <div className="mt-6 grid lg:px-28 gap-6 md:gap-16 md:grid-cols-2 w-full">
                        <Link to="/contracting" className="w-full">
                            <button className="w-full py-3 rounded-full bg-sec text-center">
                                <p className='text-xl text-pri font-semibold text-center'>Contracting</p>
                            </button>
                        </Link>
                        <Link to="/project-management" className="w-full">
                            <button className="w-full py-3 rounded-full bg-sec text-center">
                                <p className='text-xl text-pri font-semibold text-center'>Project Management</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesCTA;
