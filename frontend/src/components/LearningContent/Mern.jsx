import React from "react";
import mypic from './abc.jpeg';

const Mern = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ display: "flex", padding: "10px", height: "73vh", maxWidth: "100%", margin: "0" }}>
      <div style={{ flex: 1, paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ color: "red" ,padding:"5px"}}>Learning Content for MERN Stack Profile</h3>
        <p style={{margin:"15px"}}>
        A MERN stack developer leverages the JavaScript programming language and
        associated web technologies for complete application development. Their
        core responsibilities encompass:
      </p>
      <ul style={{ listStyleType: "none", padding: "5px" ,marginLeft:"15px"}}>
        <li style={{ margin: "10px 0" }}>Frontend web development with ReactJS and HTML/CSS</li>
        <li style={{ margin: "10px 0" }}>Backend API and service development with Node.js and ExpressJS</li>
        <li style={{ margin: "10px 0" }}>Database integration and administration with MongoDB</li>
        <li style={{ margin: "10px 0" }}>Application testing, troubleshooting, deployment and maintenance</li>
      </ul>
      </div>
      <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src={mypic} alt="Animation Example" style={{ width: "50%", height: "auto", marginBottom: "10px", marginLeft:"220px", borderRadius:"20px"}} />
        <div>
        <button onClick={() => handleButtonClick("https://youtu.be/RGKi6LSPDLU?si=ji4vbUz5wqCNogmK")} style={buttonStyle}>
          Learn ReactJS
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/TlB_eWDSMt4?si=22mLpet6swmIA7XY")} style={buttonStyle}>
          Learn Node
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/7H_QH9nipNs?si=LhL3EzHrnlG7VFGI")} style={buttonStyle}>
          Learn ExpressJS
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/J6mDkcqU_ZE?si=La_hOi5RhfGkY1co")} style={buttonStyle}>
          Learn MongoDB
        </button>
      </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 15px",
  backgroundColor: "pink",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Mern;
