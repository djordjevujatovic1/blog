// import React from "react";
// import styles from "./Card.module.css";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { cardActionAreaClasses } from "@mui/material";
// import Hero from "../Hero/Hero";

// const CardComponent = ({ imgSrc, title, text }) => {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={imgSrc} />
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{text}</Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };
// export default CardComponent;

import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import styles from "./CardComponent.module.css";

const CardComponent = ({ urlSrc, title, text }) => {
  return (
    <div>
      <div className={styles.card_component}>
        <Card style={{ width: "18rem" }}>
          <Card.Img style={{ height: "250px" }} variant="top" src={urlSrc} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
