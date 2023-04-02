"use client";
import React from "react";
import Buttons from "./components/Buttons";
import NewMessage from "./components/NewMessage";
import Search from "./components/Search";
import ProfileAvatar from "./components/ProfileAvatar";
import Sort from "./components/Sort";
import Message from "./components/Message";

const Home = () => {
  return (
    <div className="flex font-abc">
      <h1>Vitalina's chat</h1>
      <hr />
      <Buttons />
      <NewMessage />
      <hr />
      <Search />
      {/* mapping through profiles */}
      <ProfileAvatar />
      <Sort />
      {/* mapping throught messages */}
      <Message />
    </div>
  );
};

export default Home;
