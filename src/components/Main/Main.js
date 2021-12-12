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
          <Tab eventKey="profile" title="Tesla">
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
          <Tab eventKey="contact" title="Tech"></Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Main;
