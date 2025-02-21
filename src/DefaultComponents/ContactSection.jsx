import { useState } from "react";

const ContactSection = () => {
    
    const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Google Forms URL
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfVRBu362M0l_qrmULKMUy3DMhWNloiCxBdwBS8WqkBVHwBfA/formResponse";

    // Replace with actual entry IDs from your form
    const entryIds = {
        name: "entry.940936986",   // Replace with your actual entry ID
        email: "entry.2068722361",  // Replace with your actual entry ID
        number: "entry.1896080919", // Replace with your actual entry ID
        message: "entry.707825342" // Replace with your actual entry ID
    };


    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.number.trim()) {
            newErrors.number = "Phone number is required";
        } else if (!/^\+?\d{7,15}$/.test(formData.number)) {
            newErrors.number = "Invalid phone number";
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Prepare form data for submission
        const formBody = new URLSearchParams();
        formBody.append(entryIds.name, formData.name);
        formBody.append(entryIds.email, formData.email);
        formBody.append(entryIds.number, formData.number);
        formBody.append(entryIds.message, formData.message);

        try {
            await fetch(formUrl, {
                method: "POST",
                mode: "no-cors", // Required for Google Forms
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formBody.toString(),
            });

            setSubmitted(true);
            setFormData({ name: "", email: "", number: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section>
            <div className="gap-10 pt-14  mx-auto flex flex-col lg:flex-row lg:items-stretch items-stretch">

                {/* Map Section */}
                <div className="flex-1 bg-gray-300 rounded-lg overflow-hidden min-h-[1000px] sm:min-h-[750px] lg:min-h-[500px] p-10 flex items-end justify-start relative">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        className="absolute inset-0" 
                        title="map" 
                        scrolling="no"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55240.767498339934!2d31.303263651553863!3d30.078489084756402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f3503e42ca1%3A0x86884a31b2790d09!2sMilestone%20For%20Engineering%20%26%20Construction!5e0!3m2!1sen!2seg!4v1738998124299!5m2!1sen!2seg" 
                        referrerpolicy="no-referrer-when-downgrade">
                    
                    </iframe>
                    <div className="bg-pri relative flex flex-wrap py-6 rounded-lg shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h3 className="font-semibold text-white tracking-widest text-xl">ADDRESS</h3>
                            <p className="mt-1 text-gray-400 text-left">92 El-Thawra St, Almazah, Heliopolis, Cairo Governorate 4461203</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h3 className="font-semibold text-white tracking-widest text-xl">EMAIL</h3>
                            <a className="mt-1 text-gray-400">info@milestone-egypt.com</a>
                            <h3 className="mt-4 font-semibold text-white tracking-widest text-xl">PHONE</h3>
                            <p className="mt-1 text-gray-400">01020200110</p>
                        </div>
                    </div>
                </div>

                {/* Feedback Form Section */}
                <div className="flex-1 relative h-full flex flex-col justify-center items-center">
    <span className={`absolute top-0 left-0 w-full h-full mt-2 ml-2 bg-sec rounded`}></span>
    <div className="relative w-full h-full rounded-lg bg-pri flex flex-col p-8 lg:p-16">
        <h2 className="text-sec mb-2">Feedback</h2>
        {submitted && <p className="text-green-500 mb-4">Thank you! Your message has been sent.</p>}
        <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-base text-gray-400">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg border border-gray-300 focus:border-sec focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-base text-gray-400">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg border border-gray-300 focus:border-sec focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative mb-4">
                <label htmlFor="number" className="leading-7 text-base text-gray-400">Phone</label>
                <input 
                    type="text" 
                    id="number" 
                    name="number" 
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg border border-gray-300 focus:border-sec focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
            </div>

            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-base text-gray-400">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white rounded-lg border border-gray-300 focus:border-sec focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button 
                type="submit" 
                className={`w-full py-3 rounded-full ${
                    submitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-sec'
                }`}
                disabled={submitted}
            >
                <p className='text-center text-lg font-semibold text-pri'>{submitted ? "Submitted" : "Submit"}</p>
            </button>
        </form>
    </div>
</div>

            </div>
        </section>
    );
}

export default ContactSection;
