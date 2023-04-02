"use client";
import React from "react";
import Buttons from "./components/Buttons";
import NewMessage from "./components/NewMessage";
import Search from "./components/Search";

const Home = () => {
  return (
    <div className="flex font-abc">
      <h1>Vitalina's chat</h1>
      <hr />
      <Buttons />
      <NewMessage />
      <hr />
      <Search />
    </div>
  );
};

export default Home;
