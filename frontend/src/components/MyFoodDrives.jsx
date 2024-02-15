import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FoodDonationsCard from "./FoodDonationsCard";
import { useAuth0, User } from "@auth0/auth0-react";

const MyDonations = () => {
  const { isLoading, error, user } = useAuth0();

  const [foodDonations, setFoodDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchUserDonations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/food-donations/${user.sub}/mine`, {
          headers: {
            Authorization: User.sub},
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setFoodDonations(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user donations:", error);
      }
    };

    if (isAuthenticated) {
      fetchUserDonations();
    }
  }, [isAuthenticated]);

  return (
    <div className="my-donations-container">
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>My Donations</h1>

          <div className="food-donation-cards">
            <FoodDonationsCard foodDonations={foodDonations} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDonations;
