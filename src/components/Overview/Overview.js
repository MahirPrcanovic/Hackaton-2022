import { useParams } from "react-router-dom";
import styles from "./Overview.module.css";
import { data } from "../data";
const Overview = (props) => {
  const params = useParams();
  const [user] = data.filter((us) => us.id === +params.id);
  console.log(user);
  let index = user.name.indexOf(" ");
  return (
    <div className={styles.container}>
      <h2>INFORMACIJE O PACIJENTU</h2>
      <div className={styles.name}>
        <div className={styles.infoHolder}>
          <h2>Ime</h2>
          <p>{user.name}</p>
        </div>
        <div className={styles.infoHolder}>
          <h2>Prezime</h2>
          <p>{user.name.slice(index, -1)}</p>
        </div>
      </div>
      <div className={styles.infoHolder}>
        <h2>Spol</h2>
        <p>-</p>
      </div>
      <div className={styles.infoHolder}>
        <h2>Datum rođenja</h2>
        <p>{user.dateOfBirth}</p>
      </div>
      <div className={styles.infoHolder}>
        <h2>Grad</h2>
        <p>{user.city}</p>
      </div>
      <div className={styles.gender}></div>
    </div>
  );
};
export default Overview;
