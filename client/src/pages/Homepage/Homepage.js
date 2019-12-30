import React from 'react';

import { Navbar } from '../../components/Navbar';
import { GamesList } from '../../components/GamesList';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className='Homepage'>
      <Navbar />
      <GamesList BEM_BASE={'Homepage'} />
    </div>
  );
};

export default Homepage;
