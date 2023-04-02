import Avatar from "../media/avatars/Avatar_1.svg";
import Image from "next/image";

const ProfileAvatar = () => {
  return (
    <div
      className="image py-3 px-2"
      style={{ minWidth: "80px", minHeight: "80px", flexShrink: 0 }}
    >
      <Image
        className="bg-white rounded-full block cursor-pointer"
        src={Avatar}
        alt="Profile avatar"
        width={80}
        height={80}
      />

      <p className="text-blue mt-1">Name</p>
    </div>
  );
};

export default ProfileAvatar;
