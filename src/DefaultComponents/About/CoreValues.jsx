const CoreValues = () => {

    const features = [
        {
          title: "Integrity ",
          description: "We build trust through honesty, transparency, and ethical practices in every project we undertake.",
          icon: (
            <svg className="shrink-0 mt-2 size-8  text-sec" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"></path>
            </svg>
          ),
        },
        {
          title: "Quality Excellence",
          description: "Our commitment to delivering superior craftsmanship ensures every detail is executed to perfection.",
          icon: (
            <svg className="shrink-0 mt-2 size-8 text-sec" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"></path>
            </svg>
          ),
        },
        {
          title: "Customer-Centricity",
          description: "We prioritize our clients’ visions, tailoring solutions to meet their unique needs and expectations.",
          icon: (
            <svg className="shrink-0 mt-2 size-8  text-sec" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
            </svg>
          ),
        },
        {
          title: "Innovation",
          description: "By embracing creativity and the latest advancements, we deliver cutting-edge solutions that redefine spaces.",
          icon: (
            <svg className="shrink-0 mt-2 size-8  text-sec" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
            </svg>
          ),
        },
        {
            title: "Sustainability",
            description: "We are dedicated to adopting environmentally conscious practices that promote sustainable development.",
            icon: (
                <svg className="shrink-0 mt-2 size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.44893 17.009C-0.246384 7.83762 7.34051 0.686125 19.5546 3.61245C20.416 3.81881 21.0081 4.60984 20.965 5.49452C20.5862 13.288 17.0341 17.7048 6.13252 17.9857C5.43022 18.0038 4.76908 17.6344 4.44893 17.009Z" stroke="#ffca05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.99999 21C5.50005 15.5 6 12.5 12 9.99997" stroke="#ffca05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            ),
        },
        {
            title: "Collaboration ",
            description: "We foster strong partnerships with owners, architects, engineers, and consultants to achieve shared goals.",
            icon: (
                <svg className="shrink-0 mt-2 size-8  text-sec" fill="#ffca05" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Business_1_Bold_16_"> <path d="M338.564,35.65c-11.882-11.913-31.328-11.913-43.195,0l-6.324,6.339c-11.882,11.913-11.882,31.405,0,43.302l0.505,0.505 c-9.509,6.14-23.917,15.527-39.811,26.245c-14.546-17.93-32.354-34.529-40.638-41.909c2.113-9.846-0.582-20.533-8.161-28.143 l-6.324-6.339c-11.882-11.913-31.328-11.913-43.195,0L8.912,178.511c-11.882,11.913-11.882,31.405,0,43.303l6.324,6.339 c9.233,9.248,22.983,11.224,34.253,6.094c5.91,8.314,20.916,29.093,39.964,53.179c-10.489,10.764-27.271,31.068-27.975,51.647 c-0.337,10.167,3.231,19.339,10.32,26.49c21.957,22.187,87.6,87.815,87.6,87.815l1.96,1.654c0.873,0.612,12.005,8.253,30.042,8.253 c14.868,0,34.437-5.328,56.762-23.917c4.655,3.384,7.671,5.497,8.33,5.941c2.205,1.363,17.67,10.489,34.85,10.489 c5.512,0,11.208-0.949,16.705-3.399c7.334-3.277,16.43-10.274,21.529-25.204c12.801-4.593,28.434-14.883,34.973-33.794 c14.715-3.583,30.364-13.827,35.815-33.671c14.102-1.945,30.302-9.738,36.151-30.578c4.364-15.618,0-29.032-6.844-39.337 c10.244-11.162,23.55-29.797,26.168-52.995c6.906-0.597,13.658-3.399,18.926-8.682l6.324-6.339 c11.882-11.913,11.882-31.405,0-43.303L338.564,35.65z M424.878,221.462c3.399,19.37-7.962,36.596-16.813,46.564l-82.302-77.356 l-10.213,7.273c-20.824,14.792-47.605,1.807-47.819,1.715l-8.835-4.456l-7.717,6.155c-0.245,0.199-24.928,19.645-58.094,22.601 c-2.664,0.245-4.946,0.322-6.921,0.322c-8.299,0-10.902-1.654-10.856-1.485c-0.75-2.71,2.404-13.153,13.429-26.49 c12.495-15.098,80.005-60.835,122.94-88.32L424.878,221.462z M119.066,323.302l-22.172,24.101 c-1.179-1.194-2.343-2.358-3.338-3.369c-1.164-1.179-1.546-2.174-1.485-3.92c0.245-7.671,8.559-19.523,16.874-28.695 C112.283,315.401,115.652,319.351,119.066,323.302z M164.099,414.776c-3.231-3.246-6.768-6.768-10.535-10.55l21.743-23.642 c3.782,3.399,7.534,6.707,11.254,9.922L164.099,414.776z M131.898,382.544c-4.548-4.548-9.034-9.065-13.368-13.398l21.146-22.999 c2.971,3.139,5.956,6.217,8.911,9.187c1.439,1.455,2.925,2.863,4.379,4.303L131.898,382.544z M189.349,432.584l20.748-22.417 c4.486,3.629,8.758,6.997,12.801,10.167C208.228,430.945,196.867,432.982,189.349,432.584z M407.024,320.883 c-2.036,7.273-8.667,8.713-13.367,8.774l-85.411-81.246l-21.115,22.187l83.91,79.806c-1.991,8.712-8.024,12.066-13.551,13.26 l-84.277-80.174l-21.115,22.187l82.915,78.872c-3.047,7.212-9.034,11.055-13.781,13.015l-83.022-78.979l-21.115,22.187 l82.608,78.597c-0.995,2.22-2.327,4.18-4.15,5.007c-5.528,2.542-17.103-1.608-22.325-4.716 c-0.551-0.398-56.823-39.75-102.973-86.008c-43.149-43.256-91.198-110.66-97.645-119.771L191.094,95.107 c8.023,7.289,21.85,20.503,33.288,34.299c-25.847,18.114-50.407,36.642-59.258,47.345c-8.942,10.81-28.48,38.311-16.981,60.146 c7.243,13.781,23.244,19.676,47.651,17.517c30.762-2.725,55.215-16.154,67.005-23.856c12.495,4.272,36.121,9.463,59.38-1.271 l81.353,76.453C406.458,309.812,408.678,315.003,407.024,320.883z"></path> </g> </g></svg>

            ),
        },
        
      ];


    return(
        <div className="bg-pri">
            <section>       
                <div className="max-w-xl mb-10 sm:mx-auto relative z-10">
                <h2 className="text-center text-sec">
                    Our Core Values
                </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                    {features.map((feature, index) => (
                        <div className="flex items-center gap-x-5 sm:gap-x-8">
                            {feature.icon}
                            <div className="grow">
                                <h3 className="text-sec">
                                    {feature.title}
                                </h3>
                                <p className="mt-1 text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>    
            </section>
        </div>
        

        
    );
}

export default CoreValues