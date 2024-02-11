import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import FoodDonationPage from "./components/FoodDonationPage";
import DonationsList from "./components/DonationsList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>Welcome to my about page!!!</div>,
  },
  {
    path: "/food-donation",
    element: <FoodDonationPage />,
  },
  {
    path: "/api/donations",
    element: <DonationsList />,
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
