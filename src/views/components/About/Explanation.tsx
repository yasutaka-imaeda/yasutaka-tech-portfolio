import React from "react";
import styles from "./Explanation.module.scss";

const Explanation: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.name}>今枝　泰隆</p>
      <p className={styles.text}>日々エンジニアを目指して頑張っています。</p>
    </div>
  );
};

export default Explanation;
