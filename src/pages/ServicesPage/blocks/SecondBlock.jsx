import './second.less'
import work from '/work.svg'
import { Link } from 'react-router-dom'

export default function SecondBlock(){
    return(
        <main className="second_service">
            <div className="container">
                <aside>
                    <h2><span>Lorem Ipsum</span> is simply dummy text of the printing. </h2>
                    <p>
                        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of
                        completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.
                        -
                    </p>
                    <p>
                        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens
                    </p>
                    <Link to='/mixProject/contact' className='btn'>Contact Us</Link>
                </aside>
                <aside>
                    <img src={work} alt="work" loading='lazy'/>
                </aside>
            </div>
        </main>
    )
}
