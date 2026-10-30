import React from 'react'
import Heading1 from '../Layouts/Heading1'
import Heading2 from '../Layouts/Heading2'
import Peragraph from '../Layouts/Peragraph'
import Button from '../Layouts/Button'

function FirstPage() {
    return (
        <>
            <div className='container'>


                <div className='spin'>
                    <Heading1 headingText='Lottery Box' className='spinh2'></Heading1>
                    <div className='spinBox'>
                        <div className='spinCard'>
                            <Heading1 headingText='First' className='spinh1'></Heading1>
                            <div className='spinArea'>

                            </div>
                        </div>
                        <div className='spinCard'>
                            <Heading1 headingText='Second' className='spinh1'></Heading1>
                            <div className='spinArea'>

                            </div>
                        </div>
                        <div className='spinCard'>
                            <Heading1 headingText='Third' className='spinh1'></Heading1>
                            <div className='spinArea'>

                            </div>
                        </div>
                        <div className='spinCard'>
                            <Heading1 headingText='Four' className='spinh1'></Heading1>
                            <div className='spinArea'>

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
                    <Button btnText='Confirm' className='spinbtn' />
                </div>




                <div className='resultBox'>

                    <div className='flexBox'>

                        <div className='resultCard'>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                        </div>
                        <div className='resultCard'>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                        </div>
                        <div className='resultCard'>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                        </div>
                        <div className='resultCard'>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                            <Peragraph paragraphText='First' className='resultp'></Peragraph>
                        </div>

                        
                        

                    </div>

                </div>




            </div>
        </>
    )
}

export default FirstPage
