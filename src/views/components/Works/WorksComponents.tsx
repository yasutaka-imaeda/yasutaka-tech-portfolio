import React from "react";
import styles from "./WorksComponents.module.scss";
import WorksInfo from "./WorksInfo";
import WorksTitle from "./WorksTitle";

const WorksComponents: React.FC = () => {
  const appInfo = [
    {
      discription: "このポートフォリオです。",
      func: ["機能１", "機能２"],
      skill: ["技術１", "技術２"],
      isPortFolio: false,
      url: "",
      pictureUrl: "",
    },
    {
      discription: "天気検索アプリです。",
      func: ["機能１", "機能２"],
      skill: ["技術１", "技術２"],
      isPortFolio: false,
      url: "",
      pictureUrl: "",
    },
    {
      discription: "ゴルフスコア管理アプリです。",
      func: ["機能１", "機能２"],
      skill: ["技術１", "技術２"],
      isPortFolio: false,
      url: "",
      pictureUrl: "",
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.workWrapper}>
        <div className={styles.workComponent}>
          <WorksTitle title={"Portfolio"} />
          <WorksInfo Info={appInfo[0]} />
        </div>
        <div className={styles.workComponent}>
          <WorksTitle title={"SearchWeatherApp"} />
          <WorksInfo Info={appInfo[1]} />
        </div>
        <div className={styles.workComponent}>
          <WorksTitle title={"GolfApp"} />
          <WorksInfo Info={appInfo[2]} />
        </div>
      </div>
    </div>
  );
};

export default WorksComponents;
