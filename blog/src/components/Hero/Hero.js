// import React from "react";
// import ButtonComponent from "../Button/ButtonComponent";
// import Navbar from "../Navbar/Navbar";
// import styles from "./Hero.module.css";

// const Hero = () => {
//   return (
//     <div className={styles.Hero}>
//       <div className={styles.Navbar}>
//         <Navbar />
//       </div>
//       <div className={styles.Text}>Just simple text </div>

//       <div className={styles.Button}>
//         <ButtonComponent />
//       </div>
//     </div>
//   );
// };
// export default Hero;

import React from "react";
import styles from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import Video from "../Video/wheat-field.mp4";
import ButtonComponent from "../Button/ButtonComponent";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            top: "0",
            height: "100%",
            objectFit: "cover",
            zIndex: "-999",
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.heroText}>
        <p>
          Video Catalog is brought to you by TemplateMo. <br></br> This is a
          full-width video banner.
        </p>
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Hero;
