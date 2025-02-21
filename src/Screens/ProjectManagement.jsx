import ServicesHeader from "../DefaultComponents/ServicesHeader";
import Process from "../DefaultComponents/ProjectManagement/Process";
import Approach from "../DefaultComponents/ProjectManagement/Approach";
import WhyUs from "../DefaultComponents/ProjectManagement/WhyUs";
import CTA from "../DefaultComponents/CTA";


const ProjectManagement = () => {
    return(
        <div>
            <ServicesHeader
                title="Project management Services"
                subtitle="at Milestone"
                description="At Milestone, we specialize in delivering successful projects by managing every aspect of the process with precision and expertise. From design review to final handover, our approach ensures that your project is completed on time, within budget, and to the highest standards. We focus on optimizing costs, improving timelines, and maintaining open communication with all stakeholders to create a smooth and efficient workflow."
                bgImageUrl="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                button1Text="Get Started"
                button2Text="Learn More"
            />
            <Approach/>
            <Process/>
            <WhyUs/>
      
        </div>
    );
}

export default ProjectManagement