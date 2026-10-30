import React, { useEffect,useState } from 'react'
import './index.css'
import Heading1 from './Layouts/Heading1'
import MainPage from './Pages/MainPage'
import Input from './Pages/Input'
import FirstPage from './Pages/FirstPage'

function Page() {


  let [first, setFirst] = useState('')
  let [second, setSecond] = useState('')
  let [third, setThird] = useState('')
  let [fourth, setFourth] = useState('')

  let [arr,setArr] =  useState(
    JSON.parse(localStorage.getItem('arr')) || []
  )



  let [num,setNum] = useState(0)


  useEffect(() => {
    localStorage.setItem('arr', JSON.stringify(arr))
  }, [arr])

  function collect(){
    setArr(oldvalue=>{
      let newvalue = [first,second,third,fourth]
      return newvalue
    })
      setNum(2)
      setFirst('')
      setSecond('')
      setThird('')
      setFourth('')
  }




    
  
  let pages = [<MainPage setNum={setNum} num={num}/>,
    <Input
    first={first}
    second={second}
    third={third}
    fourth={fourth}
    setFirst={setFirst}
      setSecond={setSecond}
      setThird={setThird}
      setFourth={setFourth}
      setNum={setNum}
      collect = {collect}
    />,
    <FirstPage
      arr = {arr}
      />]

      
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
