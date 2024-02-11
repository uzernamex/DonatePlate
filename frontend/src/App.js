import React from 'react';
import Navigation from './components/Navigation';
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import DisplaySingleDonationRequest from "./components/DisplaySingleDonationRequest";
import InsertMessageForm from "./components/InsertMessageForm";
import DisplayAllMessages from "./components/DisplayAllMessages";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error, user } = useAuth0();

  return (
    <div>
      <Navigation />
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && user && (
        <>
          <Profile />
          <DisplaySingleDonationRequest />
          <InsertMessageForm />
          <DisplayAllMessages />
          <div className="form-container">
            <FoodDonationForm />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
