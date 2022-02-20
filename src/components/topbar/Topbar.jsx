import React from 'react';
import "./topbar.scss";
import logo from '../../Images/Rase.png';
import NavBar from './navbar/Navbar';

export default function Topbar  () {
  return (
    <div className="Topbar">
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro'><img src={logo} alt='logo'/></a>
        </div>
        <div className='right'>
          <NavBar />
        </div>
      </div>
    </div>
  );
}
