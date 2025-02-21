const WhyUs = () => {

    const features = [
        {
            title: "Expertise in cost-saving strategies like value engineering."
        },
        {
            title: "Proven track record in managing complex projects from design to delivery."
        },
        {
            title: "Commitment to maintaining quality and controlling project risks"
        },
        {
            title: "Strong focus on collaboration with all stakeholders."
        },
    ]
    return (
        <div className="relative bg-white">
            {/* Gray background section */}
            <div className="absolute inset-0 w-full h-full lg:w-2/3 bg-gray-100 dark:bg-gray-800"></div>

            {/* Content Section */}
            <div className="relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 py-16 md:px-24 lg:px-8 lg:py-20">
                <h2 className="text-right">
                    Why choose milestone
                </h2>

                <div className="mt-10 lg:flex lg:items-center">
                    <div className="mt-8 lg:px-10 lg:mt-0">
                        <p className="mt-6 text-justify w-full">
                        Milestone is your trusted partner in project management. We bring years of experience, a proven track record, and an unwavering commitment to quality. Our dedicated team works tirelessly to ensure that every project is completed efficiently, on time, and within budget, with the highest levels of collaboration and transparency.
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
                    <img
                        className="mt-6 lg:mt-0 object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Customer"
                    />

                    
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
