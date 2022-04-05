import React from "react";
import styles from "./LinkIcon.module.scss";

const LinkIcon: React.FC = () => {
  const handleClickGithub = () => {
    window.open("https://github.com/yasutaka-imaeda", "_blank");
  };
  const handleClickInstagram = () => {
    window.open("https://www.instagram.com/yassi_1013/", "_blank");
  };
  return (
    <div className={styles.root}>
      <div className={styles.github} onClick={handleClickGithub}></div>
      <div className={styles.instagram} onClick={handleClickInstagram}></div>
    </div>
  );
};

export default LinkIcon;
