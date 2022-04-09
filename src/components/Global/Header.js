import React, { useState } from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
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
        <p>INTELLECT</p>
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
          <select name="sort" id="sort" className={classes.select}>
            <option value="All">BOS</option>
            <option value="720p">CRO</option>
            <option value="1080p">SRB</option>
          </select>
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
