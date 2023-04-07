import Image from "next/image";
import trash from "/public/icons/trash-icon.svg";
import pen from "/public/icons/pen-icon.svg";
import { Message, PersonAvatar } from "../page";

interface ProfileMessageProps {
  message: Message;
  avatar: JSX.Element;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setPeople: React.Dispatch<React.SetStateAction<PersonAvatar[]>>;
}

const ProfileMessage = ({
  message,
  avatar,
  setMessages,
  setPeople,
}: ProfileMessageProps) => {
  const updateMessage = () => {};

  const deleteMessage = () => {
    fetch(
      `https://vitalina-kuzmenko-chat-server.glitch.me/messages/${message.id}`,
      { method: "DELETE" }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("The message was deleted");
        setMessages(data);

        // Remove people if they are no longer in the data array
        setPeople((prevPeople) => {
          const newPeople = [...prevPeople];

          return newPeople.filter((person) =>
            data.some(
              (message: { from: string }) => message.from === person.name
            )
          );
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="my-2">
      <div className="chat chat-end my-1 flex justify-center">
        <div className="chat-bubble w-full bg-grey flex">
          <div className="bg-white rounded-full block cursor-pointer w-12 h-12">
            {avatar}
          </div>

          <div className="ml-2 w-full">
            <p className="flex justify-self-start text-blue text-2xl">
              {message.from}
            </p>
            <div className="flex justify-between">
              <p className=" text-blue text-xl w-4/5">{message.text}</p>
              <div className="flex mr-2">
                <Image
                  className="mx-1 pb-1 cursor-pointer w-4 "
                  src={pen}
                  alt="Profile avatar"
                  onClick={updateMessage}
                />
                <Image
                  className="mx-1 pb-1 cursor-pointer w-4"
                  src={trash}
                  alt="Profile avatar"
                  onClick={deleteMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right mr-12 text-rose text-lg">{message.timeSent}</p>
    </div>
  );
};

export default ProfileMessage;
