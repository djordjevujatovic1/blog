import React from "react";
import styles from "./Main.module.css";
import PaginationComponent from "../Pagination/PaginationComponent";
import CardComponent from "../Card/CardComponent";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const Main = () => {
  const allPosts = [
    {
      id: "e1",
      title: "First Card",
      text: "Drone text in first card",
      src: "https://economictimes.indiatimes.com/thumb/msid-85649831,width-1200,height-900,resizemode-4,imgsize-35746/drone-rules.jpg?from=mdr",
    },
    {
      id: "e2",
      title: "Second Card",
      text: "Tesla motors",
      src: "https://www.bug.hr/img/najavljena-nova-jeftina-tesla-narodski-auto-za-25000-usd_69Llk8.jpg",
    },
    {
      id: "e3",
      title: "Third Card",
      text: "Ford",
      src: "https://www.vmax.si/wp-content/uploads/2021/02/Ford-F-150-Raptor-1.jpg?is-pending-load=1",
    },
  ];
  const teslaPost = [
    {
      id: "e1",
      title: "First Card",
      text: "React text",
      src: "https://media.istockphoto.com/vectors/business-isometric-workplace-vector-id625960832",
    },
    {
      id: "e2",
      title: "Second Card",
      text: "MUI text",
      src: "https://media.istockphoto.com/photos/workspace-picture-id1218639615",
    },
    {
      id: "e3",
      title: "Third Card",
      text: "Ant design text",
      src: "https://media.istockphoto.com/vectors/man-is-working-on-the-computer-back-view-person-sitting-on-a-chair-in-vector-id1133423056",
    },
  ];
  const teslaPostt = [
    {
      id: "e1",
      title: "First Card",
      text: "Web dizajn",
      src: "https://media.istockphoto.com/photos/workspace-with-laptop-computer-coffee-mug-and-plant-pot-picture-id1182608799",
    },
    {
      id: "e2",
      title: "Second Card",
      text: "Moj dizajn",
      src: "https://media.istockphoto.com/photos/knolling-office-desk-picture-id622541416",
    },
    {
      id: "e3",
      title: "Third Card",
      text: "Tvoj dizajn",
      src: "https://media.istockphoto.com/photos/woman-using-a-laptop-picture-id1124345971",
    },
  ];
  return (
    <>
      <div className={styles.Title}>
        <h1>Our Blog Catalog</h1>
      </div>
      <div className={styles.Categories}>
        <h3>Categories: </h3>
      </div>
      <div className={styles.BlogCards}>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="All">
            <div className={styles.allPost}>
              {allPosts.map((item) => {
                return (
                  <CardComponent
                    urlSrc={item.src}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="profile" title="Programiranja">
            <div className={styles.teslaPost}>
              {teslaPost.map((item) => {
                return (
                  <CardComponent
                    urlSrc={item.src}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Dizajn">
            <div className={styles.teslaPost}>
              {teslaPostt.map((item) => {
                return (
                  <CardComponent
                    urlSrc={item.src}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Main;
