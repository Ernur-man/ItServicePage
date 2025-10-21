import PostsList from "../../components/PostList";
import FirstBlock from "./blocks/FirstBlock";
import SecondBlock from "./blocks/SecondBlock";
import ThirdBlock from "./blocks/ThirdBlock";
import Subscribe from "../../components/Subscribe"
import Postblock from "../../components/Postblock"
export default function ServicesPage(){
    return(
        <>
            <FirstBlock/>
            <SecondBlock/>
            <ThirdBlock/>
            <Subscribe/>
            <Postblock text="Service"/>
        </>
    )
}