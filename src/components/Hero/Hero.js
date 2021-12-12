import React from "react";
import styles from "./Hero.module.css";
import Buttonc from "../Button/Buttonc";
import Button from "@restart/ui/esm/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.tekst}>
        <p>Video Catalog is brought to you by TemplateMo.</p>
        <p>This is a full-width video banner. </p>
        <Buttonc />
      </div>
    </div>
  );
};

export default Hero;
