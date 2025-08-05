import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button'

function Navbar() {
  return (
      <ul className='nav-items flex items-center justify-around w-full h-20 bg-secondary'>
        <li className='flex items-center space-x-2'>
          <img className='h-12 w-12' alt='logo-wtf' src={logo} />
          <span className='font-bold text-xl'>WTF</span>
        </li>
        <li>
          <button className='text-primary font-medium border border-primary h-10 w-24 rounded-3xl'>
            Sign up
          </button>
        </li>
      </ul>
  )
}

export default Navbar
