import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import AddressForm from "./components/AddressForm";
import DisplaySingleDonationRequest from "./components/DisplaySingleDonationRequest";
import { useAuth0 } from "@auth0/auth0-react";

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
          <FoodDonationForm/>
          <DisplaySingleDonationRequest/>
          <div className="form-container">
            <FoodDonationForm />
            <AddressForm />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
