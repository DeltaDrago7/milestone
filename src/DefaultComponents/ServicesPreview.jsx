import pic from '../assets/fitout1.jpg';
import { Link } from 'react-router-dom';


const ServicesPreview = () => {
  return (
    <div className="relative" style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>

      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Main content */}
      <section className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-white mb-6">Our Services</h2>
            <p className="text-white text-center mb-12">
              At Milestone, we offer expert project management and contracting services, ensuring every project is executed with precision, efficiency, and excellence.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            {[
              {
                page: "/project-management",
                title: "Project Management",
                description:
                  "We oversee every stage of your project, from design review to final handover, ensuring it is completed on time, within budget, and to the highest standards.",
              },
              {
                page: "/contracting",
                title: "Contracting Services",
                description:
                  "We specialize in high-quality contracting services for residential, commercial, and retail fit-out projects, delivering exceptional results with efficiency and reliability.",
              },
            ].map((service, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                <div className="text-center bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h3 className="text-white mb-4">{service.title}</h3>
                  <p className="text-justify text-white mb-4">{service.description}</p>
                    <Link to={service.page} >
                        <button className="px-12 py-3 rounded-full bg-sec text-center">
                            <p className='text-lg text-pri font-semibold'>Learn More</p>
                        </button>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPreview;
