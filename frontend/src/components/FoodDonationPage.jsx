import DisplaySingleDonationRequest from "./DisplaySingleDonationRequest";
import Navigation from "./Navigation";
import InsertMessageForm from "./InsertMessageForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';

const FoodDonationPage = () => {
  const { user } = useAuth0();
  const { id } = useParams();
  return (
    <div>
      <Navigation user={user} />
      <DisplaySingleDonationRequest />
      <InsertMessageForm foodDonationId={id} /> 
    </div>
  );
};

export default FoodDonationPage;
