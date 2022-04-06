import React from "react";
import styles from "./Skills.module.scss";
import Header from "../components/Header";
import SkillPoints from "../components/Skill/SkillPoints";

const Skills: React.FC = () => {
  const skillSet = [
    { skill: "HTML", points: 4, year: 2 },
    { skill: "CSS", points: 4, year: 2 },
    { skill: "javascript", points: 4, year: 2 },
    { skill: "React", points: 4.5, year: 2 },
    { skill: "Redux-tool-kit", points: 4.5, year: 2 },
    { skill: "Typescript", points: 3, year: 1 },
    { skill: "Amplify", points: 2, year: 1 },
    { skill: "GraphQL", points: 2, year: 1 },
    { skill: "Jest", points: 1, year: 1 },
    { skill: "cypress", points: 1.5, year: 1 },
    { skill: "git", points: 4, year: 2 },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.skillTitle}>Skill</div>
      <div className={styles.skillWrapper}>
        {skillSet.map((item: any) => {
          return <SkillPoints skillInfo={item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
