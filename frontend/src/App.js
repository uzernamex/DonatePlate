import React, { useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import AddressForm from "./components/AddressForm";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error, user } = useAuth0();

  // For the data submitted in the FoodDonationForm component
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleSubmitFoodDonation = (data) => {
    setSubmittedData(data);
  };

     return (
    <main>
      <h1>Welcome to DonatePlate</h1>

      {!user && <LoginButton />}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && user && (
        <>
          <LogoutButton />
          <Profile />
          <div className="form-container">
            
            [submittedData ? (
              <div>
                <h2>Thank you for registering!</h2>
              </div>
            )]
            <FoodDonationForm />
            <AddressForm />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
