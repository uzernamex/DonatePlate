import React, { useState, useEffect } from "react";
import "../styles/donation.scss";

const DonationsList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/donations");
        if (!response.ok) {
          throw new Error(`Error retrieving data: ${response.status}`);
        }
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="donation-form-container">
      <h1>All Donations</h1>
      {/* <ul> */}
        {donations.map((donation) => (
          <li key={donation.id}>
            <strong>{donation.title}</strong> - {donation.description}
          </li>
        ))}
      {/* </ul> */}
    </div>
  );
};

export default DonationsList;