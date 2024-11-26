import React from 'react';
import mypic from './abc.jpeg';

const Frontend_Web_Development = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ display: "flex", padding: "10px", height: "73vh", maxWidth: "100%", margin: "0" }}>
      <div style={{ flex: 1, paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ color: "red" ,padding:"5px"}}>Learning Content for Frontend Developer Job Profile</h3>
        <p style={{margin:"15px"}}>
        A Frontend Web Developer is responsible for creating the visual elements of a website that users interact with. Their core responsibilities encompass:
      </p>
      <ul style={{ listStyleType: "none", padding: "5px" ,marginLeft:"15px"}}>
        <li style={{ margin: "10px 0" }}>* Developing user interfaces using HTML, CSS, and JavaScript</li>
        <li style={{ margin: "10px 0" }}>* Ensuring responsiveness and performance of web applications</li>
        <li style={{ margin: "10px 0" }}>* Collaborating with backend developers and web designers</li>
        <li style={{ margin: "10px 0" }}>* Implementing web accessibility standards</li>
        <li style={{ margin: "10px 0" }}>* Testing and debugging web applications</li>
      </ul>
      </div>
      <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src={mypic} alt="Animation Example" style={{ width: "50%", height: "auto", marginBottom: "10px", marginLeft:"220px", borderRadius:"20px"}} />
        <div>
        <button onClick={() => handleButtonClick("https://youtu.be/HcOc7P5BMi4?si=70717ISOGTfPw6Kp")} style={buttonStyle}>
          Watch HTML Tutorial
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/Edsxf_NBFrw?si=cONJjliNFOZHgfkO")} style={buttonStyle}>
          Watch CSS Tutorial
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/hKB-YGF14SY?si=5aqeJxOCjHTqZav0")} style={buttonStyle}>
          Watch JavaScript Tutorial
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/RGKi6LSPDLU?si=ji4vbUz5wqCNogmK")} style={buttonStyle}>
          Learn React
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

export default Frontend_Web_Development;
