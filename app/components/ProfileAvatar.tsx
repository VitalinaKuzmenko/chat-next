import Avatar from "/public/avatars/Avatar_1.svg";
import Image from "next/image";

const ProfileAvatar = ({ name, avatar }) => {
  return (
    <div
      className="image py-3 px-2 cursor-pointer"
      style={{ minWidth: "80px", minHeight: "80px", flexShrink: 0 }}
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
