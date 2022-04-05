import React from "react";
import styles from "./Profile.module.scss";

const Profile: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.profileImg}></div>
    </div>
  );
};

export default Profile;
