import AboutMe from "./AboutMe"
import {useState, useEffect, useRef} from "react"
import evideo from "../view/video/20230804_1911241.mp4";


const Profile = () => {
 const init = false;
 const [auto, setAuto] = useState(true)
 const [stop, setStop] = useState(init);
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
      <video ref={status} className="rounded w-[100%]" autoPlay={auto}> <source src={evideo} type="video/mp4" /> 
      </video>
      <AboutMe />
    </div>
    )
}
export default Profile;