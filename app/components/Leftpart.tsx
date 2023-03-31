import Buttons from "./Buttons";
import Search from "./Search";
import Sort from "./Sort";
import ProfileMessages from "./ProfileMessages";

export default function Leftpart() {
  return (
    <div className="w-1/2 bg-slate-200">
      <div className="left-head">
        <Buttons />
        <Search />
        <Sort />
        <ProfileMessages />
      </div>
    </div>
  );
}
