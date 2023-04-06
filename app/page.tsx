"use client";
import msgjson from "./messages.json";
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
  const [people, setPeople] = useState<{ name: string; avatar: string }[]>([]);

  //generating random avatar path
  const generateRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    return `/avatars/Avatar_${randomNumber}.svg`;
  };

  useEffect(() => {
    fetch("https://vitalina-kuzmenko-chat-server.glitch.me/messages")
      .then((response) => response.json())
      .then((data: Message[]) => {
        const newPeople: { [key: string]: { name: string; avatar: string } } =
          {};
        msgjson.forEach((message) => {
          if (!newPeople[message.from]) {
            // if this person's details haven't been added yet, create a new entry with a default avatar
            console.log("new person ", message.from);
            newPeople[message.from] = {
              name: message.from,
              avatar: generateRandomAvatar(),
            };
          }
        });
        setPeople(Object.values(newPeople));
        setMessages(data);
      })
      .catch((error) => console.error(error));
  }, [setMessages]);

  //for cases when I have too many requests on server
  // useEffect(() => {
  //   console.log(msgjson);
  //   const newPeople: { [key: string]: { name: string; avatar: string } } = {};
  //   msgjson.forEach((message) => {
  //     if (!newPeople[message.from]) {
  //       // if this person's details haven't been added yet, create a new entry with a default avatar
  //       console.log("new person ", message.from);
  //       newPeople[message.from] = {
  //         name: message.from,
  //         avatar: "/avatars/Avatar_1.svg",
  //       };
  //     }
  //   });
  //   setPeople(Object.values(newPeople));
  //   setMessages(msgjson);
  // }, [setMessages]);

  //just for console log people array
  useEffect(() => {
    console.log("People:", people);
    console.log("LENGTH OF ARRAY");
    console.log(people.length);
  }, [people]);

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
      <div className="mb-10 max-h-128 overflow-y-auto text-left">
        {messages.map((message: Message) => {
          const person = Object.entries(people).find(
            ([_, person]) => message.from === person.name
          );
          return (
            <ProfileMessage
              key={message.id}
              message={message}
              avatar={person?.[1]?.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
