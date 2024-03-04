//import { Link } from "react-router-dom"
import Brand from "../../view/asset/images/ebakecode.jpg";
import Greeting from "./Greeting";
import Sidebar from "./Menu"

const NavBar = () => {
  console.log("nav bar")
  return  (
    <nav className="text-neutral-700 myPhone:h-20 bg-blue-900" >
      <div className="sm:p-10 myPhone:px-2 myPhone:py-3">
        <div className="flex">
          <div className=" myPhone:w-[20%]">
            <img className="animate-pulse w-[80%] h-[100%] rounded-full border-solid border-4 border-amber-500 outline-solid outline-offset-4 outline-4 outline-neutral-800 shadow-lg" src={Brand} />
          </div>
          <Greeting />
          <Sidebar/>
        </div>
      </div>
    </nav>
    )
}
export default NavBar;