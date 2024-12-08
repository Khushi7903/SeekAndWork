import React from "react";
import HeroSection from "../LandingPage/HeroSectionn";
import HowItWorks from "../Home/HowItWorks";
import PopularCategories from "../Home/PopularCategories";

import Footer from "../Layout/Footer";
// import Navbar from "../LandingPage/Navbar"
// import PopularCompanies from "./PopularCompanies";

import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link,useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { Context } from "../../main";
import { GiHamburgerMenu } from "react-icons/gi";


const Landing = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  // Inline styles for navbar layout
  const navbarStyle = {
    backgroundColor: "#E1F5FE", // Light blue shade
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Ensures vertical alignment for all items
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
    fontFamily: "'Roboto', sans-serif", // Clean font
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    color: "#01579B",
    fontSize: "1.6rem", 
    fontWeight: "600", 
  };

  const menuContainerStyle = {
    display: "flex",
    alignItems: "center", // Ensures vertical alignment
    gap: "20px", // Moderate spacing between menu items
    marginLeft:"auto",
  };

  const menuStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "20px", // Moderate spacing
  };

  const showMenuStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: 0,
    padding: 0,
    backgroundColor: "#E1F5FE",
    position: "absolute",
    top: "50px",
    left: "0",
    width: "100%",
    // padding: "25px",
    zIndex: 99,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    color: "#01579B", // Dark blue for links
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontWeight: "500", // Regular font weight
  };

  const linkHoverStyle = {
    color: "#FF7043", // Soft coral for hover
  };

  const buttonStyle = {
    backgroundColor: "#0288D1", // Blue button background
    border: "none",
    color: "white",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "6px", // Rounded corners
    fontSize: "1rem", // Regular button text size
    fontWeight: "500", // Regular font weight
    transition: "background-color 0.3s",
    marginLeft: "20px", // Added margin to align the button with the menu
    display: "flex", // Ensures button is aligned in flexbox layout
    alignItems: "center", // Vertically aligns button text
  };

  const buttonHoverStyle = {
    backgroundColor: "#01579B", // Darker blue on hover
  };

  const hamburgerStyle = {
    display: "none", // Hidden by default
    color: "#01579B", // Dark blue color
    fontSize: "2rem", // Larger font size for visibility
    cursor: "pointer",
  };

  if (show) {
    hamburgerStyle.display = "block";
  }
  return (
    <>
    <header style={navbarStyle}>
    <div className="container" style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div style={logoStyle}>
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: "40px", marginRight: "12px" ,mixBlendMode:"multiply"}}
          />
          <span>Seek&Work</span>
        </div>

        <div style={menuContainerStyle}>
          <ul style={show ? showMenuStyle : menuStyle}>
            <li>
              <Link
                to={"/"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to={"/clientTestimonials"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                ADD REVIEWS
              </Link>
            </li>
          </ul>

          <div style={{ display: "none" }}>
            <GiHamburgerMenu onClick={() => setShow(!show)} />
          </div>
        </div>
      </div>
    </header>
    
      <section className="homePage page">
      
        <HeroSection />
        <HowItWorks />
        <PopularCategories />

       
       {/* <Footer/> */}

      </section>
      <footer>
       <div className="footer-content">
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved By Seek&Work.</p>
        </div>
        <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com/in/aayush-goel-206b29252/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/aayushgoel260/" target="_blank" rel="noopener noreferrer" className="icon">
            <RiInstagramFill />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/terms" className="footer-link">
            Terms and Conditions
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Landing;