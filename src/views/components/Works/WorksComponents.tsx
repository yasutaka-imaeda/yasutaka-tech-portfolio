import React from "react";
import styles from "./WorksComponents.module.scss";
import WorksTitle from "./WorksTitle";

const WorksComponents: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.workWrapper}>
        <div className={styles.workComponent}>
          <WorksTitle title={"Portfolio"} />
        </div>
        <div className={styles.workComponent}>
          <WorksTitle title={"SearchWeatherApp"} />
        </div>
        <div className={styles.workComponent}>
          <WorksTitle title={"GolfApp"} />
        </div>
      </div>
    </div>
  );
};

export default WorksComponents;
