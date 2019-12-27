import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h4'>
          SimRacing Setup Garage
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
