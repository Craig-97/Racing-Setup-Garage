import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Navbar, GameForm } from "../../components";

import "./Manage.scss";

const Manage = () => {
  const BEM_BASE = "Addpage";

  return (
    <Fragment>
      <Navbar />
      <div className={`${BEM_BASE} page-container`}>
        <h1 className={`${BEM_BASE}-header`}>Games Form</h1>

        <GameForm />
      </div>
    </Fragment>
  );
};

export default hot(module)(Manage);
