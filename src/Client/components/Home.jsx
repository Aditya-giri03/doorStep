import React from "react";
import Adds from "./HomeComponents/Adds";
import Nav from "./Nav";
import Category_container from "./HomeComponents/Category_container";
const Home = () => {
  return (
    <div className="Home">
      <Nav> </Nav>
      <br></br>
      <div className="card pt-16">
        <Adds />
        <Category_container />
      </div>
    </div>
  );
};

export default Home;
