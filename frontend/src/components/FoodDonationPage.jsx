import DisplaySingleDonationRequest from "./DisplaySingleDonationRequest";
import InsertMessageForm from "./InsertMessageForm";




const FoodDonationPage = ({foodDontionId}) => {
  return(
    <div>
      <DisplaySingleDonationRequest foodDontionId = {foodDontionId}/>
      <InsertMessageForm foodDontionId = {foodDontionId}/>
    </div> 
  )
};

export default FoodDonationPage;
