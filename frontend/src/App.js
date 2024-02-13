import React from "react";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import DisplaySingleDonationRequest from "./components/DisplaySingleDonationRequest";
import InsertMessageForm from "./components/InsertMessageForm";
import DisplayAllMessages from "./components/DisplayAllMessages";

import { useAuth0 } from "@auth0/auth0-react";
import FoodDonationsCard from "./components/AllDonationsPage";

function App() {
  const { isLoading, error, user } = useAuth0();

  return (
    <div>
      <Navigation user={user} />
      <div className="form-container">
        <FoodDonationsCard />
      </div>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && user && (
        <>
          <Profile />
          <DisplaySingleDonationRequest />
          <InsertMessageForm />
          <DisplayAllMessages />
          <FoodDonationsCard />
        </>
      )}
    </div>
  );
}

export default App;
