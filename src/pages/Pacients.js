import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Global/Header";
import Sidebar from "../components/Global/Sidebar";
import Main from "../components/Pacients/Main";
import classes from "./Pacients.module.css";
const Pacients = (props) => {
  const history = useHistory();
  if (!props.loggedIn) {
    return (
      <div className={classes.errorContainer}>
        <div className={classes.error}>Please login to continue!</div>
        <button onClick={() => history.push("/")} className={classes.button}>
          Go back!
        </button>
      </div>
    );
  }
  return (
    <Fragment>
      <Header />
      <Sidebar active={props.active} setActive={props.setActive} />
      <Main active={props.active} />
    </Fragment>
  );
};

export default Pacients;
