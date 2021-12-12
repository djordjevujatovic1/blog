import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar1}>
      <ul className={styles.ull}>
        <li>VIDEOS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
