import React from 'react'
import { Link } from 'react-router-dom';
import '../style/NavbarStyles.css';
import Logo from '../assets/logo.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={Logo} className='logo' />
      </div>
      <div className='rightside'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>

    </div>
  )
}

export default Navbar