import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Intro">Inicio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#About">Quiénes somos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Products">Nuestros productos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Contact">Contactanos</a>
        </li>
      </ul>
    </div>
  );
}