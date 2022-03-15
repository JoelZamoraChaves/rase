import logo from '../../Images/Rase.png';

export default function NavLinks(){
    return(
        <div className="left">
          <a href='#Intro'><img src={logo} alt='logo'/></a>
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
            <a href='#Contact'>Contactanos</a>
          </div>
        </div>
    );
}