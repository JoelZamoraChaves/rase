import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import "./footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="copy">
        <p>
          &copy;{new Date().getFullYear()} Copyright All Right Reserved Rase
          BarberShop
        </p>
      </div>
      <div className="desing">
      <p>
         Página diseñada  por David Barrientos Araya <a href="https://github.com/DavidTK1198" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a> y Joel Zamora <a href="https://github.com/DavidTK1198" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
