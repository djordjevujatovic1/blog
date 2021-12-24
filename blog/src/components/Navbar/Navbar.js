// import React from "react";
// import styles from "./Navbar.module.css";
// import Button from "@restart/ui/esm/Button";

// const Navbar = () => {
//   return (
//     <div className={styles.Navbar}>
//       <button className="video">VIDEO</button>
//       <button className="home">HOME</button>
//       <button className="about">ABOUT</button>
//     </div>
//   );
// };
// export default Navbar;

import React from "react";
import styles from "./Navbar.module.css";
// import { FaVideo } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Videos",
    },

    {
      id: 1,
      path: "/about",
      text: "About",
    },

    {
      id: 2,
      path: "/contact",
      text: "Contact",
    },
  ];

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
