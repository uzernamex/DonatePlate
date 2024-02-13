import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import imgFoodDrive from "./../docs/img-FoodDrive.png";
import RandomImageDisplay from "../RandomImage";
// import AllDonationsPage from "./AllDonationsPage";
// image={require("./../docs/img-FoodDrive.png")}

const imagePaths = [
  "./../docs/img-FoodDrive.png",
  "./../docs/img-NonPerishableFoodItems.png",
];


const FoodDonationsCard = ({ foodDonations }) => {
  return (
    <div>
      {foodDonations.map((donation) => (
        <Card key={donation.id} variant="outlined">
          <RandomImageDisplay imagePath={[donation.imagePath]} />


          {/* <RandomImageDisplay imagePath={imgFoodDrive} /> */}

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
