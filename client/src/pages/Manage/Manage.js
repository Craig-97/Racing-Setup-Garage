import React, { Fragment } from "react";
import { hot } from "react-hot-loader";

import { Navbar, GameManagement } from "../../components";

import "./Manage.scss";

const Manage = () => {
  const BEM_BASE = "Addpage";

  return (
    <Fragment>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <GameManagement BEM_BASE={BEM_BASE} />
      </div>
    </Fragment>
  );
};

export default hot(module)(Manage);
