import React from "react";

const MissionVision = () => {
    const features = [
        {title: "Mission", text: "At Milestone, our mission is to deliver high-quality finishing with precision, efficiency, and sustainability. Through expert craftsmanship and strong partnerships, we create durable, cost-effective spaces that stand the test of time."},
        {title: "Vision", text: "Our vision is to be a global leader in high-quality finishing and fit-out solutions. Through innovation, sustainability, and expert craftsmanship, we aim to set new industry standards and create lasting partnerships that transform spaces worldwide."}
    ];
    return (
        <section>
            <div className="max-w-xl mb-14 sm:mx-auto relative z-10">
                <h2>
                    Our Commitment to Excellence
                </h2>
                
            </div>
            
            <div className="items-center gap-16 grid lg:grid-cols-2">
                {features.map(feature => (
                    <div className={"overflow-hidden rounded-lg shadow-lg mb-10 lg:mb-0 relative "}>
                        <svg
                        className="absolute bottom-0 left-0 mb-8"
                        viewBox="0 0 375 283"
                        fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.05 }}
                        >
                        <rect
                            x="159.52"
                            y="175"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 159.52 175)"
                            fill="white"
                        />
                        <rect
                            x="0"
                            y="107.48"
                            width="152"
                            height="152"
                            rx="8"
                            transform="rotate(-45 0 107.48)"
                            fill="white"
                        />
                        </svg>
                        <div className="flex flex-col p-10 md:py-16 items-stretch justify-center bg-pri">                
                            <h3 className=" text-white lg:mt-0">{feature.title}</h3>
                            
                            <p className="text-gray-300 mt-2">
                                {feature.text}
                            </p>
                        </div>
                    </div>
                ))}
            


                
            </div>
            
        </section>
    );
};

export default MissionVision;
