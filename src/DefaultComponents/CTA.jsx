import { Link } from 'react-router-dom';

const CTA = ({ title, description, buttonText, buttonLink, bgImageUrl }) => {

    const getLastWord = (str) => {
        const words = str.trim().split(" ");
        return words[words.length - 1];
    };
    const removeLastWord = (str) => {
        const words = str.trim().split(" ");
        words.pop(); // Removes the last word
        return words.join(" ") + " "; // Joins the remaining words and adds a space at the end
    };
    const word = getLastWord(title);

    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImageUrl})` }}>
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
            <section className="relative z-10">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 className="text-white">
                        {removeLastWord(title) || "Ready to Build Something "} 
                        <span className="text-sec">{word}</span>
                    </h2>

                    <p className="max-w-4xl mt-6 text-center text-white">
                        {description || "Ready to get started? Milestone is here to bring your vision to life with expert contracting services at every stage. From construction management to turnkey solutions, we ensure your project's success. Contact us today to get started."}
                    </p>

                    <div className="inline-flex w-full mt-6 sm:w-auto">
                        <Link to={buttonLink || "/"} >
                            <button className="px-12 py-3 rounded-full bg-sec text-center">
                                <p className='text-lg text-pri font-semibold'>{buttonText || "Contact us"}</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default CTA;
