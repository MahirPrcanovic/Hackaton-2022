import { useRef, useState } from "react";
import styles from "./MedicationList.module.css";
import Medication from "./Medication";
import { medicationList } from "../medication-data";
const MedicationList = (props) => {
  const [allMedications, setAllMedications] = useState(medicationList);
  const [form, setForm] = useState(false);
  const name = useRef();
  const medicine = useRef();
  const dateOfInsert = useRef();
  const timeOfInsert = useRef();
  const [length, setLength] = useState(10);
  const submitHandler = (e) => {
    e.preventDefault();
    setAllMedications((oldMedication) => {
      return [
        ...oldMedication,
        {
          id: length + 1,
          name: medicine.current.value,
          createdBy: name.current.value,
          date1: dateOfInsert.current.value,
          date2: timeOfInsert.current.value,
        },
      ];
    });
    setLength((old) => old + 1);
    setForm(false);
  };
  return (
    <div className={styles.container}>
      {!form ? (
        <div
          className={styles.fixed}
          onClick={() => {
            setForm(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
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
        <div className={styles.fixed2}>
          <div className={styles.head}>
            <svg
              onClick={() => setForm(false)}
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} ${styles.close}`}
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
          <div className={styles.before}>
            <div className={styles.picture}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#000000"
                viewBox="0 0 256 256"
                className={styles.medicine}
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
          <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.form}>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Ime i prezime poslužioca"
                ref={name}
                required
              />
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Lijek"
                ref={medicine}
                required
              />
              <div className={styles.datum}>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="Datum unosa u sistem"
                  ref={dateOfInsert}
                  required
                />
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="Vrijeme unosa u sistem"
                  ref={timeOfInsert}
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
            <button htmlFor="submit" type="submit" className={styles.button}>
              Potvrdi
            </button>
          </form>
        </div>
      )}
      <div className={styles.navBar}>
        <div className={styles.inputField}>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input placeholder="Pretrazi" className={styles.input2}></input>
        </div>
        <select name="sort" id="sort" className={styles.select}>
          <option value="Datum">Datum</option>
          <option value="Lijek">Lijek</option>
        </select>
        <button className={styles.addMedication} onClick={() => setForm(true)}>
          <svg
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          Dodaj novi lijek
        </button>
      </div>
      <div className={styles.mediList}>
        <div className={styles.mediListNav}>
          <p>Poslužio</p>
          <p>Lijek</p>
          <p>Datum unosa u sistem</p>
          <p>Vrijeme unosa u sistem</p>
          <div className={styles.placeHolder}></div>
        </div>

        {allMedications.map((element) => (
          <Medication medication={element} />
        ))}
      </div>
    </div>
  );
};

export default MedicationList;
