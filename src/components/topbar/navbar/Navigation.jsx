import classes from './navbar.module.scss';

export default function Navigation(){
    return(
        <nav className={classes.Navigation}>
           <ul>
            <li><a href='#intro'>Inicio</a></li>
            <li><a href='#products'>Nuestros productos</a></li>
            <li><a href='#contact'>Contactanos</a></li>
        </ul>
        </nav>
    );
}