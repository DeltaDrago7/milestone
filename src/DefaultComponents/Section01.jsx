import React from "react";
import iso1 from '../assets/iso9001.jpeg';
import iso2 from '../assets/iso14001.jpeg';
import iso3 from '../assets/iso45001.jpeg';


const Section01 = () => {
    return (
  
        <section>
        
                
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="flex justify-center">
                        <img className="h-24" src={iso1} />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-24" src={iso2} />
                    </div>
                    <div className="flex justify-center">
                        <img className="h-24" src={iso3} />
                    </div>
                </div>
                <h2 className="text-gray-500 mt-4 font-extralight py-4 text-center">
                    We are ISO Certified
                </h2>
                <hr className="border-t-3 border-gray-300 my-8" />
            <div className="gap-32 items-center lg:grid lg:grid-cols-2">
                
                <div className="">
                    <h2 className="mb-4 tracking-tight text-black">
                        Your Trusted Partner
                    </h2>
                    <p className="mb-4 py-4 text-justify">
                        Milestone specializes in high-quality fit-outs and project management across Egypt. Since 2012, we've delivered precision, creativity, and efficiency in every project.
                        <br/><br/>
                        With a focus on integrity, quality, and innovation, we bring your vision to life. Let’s build something extraordinary—contact us today!
                    </p>
                </div>

                <div className="">
                    <img
                        className="w-full rounded-lg"
                        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                        alt="office content 2"
                    />
                </div>
                
                
            </div>
            
                
        </section>
    
    );
};

export default Section01;
