import React, { useEffect, useState } from "react";
import { Message, PersonAvatar } from "../page";

type NewMessageProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setPeople: React.Dispatch<React.SetStateAction<PersonAvatar[]>>;
  newMessageStatus: boolean;
  setNewMessageStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewMessage = ({
  setMessages,
  setPeople,
  newMessageStatus,
  setNewMessageStatus,
}: NewMessageProps) => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //generating random avatar path
  const generateRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    return `/avatars/Avatar_${randomNumber}.svg`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Name: ${name}, Message: ${message}`);

    // Send a POST request to the server with the form data
    fetch("https://vitalina-kuzmenko-chat-server.glitch.me/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: name, text: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(" new array is");
        console.log(data);
        setMessages(data);

        // Update the people state with the new message sender's details
        setPeople((prevPeople) => {
          const newPeople = [...prevPeople];
          data.forEach((message: { from: string }) => {
            if (!newPeople.some((person) => person.name === message.from)) {
              // if this person's details haven't been added yet, create a new entry with a default avatar
              console.log("new person ", message.from);
              newPeople.push({
                name: message.from,
                avatar: generateRandomAvatar(),
              });
            }
          });
          return newPeople;
        });
      })
      .catch((error) => console.error(error));

    // Reset the form fields
    setName("");
    setMessage("");
    //closing the window
    setNewMessageStatus(false);
  };

  interface NewMessage {
    from?: string;
    text?: string;
  }

  return (
    <div
      className={`flex-col mt-5 text-left ${
        newMessageStatus === true ? "flex" : "hidden"
      }`}
    >
      <div className="new-message">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="pl-3 text-2xl">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            required
            className="bg-grey rounded-2xl pt-1 mb-2 text-blue pl-4 text-xl placeholder:text-blue"
          />

          <label htmlFor="text" className="pl-3 text-2xl">
            Message:
          </label>
          <textarea
            id="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Enter your message..."
            required
            className="bg-grey rounded-2xl pt-1 mb-2 text-blue pl-4 text-xl placeholder:text-blue"
          ></textarea>

          <button
            type="submit"
            className="flex justify-center self-end w-40 bg-rose py-0.5 px-4 rounded-2xl text-center text-blue text-xl my-3 mx-2"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMessage;
