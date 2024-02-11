import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const handleLogOut = () => {
    window.sessionStorage.removeItem("userId");
    logout();
  }

  return (
    isAuthenticated && (
      <Button color="inherit" onClick={handleLogOut}>
        Sign Out
      </Button>
    )
  )
}

export default LogoutButton;
