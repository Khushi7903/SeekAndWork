// import React, { useContext, useState } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { FaPencilAlt } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized } = useContext(Context);

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:8080/api/v1/user/register",
//         { name, phone, email, role, password },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Update local storage
//       const currentData = JSON.parse(localStorage.getItem("heroDetails")) || {
//         jobSeekers: 15,
//         employers: 6,
//       };

//       if (role === "Job Seeker") {
//         currentData.jobSeekers += 1;
//       } else if (role === "Employer") {
//         currentData.employers += 1;
//       }

//       localStorage.setItem("heroDetails", JSON.stringify(currentData));

//       toast.success(data.message);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
//       setRole("");
//       setIsAuthorized(true);
//     } catch (error) {
//       const message =
//         error.response?.data?.message || "An unexpected error occurred";
//       toast.error(message);
//     }
//   };

//   if (isAuthorized) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f0f4ff, #e0e6ff)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           width: "80%",
//           maxWidth: "1000px",
//           background: "#fff",
//           borderRadius: "20px",
//           overflow: "hidden",
//           boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         {/* Form Section */}
//         <div
//           style={{
//             flex: "1",
//             padding: "40px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="/logo.jpg"
//             alt="logo"
//             style={{
//               width: "140px",
//               height:"70px",
//               marginBottom: "20px",
//               alignSelf: "center",
//               mixBlendMode:"multiply"
//             }}
//           />
//           <h3
//             style={{
//               fontSize: "1.5rem",
//               color: "#444",
//               marginBottom: "30px",
//               textAlign: "center",
//             }}
//           >
//             Create a new account
//           </h3>
//           <form>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Register As</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <select
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
//                   onBlur={(e) => e.target.style.borderColor = "#ddd"}
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Employer">Employer</option>
//                   <option value="Job Seeker">Job Seeker</option>
//                 </select>
//                 <FaRegUser
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#aaa",
//                   }}
//                 />
//               </div>
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Name</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
//                   onBlur={(e) => e.target.style.borderColor = "#ddd"}
//                 />
//                 <FaPencilAlt
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#aaa",
//                   }}
                  
//                 />
//               </div>
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Email Address</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
//                   onBlur={(e) => e.target.style.borderColor = "#ddd"}
//                 />
//                 <MdOutlineMailOutline
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#aaa",
//                   }}
//                 />
//               </div>
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Phone Number</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <input
//                   type="number"
//                   placeholder="Enter your Phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
//                   onBlur={(e) => e.target.style.borderColor = "#ddd"}
//                 />
//                 <FaPhoneFlip
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#aaa",
//                   }}
//                 />
//               </div>
//             </div>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Password</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "8px",
//                     outline: "none",
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
//                   onBlur={(e) => e.target.style.borderColor = "#ddd"}
//                 />
//                 <RiLock2Fill
//                   style={{
//                     position: "absolute",
//                     right: "10px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     color: "#aaa",
//                   }}
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               onClick={handleRegister}
//               style={{
//                 padding: "12px",
//                 background: "#9b59b6",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 width: "100%",
//                 fontSize: "1rem",
//               }}
//             >
//               Register
//             </button>
//             <Link
//               to="/login"
//               style={{
//                 display: "block",
//                 marginTop: "20px",
//                 color: "#9b59b6",
//                 textDecoration: "none",
//                 fontWeight: "500",
//                 textAlign: "center",
//               }}
//             >
//               Login Now
//             </Link>
//           </form>
//         </div>

//         {/* Image Section */}
//         <div
//           style={{
//             flex: "1",
//             padding: "20px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="/user.gif"
//             alt="Register Illustration"
//             style={{
//               maxWidth: "80%",
//               maxHeight: "80%",
//               objectFit: "contain",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;



import React, { useContext, useState } from "react";
import { FaRegUser , FaPencilAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation checks
    if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|chitkara\.edu\.in)$/;
    if (!emailRegex.test(email)) {
      toast.error("Email must end with @gmail.com or @chitkara.edu.in.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/user/register",
        { name, phone, email, role, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Update local storage
      const currentData = JSON.parse(localStorage.getItem("heroDetails")) || {
        jobSeekers: 15,
        employers: 6,
      };

      if (role === "Job Seeker") {
        currentData.jobSeekers += 1;
      } else if (role === "Employer") {
        currentData.employers += 1;
      }

      localStorage.setItem("heroDetails", JSON.stringify(currentData));

      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      const message =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(message);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4ff, #e0e6ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          maxWidth: "1000px",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Form Section */}
        <div
          style={{
            flex: "1",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: "140px",
              height: "70px",
              marginBottom: "20px",
              alignSelf: "center",
              mixBlendMode: "multiply"
            }}
          />
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#444",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Create a new account
          </h3>
          <form>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>Register As</label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser 
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>Name</label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
                <FaPencilAlt
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>Email Address</label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
                <MdOutlineMailOutline
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>Phone Number</label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Enter your Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
                <FaPhoneFlip
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>Password</label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#9b59b6"} 
                  onBlur={(e) => e.target.style.borderColor = "#ddd"}
                />
                <div 
                  onClick={() => setShowPassword(!showPassword)} 
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash color="#aaa" /> : <FaEye color="#aaa" />}
                </div>
                {/* <RiLock2Fill
                  style={{
                    position: "absolute",
                    right: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                /> */}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleRegister}
              style={{
                padding: "12px",
                background: "#9b59b6",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                width: "100%",
                fontSize: "1rem",
              }}
            >
              Register
            </button>
            <Link
              to="/login"
              style={{
                display: "block",
                marginTop: "20px",
                color: "#9b59b6",
                textDecoration: "none",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Login Now
            </Link>
          </form>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: "1",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/user.gif"
            alt="Register Illustration"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Register;