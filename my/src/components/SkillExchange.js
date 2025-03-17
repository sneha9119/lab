// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Rating from "./Rating"; // Import Rating component

// const SkillExchange = ({ exchangeId, currentUserId }) => {
//   const [exchangeDetails, setExchangeDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchExchangeDetails = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/exchanges/${exchangeId}`
//         );
//         setExchangeDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching exchange details:", error);
//         setError("Failed to load skill exchange details.");
//       // } finally {
//       //   setLoading(false);
//       // }
//     };

//     if (!exchangeDetails) {
//       fetchExchangeDetails();
//     }
//   }, [exchangeId, exchangeDetails]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading exchange details...</p>
//       ) : error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         exchangeDetails && (
//           <div>
//             <h2>Skill Exchange Details</h2>
//             <p>
//               <strong>Exchange ID:</strong> {exchangeDetails._id}
//             </p>
//             <p>
//               <strong>Offered Skill:</strong> {exchangeDetails.offeredSkill}
//             </p>
//             <p>
//               <strong>Requested Skill:</strong> {exchangeDetails.requestedSkill}
//             </p>

//             {/* Conditionally Render Rating Component */}
//             {exchangeDetails.partnerUserId ? (
//               <Rating
//                 ratedUserId={exchangeDetails.partnerUserId}
//                 skillExchangeId={exchangeDetails._id}
//               />
//             ) : (
//               <p>Partner user information is not available.</p>
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default SkillExchange;
import React from "react";
import { Link } from "react-router-dom";
import "./SkillExchange.css"; // Import styles

const SkillExchange = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <div className="hero">
        <h1>
          <span className="highlight">Skill</span>Exchange<span className="dot">.</span>
        </h1>
        <p>Trade <span className="highlight">Skills</span>, Build <span className="highlight">Connections</span></p>
        {/* <p className="users-count">Registered <span className="count">95</span> users till now...</p> */}
        <Link to="/register" className="cta-button">Get Started!</Link>
      </div>

      <footer>
        <p>Made with ❤️</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      </footer>
    </div>
  );
};

export default SkillExchange;
