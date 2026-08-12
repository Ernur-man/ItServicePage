import './FirstBlock.less'
import Chell from '../../../assets/Chell.svg'
import { Link } from 'react-router-dom'


function FirstBlock(){
    return (
        <section className='first'>
            <div className="container">
                <aside>
                        <h2>Experienced <span>mobile and web applications</span> and website builders measuring.</h2>
                        <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                    <div>
                        <Link to='/ItServicePage/contact' className='btn'>Contact Us</Link>
                    </div>
                </aside>
                <aside>
                    <img src={Chell} alt="chell" loading="lazy"/>
                </aside>
            </div>
        </section>
    )
}

export default FirstBlock
