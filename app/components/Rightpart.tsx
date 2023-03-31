import "../styles/Rightpart.css";
import NewMessage from "./NewMessage";
import AllMessages from "./AllMessages";
import ProfileSide from "./ProfileSide";

export default function Rightpart() {
  return (
    <div className="w-1/2 flex flex-col">
      <NewMessage />
      {/* <AllMessages />
      <ProfileSide /> */}
    </div>
  );
}
