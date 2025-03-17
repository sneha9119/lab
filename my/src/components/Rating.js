import React, { useState } from "react";
import axios from "axios";

const Rating = ({ ratedUserId, skillExchangeId }) => {
  const [rating, setRating] = useState(1); // Default to 1
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true); // Disable button while submitting

      const response = await axios.post("http://localhost:5000/api/ratings", {
        ratedUserId,
        skillExchangeId,
        rating,
        message,
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setMessage("");
        setRating(1); // Reset to 1 instead of 0
        alert("Rating submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("There was an error submitting your rating.");
    } finally {
      setLoading(false); // Re-enable button
    }
  };

  return (
    <div>
      <h3>Rate this user</h3>
      {isSubmitted ? (
        <p>Your rating has been submitted. Thank you!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Star Rating UI */}
          <div>
            <label>Rating:</label>
            {[1, 2, 3, 4, 5].map((num) => (
              <span key={num} style={{ cursor: "pointer", fontSize: "20px" }}>
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={rating === num}
                  onChange={() => setRating(num)}
                  style={{ display: "none" }}
                />
                <span onClick={() => setRating(num)}>
                  {num <= rating ? "⭐" : "☆"}
                </span>
              </span>
            ))}
          </div>

          <div>
            <label htmlFor="message">Message (Optional):</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Rating"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Rating;
