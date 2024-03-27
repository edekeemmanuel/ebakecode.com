import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import NavBar from "../navbar/NavBar.tsx"
import Name from "../header/Name"
import Footer from "../footer/Footer"
//import WaveScroll from "../WaveScroll"
import ColorMotion from "../ColorMotion"


// other page components...

export default function Layout() {
  console.log("layout")
    return (
        <>
        <ColorMotion>
          <div className="">
            <div className="ebakecode">
              <NavBar />
              <Name />
              <main>                
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
              </main>
              <Footer />
            </div>
          </div>
        </ColorMotion>
        </>
    )
}