import React from "react";
import classes from "./Sidebar.module.css";
import { useState } from "react";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.patients}>
        <button
          className={`${classes.button} ${!active ? classes.active : ""}`}
          onClick={() => setActive(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${classes.icon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
      <div className={classes.medicine}>
        <button
          className={`${classes.button} ${active ? classes.active : ""}`}
          onClick={() => setActive(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#000000"
            viewBox="0 0 256 256"
            className={classes.icon}
            style={{
              color: active ? "#02c8b5" : "#000000",
            }}
          >
            <rect width="256" height="256" fill="none"></rect>
            <rect
              x="32"
              y="72"
              width="192"
              height="144"
              rx="8"
              fill="none"
              stroke={active ? "#02c8b5" : "#000000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></rect>
            <path
              d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
              fill="none"
              stroke={active ? "#02c8b5" : "#000000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <line
              x1="128"
              y1="116"
              x2="128"
              y2="172"
              fill="none"
              stroke={active ? "#02c8b5" : "#000000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="156"
              y1="144"
              x2="100"
              y2="144"
              fill="none"
              stroke={active ? "#02c8b5" : "#000000"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
