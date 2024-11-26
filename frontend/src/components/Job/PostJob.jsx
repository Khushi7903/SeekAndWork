import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "http://localhost:8080/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setTitle("");
      setDescription("");
      setCategory("");
      setCountry("");
      setCity("");
      setLocation("");
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
      setSalaryType("default");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px 0", backgroundColor: "#f7fafc" }}>
      <div style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <img src="https://media.istockphoto.com/id/508258230/vector/business-men-cartoon-holding-board-with-sign-we-are-hiring.jpg?s=612x612&w=0&k=20&c=t_5hyUjX_F01MzpfhUzNsIZB_D5pNrgAB1_-wCZnDtU=" alt="Job Posting" style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
        </div>
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h3 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "30px" }}>
            POST NEW JOB
          </h3>
          <form onSubmit={handleJobPost}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "15px", marginBottom: "20px" }}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
                style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem" }}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem" }}
              >
                <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Frontend Web Development">Frontend Web Development</option>
                <option value="MERN Stack Development">MERN STACK Development</option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">MEAN STACK Development</option>
                <option value="Data Entry Operator">Data Entry Operator</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "15px", marginBottom: "20px" }}>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem" }}
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem" }}
              />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem", marginBottom: "20px" }}
            />
            <div style={{ marginBottom: "20px" }}>
              <select
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
                style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "1rem" }}
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
              <div>
                {salaryType === "default" ? (
                  <p style={{ color: "#e53e3e", fontSize: "0.9rem" }}>Please provide Salary Type *</p>
                ) : salaryType === "Fixed Salary" ? (
                  <input
                    type="number"
                    placeholder="Enter Fixed Salary"
                    value={fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      marginBottom: "20px",
                    }}
                  />
                ) : (
                  <div style={{ display: "flex", gap: "15px" }}>
                    <input
                      type="number"
                      placeholder="Salary From"
                      value={salaryFrom}
                      onChange={(e) => setSalaryFrom(e.target.value)}
                      style={{
                        width: "48%",
                        padding: "12px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Salary To"
                      value={salaryTo}
                      onChange={(e) => setSalaryTo(e.target.value)}
                      style={{
                        width: "48%",
                        padding: "12px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <textarea
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "1rem",
                resize: "none",
                marginBottom: "20px",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 20px",
                backgroundColor: "#4C51BF",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
            >
              Create Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
