import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt=""/>
      <img className='profile' src={assets.profile_image1} alt=""/>
      <img className='profile' src={assets.profile_image2} alt=""/>
      <img className='profile' src={assets.profile_image3} alt=""/>
    </div>
  )
}

export default Navbar
