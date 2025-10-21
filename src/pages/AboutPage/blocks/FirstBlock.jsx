import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import LightGallery from 'lightgallery/react';
import meet from '../../../../public/meeting.svg'
import check from '../../../../public/check.svg'
import discuss from '../../../../public/discuss.svg'
import clas from '../../../../public/class.svg'
import './first.less'

export default function AboutPage(){
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return(
        <main className='first_about'>
            <div className="container">
                <LightGallery nInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail]}>
                    <a href={clas}>
                        <img src={clas} alt="" />
                    </a>
                    <a href={meet}>
                        <img src={meet} alt="" />
                    </a>
                    <a href='#'>
                        <div>
                            <h3>About us</h3>
                            <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        </div>
                    </a>
                    <a href={discuss}>
                        <img src={discuss} alt="" />
                    </a>
                    <a href={check}>
                        <img src={check} alt="" />
                    </a>
                </LightGallery>
            </div>
        </main>
    )
}