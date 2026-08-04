import Subscribe from "../../components/Subscribe";
import FirstBlock from "./blocks/FirstBlock";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import SecondBlock from "./blocks/SecondBlock";
import FourthBlock from "./blocks/Fourth";
import Postblock from "../../components/Postblock"
import ThirdBlock from "./blocks/ThirdBlock";

export default function AboutPage(){
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return(
        <>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
            <FourthBlock/>
            <Subscribe/>
            {/* <Postblock text="About"/> */}
        </>
    )
}
