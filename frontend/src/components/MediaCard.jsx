import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function MediaCard({ formData }) {
  console.log("inside media card", formData);
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" component="div" color="green" fontWeight="bold">
          Form Submission Received; Thank you!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card key={formData.id} sx={{ maxWidth: 345 }}>
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
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              size="small"
              component={Link}
              to="/"
              style={{ backgroundColor: "#1170ed", color: "white" }}
            >
              Home
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
