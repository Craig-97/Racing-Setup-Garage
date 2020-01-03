import React from 'react';
import { Navbar } from '../../components/Navbar';
import { GameForm } from '../../components/Forms';

import './Manage.scss';

const Manage = () => {
  const BEM_BASE = 'Addpage';

  return (
    <>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <h1 className={`${BEM_BASE}-header`}>Games Form</h1>

          <GameForm />
      </div>
    </>
  );
};

export default Manage;
