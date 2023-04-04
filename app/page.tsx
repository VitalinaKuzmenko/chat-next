"use client";
import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import NewMessage from "./components/NewMessage";
import Search from "./components/Search";
import ProfileAvatar from "./components/ProfileAvatar";
import Sort from "./components/Sort";
import ProfileMessage from "./components/ProfileMessage";

export interface Message {
  id: number;
  from: string;
  text: string;
  timeSent: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "Loading",
      text: "Loading",
      timeSent: "20-03-2023 05:03",
    },
  ]);

  useEffect(() => {
    fetch("https://vitalina-kuzmenko-chat-server.glitch.me/messages")
      .then((response) => response.json())
      .then((data: Message[]) => setMessages(data))
      .catch((error) => console.error(error));
  }, [setMessages]);

  return (
    <div className="flex flex-col text-center text-white font-abc m-10  my-0 mx-auto w-full px-20 md:w-2/3 min-h-screen">
      <h1 className="text-5xl">Vitalina's chat</h1>
      <hr className="" />
      <Buttons setMessages={setMessages} />
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
        {messages.map((message: Message) => {
          return <ProfileMessage key={message.id} message={message} />;
        })}
      </div>
    </div>
  );
};

export default Home;
