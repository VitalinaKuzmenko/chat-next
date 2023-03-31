import Buttons from "./Buttons";
import Search from "./Search";
import Sort from "./Sort";
import ProfileMessages from "./ProfileMessages";

export default function Leftpart() {
  return (
    <div>
      <div className="left-head">
        <Buttons />
        <Search />
        <Sort />
        <ProfileMessages />
      </div>
    </div>
  );
}
