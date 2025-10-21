import './third.less'
import { useState, useEffect } from 'react'
import pers from '../../../../public/John.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ThirdBlock(){
    const [data, setData] = useState([])
    const settings = {
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false
    };
    useEffect(()=>{
        fetch('./data.json')
            .then((response)=>response.json())
            .then(dat=>setData(dat))
    },[])
    return(
        <main className='third_about'>
            <div className="container">
                        <Slider {...settings}> 
                                {
                                    data.map((el, i)=>(
                                            <div href={pers} key={i}>
                                                <img src={el.img} alt="" />
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