import AboutMe from "./AboutMe"
import {useState, useEffect, useRef} from "react"
import evideo from "../view/video/20230804_1911241.mp4";

const Profile = () => {
 const init = false;
 const [auto, setAuto] = useState(false)
 const [stop, setStop] = useState(init);
  const [show, setShow] = useState(false)
  const status = useRef<HTMLVideoElement>(null) 
  useEffect(() => {
    setAuto(true)
  }, [auto])
  
  const handleClick = () => {
    setStop(!stop);
    if (stop === true) {
      status.current?.pause();
    } else {
      status.current?.play();
    }
  }
  
  return (
    <div className="" onClick={handleClick} >
    <div className={`rounded-full text-white border-0 outline-0 bg-blue-900 p-3 absolute myPhone:bottom-[50%] 4xs:bottom-[41%] myPhone:text-sm 4xs:text-xs 3xs:bottom-[51%] left-[45%] 2xs:bottom-[55%] ${show ? "hidden" : "block"} `}  onClick={()=>{setShow(!show)}}>tap</div>
      <video ref={status} className="rounded w-[100%] " autoPlay={auto}> <source src={evideo} type="video/mp4" /> 
      </video>
      <AboutMe />
    </div>
    )
}
export default Profile;