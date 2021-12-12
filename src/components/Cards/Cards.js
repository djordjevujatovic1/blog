import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card1 from "../Card/Card1";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const APP_KEY = "47c55445becf49da84c890dfd6753e00";

  const [news, setNews] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getNews();
  });
  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.query}&from=2021-12-04&sortBy=popularity&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setNews(data.articles);
  };

  return (
    <div className={styles.cards1}>
      <h1>Our Video Catalog</h1>
      <ul className={styles.ul}>
        <Link to="/bitcoin">
          <li>Bitcoin</li>
        </Link>
        <Link to="/tesla">
          <li>Tesla</li>
        </Link>
        <li>Apple</li>
      </ul>
      <div className={styles.cards}>
        {news.map((newstory) => (
          <Card1 title={newstory.title} description={newstory.description} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
