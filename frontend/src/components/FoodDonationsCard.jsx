import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AllDonationsPage from "./AllDonationsPage";

const FoodDonationsCard = ({ foodDonations }) => {
  return (
    <div>
      {foodDonations.map((donation) => (
        <Card key={donation.id} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {donation.title}
            </Typography>
            <Typography color="textSecondary">
              Description: {donation.description}
            </Typography>
            <Typography color="textSecondary">
              Start Date: {new Date(donation.start_date).toLocaleDateString()}
            </Typography>
            <Typography color="textSecondary">
              End Date: {new Date(donation.end_date).toLocaleDateString()}
            </Typography>
            <Typography color="textSecondary">
              Phone: {donation.phone}
            </Typography>
            <Typography color="textSecondary">
              Preferred Food: {donation.preferred_food}
            </Typography>
            <Typography color="textSecondary">
              Allergies: {donation.allergies}
            </Typography>
            <Typography color="textSecondary">
              Target Amount: {donation.target_amount_in_grams} grams
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FoodDonationsCard;