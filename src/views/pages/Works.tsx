import React from "react";
import styles from "./Works.module.scss";
import Header from "../components/Header";
import WorksComponents from "../components/Works/WorksComponents";

const Works: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.worksTitle}>Works</div>
      <div className={styles.worksWrapper}>
        <WorksComponents />
      </div>
    </div>
  );
};

export default Works;
