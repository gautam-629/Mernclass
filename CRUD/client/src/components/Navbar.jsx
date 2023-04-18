import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/'}><span>Home</span></Link>  
    </nav>
  )
}

export default Navbar