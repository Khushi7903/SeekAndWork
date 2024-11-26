import React from "react";
import mypic from "./abc.jpeg";

const DataEntryOperator = () => {
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
          Become Data Entry Operator{" "}
        </h3>
        <p style={{ margin: "15px" }}>
          A Data Entry Operator is responsible for entering, updating, and
          maintaining data in computer systems and databases. Their core
          responsibilities encompass:
        </p>
        <ul
          style={{ listStyleType: "none", padding: "5px", marginLeft: "15px" }}
        >
          <li style={{ margin: "10px 0" }}>
            * Inputting data from various sources into databases
          </li>
          <li style={{ margin: "10px 0" }}>
            * Verifying and correcting data entries
          </li>
          <li style={{ margin: "10px 0" }}>
            * Maintaining data integrity and confidentiality
          </li>
          <li style={{ margin: "10px 0" }}>
            * Generating reports and summaries based on data
          </li>
          <li style={{ margin: "10px 0" }}>
            * Utilizing spreadsheet and database software effectively
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
                "https://youtu.be/ZpL4G_F5G7M?si=qmHlG-qUcxWZ8J3u"
              )
            }
            style={buttonStyle}
          >
            Watch Data Entry Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/OX-iyb-21tk?si=uuqNOsmvGdyDZZ2s"
              )
            }
            style={buttonStyle}
          >
            Watch Excel Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/FchQ6wZVqsA?si=189KojpjlOZdWrST"
              )
            }
            style={buttonStyle}
          >
            Learn Database Management
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/QIlI7YquuRY?si=rA2fwjhdOXGUnTsP"
              )
            }
            style={buttonStyle}
          >
            Improve Typing Speed
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

export default DataEntryOperator;
