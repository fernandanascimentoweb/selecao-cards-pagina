import React from 'react'
import './navbar.css'
import logo from '../../assets/image/Logo (2).png'
import search from '../../assets/image/search.png'
import sino from '../../assets/image/notify.png'
import pessoa from '../../assets/image/person.png'


const Navbar = () => {
  return (
    <nav>
      <div className='navbar container'>
        <img src={logo} alt="logo" />

        <div className='icons'>
            <img src={search} alt="" />
            <img src={sino} alt="" />
            <img src={pessoa} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar