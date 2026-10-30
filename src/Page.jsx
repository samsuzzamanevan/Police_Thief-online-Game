import React, { useState } from 'react'
import './index.css'
import Heading1 from './Layouts/Heading1'
import MainPage from './Pages/MainPage'
import Input from './Pages/Input'
import FirstPage from './Pages/FirstPage'

function Page() {

    let [num,setNum] = useState(2)
    let pages = [<MainPage/>,<Input/>,<FirstPage/>]


  return (
    <>
      <div>


        <div className='Header'> 
            <div className='container'>
                <div className='box'>
                    <Heading1 headingText='Police Thief Online Game' className='Headerh1'>
                    </Heading1>
                </div>
            </div>
        </div>


        {
            pages[num]
        }

      </div>
    </>
  )
}

export default Page
