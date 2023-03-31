import "../styles/Rightpart.css";
import NewMessage from "./NewMessage";
import AllMessages from "./AllMessages";
import ProfileSide from "./ProfileSide";

export default function Rightpart() {
  return (
    <>
      <NewMessage />
      <AllMessages />
      <ProfileSide />
    </>
  );
}
