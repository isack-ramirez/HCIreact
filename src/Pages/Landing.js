import React from "react";
import Landingpicture from "../Components/Landingpicture";
import Services from "../Components/Services";
import Album from '../Components/Album';
import Contact from '../Components/Contact';
const Landing = () => {
  return(
    <>
   <Landingpicture />
   <Services/>
   <Album/>
   <Contact/>
   </>
  )
};

export default Landing;
