import Approach from "../DefaultComponents/Contracting/Approach";
import CTA from "../DefaultComponents/CTA";
import WhyUs from "../DefaultComponents/Contracting/WhyUs";
import ServicesHeader from "../DefaultComponents/ServicesHeader";
import img from '/Projects/commercial-and-offices/Idemia Egypt/1.jpg';
import Sectors from "../DefaultComponents/Contracting/Sectors";

const ContractingPage = () => {
    return(
        <div>
            <ServicesHeader
                title="Contracting Services"
                subtitle="at Milestone"
                description="At Milestone, we specialize in delivering top-tier contracting services for residential, commercial, and retail fit-out projects. With a reputation for excellence, we manage every phase of construction with precision, ensuring high-quality results, on time and within budget."
                bgImageUrl={img}
                button1Text="Get Started"
                button2Text="Learn More"
            />
            <Approach/>
            <Sectors/>
            <WhyUs/>

        </div>
    );
}

export default ContractingPage