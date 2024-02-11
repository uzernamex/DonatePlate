import React, { useEffect, useState } from "react";
import DonationsList from "../components/DonationsList";

const DonationsListPage = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/food-donations");
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
      <DonationsList donations={donations} />
    </div>
  );
};

// ---- MUI ----

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }





export default DonationsListPage;