import NavLinks from './NavLinks';
import classes from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function MobileNavigation(){
    const [state, setOpen] = useState(false);
    const openHamburger = <FontAwesomeIcon icon={faBars} size='xl' className={classes.Hamburger} onClick={() => setOpen(true)} />
    const closeHamburger = <FontAwesomeIcon icon={faXmark} size='xl' className={classes.Hamburger} onClick={() => setOpen(false)}/>

    return(
        <nav className={classes.MobileNavigation}>
            {state? closeHamburger : openHamburger}
            {state && <NavLinks />}
        </nav>
    );
}