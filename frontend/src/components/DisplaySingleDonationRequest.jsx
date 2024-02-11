import React, { useState, useEffect } from "react";
import "../styles/DisplaySingleDonationRequest.scss"

const DisplaySingleDonationRequest = ({foodDonationId}) => {
  const [donationData, setDonationData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:8080/api/donation/1") 
      //replace 1 with foodDonationId
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDonationData(data ? data[0]:{});
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
    <div className="display-single-donation-request-container"> 
      {donationData ? (
        <div>
      <h1>{donationData.title}</h1>
      <p className="label">Description: {donationData.description}</p>
      <p className="label">Start Date: {formatDate(donationData.start_date)}</p>
      <p className="label">End Date: {formatDate(donationData.end_date)}</p>
      <p className="label">Contact Number: {donationData.phone}</p>
      <p className="label">Preferred Food: {donationData.preferred_food}</p>
      <p className="label">Allergies: {donationData.allergies}</p>
      <p className="label">Targeted Amount in Grams: {donationData.target_amount_in_grams}</p>
      <p className="label">Address: {donationData.address_1} {donationData.address_2}, {donationData.city}, {donationData.province}, {donationData.postal_code}</p>
    </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default DisplaySingleDonationRequest;
