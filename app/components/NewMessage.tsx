import React, { useState } from "react";

const NewMessage = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Name: ${name}, Message: ${message}`);
  }

  return (
    <div className="flex flex-col mt-5 text-left">
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
