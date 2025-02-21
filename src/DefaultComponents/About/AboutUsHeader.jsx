const AboutUsHeader = ({ img }) => {
    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat flex" 
            style={{ backgroundImage: `url(${img})` }}
        >
            <section className="w-full h-full p-6 text-white flex flex-col justify-between min-h-screen">
                {/* Header at the top */}
                <div className="text-center mt-16">
                    <h1 className="my-4 font-bold">
                        Building <span className="text-sec">Excellence</span> with <span className="text-sec">Integrity</span>
                    </h1>
                </div>
                
                {/* Paragraph at the bottom */}
                <p className="bg-black/40 p-4 rounded-lg text-white text-center mb-5">
                At Milestone, we deliver top-quality finishes through collaboration, expertise, and commitment. Since 2012, we've built a reputation for crafting exceptional spaces. Focused on sustainability, efficiency, and value, every project reflects our integrity, quality, and partnership. Choose Milestone for results you can trust.
                </p>
            </section>
        </div>
    );
}

export default AboutUsHeader;