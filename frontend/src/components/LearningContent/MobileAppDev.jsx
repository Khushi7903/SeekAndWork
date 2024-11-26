import React from "react";
import mypic from "./abc.jpeg";

const MobileAppDev = () => {
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
          Learning Content for Mobile App Development Job Profile
        </h3>
        <p style={{ margin: "15px" }}>
          A Mobile App Developer is responsible for designing and building
          applications for mobile devices. Their core responsibilities
          encompass:
        </p>
        <ul
          style={{ listStyleType: "none", padding: "5px", marginLeft: "15px" }}
        >
          <li style={{ margin: "10px 0" }}>
            Developing applications for iOS and Android platforms
          </li>
          <li style={{ margin: "10px 0" }}>
            Collaborating with UI/UX designers to create user-friendly
            interfaces
          </li>
          <li style={{ margin: "10px 0" }}>
            Integrating APIs and third-party libraries
          </li>
          <li style={{ margin: "10px 0" }}>
            Testing and debugging mobile applications
          </li>
          <li style={{ margin: "10px 0" }}>
            Staying updated with the latest mobile technologies and trends
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
                "https://www.youtube.com/results?search_query=React+Native+tutorial"
              )
            }
            style={buttonStyle}
          >
            Watch React Native Tutorials
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://www.youtube.com/results?search_query=Flutter+tutorial"
              )
            }
            style={buttonStyle}
          >
            Watch Flutter Tutorials
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://www.youtube.com/results?search_query=Swift+tutorial"
              )
            }
            style={buttonStyle}
          >
            Watch Swift Tutorials
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://www.youtube.com/results?search_query=Kotlin+tutorial"
              )
            }
            style={buttonStyle}
          >
            Watch Kotlin Tutorials
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

export default MobileAppDev;
