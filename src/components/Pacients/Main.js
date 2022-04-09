import React, { useRef, useContext, Fragment } from "react";
import classes from "./Main.module.css";
import { useState } from "react";
import { useId } from "react";
import { useHistory } from "react-router-dom";
import { data } from "../data";
import { medicine } from "../data";
const Main = (props) => {
  const [form, setForm] = useState(false);
  const [pacients, setPacients] = useState(data);
  const [meds, setMedicine] = useState(medicine);
  const [length, setLength] = useState(9);
  const name = useRef();
  const surname = useRef();
  const dateOfBirth = useRef();
  const sex = useRef();
  const city = useRef();
  const contact = useRef();
  const email = useRef();
  const history = useHistory();
  const nameOfMedicine = useRef();
  const insertedBy = useRef();
  const timeOfInsert = useRef();
  const quantity = useRef();
  const medicineSubmitHandler = (e) => {
    e.preventDefault();
    setMedicine((oldMed) => {
      return [
        ...oldMed,
        {
          id: `${nameOfMedicine.current.value.slice(0, 1)}${
            timeOfInsert.current.value
          }`,
          name: nameOfMedicine.current.value,
          createdBy: insertedBy.current.value,
          dateOfInsert: timeOfInsert.current.value,
          quantity: quantity.current.value,
        },
      ];
    });
  };
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
          sex: sex.current.value,
        },
      ];
    });
    setLength((old) => old + 1);
    setForm(false);
  };
  return (
    <Fragment>
      {!props.active ? (
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
                <button
                  htmlFor="submit"
                  type="submit"
                  className={classes.button}
                >
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
                <div
                  className={classes.pacient}
                  key={pacient.id}
                  onClick={() => history.push(`/profile/${pacient.id}`)}
                >
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
      ) : (
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
              Novi Lijek
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
                <h2>Dodaj novi lijek</h2>
              </div>
              <div className={classes.before}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className={classes.medicine}
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
                      stroke="#000000"
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
                      stroke="#000000"
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
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                  </svg>
                </div>
                <div>
                  <h2>Informacije o lijeku</h2>
                </div>
              </div>
              <form onSubmit={medicineSubmitHandler} className={classes.form}>
                <div className={classes.form}>
                  <input
                    type="text"
                    name="name"
                    className={classes.formInput}
                    placeholder="Ime i prezime unosioca"
                    ref={insertedBy}
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    className={classes.formInput}
                    placeholder="Naziv lijeka"
                    ref={nameOfMedicine}
                    required
                  />
                  <div className={classes.datum}>
                    <input
                      type="text"
                      name="name"
                      className={classes.formInput}
                      placeholder="Datum unosa u sistem"
                      ref={timeOfInsert}
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      className={classes.formInput}
                      placeholder="Kolicina"
                      ref={quantity}
                      required
                    />
                  </div>
                  {/* <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Grad"
                required
              />
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Kontakt"
                required
              />
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Email"
                required
              /> */}
                </div>
                <button
                  htmlFor="submit"
                  type="submit"
                  className={classes.button}
                >
                  Potvrdi
                </button>
              </form>
            </div>
          )}
          <div className={classes.text}>
            <h2>Lijekovi</h2>
            <h2>Broj lijekova je : {meds.length}</h2>
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
                  placeholder="Pretraži lijek....."
                />
              </div>
              <select name="sort" id="sort" className={classes.select}>
                <option value="All">Sortiraj</option>
                <option value="Ime">Ime</option>
                <option value="Id">Id</option>
                <option value="Kolicina">Kolicina</option>
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
              <h3>ID</h3>
              <h3>Lijek</h3>
              <h3>Unio</h3>
              <h3>Datum unosa</h3>
              <h3>Kolicina</h3>
            </div>
            {meds.map((med) => {
              return (
                <div className={classes.pacient} key={med.id}>
                  <h3>{med.id}</h3>
                  <h3>{med.name}</h3>
                  <h3>{med.createdBy}</h3>
                  <h3>{med.dateOfInsert}</h3>
                  <h3>{med.quantity}</h3>
                  <button className={classes.removeButton}>Ukloni</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Main;
