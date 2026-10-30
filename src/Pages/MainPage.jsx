import React from 'react'

function MainPage({setNum,Num}) {
  return (
    <>
      <div className='container'>
        <div className='MessageBox'>
          <ul>
            <li onClick={()=> setNum(2)}>Resume</li>
            <li onClick={()=> setNum(1)}>Start New Game</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MainPage
