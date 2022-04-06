import React from "react";
import styles from "./Contacts.module.scss";
import Header from "../components/Header";
import FormComponents from "../components/Contacts/FormComponents";


const Contacts: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.contactTitle}>Contact</div>
      <div className={styles.contactWrapper}>
        <FormComponents />
      </div>
    </div>
  );
};

export default Contacts;
