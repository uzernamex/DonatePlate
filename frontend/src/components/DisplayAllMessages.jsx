import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";
import Navigation from "./Navigation";
import { useAuth0 } from "@auth0/auth0-react";

const DisplayMessage = () => {
  const [messageData, setMessageData] = useState([]);
  const { user } = useAuth0();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/api/display-messages?userId=${userId}`)
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
  }, [userId]); //[userId]

  return (
    <>
      <Navigation user={user} />
      <Container maxWidth="md">
        <Box p={4} border={1} borderColor="primary.main" borderRadius={8}>
          {messageData.length > 0 ? (
            <div>
              <Typography variant="h3">All Messages</Typography>
              {messageData.map((message, index) => (
                <div
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "#f0f0f0" : "#dcdcdc",
                    padding: "10px",
                  }}
                >
                  <Typography className="label">
                    Name: {message.name}
                  </Typography>
                  <Typography className="label">
                    Email: {message.email}
                  </Typography>
                  <Typography className="label">
                    Message: {message.message}
                  </Typography>
                  {index !== messageData.length - 1 && <Divider />}
                </div>
              ))}
            </div>
          ) : (
            <Typography variant="h3">No messages available</Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default DisplayMessage;
