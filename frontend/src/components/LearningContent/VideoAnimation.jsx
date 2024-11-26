import React from 'react'
import mypic from './abc.jpeg';

const VideoAnimation = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  
  return (
    <div style={{ display: "flex", padding: "10px", height: "73vh", maxWidth: "100%", margin: "0" }}>
      <div style={{ flex: 1, paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ color: "red" ,padding:"5px"}}>Learning Content for Video Animation Job Profile</h3>
        <p style={{margin:"15px"}}>
          A Video Animator is responsible for creating engaging animations and visual effects for various media. Their core responsibilities encompass:
        </p>
        <ul style={{ listStyleType: "none", padding: "5px" ,marginLeft:"15px"}}>
          <li style={{ margin: "10px 0" }}>* Developing animated sequences for films, video games, and online content</li>
          <li style={{ margin: "10px 0" }}>* Collaborating with directors and producers to understand project requirements</li>
          <li style={{ margin: "10px 0" }}>* Using software tools to create 2D and 3D animations</li>
          <li style={{ margin: "10px 0" }}>* Editing and refining animations based on feedback</li>
          <li style={{ margin: "10px 0" }}>* Staying updated with the latest animation techniques and technologies</li>
        </ul>
      </div>

      <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src={mypic} alt="Animation Example" style={{ width: "50%", height: "auto", marginBottom: "10px", marginLeft:"220px", borderRadius:"20px"}} />
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
  )
}

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

export default VideoAnimation;
