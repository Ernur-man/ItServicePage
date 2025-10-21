import Subscribe from "../../components/Subscribe";
import FirstBlock from "./blocks/FirstBlock";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";
import Postblock from "../../components/Postblock"

export default function AboutPage(){
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return(
        <>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
            <Subscribe/>
            <Postblock text="About"/>
        </>
    )
}