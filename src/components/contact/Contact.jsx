import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./contact.scss";

export default function Contact(){
  return (
    <div className='contact' id='contact'>
      <div className='text'>
        <p>Estamos situados en Guadalupe, diagonal al AyA, 200m este de la Municipalidad de Goicoechea</p>
      </div>
      <div className='wrapper-Map'>
        <iframe className='map' frameBorder="" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.8507097773204!2d-84.05492821349152!3d9.9463767900414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb2e02ac228ce4ec!2sRASE%20BARBER!5e0!3m2!1ses!2sus!4v1645390910457!5m2!1ses!2sus"  title="Rase Barber, Guadalupe" aria-label="Rase Barber, Guadalupe"></iframe>
      </div>
      <div className="social-menu">
        <p>Visitanos en Instagram y contactanos por WhatsApp</p>
        <ul>
          <li>
            <a href="#WhatsApp" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} className='icon' size='3x'/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rasebarber/?hl=es-la" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='icon' size='3x' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
