import {PathConstants} from "../../routes/pathConstants";
import {NavLink} from "react-router-dom"
import { fallDown as Menu } from 'react-burger-menu';
import { FaHamburger } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CustomBurgerIcon = () => <FaHamburger className="text-blue-900 hover:text-amber-500 text-3xl 2xs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl border-0 outline-0 hover:border-0 hover:outline-0 hover:text-neutral-50" />
const CustomCrossIcon= () => <IoMdCloseCircleOutline className="text-blue-900 hover:text-amber-500 text-3xl border-none outline-none absolute right-1 " />

const Sidebar = () => {
  return (
    <div  className="cursor-pointer myPhone:w-[20%] relative myPhone:pl-9 4xs:pl-6 md:pl-20 4xs:py-2 md:p-6 myPhone:p-3 3xs:pl-11 xs:pl-14 mlg:pl-32 overflow-y-hidden">
      <Menu className="hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition transition delay-100 ease-in-out duration-1000 drop-shadow-2xl shadow-2xl shadow-neutral-100 rounded absolute bottom-0 bg-white hover:text-blue-900 text-black overflow-y-hidden" customBurgerIcon={<CustomBurgerIcon/>} customCrossIcon={<CustomCrossIcon />} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={'40%'} right>
          <div className="mt-12 overflow-y-hidden">
            <NavLink className="md:text-3xl lg:text-4xl flex justify-center" to={PathConstants.HOME} ><div className="animate-bounce">🏠 </div>Home</NavLink>
            <div className="inline-flex items-center justify-center w-full ">
              <hr className="w-24 md:w-48 lg:w-56 h-px my-2 bg-neutral-50 border-0 dark:bg-black" />
              <span className="absolute px-1 font-medium text-gray-900 -translate-x-1/2 bg-blue-900 left-1/2 dark:text-blue-900 dark:bg-white ">🫶🏽</span>
            </div>
          </div>
          <div className="mt-5 overflow-y-hidden">
            <NavLink className="md:text-3xl lg:text-4xl flex justify-center" to={PathConstants.BLOG} ><div className="hover:animate-pulse">📝️</div> Blog</NavLink>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-24 md:w-48 lg:w-56 h-px my-2 bg-black border-0 dark:bg-black" />
              <span className="absolute px-1 font-medium text-gray-900 -translate-x-1/2 bg-blue-900 left-1/2 dark:text-white dark:bg-white">🫶🏽</span>
            </div>
          </div>
          <div className="mt-5 overflow-y-hidden">
            <NavLink className="md:text-3xl lg:text-4xl flex justify-center" to={PathConstants.PROJECT} ><div className="hover:animate-pulse">🚀 </div>Project</NavLink>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-24 md:w-48 lg:w-56 h-px my-2 bg-black border-0 dark:bg-black" />
              <span className="absolute px-1 font-medium text-gray-900 -translate-x-1/2 bg-blue-900 left-1/2 dark:text-white dark:bg-white">🫶🏽</span>
            </div>
          </div>
          <div className="mt-5 overflow-y-hidden">
            <NavLink className="md:text-3xl lg:text-4xl flex justify-center" to={PathConstants.CONTACT} ><div className="animate-pulse">☎️ </div>Contact</NavLink>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-24 md:w-48 lg:w-56 h-px my-2 bg-black border-0 dark:bg-black" />
              <span className="absolute px-1 font-medium text-gray-900 -translate-x-1/2 bg-blue-900 left-1/2 dark:text-white dark:bg-white">🫶🏽</span>
            </div>
          </div>
      </Menu>
    </div>
  );
};

export default Sidebar;