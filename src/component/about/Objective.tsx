import {useState} from "react"
import {useCollapse} from "react-collapsed"
import fist from "../../view/image/istockphoto-1389506839-612x612.jpg"

const Objective = () => {
 const [ isExpanded, setExpanded ] = useState(false);
  const config = {
    duration: 1000,
    easing: 'cubic-bezier(.93,.12,.42,.25)',
    collapsedHeight: 17,
    
    isExpanded: isExpanded
  }
  const { getCollapseProps, getToggleProps } = useCollapse( config);
    const handleOnClick =() => {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
  return (
    <>
      <div className="cursor-pointer ">
      <div className="hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition transition delay-100 ease-in-out duration-1000 rounded-md border-4 border-amber-500 p-2 bg-blue-900 border-blue-900 hover:border-amber-500 hover:bg-amber-500 text-black hover:text-blue-900 4xs:text-xs myPhone:text-sm">
          <div className=" rounded-md border-4 border-amber-500 hover:border-blue-900 border-dotted" {...getToggleProps({onClick: handleOnClick})}>
          <div className="bg-neutral-50 p-3">
          <div {...getCollapseProps()} className="sm:text-2xl md:text-3xl mlg:text-4xl">Super passionate software engineer that enjoys coding and building websites that are well resourceful and sustainable (readability, testability, and maintainability). I am dedicated to enhancing my professional skills, capabilities, and knowledge with the team and how impactful I can provide insight and solution tech wise to the community.
          </div>
          </div>
          </div>
      </div>
      <div className="flex  w-[100%]">
          <div className="w-[30%]">
            <img className="h-60 md:h-64" src={fist} />
          </div>
          <div className="w-[70%] 4xs:text-xs myPhone:text-sm ">
            <div className="pt-14 relative right-3 berkshire-swash text-black hover:text-blue-900 2xs:pt-20 sm:text-xl sm:pt-14 md:text-2xl">What keeps me moving in my work ethics, is having this understanding that grace is sufficient to learn and understand everything. 
            </div>
          </div>
      </div> 
      </div>
    </>
    )
}
export default Objective;