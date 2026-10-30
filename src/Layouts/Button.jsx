import React from 'react'

function Button({btnText, className = '', onClick, type = 'button'}) {
  return (
    <>
      <button type={type} onClick={onClick} className={`${className}`}>{btnText}</button>
    </>
  )
}

export default Button
