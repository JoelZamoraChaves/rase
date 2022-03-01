import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import "./contact.scss"

export default function Contact(){
  return (
    <div className='contact' id='contact'>
      <div className='wrapper-Map'>
      <iframe  className='map' frameBorder="" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.8507097773204!2d-84.05492821349152!3d9.9463767900414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb2e02ac228ce4ec!2sRASE%20BARBER!5e0!3m2!1ses!2sus!4v1645390910457!5m2!1ses!2sus"  title="Rase Barber, Guadalupe" aria-label="Rase Barber, Guadalupe"></iframe>
      </div>
  <div className="social-menu">
  <ul>
    <li><a href="hola"><FontAwesomeIcon icon={faXmark} size='xl'/></a></li>
    <li><a href="f"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
  </ul>
</div>
    </div>
  )
}
