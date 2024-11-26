import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../main";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
          gap: "30px",
        }}
      >
        {/* Left Section: Application Form */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              marginBottom: "20px",
              color: "#333",
              fontSize: "24px",
              textAlign: "left",
            }}
          >
            Application Form
          </h3>
          <form
            onSubmit={handleApplication}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <textarea
              placeholder="Cover Letter..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows="4"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
                resize: "none",
              }}
            />
            <div>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#555",
                  marginBottom: "10px",
                  display: "block",
                }}
              >
                Upload Resume
              </label>
              <input
                type="file"
                accept=".pdf, .jpg, .png"
                onChange={handleFileChange}
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#007bff",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Right Section: Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="/undraw.png"
            alt="Application Illustration"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Application;
