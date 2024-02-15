import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FoodDonationsCard from "./FoodDonationsCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AllDonationsPage = () => {
  const [foodDonations, setFoodDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/food-donations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseJson) => {
        setFoodDonations(responseJson.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food donations:", error);
      });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h2" style={{ textAlign: "center" }}>Current Food Drives</Typography>
            <div className="food-donation-cards">
              <FoodDonationsCard foodDonations={foodDonations} />
            </div>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default AllDonationsPage;
