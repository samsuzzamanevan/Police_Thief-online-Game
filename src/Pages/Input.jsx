import React from 'react'
import Heading1 from '../Layouts/Heading1'
import Button from '../Layouts/Button'

function Input() {
    return (
        <>
            <div className='inputPage'>
                <div className='container'>
                    <Heading1 headingText='Input Field' className='inputh1'></Heading1>
                    <div className='Inputs'>
                        <div>
                            <label htmlFor="first">First Player : </label>
                            <input type="text" className='Input' placeholder='First Player' id='first' />
                        </div>
                        <div>
                            <label htmlFor="second">Second Player : </label>
                            <input type="text" className='Input' placeholder='Second Player' id='second' />
                        </div>
                        <div>
                            <label htmlFor="third">Third Player : </label>
                            <input type="text" className='Input' placeholder='Third Player' id='third' />
                        </div>
                        <div>
                            <label htmlFor="fourth">Fourth Player : </label>
                            <input type="text" className='Input' placeholder='Fourth Player' id='fourth' />
                        </div>
                    </div>
                    <Button btnText='Submit' className='Inputbtn' />
                </div>
            </div>
        </>
    )
}

export default Input
