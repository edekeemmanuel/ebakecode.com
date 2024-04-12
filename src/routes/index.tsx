import React from "react"
import {PathConstants} from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
// other page components...
const About = React.lazy(() => import("../pages/About"))
const Blog = React.lazy(() => import("../pages/Blog"))
const Project = React.lazy(() => import("../pages/Project"))
const Contact = React.lazy(() => import("../pages/Contact"))
//const CardList = React.lazy(() => import("../component/EP/EProfile.tsx"))


const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    // other mappings ...
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.BLOG, element: <Blog /> },
    { path: PathConstants.PROJECT, element: <Project /> },
    { path: PathConstants.CONTACT, element: <Contact /> },
]

export default routes