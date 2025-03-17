import React, { useState } from "react";
import axios from "axios";

const Message = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/messages", {
        text: message,
      });

      console.log("Message Sent:", response.data);
      setMessage(""); // Clear input after sending
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message..."
        rows="4"
        maxLength="200"
        onKeyDown={(e) =>
          e.key === "Enter" && !e.shiftKey && handleSendMessage()
        }
        style={{ resize: "none", padding: "8px", fontSize: "16px" }}
      />
      <button onClick={handleSendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default Message;
