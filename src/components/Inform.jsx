import './inform.less'
import phone from '../../public/phone.svg'
export default function Inform(side){
    return(
        <main className="third">
               {
                side.value ==="left" ? (
                    <div className="container">
                        <aside className='left'>
                            <article>
                                <nav>
                                    {/* <img src={phone} alt="" /> */}
                                </nav>
                                <nav>
                                    <h4>Lorem Ipsum is simply dummy text</h4>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </nav>
                            </article>
                            <article>
                                <h2><span>Lorem Ipsum</span> is simply dummy text of the printing. </h2>
                            </article>
                            <article>
                                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 

                                </p>
                            </article>
                        </aside>
                        <aside>
                            <img src={phone} alt="" />
                        </aside>
                    </div>
                ) : (
                   <div className="container">
                        <aside>
                            <img src={phone} alt="" />
                        </aside>
                        <aside className='left'>
                            <article>
                                <nav>
                                    {/* <img src="" alt="" /> */}
                                </nav>
                                <nav>
                                    <h4>Lorem Ipsum is simply dummy text</h4>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </nav>
                            </article>
                            <article>
                                <h2><span>Lorem Ipsum</span> is simply dummy text of the printing. </h2>
                            </article>
                            <article>
                                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 

                                </p>
                            </article>
                        </aside>
                    </div> 
                )
               }
        </main>
    )
}

// side.value === "hello" ? (
//                     <h1>Welcome</h1>
//                 )
//                 :(
//                     <h1>Just text</h1>
//                 )