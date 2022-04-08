import React from "react";
import classes from "./Main.module.css";

const pacients = [
  {
    name: "Emir Avdic",
    dateOfBirth: "23/04/1969",
    city: "Zenica",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Zinela Mustafic",
    dateOfBirth: "23/04/1969",
    city: "Sarajevo",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Enver Klobodanovic",
    dateOfBirth: "23/04/1969",
    city: "Maglaj",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Mirza Akča",
    dateOfBirth: "23/04/1969",
    city: "Livno",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Vildan Martić",
    dateOfBirth: "23/04/1969",
    city: "Travnik",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Marko Martić",
    dateOfBirth: "23/04/1969",
    city: "Travnik",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Enes Begović",
    dateOfBirth: "23/04/1969",
    city: "Travnik",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Hidajet Hamzić",
    dateOfBirth: "23/04/1969",
    city: "Travnik",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
  {
    name: "Husein Gradašević",
    dateOfBirth: "23/04/1969",
    city: "Travnik",
    contact: "0602232232",
    email: "korisnik.pacijent@outlook.com",
  },
];

const Main = () => {
  return (
    <div className={classes.pacients}>
      <div className={classes.text}>
        <h2>Pacijenti</h2>
        <h2>Broj pacijenata je : {pacients.length}</h2>
      </div>
      <div className={classes.search}>
        <div className={classes.sort}>
          <div className={classes.searchBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classes.searchIcon}
              type="submit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className={classes.input}
              placeholder="Pretraži....."
            />
          </div>
          <select name="sort" id="sort" className={classes.select}>
            <option value="All">Sortiraj</option>
            <option value="720p">Ime</option>
            <option value="1080p">Prezime</option>
            <option value="2160p">Grad</option>
          </select>
        </div>
        <div className={classes.pages}>
          <h2>Rezultata po stranici</h2>
          <select
            name="rezultati"
            id="rezultati"
            className={`${classes.select}`}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div className={classes.intro}>
        <div className={classes.pacient}>
          <h3>Pacijent</h3>
          <h3>Datum rođenja</h3>
          <h3>Grad</h3>
          <h3>Kontakt</h3>
          <h3>Email</h3>
        </div>
        {pacients.map((pacient) => {
          return (
            <div className={classes.pacient}>
              <h3>{pacient.name}</h3>
              <h3>{pacient.dateOfBirth}</h3>
              <h3>{pacient.city}</h3>
              <h3>{pacient.contact}</h3>
              <h3>{pacient.email}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
