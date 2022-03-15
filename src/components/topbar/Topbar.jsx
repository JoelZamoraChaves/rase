import "./topbar.scss";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <NavLinks />
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  );
}