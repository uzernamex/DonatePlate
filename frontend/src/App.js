import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import DisplaySingleDonationRequest from "./components/DisplaySingleDonationRequest";
import InsertMessageForm from "./components/InsertMessageForm";
import DisplayAllMessages from "./components/DisplayAllMessages";
import DonationsList from "./components/DonationsList";

function App() {
  const { isLoading, error, user } = useAuth0();
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
          <DisplaySingleDonationRequest />
          <InsertMessageForm />
          <DisplayAllMessages />
          <div className="form-container">
            <FoodDonationForm />
          </div>
          <DonationsList />
          
        </>
      )}
    </main>
  );
}

export default App;