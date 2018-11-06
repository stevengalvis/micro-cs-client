import React from "react";
import About from "../About/About";
import Nav from "../Nav/Nav";

export const Home = props => {
  return (
    <div className="home">
      <Nav />
      <About />
    </div>
  );
};
