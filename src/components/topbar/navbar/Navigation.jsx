import classes from './navbar.module.scss';

export default function Navigation(){
    return(
        <nav className={classes.Navigation}>
           <ul>
            <li><a href='#Intro'>Inicio</a></li>
            <li><a href='#Acerca'>Acerca de</a></li>
            <li><a href='#Products'>Nuestros productos</a></li>
            <li><a href='#Contact'>Contactanos</a></li>
        </ul>
        </nav>
    );
}