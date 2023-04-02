"use client";
import React from "react";
import Buttons from "./components/Buttons";
import NewMessage from "./components/NewMessage";
import Search from "./components/Search";
import ProfileAvatar from "./components/ProfileAvatar";
import Sort from "./components/Sort";
import ProfileMessage from "./components/ProfileMessage";

const Home = () => {
  return (
    <div className="flex flex-col text-center text-white font-abc m-10  my-0 mx-auto w-full px-20 md:w-2/3 min-h-screen">
      <h1 className="text-5xl">Vitalina's chat</h1>
      <hr className="" />
      <Buttons />
      {/* <NewMessage /> */}
      <hr />
      <Search />
      {/* mapping through profiles */}
      <div className="profiles bg-rose rounded-2xl flex justify-start overflow-x-auto whitespace-nowrap">
        <ProfileAvatar />
      </div>

      <Sort />
      <hr />
      {/* mapping through messages */}
      <div className="mb-10 max-h-128 overflow-y-auto whitespace-nowrap">
        <ProfileMessage />
      </div>
    </div>
  );
};

export default Home;
