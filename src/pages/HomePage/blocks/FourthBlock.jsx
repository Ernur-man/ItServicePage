import './Fourth.less'
import { useState } from 'react'

const FourthBlock = () =>{
    const [clr, setClr] = useState(null)

    function activeBtn(num){
        setClr(num)
    }

    return(
        <main className="fourth">
            <div className="container">
                <div onClick={()=> activeBtn(1)} style={{
                    background: clr === 1 ? 'rgb(16, 144, 203)' : 'rgb(244, 244, 244)'
                }}>
                    <h2 style={{color: clr === 1 ? 'white' : 'black'}}>Lorem Ipsum is simply dummy text.</h2>
                    <p style={{color: clr === 1 ? 'white' : 'black'}}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring 
                        dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                    </p>
                    <button style={{color: clr === 1 ? 'rgb(16, 144, 203)' : 'black',  background: clr === 1 ? 'white' : 'rgb(16, 144, 203)'}}>View More</button>
                </div>
                <div onClick={()=> activeBtn(2)} style={{
                    background: clr === 2 ? 'rgb(16, 144, 203)' : 'rgb(244, 244, 244)'
                }}>
                    <h2 style={{color: clr === 2 ? 'white' : 'black'}}>Lorem Ipsum is simply dummy text.</h2>
                    <p style={{color: clr === 2 ? 'white' : 'black'}}>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring 
                        dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                    </p>
                    <button style={{color: clr === 2 ? 'rgb(16, 144, 203)' : 'black',  background: clr === 2 ? 'white' : 'rgb(16, 144, 203)'}}>View More</button>
                </div>
            </div>
        </main>
    )
}

export default FourthBlock
