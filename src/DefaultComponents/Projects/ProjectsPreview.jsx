import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPreview = ({ projects, path }) => {
    var col = 2;
    if(projects.length == 3 || projects.length >= 6){
        col = 2;
        
    }
    else if(projects.length == 1){
        col = 1;
    }
    const projectDetails = [
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
    <section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Projects</h2>
          <p className="text-xl text-center font-semibold">Discover our latest projects and success stories</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-${col} gap-10`}>

          {projects.map((details, index) => {
            // Correctly construct image path
            const imgPath = `/Projects${path}/${details.name}/1.jpg`;
            console.log();

            return (
      
                <Link to={details.path}>
  
                  <div className="overflow-hidden rounded-md shadow-md w-full h-96 relative">
                    <img 
                      src={imgPath} 
                      alt="random image" 
                      className={`transition-transform duration-500 hover:scale-110 w-full h-full object-cover object-center`} 
                    />
                  </div>
    
                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 shadow-lg">
                      {/*<div className="flex items-baseline">
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          New
                        </span>
                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">2 baths  &bull; 3 rooms</div>  
                      </div>*/}
                          
                      <h3 className="">{details.name}</h3>
                      {path !== "/residential" ? 
                        (<p className="mt-1">Size: {projectDetails.find(project => project.path === details.path).area}m<sup>2</sup><br/>Location: {projectDetails.find(project => project.path === details.path).loc}</p>                      )
                        :(<div/>)
                      }
                      {/*<div className="mt-1">
                        $1800
                        <span className="text-gray-600 text-sm">   /wk</span>
                      </div>
                      <div className="mt-4">
                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                        <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                      </div>  */}
                    </div>
                  </div>
                </Link>
              
            );
          })}
        </div>
    </section>
  );
};

{/* 
  <Link key={index} to={details.path}>
                  <div 
                    className={`flex items-end overflow-hidden bg-cover rounded-lg h-96 ${col === 1 ? "md:h-[48rem]" : "h-96"}`}
                    style={{ backgroundImage: `url("${imgPath}")` }} // ✅ Corrected syntax
                  >
                    <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/70">
                      <h3 className="my-2 text-gray-800 capitalize">
                        {details.name}
                      </h3>
                    </div>
                  </div>
                </Link>
  */}


  {/*
    <div className=" bg-gray-400 flex justify-center items-center">
                  <div className={`flex flex-col justify-between bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer w-full bg-cover h-96 ${col === 1 ? "md:h-[48rem]" : "h-96"}`} style={{ backgroundImage: `url("${imgPath}")` }}>
                    <div className="flex justify-between items-center ml-4 pr-8">
                      <div className="bg-sec mt-4 text-black bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some information</div>
                      
                    </div>
                    <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-4">
                      <h3 className="text-xl font-bold pb-2">{details.name}</h3>
                      <p className="truncate text-gray-500 text-sm">Size: 999m<sup>2</sup><br/>Location: xxx-Cairo</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs"></span>
                      </div>
                    </div>
                  </div>
                </div>
    
    */}

export default ProjectsPreview;
