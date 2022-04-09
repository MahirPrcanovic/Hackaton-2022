import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import classes from "./Main.module.css";

const Main = (props) => {
  //username : admin
  //password: admin123
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#02c8b6"
            viewBox="0 0 256 256"
            className={classes.icon}
          >
            <rect width="256" height="256" fill="none"></rect>
            <rect
              x="14.9"
              y="82.7"
              width="226.3"
              height="90.51"
              rx="45.3"
              transform="translate(-53 128) rotate(-45)"
              fill="none"
              stroke="#02c8b5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></rect>
            <line
              x1="96"
              y1="96"
              x2="160"
              y2="160"
              fill="none"
              stroke="#02c8b5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="160.1"
              y1="112.1"
              x2="184.5"
              y2="88.5"
              fill="none"
              stroke="#02c8b5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
          <h2>INTELLECT</h2>
        </div>
        <div className={classes.welcomeMsg}>
          <h2>Dobro došli</h2>
          <p>Unesite podatke za prijavu na račun</p>
        </div>
        <div className={classes.formPart}>
          <form className={classes.formDiv} onSubmit={submitHandler}>
            <input
              type="text"
              ref={username}
              className={classes.input}
              placeholder="Unesite email"
            />
            <input
              type="password"
              ref={password}
              className={classes.input}
              placeholder="Unesite lozinku"
            />
            <button type="submit" className={classes.button}>
              Login
            </button>
          </form>
        </div>
        <p className={classes.passwordMsg}>
          Zaboravili ste lozinku? <em>Resetuj lozinku</em>
        </p>
      </div>
    </div>
  );
};

export default Main;
