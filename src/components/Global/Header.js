import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <p>E-Pharm</p>
      </div>
      <div className={classes.info}>
        <div className={classes.header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className={classes.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <h3 className={classes.bs}>BS</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className={classes.iconsmall}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <h2 className={classes.arrow}>|</h2>
        <div className={classes.act}>
          <div className={classes.picture}></div>
          <h3 className={classes.username}>Usain Bolt</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
