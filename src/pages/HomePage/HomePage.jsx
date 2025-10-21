// import Inform from "../../components/Inform"
// import Postblock from "../../components/Postblock"
// import Subscribe from "../../components/Subscribe"
// import FifthBlock from "./blocks/FifthBlock"
// import FirstBlock from "./blocks/FirstBlock"
// import FourthBlock from "./blocks/FourthBlock"

// import SecondBlock from "./blocks/SecondBlock"

import { Suspense } from "react"
import { lazy } from "react"

const FirstBlock = lazy(() => import('./blocks/FirstBlock'))
const SecondBlock = lazy(() => import('./blocks/SecondBlock'))
const FourthBlock = lazy(() => import('./blocks/FourthBlock'))
const FifthBlock = lazy(() => import('./blocks/FifthBlock'))
const Subscribe = lazy(() => import('../../components/Subscribe'))
const Inform = lazy(() => import('../../components/Inform'))
const Postblock = lazy(() => import('../../components/Postblock'))
function HomePage(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <FirstBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}> 
                <SecondBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Inform value={"left"}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Inform value={"right"}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Inform value={"left"}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FourthBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FifthBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Postblock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Subscribe/>
            </Suspense>
        </>
    )
}

export default HomePage

