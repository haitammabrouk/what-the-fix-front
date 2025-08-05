import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CardDate() {
  return (
    <div className='card-date space-x-2 flex items-center bg-violet text-white rounded-3xl py-1 px-2'>
      <FontAwesomeIcon className='text-2xl' icon={faClock} />
      <span className='text-xl'>09/08/2025</span>
    </div>
  )
}

export default CardDate
