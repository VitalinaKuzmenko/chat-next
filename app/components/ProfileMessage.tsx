import Image from "next/image";
import trash from "/public/icons/trash-icon.svg";
import pen from "/public/icons/pen-icon.svg";
import { Message, PersonAvatar } from "../page";
import { useState } from "react";

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
  const [editing, setEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState<string>("");

  const updateMessage = () => {
    // Send a PUT request to the server with the form data
    fetch(
      `https://vitalina-kuzmenko-chat-server.glitch.me/messages/${message.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: editedMessage }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("message is updated");
        setMessages(data);
        setEditing(false);
      })
      .catch((error) => console.error(error));
  };

  const deleteMessage = () => {
    //send DELETE request
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

  const defineAvatar = () => {
    console.log(message.from);
  };

  return (
    <div className="my-2">
      <div className="chat chat-end my-1 flex justify-center">
        <div className="chat-bubble w-full bg-grey flex">
          <div className="bg-white rounded-full block cursor-pointer w-12 h-12">
            <label
              className="cursor-pointer"
              htmlFor={`my-modal-${message.from}`}
              onClick={defineAvatar}
            >
              {avatar}
            </label>
          </div>
          {/* popup window for big version of avatar */}
          <input
            type="checkbox"
            id={`my-modal-${message.from}`}
            className="modal-toggle"
          />
          <label
            htmlFor={`my-modal-${message.from}`}
            className="modal cursor-pointer "
          >
            <label className="modal-box relative  bg-blue">
              <div className="bg-white rounded-full block">{avatar}</div>
            </label>
          </label>

          <div className="ml-2 w-full">
            <p className="flex justify-self-start text-blue text-2xl">
              {message.from}
            </p>

            {editing ? (
              <div className="flex justify-between">
                <input
                  type="text"
                  className="bg-white border-0 rounded  px-2 text-blue text-xl w-3/4"
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}
                />
                <div className="flex mr-2">
                  <button
                    className="btn-hover bg-blue py-1 px-3 ml-1 text-grey rounded"
                    onClick={updateMessage}
                  >
                    Save
                  </button>
                  <button
                    className="btn-hover bg-blue py-1 px-3 ml-1 text-grey rounded"
                    onClick={() => {
                      setEditing(false);
                      setEditedMessage("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between">
                <p className=" text-blue text-xl w-4/5">{message.text}</p>
                <div className="flex mr-2">
                  <Image
                    className="mx-1 pb-1 cursor-pointer w-4 "
                    src={pen}
                    alt="Profile avatar"
                    onClick={() => {
                      setEditing(true);
                      setEditedMessage(message.text);
                    }}
                  />
                  <Image
                    className="mx-1 pb-1 cursor-pointer w-4"
                    src={trash}
                    alt="Profile avatar"
                    onClick={deleteMessage}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-right mr-12 text-rose text-lg">{message.timeSent}</p>
    </div>
  );
};

export default ProfileMessage;
