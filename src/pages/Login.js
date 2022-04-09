import React, { Fragment } from "react";
import Main from "../components/Login/Main";

const Login = (props) => {
  return (
    <Fragment>
      <Main setLoggedIn={props.setLoggedIn} />
    </Fragment>
  );
};

export default Login;
