import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import bug from '../assets/bug.png'

function Login() {
  return (
    <div className='login w-full h-screen bg-secondary'>
      <Navbar />
      <div className='pt-36'>
        <div className='content space-y-16'>
          <div className='flex justify-center items-center space-x-3'>
            <span className='text-6xl text-center font-extrabold'>Fixing bugs since forever</span>
            <img src={bug} alt='bug' className='h-20 w-20 rotate-12' />
          </div>
          <div className='flex justify-center'>
            <form className='space-y-3'>
              <div>
                <input className='w-loginInput h-14 rounded-3xl px-5 outline-none border border-primary' type='text' placeholder='username' required />
              </div>
              <div>
                <input className='w-loginInput h-14 rounded-3xl px-5 outline-none border border-primary' type='text' placeholder='secret' required />
              </div>
              <div className='pt-4'>
                <button className='text-secondary bg-violet h-14 text-lg font-bold w-loginInput rounded-3xl'>
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
