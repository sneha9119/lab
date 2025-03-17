import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce Search to Optimize API Calls
  useEffect(() => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500); // Wait 500ms before making the request

    return () => clearTimeout(delayDebounce); // Cleanup function
  }, [searchQuery]);

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: { query: searchQuery },
      });
      setResults(response.data);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for skills"
      />
      {loading && <p>Searching...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Results</h3>
      <ul>
        {results.length > 0
          ? results.map((user) => (
              <li key={user._id}>
                {user.name} - Skills: {user.skills.join(", ")}
              </li>
            ))
          : !loading && searchQuery && <p>No results found.</p>}
      </ul>
    </div>
  );
};

export default Search;
