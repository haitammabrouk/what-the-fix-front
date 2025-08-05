import React from 'react'
import burst from '../assets/burst.png'

function Card() {
  return (
    <div className='card w-cardItem bg-white h-72 border border-primary rounded-xl'
        style={{boxShadow: '6px 6px 0px rgba(0, 0, 0, 1)'}}>
      <div className='px-5 py-5 space-y-6'>
        <p className='text-3xl font-medium'>React useEffect infinite loop (again...)</p>
        <div className='flex items-center space-x-2'>
            <span><img className='h-10 w-10' alt='busrt-icon' src={burst} /></span>
            <span className='text-xl font-semibold text'>The problem</span>
        </div>
      </div>
    </div>
  )
}

export default Card
