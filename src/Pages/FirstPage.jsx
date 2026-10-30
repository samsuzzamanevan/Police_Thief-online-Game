import React, { useState } from 'react'
import Heading1 from '../Layouts/Heading1'
import Heading2 from '../Layouts/Heading2'
import Peragraph from '../Layouts/Peragraph'
import Button from '../Layouts/Button'

function FirstPage({ arr }) {

    let players = ['Police','cor', 'Babu' ,'Dakat']


    let math =  Math.floor(Math.random()*(3-0+1)+0)
    let math2=Math.floor(Math.random()*(2-0+1)+0)
    let math3 = Math.floor(Math.random()*(1-0+1)+0)
    let math4 =  Math.floor(Math.random()*(0-0+1)+0)

    


  


    return (
        <>
            <div className='container'>


                <div className='spin'>
                    <Heading1 headingText='Lottery Box' className='spinh2'></Heading1>
                    <div className='spinBox'>
                        
                            
                             <div className='spinCard'>
                                    <Heading1 headingText={arr[0]} className='spinh1'></Heading1>
                                    <div className='spinArea'>
                                        {players[math]}
                                    </div>
                                </div>
                             <div className='spinCard'>
                                    <Heading1 headingText={arr[1]} className='spinh1'></Heading1>
                                    <div className='spinArea'>
                                        {players[math2]}
                                    </div>
                                </div>
                             <div className='spinCard'>
                                    <Heading1 headingText={arr[2]} className='spinh1'></Heading1>
                                    <div className='spinArea'>
                                        {players[math3]}
                                    </div>
                                </div>
                             <div className='spinCard'>
                                    <Heading1 headingText={arr[3]} className='spinh1'></Heading1>
                                    <div className='spinArea'>
                                        {players[math4]}
                                    </div>
                                </div>
                            
                    


                    </div>
                </div>


                <div className='corDakat'>
                    <Heading2 heading2Text='Who is Thief'></Heading2>
                    <div className='corDakatBox'>
                        <div className='firstOption'>First</div>
                        <div className='firstOption'>Second</div>
                    </div>
                    <Button btnText='Confirm' className='spinbtn'/>
                </div>




                <div className='resultBox'>

                    <div className='flexBox'>

                        {
                            arr.map((items, index) => {
                                return <div className='resultCard' key={index}>
                                    <Peragraph paragraphText={items} className='resultp1'></Peragraph>
                                    <Peragraph paragraphText='First' className='resultp'></Peragraph>
                                </div>
                            })
                        }





                    </div>

                </div>




            </div>
        </>
    )
}

export default FirstPage
