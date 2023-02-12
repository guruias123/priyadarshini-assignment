import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Home.css'
import Items from "./Items";
import Monitoring from "./Monitoring";

function Home() {
  return (
    <div className="container">
        <Header />
        <Monitoring />
        <Items />
        <Footer />
    </div>
  );
}

export default Home;
