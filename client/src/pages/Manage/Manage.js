import React, { Fragment, useState } from 'react';
import { hot } from 'react-hot-loader';
import { Navbar, GameManagement, StandardSelect } from '../../components';

import './Manage.scss';

const Manage = () => {
  const BEM_BASE = 'Addpage';
  const [selectedEntity, setSelectedEntity] = useState('Games');
  const options = ['Games', 'Cars', 'Tracks', 'Setups', 'Drivers']

  const managementComponents = {
    Games: GameManagement
  };

  const renderManagementComponent = () => {
    if (selectedEntity && managementComponents[selectedEntity]) {
      const ManagementComponent = managementComponents[selectedEntity];

      return <ManagementComponent BEM_BASE={BEM_BASE} />;
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <h1 className={`${BEM_BASE}__header`} >{`${selectedEntity} Management`}</h1>

        <StandardSelect
          className={`${BEM_BASE}__select`}
          defaultValue={selectedEntity}
          onChange={event => setSelectedEntity(event.target.value)}
          options={options}
        />

        {renderManagementComponent()}
      </div>
    </Fragment>
  );
};

export default hot(module)(Manage);
