import DisplaySingleDonationRequest from "./DisplaySingleDonationRequest";
import Navigation from './Navigation';
import InsertMessageForm from "./InsertMessageForm";




const FoodDonationPage = ({foodDontionId}) => {
  return(
    <div>
      <Navigation />
      <DisplaySingleDonationRequest foodDontionId = {foodDontionId}/>
      <InsertMessageForm foodDontionId = {foodDontionId}/>
    </div> 
  )
};

export default FoodDonationPage;
