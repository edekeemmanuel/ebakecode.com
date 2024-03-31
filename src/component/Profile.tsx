import About from "./About"
import {useState, useEffect, useRef} from "react"
const Profile = () => {
  const init = 4;
  const [count, setCount] = useState(init);
  const times = useRef();
  
  useEffect( () => {
    times.current = setInterval(() => {
      setCount(count => count - 1)
    },8000);
    return () => clearInterval(times.currrent)
  }, [])
  
  return (
    <div className="">
      <video ref={times} className="rounded w-[100%]" src={"./20230804_1911241.mp4"} autoPlay playsInline loop={count} />
      <About />
    </div>
    )
}
export default Profile;