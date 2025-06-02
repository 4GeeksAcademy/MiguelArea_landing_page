import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Copyright from "./Copyright";

function Home() {
  return (
    <>
      <Navbar />
	  <Jumbotron />
	  <Card />
      <Copyright/>
    </>
  );
}



export default Home;