import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FoodDonationsCard = ({ foodDonations }) => {
  const [expandedId, setExpandedId] = React.useState(null);

  const handleExpandClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "80px",
        justifyContent: "center",
      }}
    >
      {foodDonations.map((donation) => (
        <Card
          key={donation.id}
          variant="outlined"
          style={{ marginBottom: "20px", marginRight: "40px", minWidth: "250px", maxWidth: "300px" }}
        >
          <CardMedia
            component="img"
            height="200"
            width="100%"
            image={`${process.env.PUBLIC_URL}/img-NonPerishableFoodItems.png`}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {donation.title}
            </Typography>
            <Typography color="textSecondary">
              Description: {donation.description}
            </Typography>
            <Typography color="textSecondary"
              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}
            >
              Start Date: {new Date(donation.start_date).toLocaleDateString()}
            </Typography>
            <Typography color="textSecondary">
              End Date: {new Date(donation.end_date).toLocaleDateString()}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <CardActions>
              <Button
                size="small"
                component={Link}
                to={`/single-food-donation/${donation.id}`}
              >
                Learn More
              </Button>
            </CardActions>
            <ExpandMore
              expand={expandedId === donation.id}
              onClick={() => handleExpandClick(donation.id)}
              aria-expanded={expandedId === donation.id}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse
            in={expandedId === donation.id}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>Details:</Typography>
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
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default FoodDonationsCard;
