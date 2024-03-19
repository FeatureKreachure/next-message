import React from "react";

interface MessageProps {
  text: string;
  isReceived: boolean;
  timestamp: string; // Add a timestamp prop
}

const Message: React.FC<MessageProps> = ({ text, isReceived, timestamp }) => {
  return (
    <div
      className={`message ${isReceived ? "received" : "sent"}`}
      style={{
        borderRadius: "10px",
        backgroundColor: isReceived ? "#e5e5e5" : "#007bff",
        color: isReceived ? "#000" : "#fff",
        alignSelf: isReceived ? "flex-start" : "flex-end",
        maxWidth: "70%",
        padding: "10px",
        margin: "5px",
      }}
    >
      <div>{text}</div>
      <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>
        {timestamp}
      </div>{" "}
      {/* Display timestamp */}
    </div>
  );
};

export default Message;
