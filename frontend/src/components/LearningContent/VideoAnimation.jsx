import React from 'react';
import mypic from './abc.jpeg';

const VideoAnimation = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h3 style={headerStyle}>Learning Content for Video Animation Job Profile</h3>
        <p style={descriptionStyle}>
        A Video Animator is responsible for creating engaging animations and visual effects for various media. Their core responsibilities encompass:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>• Developing animated sequences for films, video games, and online content</li>
          <li style={listItemStyle}>• Collaborating with directors and producers to understand project requirements</li>
          <li style={listItemStyle}>• Using software tools to create 2D and 3D animations</li>
          <li style={listItemStyle}>• Editing and refining animations based on feedback</li>
          
        </ul>
      </div>
      <div style={imageContainerStyle}>
        <img src={mypic} alt="Animation Example" style={imageStyle} />
        <div>
          <button onClick={() => handleButtonClick("https://www.youtube.com/results?search_query=After+Effects+tutorial")} style={buttonStyle}>
          Watch After Effects Tutorials
          </button>
          <button onClick={() => handleButtonClick("https://www.youtube.com/results?search_query=Blender+tutorial")} style={buttonStyle}>
          Watch Blender Tutorials
          </button>
          <button onClick={() => handleButtonClick("https://www.youtube.com/results?search_query=Toon+Boom+tutorial")} style={buttonStyle}>
          Watch Toon Boom Tutorials
          </button>
          <button onClick={() => handleButtonClick("https://www.youtube.com/results?search_query=Cinema+4D+tutorial")} style={buttonStyle}>
          Watch Cinema 4D Tutorials
          </button>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  height: "100vh", 
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#f0f8ff", 
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  alignItems: "center",
  justifyContent: "space-between",
};

const contentStyle = {
  flex: 1,
  paddingRight: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const headerStyle = {
  color: "#004080", 
  padding: "3px",
  fontSize: "54px",
  textAlign: "center",
  marginBottom:"35px",
};

const descriptionStyle = {
  margin: "15px",
  fontSize: "22px",
  color: "#333333",
  textAlign: "justify",
  lineHeight: "1.4",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  marginLeft: "15px",
};

const listItemStyle = {
  margin: "10px 0",
  fontSize: "20px",
  color: "#004080",
};

const imageContainerStyle = {
  flex: 1,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const imageStyle = {
  width: "60%",
  height: "auto",
  margin: "0 auto 20px",
  borderRadius: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  margin: "10px",
  padding: "12px 20px",
  backgroundColor: "#004080", 
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

export default VideoAnimation;
