import { useState } from "react";
import styles from "./MedicationList.module.css";
import Medication from "./Medication";
const medicationList = [
  {
    id: "2",
    createdBy: "Alina Alić",
    name: "Paracetamol",
    date1: "24.03.2022",
    date2: "12:05",
  },
  {
    id: "4",
    createdBy: "Alina Alić",
    name: "Paracetamol",
    date1: "24.03.2022",
    date2: "20:05",
  },
  {
    id: "7",
    createdBy: "Alina Alić",
    name: "Paracetamol",
    date1: "24.03.2022",
    date2: "9:25",
  },
  {
    id: "9",
    createdBy: "Alina Alić",
    name: "Paracetamol",
    date1: "24.03.2022",
    date2: "14:50",
  },
  {
    id: "12",
    createdBy: "Alina Alić",
    name: "Paracetamol",
    date1: "24.03.2022",
    date2: "13:02",
  },
];
const MedicationList = (props) => {
  const [allMedications, setAllMedications] = useState(medicationList);
  return (
    <div className={styles.container}>
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
        <button className={styles.addMedication}>
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
