import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Container, Box } from "@mui/material";
import { useParams } from "react-router";


const DisplaySingleDonationRequest = () => {
  const [donationData, setDonationData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8080/api/donation/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDonationData(data ? data[0] : {});
        })
        .catch((error) => {
          console.error("Error fetching donation data:", error);
        });
    };

    fetchData();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Container maxWidth="md">
      <Box p={4} border={1} borderColor="primary.main" borderRadius={8}>
        {donationData ? (
          <div>
            <Typography variant="h4">{donationData.title}</Typography>
            <Typography className="label">
              Description: {donationData.description}
            </Typography>
            <Typography className="label">
              Start Date: {formatDate(donationData.start_date)}
            </Typography>
            <Typography className="label">
              End Date: {formatDate(donationData.end_date)}
            </Typography>
            <Typography className="label">
              Contact Number: {donationData.phone}
            </Typography>
            <Typography className="label">
              Preferred Food: {donationData.preferred_food}
            </Typography>
            <Typography className="label">
              Allergies: {donationData.allergies}
            </Typography>
            <Typography className="label">
              Targeted Amount in Grams:{" "}
              {donationData.target_amount_in_grams}
            </Typography>
            <Typography className="label">
              Address: {donationData.address_1} {donationData.address_2},{" "}
              {donationData.city}, {donationData.province},{" "}
              {donationData.postal_code}
            </Typography>
          </div>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
};

export default DisplaySingleDonationRequest;
