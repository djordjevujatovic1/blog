import React from "react";
import styles from "./Card1.module.css";
import { Card } from "react-bootstrap";

import img from "./How-a-Simple-Blog-Can-Get-You-Better.jpg";

const Card1 = (props) => {
  return (
    <Card className={styles.cards} style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className={styles.body} style={{ width: "20rem" }}>
        <Card.Title className="title">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card1;
