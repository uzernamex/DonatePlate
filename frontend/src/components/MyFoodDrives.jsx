import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import FoodDonationsCard from "./FoodDonationsCard";
import Navigation from "./Navigation";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "@mui/material/Typography";

const MyDonations = () => {
  const [foodDonations, setFoodDonations] = useState([]);

  const { user, loading } = useAuth0();

  const userId = sessionStorage.getItem("userId");
  // const userId = req.body.params;

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
        });
    };

    fetchData();
  }, [userId]);

  //////
  //     .then(
  //       (response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         fetchUserDonations();
  //       },
  //       [userId]
  //     );
  //   };
  // });
  return (
    <>
      <Navigation user={user} />
      <div className="my-donations-container">
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
             <Typography variant="h2" style={{ textAlign: "center", marginBottom: "10px" }}>My Food Drives</Typography>

            <div className="food-donation-cards">
              <FoodDonationsCard foodDonations={foodDonations} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MyDonations;
