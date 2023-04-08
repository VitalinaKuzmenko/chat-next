import { Message } from "../page";

interface ButtonsProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setNewMessageStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Buttons = ({ setMessages, setNewMessageStatus }: ButtonsProps) => {
  const showNewMessageOption = () => {
    setNewMessageStatus(true);
  };

  const showAllMessages = () => {
    fetch("https://vitalina-kuzmenko-chat-server.glitch.me/messages")
      .then((response) => response.json())
      .then((data: Message[]) => {
        console.log("see all messages button was clicked");
        setMessages(data);
        setNewMessageStatus(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="Buttons m-4">
      <button
        onClick={showAllMessages}
        className="w-40 bg-rose py-0.5 px-4 rounded-2xl text-center text-blue text-xl mx-2"
      >
        See all messages
      </button>
      <button
        onClick={showNewMessageOption}
        className="w-40 bg-rose py-0.5 px-4 rounded-2xl text-center text-blue text-xl mt-3 mx-2"
      >
        New message
      </button>
    </div>
  );
};

export default Buttons;
