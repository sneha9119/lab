import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Store error message
  const [loading, setLoading] = useState(false); // Prevent multiple clicks
  const navigate = useNavigate(); // Replaces useHistory

  // Password Validation Function
  const isPasswordStrong = (pwd) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors

    if (!isPasswordStrong(password)) {
      setError(
        "Password must be at least 8 characters long and include a number and special character."
      );
      return;
    }

    try {
      setLoading(true); // Disable button
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      navigate("/login"); // Redirect to login after success
    } catch (error) {
      console.error("Error during registration", error);
      setError(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false); // Enable button again
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error */}
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
