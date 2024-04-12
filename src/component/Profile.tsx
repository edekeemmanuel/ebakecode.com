import AboutMe from "./AboutMe"
import {useState, useRef} from "react"
const Profile = () => {
 const init = false;
 const [stop, setStop] = useState(init);
  const status = useRef<HTMLVideoElement>(null) 
  
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
      <video ref={status} className="rounded w-[100%]" autoPlay={true}> <source src={"./20230804_1911241.mp4"} type="video/mp4" /> 
      </video>
      <AboutMe />
    </div>
    )
}
export default Profile;