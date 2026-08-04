import './third.less'
import { Link } from 'react-router-dom'
import {
    Rocket,
    Smartphone,
    LayoutGrid,
    Cloud,
} from "lucide-react";

export default function ThirdBlock(){
    return(
        <main className='third_about'>
            <div className="container">
                <aside>
                    <h3>Lorem Ipsum is simply dummy text of the printing. </h3>
                    <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</p>
                    <Link to='/mixProject/contact' className='btn'>Contact Us</Link>
                </aside>
                <aside className='work'>
                    <nav>
                        <div className='icon'>
                            <LayoutGrid/>
                        </div>
                        <h4>Web Application</h4>
                    </nav>
                    <nav>
                        <div className="icon">
                            <Rocket/>
                        </div>
                        <img src="" alt="" />
                        <h4>SEO</h4>
                    </nav>
                    <nav>
                        <div className="icon">
                            <Smartphone/>
                        </div>
                        <h4>Mobile Application</h4>
                    </nav>
                    <nav>
                        <div className="icon">
                            <Cloud/>
                        </div>
                        <h4>AR/VR</h4>
                    </nav>
                </aside>
            </div>
        </main>
    )
}
