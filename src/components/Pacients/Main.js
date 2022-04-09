import React, { useRef } from "react";
import classes from "./Main.module.css";
import { useState } from "react";
import { useId } from "react";
const Main = () => {
  const [form, setForm] = useState(false);
  const [pacients, setPacients] = useState([
    {
      id: 1,
      name: "Emir Avdic",
      dateOfBirth: "23/04/1969",
      city: "Zenica",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 2,
      name: "Zinela Mustafic",
      dateOfBirth: "23/04/1969",
      city: "Sarajevo",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 3,
      name: "Enver Klobodanovic",
      dateOfBirth: "23/04/1969",
      city: "Maglaj",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 4,
      name: "Mirza Akča",
      dateOfBirth: "23/04/1969",
      city: "Livno",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 5,
      name: "Vildan Martić",
      dateOfBirth: "23/04/1969",
      city: "Travnik",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 6,
      name: "Marko Martić",
      dateOfBirth: "23/04/1969",
      city: "Travnik",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 7,
      name: "Enes Begović",
      dateOfBirth: "23/04/1969",
      city: "Travnik",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 8,
      name: "Hidajet Hamzić",
      dateOfBirth: "23/04/1969",
      city: "Travnik",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
    {
      id: 9,
      name: "Husein Gradašević",
      dateOfBirth: "23/04/1969",
      city: "Travnik",
      contact: "0602232232",
      email: "korisnik.pacijent@outlook.com",
    },
  ]);
  const [length, setLength] = useState(9);
  const name = useRef();
  const surname = useRef();
  const dateOfBirth = useRef();
  const sex = useRef();
  const city = useRef();
  const contact = useRef();
  const email = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    setPacients((oldPacients) => {
      return [
        ...oldPacients,
        {
          id: length + 1,
          name: `${name.current.value} ${surname.current.value}`,
          city: city.current.value,
          dateOfBirth: dateOfBirth.current.value,
          contact: contact.current.value,
          email: email.current.value,
        },
      ];
    });
    setLength((old) => old + 1);
    setForm(false);
  };
  return (
    <div className={classes.pacients}>
      {!form ? (
        <div
          className={classes.fixed}
          onClick={() => {
            setForm(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Novi Pacijent
        </div>
      ) : (
        <div className={classes.fixed2}>
          <div className={classes.head}>
            <svg
              onClick={() => setForm(false)}
              xmlns="http://www.w3.org/2000/svg"
              className={`${classes.icon} ${classes.close}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <h2>Dodaj novog pacijenta</h2>
          </div>
          <div className={classes.before}>
            <div className={classes.picture}></div>
            <div>
              <h2>Osobne informacije</h2>
            </div>
          </div>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.form}>
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="Ime"
                ref={name}
                required
              />
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="Prezime"
                ref={surname}
                required
              />
              <div className={classes.datum}>
                <input
                  type="text"
                  name="name"
                  className={classes.formInput}
                  placeholder="Datum rođenja"
                  ref={dateOfBirth}
                  required
                />
                <input
                  type="text"
                  name="name"
                  className={classes.formInput}
                  placeholder="Spol"
                  ref={sex}
                  required
                />
              </div>
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="Grad"
                ref={city}
                required
              />
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="Kontakt"
                ref={contact}
                required
              />
              <input
                type="text"
                name="name"
                className={classes.formInput}
                placeholder="Email"
                ref={email}
                required
              />
            </div>
            <button htmlFor="submit" type="submit" className={classes.button}>
              Potvrdi
            </button>
          </form>
        </div>
      )}
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
            <div className={classes.pacient} key={pacient.id}>
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
