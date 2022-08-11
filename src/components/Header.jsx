import React from 'react'
import './css/Header.css'
import feather from './feather.png'

const Header = () => {
  return (
    <>
      <div className='header'>
        {/* <img src='../../public/feather.png' alt='logo-image'></img> */}
        <img className='logo-img invert' src={feather} alt='logo-image'></img>
        <p className='logo'>ShadeHub</p>
        
      </div>
    </>
  )
}

export default Header