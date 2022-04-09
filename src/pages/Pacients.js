import React, { Fragment } from "react";
import Header from "../components/Global/Header";
import Sidebar from "../components/Global/Sidebar";
import Main from "../components/Pacients/Main";
import classes from "./Pacients.module.css";
const Pacients = (props) => {
  if (!props.loggedIn) {
    return <div className={classes.error}>Please login to continue!</div>;
  }
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Main />
    </Fragment>
  );
};

export default Pacients;
