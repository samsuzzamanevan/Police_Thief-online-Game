import React from 'react'

function Heading1({ children, headingText, className = '' }) {
  return (
    <>
      <h1 className={`${className}`}>
        {children || headingText}
      </h1>
    </>
  )
}

export default Heading1
