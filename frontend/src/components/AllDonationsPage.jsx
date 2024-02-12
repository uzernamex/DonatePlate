import React, { useEffect, useState } from "react";
import DonationsList from "../components/DonationsList";
import MediaCard from "./MUI_card";

const DonationsListPage = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/food-donations"
        );
        if (!response.ok) {
          throw new Error(`Error retrieving data: ${response.status}`);
        }
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div>
      <h2>Donations List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {donations.map((donation) => (
          <MediaCard
            key={donation.id}
            title={donation.title}
            description={donation.description}
            image={donation.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DonationsListPage;
