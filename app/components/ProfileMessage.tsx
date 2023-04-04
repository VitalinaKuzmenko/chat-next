import Avatar from "../media/avatars/Avatar_1.svg";
import Image from "next/image";
import trash from "../media/icons/trash-icon.svg";
import pen from "../media/icons/pen-icon.svg";
import { Message } from "../page";

const ProfileMessage = ({ message }: { message: Message }) => {
  return (
    <div className="my-2">
      <div className="chat chat-end my-1 flex justify-center">
        <div className="chat-bubble w-full bg-grey flex">
          <Image
            className="bg-white rounded-full block cursor-pointer"
            src={Avatar}
            alt="Profile avatar"
            width={60}
            height={60}
          />
          <div className="ml-2 w-full">
            <p className="flex justify-self-start text-blue text-2xl">
              {message.from}
            </p>
            <div className="flex justify-between">
              <p className=" text-blue text-xl flex flex-wrap">
                {message.text}
              </p>
              <div className="flex mr-2">
                <Image
                  className="mx-1 pb-1 cursor-pointer"
                  src={pen}
                  alt="Profile avatar"
                  width={15}
                  height={15}
                />
                <Image
                  className="mx-1 pb-1 cursor-pointer"
                  src={trash}
                  alt="Profile avatar"
                  width={15}
                  height={15}
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
