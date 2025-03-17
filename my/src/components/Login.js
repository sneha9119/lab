// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       localStorage.setItem("token", response.data.token);
//       navigate("/dashboard"); // Redirect after login
//     } catch (error) {
//       if (error.response) {
//         alert(error.response.data.message || "Invalid credentials");
//       } else {
//         alert("Network error. Please try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//         autoFocus
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// };

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      {/* Main Login Section */}
      <div className="login-content">
        {/* Left-side Image */}
        <div className="login-image">
          <img src="/login-illustration.png" alt="Login Illustration" />
        </div>

        {/* Right-side Login Form */}
        <div className="login-form">
          <h2>Login</h2>
          <label>Your email</label>
          <input type="email" placeholder="name@email.com" />

          <label>Your password</label>
          <input type="password" placeholder="••••••••" />

          <Link to="/register" className="signup-link">Sign up!</Link>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
