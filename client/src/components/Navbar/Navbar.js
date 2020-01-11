import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <AppBar className='Navbar' position='sticky'>
      <Toolbar>
        <Typography variant='h1'>Racing Setup Garage</Typography>
        <div className="Navbar__links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/manage'>Manage</Link>
          </li>
        </ul>
      </div>
      </Toolbar>
    </AppBar>
  );
};
