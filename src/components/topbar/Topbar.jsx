import React from 'react'
import "./topbar.scss"
import logo from '../../Images/Rase.png'

export default function Topbar  () {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}
