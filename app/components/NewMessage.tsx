import "../styles/NewMessage.css";
import { useState } from "react";

export default function NewMessage() {
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Name: ${name}, Text: ${text}`);
  }

  return (
    <div className="flex flex-col">
      <div className="right-head">Create a new message</div>
      <div className="new-message">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
