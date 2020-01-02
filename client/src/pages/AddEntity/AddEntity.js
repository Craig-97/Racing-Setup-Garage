import React from 'react';
import { Navbar } from '../../components/Navbar';
import { GameForm } from '../../components/Forms';

import './AddEntity.scss';

const AddEntity = () => {
  const BEM_BASE = 'Addpage';

  return (
    <>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <h1 className={`${BEM_BASE}-header`}>Add Entity</h1>

        <h1 style={{ color: 'white', textAlign: 'center' }}>
          <GameForm />
        </h1>
      </div>
    </>
  );
};

export default AddEntity;
