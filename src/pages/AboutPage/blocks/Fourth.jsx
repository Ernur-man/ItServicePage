import './fourth.less'
import { useState, useEffect } from 'react'
import pers from '/John.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FourthBlock(){
    const [data, setData] = useState([])
    const settings = {
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false
    };
    useEffect(()=>{
        axios.get('data.json')
        .then((res)=>setData(res.data))
        .catch((e)=>alert("Error: ", e))
    },[])
    return(
        <main className='fourth_about'>
            <div className="container">
                <h2>Our Team</h2>
                        <Slider {...settings}>
                                {
                                    data.map((el, i)=>(
                                            <div href={pers} key={i}>
                                                <img src={el.img} alt={el.name} loading="lazy"/>
                                                <p>{el.activity}</p>
                                                <h3>{el.name}</h3>
                                            </div>
                                    ))
                                }
                        </Slider>
            </div>
        </main>
    )
}
