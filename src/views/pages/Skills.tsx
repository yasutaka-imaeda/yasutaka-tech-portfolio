import React from "react";
import styles from "./Skills.module.scss";
import Header from "../components/Header";
import SkillPoints from "../components/Skill/SkillPoints";

const Skills: React.FC = () => {
  const skillSet = {skill:"React",points: 4, year:2}
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.skillTitle}>Skill</div>
      <div className={styles.skillWrapper}>
        <SkillPoints  skillInfo = {skillSet} />
      </div>
    </div>
  );
};

export default Skills;
