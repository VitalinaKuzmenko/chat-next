import { Message } from "../page";
import Avatar from "/public/avatars/Avatar_1.svg";
import Image from "next/image";

interface ProfileAvatarProps {
  name: string;
  avatar: string;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ProfileAvatar = ({ name, avatar, setMessages }: ProfileAvatarProps) => {
  const displayNameMessages = () => {
    fetch(
      `https://vitalina-kuzmenko-chat-server.glitch.me/messages/name/${name}`
    )
      .then((response) => response.json())
      .then((data: Message[]) => {
        console.log("profile avatar was clicked");
        setMessages(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="image py-3 px-2 cursor-pointer"
      style={{ minWidth: "80px", minHeight: "80px", flexShrink: 0 }}
      onClick={displayNameMessages}
    >
      <Image
        className="bg-white rounded-full block cursor-pointer"
        src={avatar || Avatar}
        alt="Profile avatar"
        width={100}
        height={100}
      />

      <p className="text-blue mt-1">{name || "Name"}</p>
    </div>
  );
};

export default ProfileAvatar;
