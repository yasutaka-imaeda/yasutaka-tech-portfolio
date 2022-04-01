import React from "react";
import styles from "./About.module.scss";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div>About</div>
    </div>
  );
};

export default About;
