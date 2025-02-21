import React from "react";

const Benefits = () => {
  const features = [
    {
      title: "Unmatched Expertise",
      description: "With over a decade of experience, we bring a wealth of knowledge and skill to every project, ensuring exceptional results.",
      icon: (
<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.006 32.005" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M28.948,10.992l3.058-1.144L16.203,4.937L0,10.338l6.075,2.025v9.078l0.124,0.207c0.097,0.162,2.467,3.965,10.073,3.965 c7.73,0,9.205-3.956,9.263-4.125l0.048-0.139V12.25l1.624-0.607v11.354h-0.959v4.071h3.66v-4.071H28.95V10.992H28.948z M23.842,21.014c-0.287,0.555-1.828,2.856-7.57,2.856c-5.717,0-7.937-2.289-8.456-2.947v-7.98l8.413,2.805l7.613-2.846V21.014z M16.195,13.9L5.507,10.338l10.715-3.571l10.406,3.234L16.195,13.9z"></path> </g> </g></svg>      ),
    },
    {
      title: "Personalized Solutions",
      description: "We take the time to understand your unique vision, tailoring every aspect of the design and execution to meet your specific needs.",
      icon: (
        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
        </svg>
      ),
    },
    {
      title: "Timely Delivery",
      description: "Our efficient project management ensures that your project is completed on schedule, with no compromises on quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
      ),
    },
    {
      title: "End-to-End Service",
      description: "From concept development to final delivery, we handle every phase of the project, providing a seamless and stress-free experience.",
      icon: (
        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.9917,14.502a.99974.99974,0,0,0-1,1v1.78229a7.97243,7.97243,0,0,1-2-5.28229,7.29085,7.29085,0,0,1,.05273-.87988.99992.99992,0,1,0-1.98535-.24023A9.17334,9.17334,0,0,0,1.9917,12.002a9.96434,9.96434,0,0,0,2.41687,6.5H2.9917a1,1,0,1,0,0,2h4a.98173.98173,0,0,0,.79413-.42181c.01166-.01538.02655-.0268.03741-.043.00666-.00995.00684-.02173.01306-.03186a.96576.96576,0,0,0,.106-.2583.95234.95234,0,0,0,.03143-.15589c.00287-.03088.018-.05749.018-.08911v-4A.99974.99974,0,0,0,6.9917,14.502Zm1.5-8.5H6.70923a7.9737,7.9737,0,0,1,5.28247-2,7.07475,7.07475,0,0,1,.87939.05274,1.00046,1.00046,0,0,0,.24121-1.98633A9.22717,9.22717,0,0,0,11.9917,2.002a9.96421,9.96421,0,0,0-6.5,2.41669V3.002a1,1,0,0,0-2,0v4a.95355.95355,0,0,0,.03931.19471l.00024.00122a.96893.96893,0,0,0,.14117.345l.01142.0169a.97291.97291,0,0,0,.2445.24634c.01093.008.01636.02026.02771.02789.01429.00946.03046.01246.04505.02112a.95817.95817,0,0,0,.17932.084.98784.98784,0,0,0,.26184.05285c.01733.00092.03192.01.04944.01h4a1,1,0,0,0,0-2ZM20.45215,16.80609a.96745.96745,0,0,0-.14124-.34509l-.01129-.01679a.97315.97315,0,0,0-.24469-.24646c-.01092-.00793-.01629-.02026-.02759-.02783-.0108-.00714-.02362-.00738-.0346-.0141a1.15354,1.15354,0,0,0-.40973-.13543c-.03162-.003-.0589-.01844-.09131-.01844h-4a1,1,0,0,0,0,2h1.78241a7.97338,7.97338,0,0,1-5.28241,2,7.07446,7.07446,0,0,1-.8794-.05371,1.00046,1.00046,0,0,0-.24121,1.98633,9.36538,9.36538,0,0,0,1.12061.06738,9.96425,9.96425,0,0,0,6.5-2.41668V21.002a1,1,0,0,0,2,0v-4a.95345.95345,0,0,0-.03931-.1947ZM20.9917,5.502a1,1,0,0,0,0-2h-4a.9519.9519,0,0,0-.19183.0387l-.00666.00134a.96837.96837,0,0,0-.3407.13953l-.01959.01324a.974.974,0,0,0-.2453.24378c-.00787.0108-.02.01611-.02746.02728-.00714.01074-.00739.02344-.0141.03436a1.14563,1.14563,0,0,0-.13636.41266c-.00286.03089-.018.0575-.018.08911v4a1,1,0,1,0,2,0V6.71912a7.97527,7.97527,0,0,1,2,5.28283,7.289,7.289,0,0,1-.05274.87989,1.00106,1.00106,0,0,0,.87208,1.11328,1.02916,1.02916,0,0,0,.12207.00683.99971.99971,0,0,0,.99121-.87988A9.17363,9.17363,0,0,0,21.9917,12.002a9.96411,9.96411,0,0,0-2.417-6.5Z"></path></g></svg> 
      ),
    },
    {
        title: "Strong Partnerships",
        description: "We believe in building lasting relationships with clients, architects, and consultants, fostering collaboration that ensures the success of every project.",
        icon: (

          <svg fill="#000000" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></g></svg>


          ),
      },
    {
      title: "Sustainable Practices",
      description: "We prioritize sustainability, using eco-friendly materials and practices that reduce environmental impact while enhancing the longevity of your space.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.44893 17.009C-0.246384 7.83762 7.34051 0.686125 19.5546 3.61245C20.416 3.81881 21.0081 4.60984 20.965 5.49452C20.5862 13.288 17.0341 17.7048 6.13252 17.9857C5.43022 18.0038 4.76908 17.6344 4.44893 17.009Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.99999 21C5.50005 15.5 6 12.5 12 9.99997" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      ),
    },
    
  ];

  return (
    <div className="bg-pri">
      <section className=" text-center">


        {/* Heading */}
        <div  className="max-w-xl mb-10 sm:mx-auto relative z-10">
          <h2 className="text-sec">
            The Benefits of Choosing Us
          </h2>
        </div>

        {/* Benefits Copy */}
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {features.map((feature, index) => (
            <div className="px-12 text-center sm:px-0" key={index}>
              <div className="flex items-center justify-center mx-auto my-4 rounded-full p-3 bg-sec w-16 sm:h-16">
                {feature.icon}
              </div>
              <h3 className="text-white">
                {feature.title}
              </h3>
              <div className="my-2 "><p className="text-gray-400 text-center">{feature.description}</p></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
