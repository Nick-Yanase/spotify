import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
      <Link className='header__link' to="/">
        <img src={logoSpotify} alt="Logotipo" /> 
      </Link>
      <Link className='header__link' to="/">
        <h1>spotify</h1>
      </Link>
    </header>
  )
}
export default Header