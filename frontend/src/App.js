import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import FoodDonationForm from "./components/FoodDonationForm";
import DisplaySingleDonationRequest from "./components/DisplaySingleDonationRequest";
import InsertMessageForm from "./components/InsertMessageForm";
import DisplayAllMessages from "./components/DisplayAllMessages";
import {AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem, MenuList } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { isLoading, error, user } = useAuth0();
  const [anchorNav, setAnchorNav] = useState(null);
  const openMenu = (event)=>{
    setAnchorNav(event.currentTarget);
  };
  const closeMenu=()=>{
    setAnchorNav(null);
  };
  return (
    <main>
      <AppBar position = 'static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none', md:'flex'}}}>
        <FoodBankIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>Donate Plate</Typography>
      <Box  sx={{display:{xs:'none', md:'flex'}}}>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'> Sign In</Button>
      </Box>
      <Box  sx={{display:{xs:'flex', md:'none'}}}>
        <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Menu open={Boolean(anchorNav)}  onClose={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Sign In</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'flex', md:'none'}}}>
        <FoodBankIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1, display:{xs:'flex', md:'none'}}}>Donate Plate</Typography>
      </Toolbar>
    </AppBar>
      <h1>Welcome to DonatePlate</h1>
      {!user && <LoginButton />}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && user && (
        <>
          <LogoutButton />
          <Profile />
          <DisplaySingleDonationRequest />
feature-donation-backend

          <InsertMessageForm />
          <DisplayAllMessages />

          <div className="form-container">
            <FoodDonationForm />
          </div>
        </>
      )}
    </main>
  );
}

export default App;