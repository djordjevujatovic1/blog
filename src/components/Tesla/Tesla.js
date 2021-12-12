import React from "react";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { Card } from "@mui/material";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination1 from "../Pagination/Pagination1";
import Cards from "../Cards/Cards";

function Tesla() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Cards query={"tesla"} />
      <Pagination1 />
      <Footer />
    </div>
  );
}

export default Tesla;
