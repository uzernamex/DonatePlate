import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FoodDonationsCard from "./FoodDonationsCard";


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
    <div className="all-donations-container">
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Current Food Drives</h1>
          <div className="food-donation-cards">
            <FoodDonationsCard foodDonations={foodDonations} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllDonationsPage;