import AboutUsHeader from "../DefaultComponents/About/AboutUsHeader";
import CoreValues from "../DefaultComponents/About/CoreValues"
import HowWeHelp from "../DefaultComponents/About/HowWeHelp";
import MissionVision from "../DefaultComponents/About/MissionVision";
import ServicesCTA from "../DefaultComponents/About/ServicesCTA";
import TheTeam from "../DefaultComponents/About/TheTeam";
import header from '../assets/transparent-glass-logo-mockup.jpg';

const AboutUsPage = () => {
    return<div>
        <AboutUsHeader img={header}/>
        <HowWeHelp/>
        <CoreValues/>
        <MissionVision/>
        <ServicesCTA/>
        <TheTeam/>
    </div>
}

export default AboutUsPage