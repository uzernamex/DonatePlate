import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FoodDonationPage from './components/FoodDonationPage';
import Homepage from './components/Homepage';
import FoodDonationForm from './components/FoodDonationForm';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/home",
    element: <Homepage />,
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
    path: "/food-donation-form",
    element: <FoodDonationForm />,
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