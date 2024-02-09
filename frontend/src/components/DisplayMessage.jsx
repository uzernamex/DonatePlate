import React, { useState, useEffect } from "react";

const DisplayMessage = () => {
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/messages") 
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMessageData(data && data.length > 0 ? data[0] : {});
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="display-messages"> 
      {messageData ? (
        <div>
          <h1>All Messages</h1>
          <p className="label">Name: {messageData.name}</p>
          <p className="label">Email: {messageData.email}</p>
          <p className="label">Message: {messageData.message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayMessage;
