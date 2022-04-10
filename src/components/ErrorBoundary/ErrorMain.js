import React from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import classes from "./ErrorMain.module.css";

const ErrorMain = () => {
  const history = useHistory();
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>
        Error! Not Found (this page does not exist).
      </h1>
    </div>
  );
};

export default ErrorMain;
