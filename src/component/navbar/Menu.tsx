import {PathConstants} from "../../routes/pathConstants";
import {NavLink} from "react-router-dom"
import { fallDown as Menu } from 'react-burger-menu';
import { FaHamburger } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CustomBurgerIcon = () => <FaHamburger className="hover:text-neutral-50 text-amber-500 text-3xl 2xs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl border-0 outline-0 hover:border-0 hover:outline-0 hover:text-neutral-50" />
const CustomCrossIcon= () => <IoMdCloseCircleOutline className="hover:text-neutral-50 text-red-500 text-3xl border-none outline-none absolute right-1 " />

const Sidebar = () => {
  return (
    <div  className="cursor-pointer myPhone:w-[20%] relative myPhone:pl-9 4xs:pl-6 md:pl-20 4xs:py-2 md:p-6 myPhone:p-3 3xs:pl-11 xs:pl-14 mlg:pl-32">
      <Menu className="absolute bottom-0 bg-neutral-50 text-amber-500 hover:text-blue-900" customBurgerIcon={<CustomBurgerIcon/>} customCrossIcon={<CustomCrossIcon/>} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={'40%'} right>
          <div className="mt-12">
            <NavLink className="md:text-3xl lg:text-4xl" to={PathConstants.HOME} >HOME</NavLink>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-24 md:w-48 lg:w-56 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-1 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-neutral-50">🫶🏽</span>
            </div>
          </div>
      </Menu>
    </div>
  );
};

export default Sidebar;