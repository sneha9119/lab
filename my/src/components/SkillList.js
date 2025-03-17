import React, { useState, useEffect } from "react";
import axios from "axios";

const SkillList = ({ userId }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      setError(""); // Clear any previous errors

      try {
        const endpoint = userId
          ? `http://localhost:5000/api/skills/${userId}`
          : "http://localhost:5000/api/skills"; // Fetch all skills if no userId

        const response = await axios.get(endpoint);
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to load skills. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId !== undefined) {
      fetchSkills();
    }
  }, [userId]);

  return (
    <div>
      <h2>Skills List</h2>

      {loading ? (
        <p>Loading skills...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : skills.length === 0 ? (
        <p>No skills listed yet. Add some skills!</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill._id}>{skill.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillList;
