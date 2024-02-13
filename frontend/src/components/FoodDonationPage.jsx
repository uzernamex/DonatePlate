import DisplaySingleDonationRequest from "./DisplaySingleDonationRequest";
import Navigation from "./Navigation";
import InsertMessageForm from "./InsertMessageForm";
import { useAuth0 } from "@auth0/auth0-react";

const FoodDonationPage = ({ foodDonationId }) => {
  const { user } = useAuth0();
  return (
    <div>
      <Navigation user={user}/>
      <DisplaySingleDonationRequest foodDonationId={foodDonationId} />
      <InsertMessageForm foodDonationId={foodDonationId} />
    </div>
  );
};

export default FoodDonationPage;
