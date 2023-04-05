import Avatar from "/avatars/Avatar_1.svg";

import Image from "next/image";
import trash from "../media/icons/trash-icon.svg";
import pen from "../media/icons/pen-icon.svg";
import { Message } from "../page";

interface ProfileMessageProps {
  message: Message;
  avatar: string | undefined;
}

const ProfileMessage = ({ message, avatar }: ProfileMessageProps) => {
  return (
    <div className="my-2">
      <div className="chat chat-end my-1 flex justify-center">
        <div className="chat-bubble w-full bg-grey flex">
          <Image
            className="bg-white rounded-full block cursor-pointer w-12 h-12"
            // src={Avatar}
            src={avatar || Avatar}
            alt="Profile avatar"
            width={80}
            height={80}
          />
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
                />
                <Image
                  className="mx-1 pb-1 cursor-pointer w-4"
                  src={trash}
                  alt="Profile avatar"
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
