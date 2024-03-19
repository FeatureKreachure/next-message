"use client";
import React, { useState, useRef, useEffect } from "react";
import Message from "@/atoms/Message";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [messages, setMessages] = useState<
    {
      text: string;
      isReceived: boolean;
      timestamp: string;
    }[]
  >([]);
  const [messageText, setMessageText] = useState<string>("");
  const [messageText2, setMessageText2] = useState<string>("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (messageText.trim() === "") return; // Do not send empty messages

    const newMessage = {
      text: messageText,
      isReceived: false,
      timestamp: new Date().toLocaleString(), // Generate timestamp
    };

    setMessages([...messages, newMessage]);
    setMessageText(""); // Clear the input field after sending the message
  };

  const handleSendMessage2 = () => {
    if (messageText2.trim() === "") return; // Do not send empty messages

    const newMessage = {
      text: messageText2,
      isReceived: true,
      timestamp: new Date().toLocaleString(), // Generate timestamp
    };

    setMessages([...messages, newMessage]);
    setMessageText2(""); // Clear the input field after sending the message
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto" ref={chatContainerRef}>
      <div className="flex flex-col justify-end">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            isReceived={message.isReceived}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <div className="flex justify-between p-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Type your message..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <div className="flex justify-between p-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Type your message..."
          value={messageText2}
          onChange={(e) => setMessageText2(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleSendMessage2}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
