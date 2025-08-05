import React from 'react'
import burst from '../assets/burst.png'
import sparkle from '../assets/sparkle.png'
import CardDate from './CardDate'
import Tag from './Tag'

function Card() {
  return (
    <div className='card w-cardItem bg-white min-h-cardHeight border border-primary rounded-xl'
        style={{boxShadow: '6px 6px 0px rgba(0, 0, 0, 1)'}}>
      <div className='px-5 py-7'>
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <p className='text-3xl font-medium'>React useEffect infinite loop (again...)</p>
            <CardDate />
          </div>
          <div className='flex items-center space-x-2'>
              <span><img className='h-10 w-10' alt='busrt-icon' src={burst} /></span>
              <span className='text-xl font-semibold text'>The Problem</span>
          </div>
        </div>
        <p className='text-xl font-normal pt-3 line-clamp-2'>Items not centering properly with flexbox despite using justify-content 
              and align-items. CSS is apparently having trust issues with me again.</p>
        <div className='space-y-6 pt-5'>
          <div className='flex items-center space-x-2'>
              <span><img className='h-9 w-9' alt='sparkle-icon' src={sparkle} /></span>
              <span className='text-xl font-semibold text'>The Solution</span>
          </div>
        </div>
        <p className='text-xl font-normal pt-3 pb-4 line-clamp-2'>Items not centering properly with flexbox despite using justify-content 
        and align-items. CSS is apparently having trust issues with me again.</p>
        <ul className='flex flex-wrap justify-start pt-2 gap-2 w-cardItem'>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag/>
          </li>
          <li>
            <Tag/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
