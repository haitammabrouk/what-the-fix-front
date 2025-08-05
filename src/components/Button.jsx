import React from 'react'

function Button({bgColor, textColor, width, height, text, borderColor, type}) {
  return (
    <button type={type} className={`bg-${bgColor} text-${textColor} cursor-pointer font-medium rounded-3xl border border-${borderColor} border-primary`}
    style={{ width: `${width}px`, height: `${height}px` }} >
        {text}
    </button>
  )
}

export default Button
