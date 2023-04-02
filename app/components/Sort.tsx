import Arrow from "../media/icons/arrow-icon.svg";
import Image from "next/image";

const Sort = () => {
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
          <li className="hover:bg-grey">
            <a>Latest first</a>
          </li>
          <li className="hover:bg-grey">
            <a>Newest first</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
