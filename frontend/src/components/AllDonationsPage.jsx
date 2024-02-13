import React, { useState, useEffect } from "react";
// import FoodDonationsCard from "./FoodDonationsCard";
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
        // console.log("data:", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food donations:", error);
      });
  }, []);

  return (
    <div className="donation-form-container">
      {loading ? (
        <CircularProgress />
      ) : (
        <div 
        // className="food-donations-container"
        >
          <h1>All Donations</h1>
          <div className="food-donation-cards">
            <FoodDonationsCard foodDonations={foodDonations} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllDonationsPage;
