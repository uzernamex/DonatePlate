import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodDonationPage from "./components/FoodDonationPage";
import FoodDonationForm from "./components/FoodDonationForm";
import DisplayAllMessages from "./components/DisplayAllMessages";
import FoodDonationsCard from "./components/FoodDonationsCard";
import MyDonations from "./components/MyFoodDrives";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/all-messages",
    element: <DisplayAllMessages />,
  },
  {
    path: "/my-food-drives",
    element: <MyDonations />,
  },

  {
    path: "/food-donation-form",
    element: <FoodDonationForm />,
  },

  {
    path: "/single-food-donation/:id",
    element: <FoodDonationPage />,
  },

  {
    path: "/all-donations",
    element: <FoodDonationsCard />,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
