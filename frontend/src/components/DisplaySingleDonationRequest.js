import React, { useState, useEffect } from "react";

const DisplaySingleDonationRequest = () => {
  const [donationData, setDonationData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/donation/1") 
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDonationData(data);
        })
        .catch((error) => {
          console.error("Error fetching donation data:", error);
        });
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h1>Title</h1>
      {donationData ? (
        <div>
          <p>Description: {donationData.description}</p>
          <p>Start Date: {formatDate(donationData.start_date)}</p>
          <p>End Date: {formatDate(donationData.end_date)}</p>
          <p>Contact Number: {donationData.phone}</p>
          <p>Preferred Food: {donationData.preferred_food}</p>
          <p>Allergies: {donationData.allergies}</p>
          <p>Targeted Amount in Grams: {donationData.target_amount_in_grams}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplaySingleDonationRequest;
