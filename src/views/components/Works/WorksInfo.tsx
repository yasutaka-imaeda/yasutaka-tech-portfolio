import React from "react";
import styles from "./WorksInfo.module.scss";

type Props = {
  Info: {
    discription: string;
    func: any;
    skill: any;
    isPortFolio: boolean;
    url: string;
    pictureUrl: string;
  };
};

const WorksInfo: React.FC<Props> = ({ Info }) => {
  return (
    <div className={styles.root}>
      <div className={styles.discription}>{Info.discription}</div>
      <ul>
        {Info.func.map((item: any) => {
          return <li>{item}</li>;
        })}
      </ul>
      <ul>
        {Info.skill.map((item: any) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorksInfo;
