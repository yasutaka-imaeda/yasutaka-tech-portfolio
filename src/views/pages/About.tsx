import React from "react";
import styles from "./About.module.scss";
import Header from "../components/Header";
import Profile from "../components/About/Profile";
import Explanation from "../components/About/Explanation";
import LinkIcon from "../components/About/LinkIcon";

const About: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Profile />
          <div>
            <Explanation />
            <LinkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
