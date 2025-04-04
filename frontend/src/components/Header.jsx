import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
      <img src={logoSpotify} alt="Logotipo" />  
      <Link className='header__link' to="/">
        <h1>spotify</h1>
      </Link>
    </header>
  )
}
export default Header