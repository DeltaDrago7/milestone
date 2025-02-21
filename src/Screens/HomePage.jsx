import Hero from "../DefaultComponents/Hero"
import Section01 from "../DefaultComponents/Section01"
import Benefits from "../DefaultComponents/Benefits"
import ProjectsPreview from "../DefaultComponents/ProjectsPreview"
import ClientsPreview from "../DefaultComponents/ClientsPreview"

import React from 'react'
import ServicesPreview from "../DefaultComponents/ServicesPreview"


function HomePage() {

  const images = [
    "/Projects/Logos/Arkan Mall.png",
    "/Projects/Logos/At Work Business Lounge.png",
    "/Projects/Logos/Banque Misr.png",
    "/Projects/Logos/Era Commercial Egypt.png",
    "/Projects/Logos/Etisalat Egypt.png",
    "/Projects/Logos/Glorcom.png",
    "/Projects/Logos/Matrix Club.png",
    "/Projects/Logos/Idemia Egypt.png",
    "/Projects/Logos/Vernbro Global Investment.png",
    "/Projects/Logos/Zepter International Egypt.png"
  ]

  return <div>
    <Hero/>
    <Section01/>
    <Benefits/>
    <ClientsPreview images={images}/>
    <ServicesPreview/>
    <ProjectsPreview/>
  </div>;
}

export default HomePage
