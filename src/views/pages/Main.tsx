import React from "react";
import styles from "./Main.module.scss";
import Header from "../components/Header";

const Main: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainWrapper}>
        <p className={styles.maintitle}>Yasutaka Imaeda's Portfolio</p>
        <p className={styles.subtitle}>フロントエンドエンジニア</p>
      </div>
    </div>
  );
};

export default Main;
