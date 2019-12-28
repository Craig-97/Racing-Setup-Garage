import React from 'react';

import { Navbar } from '../../components/Navbar';
import { GamesList } from '../../components/GamesList';

import './App.scss';

const App = () => {

  return (
    <div className='Homepage'>
      <Navbar />
      <GamesList BEM_BASE={'Homepage'}/>
    </div>
  );
};

export default App;
