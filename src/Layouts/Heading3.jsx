import React from 'react'

function Heading3({ children, heading3Text, className = '' }) {
  return (
    <>
      <h3 className={`${className}`}>
        {children || heading3Text}
      </h3>
    </>
  )
}

export default Heading3
