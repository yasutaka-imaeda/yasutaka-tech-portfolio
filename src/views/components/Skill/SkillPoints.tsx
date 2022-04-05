import React from "react";
import styles from "./SkillPoints.module.scss";
import Rating from "@mui/material/Rating";

type Props = {
  skillInfo: {
    skill: string;
    points: number;
    year: number;
  };
};

const SkillPoints: React.FC<Props> = ({ skillInfo }) => {
  return (
    <div className={styles.root}>
      <div className={styles.skillWrapper}>
        <div className={styles.skillName}>{skillInfo.skill}</div>
        <div className={styles.experienceYear}>経験年数：{skillInfo.year}</div>
        <Rating
          name={skillInfo.skill}
          value={skillInfo.points}
          readOnly
          size="large"
        />
      </div>
    </div>
  );
};

export default SkillPoints;
