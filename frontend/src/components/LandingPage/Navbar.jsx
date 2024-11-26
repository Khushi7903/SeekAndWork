import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
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
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  // Inline styles for navbar layout
  const navbarStyle = {
    backgroundColor: "#E1F5FE", // Light blue shade
    // width:'100'
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
    color: "#01579B", // Dark blue color for logo text
    fontSize: "1.6rem", // Slightly larger font size
    fontWeight: "600", // Bold for emphasis
  };

  const menuContainerStyle = {
    display: "flex",
    alignItems: "center", // Ensures vertical alignment
    gap: "20px", // Moderate spacing between menu items
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
    // padding: 0,
    backgroundColor: "#E1F5FE",
    position: "absolute",
    top: "50px",
    left: "0",
    width: "100%",
    padding: "25px",
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
<nav className={isAuthorized ? "navbarShow" : "navbarHide"} style={isAuthorized ? navbarStyle : {}}>

      <div className="container" style={{ width: "100%" }}>
        <div style={logoStyle}>
          <img
            src="/logo.jpg"
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
                to={"/job/getall"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                ALL JOBS
              </Link>
            </li>
            <li>
              <Link
                to={"/applications/me"}
                onClick={() => setShow(false)}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
              >
                {user && user.role === "Employer"
                  ? "APPLICANT'S APPLICATIONS"
                  : "MY APPLICATIONS"}
              </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
                <li>
                  <Link
                    to={"/job/post"}
                    onClick={() => setShow(false)}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                    onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
                  >
                    POST NEW JOB
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/job/me"}
                    onClick={() => setShow(false)}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
                    onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
                  >
                    VIEW YOUR JOBS
                  </Link>
                </li>
              </>
            ) : null}
            <li>
              <button
                onClick={handleLogout}
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                Login   
              </button>
            </li>
          </ul>

          <div style={hamburgerStyle}>
            <GiHamburgerMenu onClick={() => setShow(!show)} />
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
