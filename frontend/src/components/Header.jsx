import React from 'react'
import logoSpotify from '../../assets/logo/spotify-logo.png'
const Header = () => {
  return (
    <header>
      <img src={logoSpotify} alt="Logotipo" />  
      <a className='header__link' href="/">
        <h1>spotify</h1>
      </a>
    </header>
  )
}

export default Header