import { Message } from "../page";

type ButtonsProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setNewMessageStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const Buttons = ({ setMessages, setNewMessageStatus }: ButtonsProps) => {
  const showNewMessageOption = () => {
    setNewMessageStatus(true);
  };

  return (
    <div className="Buttons m-4">
      <button className="w-40 bg-rose py-0.5 px-4 rounded-2xl text-center text-blue text-xl mx-2">
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
