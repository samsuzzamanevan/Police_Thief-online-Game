import React from 'react'

function Span({ children, spanText, className = '' }) {
  return (
    <>
      <span className={`${className}`}>
        {children || spanText}
      </span>
    </>
  )
}

export default Span
