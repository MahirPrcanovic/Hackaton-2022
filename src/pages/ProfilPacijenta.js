import styles from "./ProfilPacijenta.module.css";
import { useState, Fragment } from "react";
import Header from "../components/Global/Header";
import Sidebar from "../components/Global/Sidebar";
import Overview from "../components/Overview/Overview";
import MedicationList from "../components/MedicationList/MedicationList";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../components/data";
const ProfilPacijenta = (props) => {
  const params = useParams();
  const [user] = data.filter((us) => us.id === +params.id);
  const match = useParams();
  console.log(match.id);
  const history = useHistory();
  const backButton = "< Nazad";
  const [navBarSelection, setNavBarSelection] = useState(0);
  const selectionOverview = () => {
    setNavBarSelection(0);
  };
  const selectionMedication = () => {
    setNavBarSelection(1);
  };

  return (
    <Fragment>
      <Header />
      <Sidebar />
      <div className={styles.container}>
        <button
          className={styles.backButton}
          onClick={() => history.push("/pacients")}
        >
          {backButton}
        </button>
        <h1 className={styles.name}>{user.name}</h1>
        <div className={styles.navBar}>
          <button
            className={styles.overview}
            onClick={selectionOverview}
            style={{ color: navBarSelection === 0 ? "#02c8b6" : "" }}
          >
            O pacijentu
          </button>
          <button
            className={styles.medications}
            onClick={selectionMedication}
            style={{ color: navBarSelection === 1 ? "#02c8b6" : "" }}
          >
            Lijekovi
          </button>
        </div>
        {navBarSelection === 0 ? <Overview /> : <MedicationList />}
      </div>
    </Fragment>
  );
};

export default ProfilPacijenta;
