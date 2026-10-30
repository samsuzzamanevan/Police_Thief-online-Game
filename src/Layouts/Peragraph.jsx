import React from 'react'

function Peragraph({ children, paragraphText, className = '' }) {
  return (
    <>
      <p className={`${className}`}>
        {children || paragraphText}
      </p>
    </>
  )
}

export default Peragraph
