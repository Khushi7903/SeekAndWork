import React from "react";
import mypic from "./abc.jpeg";

const Ai = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        height: "73vh",
        maxWidth: "100%",
        margin: "0",
      }}
    >
      <div
        style={{
          flex: 1,
          paddingRight: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3 style={{ color: "red", padding: "5px" }}>
          Crack for Artificial Intelligence Job Profile
        </h3>
        <p style={{ margin: "15px" }}>
          An Artificial Intelligence professional is responsible for designing
          and developing intelligent systems that can perform tasks that
          typically require human intelligence. Their core responsibilities
          encompass:
        </p>
        <ul
          style={{ listStyleType: "none", padding: "5px", marginLeft: "15px" }}
        >
          <li style={{ margin: "10px 0" }}>
            * Machine learning model development and training
          </li>
          <li style={{ margin: "10px 0" }}>
            * Natural language processing and computer vision
          </li>
          <li style={{ margin: "10px 0" }}>
            * Deep learning and neural networks
          </li>
          <li style={{ margin: "10px 0" }}>
            * Robotics and autonomous systems
          </li>
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={mypic}
          alt="Animation Example"
          style={{
            width: "50%",
            height: "auto",
            marginBottom: "10px",
            marginLeft: "220px",
            borderRadius: "20px",
          }}
        />
        <div>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/7IgVGSaQPaw?si=k82OoZ_38cST3hUW"
              )
            }
            style={buttonStyle}
          >
            Watch Machine Learning Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/6M5VXKLf4D4?si=TsidRXbYkWMwQk74"
              )
            }
            style={buttonStyle}
          >
            Watch Deep Learning Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/-33oXx0TwHI?si=bpje5PysBfdfCe3l"
              )
            }
            style={buttonStyle}
          >
            Watch NLP Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/aDpnaxPAmtU?si=hYsfzQXacE3IOCbU"
              )
            }
            style={buttonStyle}
          >
            Watch Computer Vision Tutorial
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

export default Ai;
