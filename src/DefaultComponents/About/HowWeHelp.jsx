const HowWeHelp = () => {

    const serviceStats = [
        { 
            title: 'Total Projects', 
            value: '100+',
            icon: (<svg className="h-12 w-12" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"></path>
              </svg>)
        },
        { 
            title: 'Space Transformed', 
            value: <>250,000+ ft<sup>2</sup></>,
            icon: (<svg className="h-12 w-12" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
              </svg>)
        },

      ];
      
    return (
        <div className="">
            <section>
                <div className="gap-16 items-center lg:grid lg:grid-cols-2 ">
                    
                    <div>
                        <h2 className="mb-4">
                            Redefining Construction Standards <span className="text-sec">for You</span>
                        </h2>
                        <p className="mb-4 py-4">
                        At Milestone, we deliver high-quality fit-outs with seamless project management. Working closely with all stakeholders, we ensure timely, stress-free execution with a focus on quality, sustainability, and transparency. Let’s bring your vision to life!
                        </p>



                    </div>

                    <div className="flex flex-col gap-5 mt-4">
  {serviceStats.map((stat, index) => (
    <div key={index} className="flex flex-row w-full max-w-[400px] mx-auto bg-gradient-to-r from-[#1c1c1c] via-[#222222] to-[#2a2a2a] p-6 gap-8 rounded-lg border-2 border-gray-700">
      <div className="flex-1">
        <div className="text-lg text-gray-400">{stat.title}</div>
        <div className="text-4xl text-gray-200">{stat.value}</div>
      </div>
      <div className="flex items-center justify-center text-gray-400 bg-gradient-to-l from-[#222222] via-[#333333] to-[#2a2a2a] rounded-full p-4">
        {stat.icon}
      </div>
    </div>
  ))}
</div>

                    
                </div>
            </section>
        </div>
        
    );
}

export default HowWeHelp