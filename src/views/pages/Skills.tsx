import React from "react";
import styles from "./Skills.module.scss";
import Header from "../components/Header";

const Skills: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>Skills</div>
    </div>
  );
};

export default Skills;
