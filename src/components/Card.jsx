import React from 'react'
import burst from '../assets/burst.png'
import sparkle from '../assets/sparkle.png'
import CardDate from './CardDate'
import Tag from './Tag'

function Card({fix}) {
  return (
    <div className='card w-cardItem bg-white min-h-cardHeight border border-primary rounded-xl'
        style={{boxShadow: '6px 6px 0px rgba(0, 0, 0, 1)'}}>
      <div className='px-5 py-7'>
        <div className='space-y-6'>
          <div className='flex items-start justify-between'>
            <p className='text-3xl font-medium'>{fix.title}</p>
            <CardDate />
          </div>
          <div className='flex items-center space-x-2'>
              <span><img className='h-10 w-10' alt='busrt-icon' src={burst} /></span>
              <span className='text-xl font-semibold text'>The Problem</span>
          </div>
        </div>
        <p className='text-lg font-normal pt-3 line-clamp-2'>{fix.problem}</p>
        <div className='space-y-6 pt-5'>
          <div className='flex items-center space-x-2'>
              <span><img className='h-9 w-9' alt='sparkle-icon' src={sparkle} /></span>
              <span className='text-xl font-semibold text'>The Solution</span>
          </div>
        </div>
        <p className='text-lg font-normal pt-3 pb-4 line-clamp-2'>{fix.solution}</p>
        <ul className='flex flex-wrap justify-start pt-2 gap-2 w-cardItem'>
          {fix.tags.map(tag => <li key={tag}><Tag tag={tag} /></li>)}
        </ul>
      </div>
    </div>
  )
}

export default Card
