import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "../LandingPage/HeroSectionn";
import HowItWorks from "../Home/HowItWorks";
import PopularCategories from "../Home/PopularCategories";
import Footer from "../Layout/Footer";
// import Navbar from "../LandingPage/Navbar"
// import PopularCompanies from "./PopularCompanies";

const Landing = () => {
//   const { isAuthorized } = useContext(Context);
  
//   if (!isAuthorized) {
//     return <Navigate to={"/login"} />;
//   }

  return (
    <>
    
      <section className="homePage page">
      
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
       
       {/* <Footer/> */}
      </section>
    </>
  );
};

export default Landing;