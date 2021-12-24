import React from "react";
// import Button from "react-bootstrap/Button";
import { Button } from "@mui/material";
import styles from "./ButtonComponent.module.css";

const ButtonComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.variant}>
        <Button variant="outline">Primary</Button>
      </div>
    </div>
  );
};
export default ButtonComponent;

// import React from "react";
// import styles from "./Button.module.css";
// import Button from "react-bootstrap/Button";

// const ButtonBootstrap = () => {
//   return (
//     <div className={styles.buttonBotts}>
//       <Button variant="primary" size="lg">
//         Subscribe
//       </Button>
//     </div>
//   );
// };

// export default ButtonBootstrap;
