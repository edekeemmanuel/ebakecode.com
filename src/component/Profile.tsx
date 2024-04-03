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
      <img className="rounded w-[100%]" src={"./20230804_1913352.gif"} />
      <About />
    </div>
    )
}
export default Profile;