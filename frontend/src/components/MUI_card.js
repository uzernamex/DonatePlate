import * as React from "react";
import Card from "@mui/material/Card";
//import imgSrc from "./../docs/img-FoodDrive.png";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function MediaCard({ formData, image }) {
  console.log("inside media card", formData);
  return (
    <div className="media-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          style={{ height: 300, paddingTop: "0%" }}
          image={require("./../docs/img-FoodDrive.png")}
          component="img"
          alt="Food Donation Image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            New Food Drive
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Title: {formData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {formData.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start Date: {formData.start_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            End Date: {formData.end_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Home</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
