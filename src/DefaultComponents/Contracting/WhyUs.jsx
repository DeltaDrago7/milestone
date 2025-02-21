const WhyUs = () => {

    const features = [
        {
            title: "Experienced in handling complex residential, commercial, and retail fit-outs"
        },
        {
            title: "Proven track record of successful projects, on time and within budget"
        },
        {
            title: "Strong relationships with trusted partners and suppliers for seamless project delivery"
        },
        {
            title: "A dedicated team committed to your project’s success"
        },
    ]
    return (
        <div className="relative bg-gray-100">
            {/* Gray background section */}
            <div className="absolute inset-0 w-full h-full lg:w-1/3 bg-white dark:bg-gray-800"></div>

            {/* Content Section */}
            <div className="relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 py-16 md:px-24 lg:px-8 lg:py-20">
                <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Why choose milestone
                </h2>

                <div className="mt-10 lg:flex lg:items-center">
                    <img
                        className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Customer"
                    />

                    <div className="mt-8 lg:px-10 lg:mt-0">
                        <p className="mt-6 text-justify w-full">
                            Since our founding, Milestone has built a legacy of excellence. We approach every project with professionalism and meticulous attention to detail, which has earned us a distinguished place in the industry. Whether you are planning a small renovation or a large-scale fit-out, Milestone is dedicated to bringing your vision to life.
                            <br /><br />
                            At Milestone, we believe that success is the result of a collective effort. By working closely with our clients, partners, and subcontractors, we ensure that every project is a shared achievement, driven by collaboration and mutual respect.
                        </p>
                        <ul className=" mt-8 grid gap-3 md:grid-cols-2 flex-shrink-0">
                            {features.map((feature, index) => (
                                <li className="flex items-center space-x-2 flex-shrink-0">
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className=" flex-shrink-0 w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                    </svg>
                                    <span>{feature.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
