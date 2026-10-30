import React from 'react'

function Heading2({ children, heading2Text, className = '' }) {
  return (
    <>
      <h2 className={`${className}`}>
        {children || heading2Text}
      </h2>
    </>
  )
}

export default Heading2
