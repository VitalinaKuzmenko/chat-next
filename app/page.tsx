"use client";
import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import NewMessage from "./components/NewMessage";
import Search from "./components/Search";
import ProfileAvatar from "./components/ProfileAvatar";
import Sort from "./components/Sort";
import ProfileMessage from "./components/ProfileMessage";
import { getRandomOptions } from "./BigHeadsAvatar";
import { BigHead } from "@bigheads/core";

export interface Message {
  id: number;
  from: string;
  text: string;
  timeSent: string;
}

export interface PersonAvatar {
  name: string;
  avatar: JSX.Element;
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
  const [people, setPeople] = useState<PersonAvatar[]>([]);
  //for showing and closing new message window
  const [newMessageStatus, setNewMessageStatus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(
    "Loading messages..."
  );

  const displayMessages = () => {
    fetch("https://vitalina-kuzmenko-chat-server.glitch.me/messages")
      .then((response) => response.json())
      .then((data: Message[]) => {
        console.log("fetching messages from api");
        const newPeople: {
          [key: string]: { name: string; avatar: JSX.Element };
        } = {};
        data.forEach((message) => {
          if (!newPeople[message.from]) {
            // if this person's details haven't been added yet, create a new entry with a default avatar
            console.log("new person ", message.from);

            newPeople[message.from] = {
              name: message.from,
              avatar: <BigHead {...getRandomOptions()} />,
            };
          }
        });
        setPeople(Object.values(newPeople));
        setMessages(data);
      })
      .catch((error) => console.error(error));
  };

  //displaying all the messages and generating profiles
  useEffect(() => {
    displayMessages();
  }, [setMessages, setPeople]);

  //just for console log people array
  useEffect(() => {
    console.log("People:", people);
    console.log("LENGTH OF ARRAY");
    console.log(people.length);
  }, [people]);

  return (
    <>
      <div className="flex flex-col text-center text-white font-abc m-10  my-0 mx-auto w-full px-20 md:w-2/3 min-h-screen">
        <h1 className="text-5xl">Vitalina chat</h1>
        <hr className="" />
        <Buttons
          setMessages={setMessages}
          setNewMessageStatus={setNewMessageStatus}
        />
        <NewMessage
          setMessages={setMessages}
          setPeople={setPeople}
          newMessageStatus={newMessageStatus}
          setNewMessageStatus={setNewMessageStatus}
        />
        <hr />
        <Search
          messages={messages}
          setMessages={setMessages}
          setErrorMessage={setErrorMessage}
        />
        {/* mapping through profiles */}
        {people.length !== 0 || people === undefined || people === null ? (
          <div className="profiles bg-rose rounded-2xl flex justify-start overflow-x-auto whitespace-nowrap">
            {people.map((person) => {
              return (
                <>
                  <ProfileAvatar
                    key={people.indexOf(person)}
                    name={person.name}
                    avatar={person.avatar}
                    setMessages={setMessages}
                  />
                </>
              );
            })}
          </div>
        ) : (
          <p className="text-xl mt-5">Loading data...</p>
        )}

        <Sort setMessages={setMessages} />
        <hr />
        {/* mapping through messages */}
        {messages.length !== 0 ||
        messages === undefined ||
        messages === null ? (
          <div className="mb-10 max-h-128 overflow-y-auto text-left">
            {messages.map((message: Message) => {
              const person = Object.values(people).find(
                (person) => message.from === person.name
              );
              if (person && person.avatar) {
                // Only render if person and avatar are defined
                return (
                  <ProfileMessage
                    key={message.id}
                    message={message}
                    avatar={person.avatar}
                  />
                );
              }
              return null; // Return null otherwise to avoid rendering an empty element
            })}
          </div>
        ) : (
          <p className="text-xl mt-5">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Home;
