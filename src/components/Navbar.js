import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from '../pages/StateProvider';
const Navbar = () => {
  const[{basket}, dispatch] = useStateValue()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>FLAT-APP</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', C: 'none', "marginRight":"15px" }}>Home</Button>
          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none', "marginRight":"15px" }}>Contact</Button>
        <Link to='/detail' ><ShoppingBasketIcon sx={{ "marginRight":"15px", 'color':'white' }} /></Link> 
        <span className="add-to-cart">{basket?.length}</span> 
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;