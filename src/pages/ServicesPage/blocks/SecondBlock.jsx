import './second.less'
import work from '../../../../public/work.svg'
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
                    <button>Contact us</button>
                </aside>
                <aside>
                    <img src={work} alt="" />
                </aside>
            </div>
        </main>
    )
}
