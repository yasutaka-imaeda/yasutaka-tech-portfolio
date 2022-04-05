import React from "react";
import styles from "./WorksTitle.module.scss";


type Props = {
  title: string;
};

const WorksTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.worksTitle}>{title}</div>
    </div>
  );
};

export default WorksTitle;
