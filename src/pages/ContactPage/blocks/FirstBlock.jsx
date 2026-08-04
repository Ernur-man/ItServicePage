import './first.less'
import beverly from '/Beverly.svg'
import map from '/map.svg'
export default function FirstBlock(){
    return(
        <main className="contact_first">
            <div className="container">
                <aside>
                    <div>
                        <img src={beverly} alt="beverly" loading='lazy'/>
                    </div>
                    <h2>Let’s Collaborate</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing .</p>
                </aside>
                <aside>
                    <img src={map} alt="map" loading='lazy'/>
                </aside>
            </div>
        </main>
    )
}
