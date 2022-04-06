import React from "react";
import styles from "./WorksInfo.module.scss";

type Props = {
  Info: {
    discription: string;
    func: any;
    skill: any;
    isPortFolio: boolean;
    url: string;
    pictureUrl: any;
  };
};

const WorksInfo: React.FC<Props> = ({ Info }) => {
  return (
    <div className={styles.root}>
      <div className={styles.discription}>{Info.discription}</div>
      <div
        style={{
          backgroundImage: `url(${Info.pictureUrl})`,
          width: "200px",
          height: "100px",
          border: "1px solid black",
        }}
      ></div>
      <div className={styles.listWrapper}>
        <div className={styles.funcWrapper}>
          <div className={styles.funcTitle}>機能</div>
          <ul>
            {Info.func.map((item: any) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.skillWrapper}>
          <div className={styles.skillTitle}>使用技術</div>
          <ul>
            {Info.skill.map((item: any) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={styles.urlWrapper}>
        {Info.isPortFolio ? (
          <a href={Info.url}>github</a>
        ) : (
          <a href={Info.url}>URL</a>
        )}
      </div>
    </div>
  );
};

export default WorksInfo;
