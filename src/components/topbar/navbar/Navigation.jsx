import NavLinks from './NavLinks';
import classes from './navbar.module.scss';

export default function Navigation(){
    return(
        <nav className={classes.Navigation}>
            <NavLinks />
        </nav>
    );
}