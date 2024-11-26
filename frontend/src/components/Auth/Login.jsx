// import React, { useContext, useState } from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { Link, Navigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const { isAuthorized, setIsAuthorized } = useContext(Context);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:8080/api/v1/user/login",
//         { email, password, role },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       toast.success(data.message);
//       setEmail("");
//       setPassword("");
//       setRole("");
//       setIsAuthorized(true);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   if (isAuthorized) {
//     return <Navigate to={"/"} />;
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
//               marginRight:
//               "15px",
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
//             Login to your account
//           </h3>
//           <form>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Login As</label>
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
//               <label style={{ color: "#666", fontSize: "0.9rem" }}>Email Address</label>
//               <div style={{ position: "relative", marginTop: "10px" }}>
//                 <input
//                   type="email"
//                   placeholder="zk@gmail.com"
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
//               onClick={handleLogin}
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
//               Login
//             </button>
//             <Link
//               to="/register"
//               style={{
//                 display: "block",
//                 marginTop: "20px",
//                 color: "#9b59b6",
//                 textDecoration: "none",
//                 fontWeight: "500",
//                 textAlign: "center",
//               }}
//             >
//               Register Now
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
//             src="/hacker.gif"
//             alt="Login Illustration"
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

// export default Login;

import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
// import { GoogleLogin } from "react-google-login";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^(.*@gmail\.com|.*@chitkara\.edu\.in)$/;
    if (!emailPattern.test(email)) {
      toast.error("Email must end with @gmail.com or @chitkara.edu.in");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
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
              marginRight: "15px",
              marginBottom: "20px",
              alignSelf: "center",
              mixBlendMode: "multiply",
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
            Login to your account
          </h3>
          <form>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#666", fontSize: "0.9rem" }}>
                Login As
              </label>
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
                  onFocus={(e) => (e.target.style.borderColor = "#9b59b6")}
                  onBlur={(e) => (e.target.style.borderColor = "#ddd")}
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
              <label style={{ color: "#666", fontSize: "0.9rem" }}>
                Email Address
              </label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type="email"
                  placeholder="Enter registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#9b59b6")}
                  onBlur={(e) => (e.target.style.borderColor = "#ddd")}
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
              <label style={{ color: "#666", fontSize: "0.9rem" }}>
                Password
              </label>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password
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
                  onFocus={(e) => (e.target.style.borderColor = "#9b59b6")}
                  onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? (
                    <FaEyeSlash color="#aaa" />
                  ) : (
                    <FaEye color="#aaa" />
                  )}
                </div>
                <RiLock2Fill
                  style={{
                    position: "absolute",
                    right: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
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
              Login
            </button>
            {/* <GoogleLogin className="google"
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
             /> */}
            <Link
              to="/register"
              style={{
                display: "block",
                marginTop: "20px",
                color: "#9b59b6",
                textDecoration: "none",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Register Now
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
            src="/hacker.gif"
            alt="Login Illustration"
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

export default Login;
