import React, { Fragment } from "react";
import Header from "../components/Global/Header";
import Sidebar from "../components/Global/Sidebar";
import Main from "../components/Pacients/Main";
const Pacients = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Main />
    </Fragment>
  );
};

export default Pacients;
