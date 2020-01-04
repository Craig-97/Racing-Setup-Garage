import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Navbar } from '../../components/Navbar';
import { GamesList } from '../../components/Games/GamesList';

import './Homepage.scss';

const Homepage = () => {
  const BEM_BASE = 'Homepage';

  return (
    <Fragment>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <GamesList BEM_BASE={BEM_BASE} />
      </div>
    </Fragment>
  );
};

export default hot(module)(Homepage);
