import Arrow from "../media/icons/arrow-icon.svg";
import Image from "next/image";

const Sort = () => {
  return (
    <div className="flex my-2">
      <p className="mx-4 text-xl">Sort By:</p>
      <p className="text-xl">Latest First</p>
      <Image
        className="ml-1 mb-1"
        src={Arrow}
        alt="Dropdown arrow"
        width={15}
        height={15}
      />
    </div>
  );
};

export default Sort;
