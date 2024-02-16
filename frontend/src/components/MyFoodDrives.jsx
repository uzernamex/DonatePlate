import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FoodDonationsCard from "./FoodDonationsCard";
import Navigation from "./Navigation";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

const MyDonations = () => {
  const [foodDonations, setFoodDonations] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  const { user, loading } = useAuth0();

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/api/my-food-drives?userId=${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setFoodDonations(data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
          setLoadingError(error.message);
        });
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <Navigation user={user} />
      <div className="my-donations-container">
        {loading ? (
          <CircularProgress />
        ) : loadingError ? (
          <Typography variant="body1" style={{ textAlign: "center", color: "red" }}>
            Error: {loadingError}
          </Typography>
        ) : (
          <>
            {foodDonations.length === 0 ? (
              <Typography
                variant="h3"
                style={{
                  textAlign: "center",
                  color: "black",
                  border: "1px solid blue",
                  borderRadius: "20px",
                  padding: "10px",
                  margin: "10px auto",
                  maxWidth: "50%",
                }}
              >
                You have no food drives
              </Typography>
            ) : (
              <>
                <Typography
                  variant="h2"
                  style={{ textAlign: "center", marginBottom: "10px" }}
                >
                  My Food Drives
                </Typography>
                <div className="food-donation-cards">
                  <FoodDonationsCard foodDonations={foodDonations} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MyDonations;
