import React, { useState, useEffect } from "react";

const DisplayMessage = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/display-messages")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMessageData(data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="display-messages">
      {messageData.length > 0 ? (
        <div>
          <h1>All Messages</h1>
          {messageData.map((message, index) => (
            <div key={index}>
              <p className="label">Name: {message.name}</p>
              <p className="label">Email: {message.email}</p>
              <p className="label">Message: {message.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayMessage;
