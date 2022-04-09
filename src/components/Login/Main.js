import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import classes from "./Main.module.css";

const Main = (props) => {
  const username = useRef();
  const password = useRef();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      username.current.value === "admin" &&
      password.current.value === "admin123"
    ) {
      props.setLoggedIn(true);
      history.push("/pacients");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.intro}>
          <h2>Login</h2>
        </div>
        <div className={classes.formPart}>
          <form className={classes.formDiv} onSubmit={submitHandler}>
            <input
              type="text"
              ref={username}
              className={classes.input}
              placeholder="username"
            />
            <input
              type="text"
              ref={password}
              className={classes.input}
              placeholder="password"
            />
            <button type="submit" className={classes.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
