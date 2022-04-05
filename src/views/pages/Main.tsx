import React from "react";
import styles from "./Main.module.scss";
import Header from "../components/Header";

const Main: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.root}>
        <p className={styles.maintitle}>Yasutaka.imaeda</p>
        <p className={styles.subtitle}>見習いエンジニアのポートフォリオ</p>
      </div>
    </div>
  );
};

export default Main;
