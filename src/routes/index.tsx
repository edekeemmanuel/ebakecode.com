import React from "react"
import {PathConstants} from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
// other page components...
const About = React.lazy(() => import("../pages/About"))
//const CardList = React.lazy(() => import("../component/EP/EProfile.tsx"))


const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    // other mappings ...
    { path: PathConstants.ABOUT, element: <About /> },
]

export default routes