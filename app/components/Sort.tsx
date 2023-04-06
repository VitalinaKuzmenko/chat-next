import { Message } from "../page";
import Arrow from "/public/icons/arrow-icon.svg";
import Image from "next/image";
import moment from "moment";

interface SortProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const Sort = ({ setMessages }: SortProps) => {
  const sortByLatest = () => {
    setMessages((messages) =>
      [...messages].sort((a, b) =>
        moment(b.timeSent, "DD-MM-YYYY HH:mm").isAfter(
          moment(a.timeSent, "DD-MM-YYYY HH:mm")
        )
          ? -1
          : 1
      )
    );
  };

  const sortByNewest = () => {
    setMessages((messages) =>
      [...messages].sort((a, b) =>
        moment(b.timeSent, "DD-MM-YYYY HH:mm").isAfter(
          moment(a.timeSent, "DD-MM-YYYY HH:mm")
        )
          ? 1
          : -1
      )
    );
  };

  return (
    <div className="flex my-2">
      <p className="ml-4 mr-1 text-xl">Sort By</p>

      <div className="dropdown dropdown-right">
        <label tabIndex={0}>
          <Image
            className="pt-2 cursor-pointer"
            src={Arrow}
            alt="Dropdown arrow"
            width={15}
            height={15}
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content border border-blue menu shadow bg-white rounded-box w-52 text-blue text-xl"
        >
          <li className="hover:bg-grey" onClick={sortByLatest}>
            <a>Latest first</a>
          </li>
          <li className="hover:bg-grey" onClick={sortByNewest}>
            <a>Newest first</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
