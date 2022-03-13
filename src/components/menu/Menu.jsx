import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Intro">Inicio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Contacto">Contacto</a>
        </li>
      </ul>
    </div>
  );
}