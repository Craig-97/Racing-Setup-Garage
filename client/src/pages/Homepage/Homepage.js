import React from 'react';

import { Navbar } from '../../components/Navbar';
import { GamesList } from '../../components/Games/GamesList';

import './Homepage.scss';

const Homepage = () => {
  const BEM_BASE = 'Homepage';
  
  return (
    <>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <GamesList BEM_BASE={BEM_BASE} />
      </div>
    </>
  );
};

export default Homepage;
