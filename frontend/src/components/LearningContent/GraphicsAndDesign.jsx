import React from 'react';
import mypic from './abc.jpeg';

const GraphicsAndDesign = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ display: "flex", padding: "10px", height: "73vh", maxWidth: "100%", margin: "0" }}>
      <div style={{ flex: 1, paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ color: "red" ,padding:"5px"}}>Learning Content for Graphic Designer Job </h3>
        <p style={{margin:"15px"}}>
        A Graphics Designer is responsible for creating visual concepts that communicate ideas that inspire, inform, or captivate consumers. Their core responsibilities encompass:
      </p>
      <ul style={{ listStyleType: "none", padding: "5px" ,marginLeft:"15px"}}>
        <li style={{ margin: "10px 0" }}>* Creating visual elements for branding and advertising</li>
        <li style={{ margin: "10px 0" }}>* Designing layouts for print and digital media</li>
        <li style={{ margin: "10px 0" }}>* Collaborating with clients and stakeholders to understand their needs</li>
        <li style={{ margin: "10px 0" }}>* Using design software to create high-quality graphics</li>
        <li style={{ margin: "10px 0" }}>* Staying updated with design trends and techniques</li>
      </ul>
      </div>
      <div style={{ flex: 1, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <img src={mypic} alt="Animation Example" style={{ width: "50%", height: "auto", marginBottom: "10px", marginLeft:"220px", borderRadius:"20px"}} />
        <div>
        <button onClick={() => handleButtonClick("https://youtu.be/SnxFkHqN1RA?si=jrvKst7Ie6-rWaxw")} style={buttonStyle}>
          Watch Graphic Design Tutorials
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/xTzvQkOll2U?si=wCqM4FSpDQ_aBZ8f")} style={buttonStyle}>
          Watch Photoshop Tutorials
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/r9gaPGQ1EG0?si=ZAQev-9tI08L4WDe")} style={buttonStyle}>
          Watch Illustrator Tutorials
        </button>
        <button onClick={() => handleButtonClick("https://youtu.be/9EPTM91TBDU?si=fW3jsRh6irX-LVAC")} style={buttonStyle}>
          Learn Design Principles
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

export default GraphicsAndDesign;
