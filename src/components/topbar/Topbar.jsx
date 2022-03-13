import "./topbar.scss";
import logo from '../../Images/Rase.png';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href='#intro'><img src={logo} alt='logo'/></a>
          <div className="itemContainer">
          <a href='#Intro'>Inicio</a>
          </div>
          <div className="itemContainer">
          <a href='#About'>Quiénes somos</a>
          </div>
          <div className="itemContainer">
          <a href='#Products'>Nuestros productos</a>
          </div>
          <div className="itemContainer">
          <a href='#Contacto'>Contactanos</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}