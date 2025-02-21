import Navbar from "./DefaultComponents/NavBar";
import Footer from "./DefaultComponents/Footer";

import React from "react";
import HomePage from "./Screens/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Screens/AboutUsPage";
import ContractingPage from "./Screens/ContractingPage";
import ProjectManagement from "./Screens/ProjectManagement";
import ProjectsPage from "./Screens/ProjectsPage";
import ProjectView from "./Screens/ProjectView";
import ScrollToTop from "./DefaultComponents/ScrollToTop";

import img from './assets/prop3.jpg';
import ContactSection from "./DefaultComponents/ContactSection";
import ContactPage from "./Screens/ContactPage";

function App() {

  const sectors = [
    {
      path: "/residential",
      title: "Residential",
      bg: "/Projects/residential/Mountain View/1.jpg",
      description: "We specialize in transforming residential spaces into elegant, comfortable, and personalized environments. Whether luxury villas, apartments, or full-scale residential developments, our team ensures impeccable craftsmanship, attention to detail, and a seamless execution process that brings homeowners' visions to life.",
      benefits: ["Tailored Designs", "Superior Finishing", "Hassle-Free Process"],
      projects: [
        {
          name:"Katameya Heights",
          path:"/residential/katameya-heights"
        },
        {
          name:"Mountain View",
          path:"/residential/mountain-view"
        },
        {
          name:"Patio",
          path:"/residential/patio"
        }
      ],
    },
    {
      path: "/f&b",
      title: "Food & Beverage",
      bg: "Projects/f&b/At Work Business Lounge/1.jpg",
      description: "We create inviting and functional spaces for restaurants, cafés, and food service establishments, ensuring an ambiance that complements the brand identity. Our solutions focus on optimizing layouts, enhancing customer flow, and incorporating durable, high-quality materials suited for hospitality environments.",
      benefits: ["Functional & Aesthetic", "Hospitality-Grade Quality", "Seamless Execution"],
      projects: [
        {
          name: "At Work Business Lounge",
          path: "/f&b/at-work-business-lounge",
        }
      ],
    },
    {
      path: "/banking",
      title: "Banking",
      bg: "/Projects/banking/Banque Misr/9.jpg",
      description: "Milestone delivers secure, sophisticated, and high-quality finishing solutions for banking environments. We understand the importance of blending functionality with aesthetics, ensuring a professional, welcoming, and secure space that enhances customer experience and operational efficiency. Our expertise includes branch fit-outs, corporate offices, and financial hubs, all executed with precision and confidentiality.",
      benefits: ["Precision Execution", "Premium Craftsmanship", "Efficient Delivery"],
      projects: [
        {
          name: "Banque Misr",
          path: "/banking/banque-misr",
      
        }
      ],
    },
    {
      path: "/commercial-and-offices",
      title: "Commercial & Offices",
      bg: "/Projects/banking/Banque Misr/6.jpg",
      description: "Our commercial and office fit-out solutions are designed to maximize functionality, aesthetics, and employee well-being. We create workspaces that enhance productivity, reflect brand identity, and provide a seamless blend of style and efficiency, all while adhering to the highest industry standards.",
      benefits: ["Optimized Workspaces", "Brand-Aligned Design", "Fast Turnaround"],
      projects: [
        
        {
          name: "Era Commercial Egypt",
          path: "/commercial-and-offices/era-commercial-egypt",

        },
        {
          name: "Glorcom",
          path: "/commercial-and-offices/glorcom",


        },
        {
          name: "Idemia Egypt",
          path: "/commercial-and-offices/idemia-egypt",

        },
        {
          name: "Matrix Club",
          path: "/commercial-and-offices/matrix-club",

        },
        {
          name: "Vernbro Global Investment",
          path: "/commercial-and-offices/vernbro-global-investment",

        },
        {
          name: "Zepter International Egypt",
          path: "/commercial-and-offices/zepter-international-egypt",
        },
      ],
    },
    {
      path: "/retail",
      title: "Retail",
      bg: "/Projects/retail/Etisalat Egypt/1.jpg",
      description: "Milestone specializes in dynamic retail fit-outs that captivate customers and enhance brand presence. From boutiques to flagship stores, we design and execute spaces that are both visually striking and highly functional, ensuring an immersive shopping experience that drives engagement and sales.",
      benefits: ["Engaging Interiors", "Smart Space Utilization", "Quick & Efficient Delivery"],
      projects: [
        {
          name: "Arkan Mall",
          path: "/retial/arkan-mall",

        },
        {
          name: "Etisalat Egypt",
          path: "/retail/etisalat-egypt",
        }
      ],
    },
  ];

  const projects = [
    {
      name: "At Work Business Lounge",
      parent: "f&b",
      path: "/f&b/at-work-business-lounge",
      size: 10,
      loc: "Sheikh Zayed - Cairo",
      area: 600,
      time: 2,
      type: "Civil, MEP & Furniture",
      desc: "At Work Business Lounghe created a business lounge and café where professionals can enjoy working. At Work is a modern, fully integrated work-café that offers business managers, entrepreneurs, and independent contractors a first-rate, casual, restful, and practical experience.",
    },
    {
      name: "Banque Misr",
      parent: "banking",
      path: "/banking/banque-misr",
      size: 11,
      loc: "City Stars Mall - Cairo",
      area: 520,
      time: 2,
      type: "Civil & MEP",
      desc: "Mohamed Talaat Harb Pasha founded Banque Misr in 1920, the first bank owned by Egyptians. Funding various domestic industries, Banque Misr now owns stock in 157 businesses across banking, travel, real estate, food, agriculture, and information technology and communication.",
    },
    {
      name: "Etisalat Egypt",
      parent: "retail",
      path: "/retail/etisalat-egypt",
      size: 2,
      loc: "Cairo",
      area: 1500,
      time: 1.5,
      type: "Civil, MEP & Furniture",
      desc: "Etisalat Misr, a division of Etisalat Group, introduced 4G in 2007 and is present in 16 countries. It introduced 3.5G services in Egypt, and introduced 4G in 2017. Etisalat Misr's 2G and 3G network serves 99 percent of Egypt's population.",
    },
    {
      name: "Arkan Mall",
      parent: "retail",
      path: "/retial/arkan-mall",
      size: 5,
      
      loc: "Sheikh Zayed - Cairo",
      area: 500,
      time: 2,
      type: "Civil & MEP",
      desc: "Located in Sheikh Zayed, Arkan Mall is a well-known shopping centre. It is highly renowned for the range of brands it offers, including unique cafes and restaurants that serve cuisine from around the globe.",
    },
    {
      name: "Era Commercial Egypt",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/era-commercial-egypt",
      size: 4,
      loc: "Heliopolis - Cairo",
      area: 2000,
      time: 4,
      type: "Civil, MEP & Furniture",
      desc: "ERA Commercial Egypt, established in 2004, is dedicated to providing real estate solutions that cater to various demands and requirements. They believe in tailoring their services to each project and customer, using their years of knowledge to create tailored plans, recommendations, and action plans. They are part of ERA International since 2011.",
    },
    {
      name: "Glorcom",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/glorcom",
      size: 7,
      loc: "Sheikh Zayed - Cairo",
      area: 600,
      time: 2,
      type: "Civil & MEP",
      desc: "GLORCOM is a company that aims to lead the feed and oil industries in Egypt and the Middle East, boost the country's economy, and offer premium products at competitive prices that are affordable for Egyptian consumers.",
    },
    {
      name: "Idemia Egypt",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/idemia-egypt",
      size: 6,
      loc: "Sheraton - Cairo",
      area: 850,
      time: 4,
      type: "Civil & MEP",
      desc: "The headquarters of the international technology company IDEMIA EGYPT are located in Courbevoie, France. In addition to selling facial recognition and other biometric identification products and software to the government and private sector, it offers identity-related security services."
    },
    {
      name: "Matrix Club",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/matrix-club",

      size: 8,
      loc: "Tanta",
      area: 2100,
      time: 5,
      type: "Civil, MEP & Facades Structure Glazing",
      desc: "Matrix Club, established in 2019, is the first club in the Delta region with international standards in Egypt. Founded by Eng. Ashraf Doss, the club aims to improve public health through sports and exercise. Located on 15 acres, it features green spaces, gyms, and entertainment venues."
    },
    {
      name: "Vernbro Global Investment",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/vernbro-global-investment",
      size: 5,
      loc: "Tanta",
      area: 5000,
      time: 8,
      type: "Civil & MEP",
      desc: "Vernbro Global Investment is a specialized investment firm with a unique approach, focusing on multiple industries, minimizing risk, and improving investments through its proprietary structure.",
    },
    {
      name: "Zepter International Egypt",
      parent: "commercial-and-offices",
      path: "/commercial-and-offices/zepter-international-egypt",
      size: 6,
      loc: "Sheikh Zayed - Cairo",
      area: 4400,
      time: 8,
      type: "Civil, MEP & Furniture",
      desc: "Zepter International is a global multinational corporation that produces, sells, and distributes high-quality consumer goods through its own sales network and high-end stores. With 8 factories in Switzerland, Germany, and Italy, and over 320,000 m2 of business space, it operates globally.",
    },
    {
      name:"Katameya Heights",
      path:"/residential/katameya-heights",
      parent: "residential",
      loc: "",
      area: "",
      size: 6,
      time: "",
      type: "",
      desc: ""

    },
    {
      name:"Mountain View",
      path:"/residential/mountain-view",
      parent: "residential",
      loc: "",
      area: "",
      size: 6,
      time: "",
      type: "",
      desc: ""
    },
    {
      name:"Patio",
      path:"/residential/patio",
      parent: "residential",
      loc: "",
      area: "",
      size: 6,
      time: "",
      type: "",
      desc: "",
    }
  ]

  return (
    <Router>
      <div>
        <ScrollToTop/>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about-us" element={<AboutUsPage />} />
            <Route exact path="/contracting" element={<ContractingPage />} />
            <Route exact path="/project-management" element={<ProjectManagement />} />
            <Route exact path="/contact-us" element={<ContactPage/>} />

            {sectors.map((sector, index) => (
              <Route key={index} path={sector.path} element={<ProjectsPage
                  title={sector.title}
                  benefits={sector.benefits}
                  description={sector.description}
                  img={sector.bg}
                  path={sector.path}
                  projects={sector.projects}
                />} 
              />
            ))}
            {projects.map((project, index) => (
              <Route key={index} path={project.path} element={<ProjectView
                  project={project}
                />} 
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
