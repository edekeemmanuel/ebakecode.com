import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import NavBar from "../navbar/NavBar.tsx"
import Advert from "../header/Advert"
import Footer from "../footer/Footer"
//import WaveScroll from "../WaveScroll"
import ColorMotion from "../ColorMotion"


// other page components...

export default function Layout() {
  console.log("layout")
    return (
        <>
        <ColorMotion>
          <div className="px-[5px]">
            <div className="ebakecode">
              
              <NavBar />
              <Advert />
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