import {useState, useEffect} from "react";
//import classNames from "classnames"
// const bgStyle = {
//   width: "28rem",
//   height: "150vh",
//   scale: 1,
//   position: "fixed",
//   top: "10rem",
//   left: "calc(50% - 14rem)",
//   boxShadow: `rgba(0, 0, 0, 0.5) 0px 0px 150px 10px`,
// }
// 

export default function ColorMotion({ children }) {
   const [bgColor, setBgColor]:any = useState(!"bgAnimate")
  const listenScrollEvent = () => {
    window.scrollY <= 0
      ? setBgColor("bgAnimate")
      : setBgColor("black")
    console.log("scroll event")
  }
  
 // let bgClass = classNames("h-[150vh]", {"bgColorActive": bgColor})
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    console.log("scroll useeffect")
  }, [bgColor])
  console.log("bgColor")
  return (
    <>
      <div id="EBakeCode" role="application" aria-labelledby="EBakeCode" aria-describedby="EBakeCode Portfolio Website" aria-activedescendant="EBakeCode" aria-roledescription="EBakeCode Portfolio Website body" className={bgColor}>
        {children}
      </div>
    </>
  )
}