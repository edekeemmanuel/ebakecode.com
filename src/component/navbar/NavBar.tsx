import { Link } from "react-router-dom"
import Greeting from "./Greeting";
import Sidebar from "./Menu"
import {PathConstants} from "../../routes/pathConstants";

const NavBar = () => {
  console.log("nav bar")
  return  (
    <nav className="text-neutral-700 4xs:h-[13vh] myPhone:h-20 3xs:h-24 2xs:h-[13vh] sm:h-32 md:h-32 lg:h-[10vh] mlg:h-40 bg-blue-900" >
      <div className="px-2 py-3">
        <div className="flex">
          <Link to={PathConstants.HOME} className="w-[20%] mlg:pl-9 lg:pl-8">
            <img className="animate-pulse w-[80%] 4xs:h-[80%] myPhone:h-[100%] md:h-[80%] mlg:h-[100%] lg:h-[100%] rounded-full border-solid border-4 border-amber-500 outline-solid outline-offset-4 outline-4 outline-neutral-800 shadow-lg" src={"ebakecode.jpg"} />
          </Link>
          <Greeting />
          <Sidebar/>
        </div>
      </div>
    </nav>
    )
}
export default NavBar;