import React from "react";
import styles from "./Explanation.module.scss";

const Explanation: React.FC = () => {
  return (
    <div className={styles.root}>
      <p className={styles.name}>今枝　泰隆</p>
      <p className={styles.text}>
        大手IT企業で勤務するフロントエンドエンジニアです。
      </p>
      <p className={styles.text}>
        実業務でアジャイル開発のスクラム手法に則ったチーム開発の経験があります。
      </p>
      <p className={styles.text}>
        新規事業開発におけるフルスタックエンジニアの重要さを痛感し、
      </p>
      <p className={styles.text}>現在バックエンドも独学で勉強中です。</p>
    </div>
  );
};

export default Explanation;
