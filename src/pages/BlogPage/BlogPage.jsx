import Subscribe from "../../components/Subscribe";
import TestBlock from "../../components/TestBlock";
import FirstBlock from "./blocks/FirstBlock";
import Postblock from "../../components/Postblock"
export default function BlogPage(){
    return(
        <>
            <FirstBlock/>
            <Subscribe/>
            <Postblock text="Blog"/>
        </>
    )
}