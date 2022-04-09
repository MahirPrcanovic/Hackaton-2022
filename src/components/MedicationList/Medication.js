import styles from "./Medication.module.css";

const Medication = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.medication.createdBy}</p>
      <p>{props.medication.name}</p>
      <p>{props.medication.date1}</p>
      <p>{props.medication.date2}</p>
      <button className={styles.removeButton}>Ukloni</button>
    </div>
  );
};

export default Medication;
