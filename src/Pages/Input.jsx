import React from 'react'
import Heading1 from '../Layouts/Heading1'
import Button from '../Layouts/Button'

function Input({
    first,
    second,
    third,
    fourth,
    setFirst,
    setSecond,
    setThird,
    setFourth,
    setNum,
    collect
}) {
   


  



    return (
        <>
            <div className='inputPage'>
                <div className='container'>
                    <Heading1 headingText='Input Field' className='inputh1'></Heading1>
                    <div className='Inputs'>
                        <div className='perent'>
                            <label htmlFor="first">First Player : </label>
                            <input
                                type="text"
                                className='Input'
                                placeholder='First Player'
                                id='first'
                                value={first}
                                onChange={(event) => setFirst(event.target.value)}
                            />
                        </div>
                        <div className='perent'>
                            <label htmlFor="second">Second Player : </label>
                            <input
                                type="text"
                                className='Input'
                                placeholder='Second Player'
                                id='second'
                                value={second}
                                onChange={(event) => setSecond(event.target.value)}
                            />
                        </div>
                        <div className='perent'>
                            <label htmlFor="third">Third Player : </label>
                            <input
                                type="text"
                                className='Input'
                                placeholder='Third Player'
                                id='third'
                                value={third}
                                onChange={(event) => setThird(event.target.value)}
                            />
                        </div>
                        <div className='perent'>
                            <label htmlFor="fourth">Fourth Player : </label>
                            <input
                                type="text"
                                className='Input'
                                placeholder='Fourth Player'
                                id='fourth'
                                value={fourth}
                                onChange={(event) => setFourth(event.target.value)}
                            />
                        </div>
                        <Button btnText='Submit' className='Inputbtn' onClick={collect}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input
