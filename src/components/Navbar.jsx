import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav'>
        <Link to='/' >🍕 Pizzeria Mamma Mia!</Link>
        <Link to='/carrito'> 🛒 </Link>

    </div>
  )
}
