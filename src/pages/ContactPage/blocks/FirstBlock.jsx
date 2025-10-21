import './first.less'
import beverly from '../../../../public/Beverly.svg'
import map from '../../../../public/map.svg'
export default function FirstBlock(){
    return(
        <main className="contact_first">
            <div className="container">
                <aside>
                    <div>
                        <img src={beverly} alt="" />
                    </div>
                    <h2>Let’s Collaborate</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing .</p>
                </aside>
                <aside>
                    <img src={map} alt="" />
                </aside>
            </div>
        </main>
    )
}