import './first.less'
import { useState } from 'react'
import speak from '/speaker.svg'
import logo from '/caspio.svg'
import phone from '/phoone.svg'
export default function FirstBlock(){
    const [image, setImage] = useState(speak)
    function changeImage(){
        setImage(logo)
    }
    function returnImage(){
        setImage(speak)
    }
    return(
        <main className="first_service">
            <div className="container">
                <article className='advertisement'>
                    <div>
                        <img src={image} alt="logo image" onMouseMove={changeImage} onMouseLeave={returnImage} loading='lazy'/>
                    </div>
                    <h2>Our <span>Services</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </article>
                <article className='service'>
                    <aside>
                        <div>
                            <img src={phone} alt="phone" loading='lazy' />
                            <nav>
                                <h3>Mobile Applications</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla.</p>
                            </nav>
                        </div>
                        <div>
                            <img src={phone} alt="phone" loading='lazy' />
                            <nav>
                                <h3>SEO</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </nav>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <img src={phone} alt="phone" loading='lazy' />
                            <nav>
                                <h3>Web Application</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla.</p>
                            </nav>
                        </div>
                        <div>
                            <img src={phone} alt="phone" loading='lazy' />
                            <nav>
                                <h3>AR/VR Solutions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </nav>
                        </div>
                    </aside>
                </article>
            </div>
        </main>
    )
}
