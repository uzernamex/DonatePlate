import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, MenuList, Button } from '@mui/material';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutButton from './LogoutButton'; // Import the LogoutButton component
import LoginButton from './LoginButton'; // Import the LoginButton component

function Navigation() {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <>
      <AppBar position='static' style={{ marginBottom: '50px' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <FoodBankIcon />
            <Typography variant='h6' component='div'>Donate Plate</Typography>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton size='large' edge='end' color='inherit' aria-label='menu' onClick={openMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>All Messages</Button>
            <Button color='inherit'>All Donations</Button>
            <Button color='inherit'>Start a Donation Drive</Button>
          </Box>
          <Box>
            <LoginButton />
          </Box>
          <LogoutButton /> 
        </Toolbar>
        <Menu open={Boolean(anchorNav)} onClose={closeMenu} anchorEl={anchorNav}>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>All Messages</MenuItem>
            <MenuItem>All Donations</MenuItem>
            <MenuItem>Start a Donation Drive</MenuItem>
          </MenuList>
        </Menu>
      </AppBar>
      <Toolbar style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Donate Plate. All rights reserved.
        </Typography>
      </Toolbar>
    </>
  );
}

export default Navigation;
