import React from 'react'

function Tag({tag}) {
  return (
    <div className='tag flex text-white bg-violet rounded-2xl px-3 text-lg font-medium'>
      <span>{tag}</span>
    </div>
  )
}

export default Tag
