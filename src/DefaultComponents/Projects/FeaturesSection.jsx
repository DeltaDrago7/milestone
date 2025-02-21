import React from "react";
const features = [
    {
      title: "MEP",
      description: "We ensure efficient mechanical, electrical, and plumbing (MEP) systems, optimizing functionality, safety, and sustainability in every project.",
      icon: (
          <svg className="h-40 w-40" data-slot="icon" fill="none" stroke-width="1.5" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
          </svg>
      ),
    },
    {
      title: "Civil",
      description: "From structural modifications to foundational work, we handle all civil construction needs, ensuring durability, precision, and compliance with industry standards.",
      icon: (
        <svg className="h-40 w-40" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56.835 55.654" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M55.119,23.151h-0.435c-0.032-0.035-0.062-0.07-0.101-0.104l-6.111-5.672v-8.25c0-0.054-0.006-0.107-0.014-0.157 c0-0.005,0-0.005,0-0.005c0.004-0.067,0.004-0.138-0.01-0.206l-0.305-1.509c-0.1-0.497-0.779-0.78-1.516-0.632 c0,0-7.451,1.34-13.896,2.509V7.235c0-0.948-0.766-1.714-1.715-1.714h-5.75l-3.761-5.149l-0.021-0.035 c-0.226-0.305-0.624-0.413-0.965-0.278c-0.053,0.019-0.104,0.045-0.151,0.077c-0.014,0.003-0.023,0.012-0.037,0.021 c-0.081,0.064-0.147,0.134-0.202,0.216l-3.76,5.148h-5.749c-0.946,0-1.716,0.766-1.716,1.715v6.812 c-4.254,0.944-7.74,1.723-7.74,1.723C0.43,15.923-0.09,16.443,0.013,16.94l0.305,1.509c0.098,0.497,0.776,0.78,1.516,0.633 c0,0,3.118-0.56,7.071-1.271v3.081c0,0.948,0.77,1.719,1.716,1.719h3.401v0.229c0-0.076,0.009-0.155,0.036-0.229h0.001 c-0.027,0.073-0.036,0.153-0.036,0.229v30.584c0,1.232,1.004,2.23,2.235,2.23h9.125c1.227,0,2.231-0.998,2.231-2.23V22.839v-0.229 h3.403c0.949,0,1.715-0.771,1.715-1.719v-7.729c5.244-1.16,11.419-2.535,13.68-3.041v7.258l-6.109,5.67 c-0.035,0.033-0.066,0.068-0.1,0.104h-0.435c-0.945,0-1.716,0.771-1.716,1.715v15.339c0,0.944,0.771,1.715,1.716,1.715h15.351 c0.944,0,1.715-0.771,1.715-1.715V24.866C56.835,23.922,56.063,23.151,55.119,23.151z M20.822,2.214l2.411,3.307h-4.828 L20.822,2.214z M20.821,37.031l-4.67-3.995l4.67-3.995l4.665,3.995L20.821,37.031z M20.822,39.232l4.669,4l-4.669,3.995 l-4.675-3.995L20.822,39.232z M15.883,22.61h9.873l-4.934,4.224L15.883,22.61z M15.699,24.655l3.832,3.285l-3.832,3.277V24.655z M15.699,34.854l3.832,3.277l-3.832,3.282V34.854z M15.699,45.045l3.832,3.282l-3.832,3.278V45.045z M25.383,53.983h-9.125 c-0.196,0-0.367-0.1-0.47-0.251l5.034-4.305l5.028,4.305C25.745,53.885,25.575,53.983,25.383,53.983z M25.938,51.605l-3.831-3.278 l3.831-3.282V51.605z M25.938,41.414l-3.831-3.282l3.831-3.277V41.414z M25.938,31.218l-3.831-3.277l3.831-3.285V31.218z M27.428,42.708c-0.004-0.007-0.007-0.014-0.014-0.021c0.009,0.01,0.013,0.019,0.018,0.025C27.431,42.71,27.43,42.709,27.428,42.708 z M27.428,32.511c-0.004-0.008-0.007-0.016-0.014-0.022c0.009,0.007,0.013,0.017,0.018,0.026 C27.431,32.513,27.43,32.512,27.428,32.511z M28.488,13.985c0,0.04-0.003,0.08-0.013,0.12c-0.054,0.273-0.297,0.479-0.587,0.479 h-8.941c-0.332,0-0.601-0.27-0.601-0.6V9.99c0-0.328,0.269-0.597,0.601-0.597h8.941c0.3,0,0.551,0.22,0.591,0.509 c0.006,0.03,0.009,0.056,0.009,0.089V13.985z M46.412,23.151h-3.08l3.08-2.852V23.151z M48.472,23.151v-2.856l3.084,2.856H48.472z"></path> </g></svg>
      ),
    },
    {
      title: "Furniture",
      description: "We furnish and fit out spaces with high-quality materials, and expert craftsmanship, delivering a refined and fully functional interior.",
      icon: (
          <svg className="h-40 w-40" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 6 7 C 4.355469 7 3 8.355469 3 10 L 3 12.1875 C 1.84375 12.605469 1 13.707031 1 15 L 1 26 L 3 26 L 3 24 L 29 24 L 29 26 L 31 26 L 31 15 C 31 13.707031 30.15625 12.605469 29 12.1875 L 29 10 C 29 8.355469 27.644531 7 26 7 Z M 6 9 L 26 9 C 26.554688 9 27 9.445313 27 10 L 27 12.1875 C 25.84375 12.605469 25 13.707031 25 15 L 25 17 L 7 17 L 7 15 C 7 13.707031 6.15625 12.605469 5 12.1875 L 5 10 C 5 9.445313 5.445313 9 6 9 Z M 4 14 C 4.554688 14 5 14.445313 5 15 L 5 19 L 27 19 L 27 15 C 27 14.445313 27.445313 14 28 14 C 28.554688 14 29 14.445313 29 15 L 29 22 L 3 22 L 3 15 C 3 14.445313 3.445313 14 4 14 Z"></path></g></svg>
      ),
    },
  ];
  

const FeaturesSection = () => {
  return (
    <div className="w-full py-12">
  <div className="mx-auto  text-center">
    <h2 className="">Features</h2>
  </div>
  <div className="mx-auto mt-8 grid w-full max-w-7xl gap-2  md:grid-cols-3 ">
    {features.map((feature, index) => (
      <div
        key={index}
        className="relative  bg-pri p-14 transition hover:shadow-lg"
      >
        <div className="flex flex-col items-center space-y-8">
          {feature.icon}
          <h3 className="text-3xl text-sec">{feature.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};



export default FeaturesSection;
