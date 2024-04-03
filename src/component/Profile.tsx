import About from "./About"
//import {useState, useRef} from "react"
const Profile = () => {
 /* const init = false;
 const [stop, setStop] = useState(init);
  const status = useRef<HTMLVideoElement>() 
  
  const handleClick = () => {
    setStop(!stop);
    if (stop === true) {
      status.current.pause();
    } else {
      status.current.play();
    }
  }
  */
  return (
    <div className="" >
      <video  className="rounded w-[100%]" src={"./20230804_1911241.mp4"} autoPlay />
      <About />
    </div>
    )
}
export default Profile;