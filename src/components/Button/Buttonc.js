import React from "react";
import styles from "./Buttonc.module.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Buttonc = () => {
  return (
    <div className={styles.button1}>
      <Button variant="outlined">
        <span>Discover</span>
        <span className={styles.arrow}>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </span>
      </Button>
    </div>
  );
};

export default Buttonc;
