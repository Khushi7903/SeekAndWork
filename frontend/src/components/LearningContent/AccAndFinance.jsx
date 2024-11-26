import React from "react";
import mypic from './abc.jpeg';

const AccAndFinance = () => {
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
          Prepare for Accounting and Finance Job
        </h3>
        <p style={{ margin: "15px" }}>
          An Accounting and Finance professional is responsible for managing
          financial records, preparing reports, and ensuring compliance with
          regulations. Their core responsibilities encompass:
        </p>
        <ul style={{ listStyleType: "none", padding: "5px" ,marginLeft:"15px"}}>
          <li style={{ margin: "10px 0" }}>
            * Financial statement preparation and analysis
          </li>
          <li style={{ margin: "10px 0" }}>* Budgeting and forecasting</li>
          <li style={{ margin: "10px 0" }}>* Tax preparation and planning</li>
          <li style={{ margin: "10px 0" }}>
            * Audit and compliance management
          </li>
          <li style={{ margin: "10px 0" }}>
            * Investment analysis and portfolio management
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
                "https://youtu.be/yYX4bvQSqbo?si=7j4viidPhr1Bwunp"
              )
            }
            style={buttonStyle}
          >
            Watch Accounting Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/iiYQqwALuOk?si=ujWWtNnO4UdOmVYX"
              )
            }
            style={buttonStyle}
          >
            Watch Finance Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/r_-3Q0AzXt8?si=qp9kMG8PtYlgYBTX"
              )
            }
            style={buttonStyle}
          >
            Watch Tax Preparation Tutorial
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                "https://youtu.be/AIOR1x7fPcQ?si=_7FBY9ZFI4y_t4Bx"
              )
            }
            style={buttonStyle}
          >
            Watch Budgeting Tutorial
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

export default AccAndFinance;
