import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userResponse = await axios.get(
          "http://localhost:5000/api/user/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const skillsResponse = await axios.get(
          "http://localhost:5000/api/skills",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(userResponse.data);
        setSkills(skillsResponse.data); // Fetch skills when component mounts
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to load profile. Please try again.");
      }
    };

    fetchData();
  }, []);

  const addSkill = async () => {
    if (!newSkill.trim()) {
      alert("Skill name cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/skills",
        { name: newSkill },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSkills((prevSkills) => [...prevSkills, response.data]); // Append new skill
      setNewSkill("");
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{user.name ? `${user.name}'s Profile` : "Loading..."}</h1>

      <h2>Your Skills</h2>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill) => (
            <li key={skill._id}>{skill.name}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}

      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add a new skill"
      />
      <button onClick={addSkill} disabled={loading}>
        {loading ? "Adding..." : "Add Skill"}
      </button>
    </div>
  );
};

export default Profile;
