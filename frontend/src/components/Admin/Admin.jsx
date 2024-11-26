import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios for HTTP requests
import "./Admin.css"; // Custom CSS for styling

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/admin/login", {
        name,
        password,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        // Redirect to admin dashboard or another page
        window.location.href = "/admin/dashboard"; // Example redirect
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <img
          src="/logo.png"
          height='50px'
          style={{marginLeft:"38%"}}
        />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
