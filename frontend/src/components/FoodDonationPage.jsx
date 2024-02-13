import DisplaySingleDonationRequest from "./DisplaySingleDonationRequest";
import Navigation from "./Navigation";
import InsertMessageForm from "./InsertMessageForm";

const FoodDonationPage = ({ foodDonationId }) => {
  return (
    <div>
      <Navigation />
      <DisplaySingleDonationRequest foodDonationId={foodDonationId} />
      <InsertMessageForm foodDonationId={foodDonationId} />
    </div>
  );
};

export default FoodDonationPage;
