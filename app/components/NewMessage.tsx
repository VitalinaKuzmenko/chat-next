import React, { useEffect, useState } from "react";
import { Message } from "../page";

type NewMessageProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  newMessageStatus: boolean;
  setNewMessageStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewMessage = ({
  setMessages,
  newMessageStatus,
  setNewMessageStatus,
}: NewMessageProps) => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [newMessage, setNewMessage] = useState<NewMessage>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Name: ${name}, Message: ${message}`);
    setNewMessage({ from: name, text: message });

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
        console.log(" new message is");
        console.log(data);
        setMessages(data);
      })
      .catch((error) => console.error(error));

    // Reset the form fields
    setName("");
    setMessage("");
    //closing the window
    setNewMessageStatus(false);
  }

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
