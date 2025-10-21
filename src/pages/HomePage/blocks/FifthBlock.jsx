import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './fifth.less'
import Bene from '../../../../public/beneoshop.svg'
import Caspio from '../../../../public/caspio.svg'
import Hyper from '../../../../public/HyperGrid.svg'
import Leot from '../../../../public/leotrippi.svg'

function FifthBlock(){
    const settings = {
        autoplay: 1000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    return(
        <main className="fifth">
            <div className="container">
                <h2>You will be in good Company</h2>
                <Slider {...settings}>
                    <div><img src={Bene} alt="" /></div>
                    <div><img src={Caspio} alt="" /></div>
                    <div><img src={Hyper} alt="" /></div>
                    <div><img src={Leot} alt="" /></div>
                    <div><img src={Bene} alt="" /></div>
                    <div><img src={Caspio} alt="" /></div>
                    <div><img src={Hyper} alt="" /></div>
                    <div><img src={Leot} alt="" /></div>
                </Slider>
            </div>
        </main>
    )
}
export default FifthBlock