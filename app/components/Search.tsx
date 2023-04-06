import { useState } from "react";
import { Message } from "../page";

type SearchProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ messages, setMessages, setErrorMessage }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    fetch(
      `https://vitalina-kuzmenko-chat-server.glitch.me/messages/search?text=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data: Message[]) => {
        console.log("searching for message");
        console.log(data);
        setMessages(data);
        if (data.length === 0 || data === undefined || data === null) {
          setErrorMessage("No results found...");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <input
        className="text-xl my-3 w-full rounded-3xl px-4 bg-transparent text-white placeholder:text-white border border-white py-1"
        type="search"
        name="search"
        id="search"
        placeholder="Enter for search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
