import React from "react";
import styles from "./WorksComponents.module.scss";
import WorksInfo from "./WorksInfo";
import WorksTitle from "./WorksTitle";
import GolfAppImg from "../../../img/GolfAppIMG.png"
import WeatherAppImg from "../../../img/WetherAppIMG.png"
import PortFolioImg from "../../../img/PortFolioImg.png"

const WorksComponents: React.FC = () => {
  const appInfo = [
    {
      discription: "このポートフォリオです。",
      func: ["ホーム画面", "概要", "作成物", "問い合わせ"],
      skill: ["HTML", "CSS", "React", "Typescript", "redux-toolkit", "amplify"],
      isPortFolio: true,
      url: "https://github.com/yasutaka-imaeda/yasutaka-tech-portfolio",
      pictureUrl: PortFolioImg,
    },
    {
      discription: "天気検索アプリです。",
      func: ["天気検索(風速等)", "地図表示", "時間ごとの気温推移", "週間天気"],
      skill: ["HTML", "CSS", "React", "Typescript", "redux-toolkit", "amplify"],
      isPortFolio: false,
      url: "https://main.d1iahj9adnicks.amplifyapp.com/",
      pictureUrl: WeatherAppImg,
    },
    {
      discription: "ゴルフスコア管理アプリです。",
      func: ["認証機能", "スコア入力", "スコア編集/削除", "スコアグラフ分析"],
      skill: [
        "HTML",
        "CSS",
        "React",
        "Typescript",
        "redux-toolkit",
        "amplify",
        "graphQL",
      ],
      isPortFolio: false,
      url: "https://main.d2ouqtaygazu8w.amplifyapp.com/",
      pictureUrl: GolfAppImg,
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
