import React, { useState } from "react";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ImageContainer = styled("div")({
  height: 100,
  // width: 100,
  paddingTop: "2.5%",
  marginBottom: 20,
});

const RandomImageDisplay = ({ imagePath }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  const images = [
    " ./docs/img-NonPerishableFoodItems.png",
    "../docs/img-FoodDrive.png",
  ];

  const handleRandomize = () => {
    setRandomIndex(Math.floor(Math.random() * imagePath.length));
  };

  return (
    <ImageContainer>
      <CardMedia
        component="img"
        image={imagePath[randomIndex]}
        // image={"./../docs/img-NonPerishableFoodItems.png[0]"}
        // alt="Food Donation Image"
      />
      <Box m={8} />
      <Button variant="contained" color="primary" onClick={handleRandomize}>
        More Details
      </Button>
    </ImageContainer>
  );
};

export default RandomImageDisplay;
