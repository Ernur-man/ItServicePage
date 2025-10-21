import './FirstBlock.less'
import Chell from '../../../assets/Chell.svg'

function FirstBlock(){
    return (
        <section className='first'>
            <div className="container">
                <aside>
                        <h2>Experienced <span>mobile and web applications</span> and website builders measuring.</h2>
                    <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                    <div>  
                        <button>Contact us</button>
                    </div>
                </aside>
                <aside>
                    <img src={Chell} alt="chell" />
                </aside>
            </div>
        </section>
    )
}

export default FirstBlock