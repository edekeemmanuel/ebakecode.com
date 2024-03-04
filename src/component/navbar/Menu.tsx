/*import {useState, useRef, useEffect} from "react"
import { FaBars } from 'react-icons/fa';
import {NavLink} from "react-router-dom"
import PathConstants from "../routes/pathConstants";


const Menu = () => {
  
  
  return(
    <div className="myPhone:w-[20%] border-4">
      <div>
        <FaBars className="w-[15%]" />
      </div>
    </div>
  )
}
export default Menu;
*/
import PathConstants from "../../routes/pathConstants";
import {NavLink} from "react-router-dom"
import { fallDown as Menu } from 'react-burger-menu';
import { FaHamburger } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CustomBurgerIcon = () => <FaHamburger className="hover:text-neutral-50 text-amber-500 text-3xl border-0 outline-0 hover:border-0 hover:outline-0" />
const CustomCrossIcon= () => <IoMdCloseCircleOutline className="hover:text-neutral-50 text-red-500 text-3xl border-0 outline-0" />

const Sidebar = () => {
  return (
    <div  className="myPhone:w-[20%] relative p-3 ">
      <Menu className="absolute bottom-0 bg-neutral-50 text-amber-500" customBurgerIcon={<CustomBurgerIcon/>} customCrossIcon={<CustomCrossIcon />} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={'40%'} right>
          <div className="">
            <NavLink to={PathConstants.HOME} >HOME</NavLink>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-20 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-neutral-50">🫶🏽</span>
            </div>
          </div>
      </Menu>
    </div>
  );
};

export default Sidebar;