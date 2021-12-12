import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer1}>
      <div className={styles.updates}>
        <h2>Do you want to get our latest updates?</h2>
        <p>
          Please subscribe our newsletter for upcoming new videos and latest
          information about our work. Thank you.
        </p>
        <div className={styles.input1}>
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.quicklinks}>
        <h2>Quick Links</h2>
        <ul className={styles.quicklinksul}>
          <li>Duis bibendum</li>
          <li>Purus non dignissim</li>
          <li>Sapien metus gravida</li>
          <li>Eget consequat</li>
          <li>Praesent eu pulvinar</li>
        </ul>
      </div>
      <div className={styles.ourpages}>
        <h2>Our pages</h2>
        <ul className={styles.ourpagesul}>
          <li>Our Videos</li>
          <li>License Terms</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
