import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ resetView, setResetView }) => {
  return (
    <div className={styles.header}>
      <h1>Troll Mountain</h1>
      <div className={styles.nav}>
        <button onClick={() => setResetView(!resetView)}>Reset View</button>
      </div>
    </div>
  );
};

export default Header;
