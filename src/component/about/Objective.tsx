import {useState} from "react"
import {useCollapse} from "react-collapsed"

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
      <div className="cursor-pointer">
      <div className="rounded-md border-4 border-blue-900 p-2 bg-blue-900 hover:border-amber-500 hover:bg-amber-500 text-black hover:text-blue-800">
          <div className=" rounded-md border-4 border-amber-500 hover:border-blue-900 border-dotted" {...getToggleProps({onClick: handleOnClick})}>
          <div className="bg-neutral-50 p-3">
          <div {...getCollapseProps()}>Super passionate software engineer that enjoys coding and building websites that are well resourceful and sustainable (readability, testability, and maintainability). I am dedicated to enhancing my professional skills, capabilities, and knowledge with the team and how impactful I can provide insight and solution tech wise to the community.
          </div>
          </div>
          </div>
      </div>
      <div className="flex  w-[100%]">
          <div className="w-[30%]">
            <img className="h-60" src={"istockphoto-1389506839-612x612.jpg"} />
          </div>
          <div className="w-[70%]">
            <div className="pt-14 relative right-3 berkshire-swash text-black hover:text-black">What keeps me moving in my work ethics, is having this understanding that grace is sufficient to learn and understand everything. 
            </div>
          </div>
      </div> 
      </div>
    </>
    )
}
export default Objective;