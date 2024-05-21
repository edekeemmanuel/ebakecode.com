import {useState} from "react"
import {useCollapse} from "react-collapsed"
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";


  const Collapse = (props) => {
    let {id, name, company, image, content, website, date} = props;
  const [ expanded, setExpanded ] = useState(false);
  const [bgColor, setBgColor] = useState(false)
  const config = {
    duration: 1000,
    easing: 'cubic-bezier(.93,.12,.42,.25)',
    expandStyles: {
        opacity: 0.5,
        backgroundColor: "black"
    },
    collapseStyles: {
        opacity: 0
    },
    defaultExpanded: /*props.defaultExpanded || */false,
    collapsedHeight: 0,
        onExpandStart: () => {
            console.log('INFO: onExpandStart triggered.');
        },
        onExpandEnd: () => {
            console.log('INFO: onExpandEnd triggered.');
        },
        onCollapseStart: () => {
            console.log('INFO: onCollapseStart triggered.');
        },
        onCollapseEnd: () => {
            console.log('INFO: onCollapseEnd triggered.');
        }
  };
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse( config);
  const handleOnClick =() => {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!expanded);
        setBgColor(!bgColor)
    }
  return(
    <>
     <div className="pb-6" key={id ? id : company}>
      <div>
        <div className={`hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition transition delay-100 ease-in-out duration-1000 p-3 hover:bg-blue-900 hover:text-white cursor-pointer  rounded-2xl proza-libre-bold ${bgColor ?  "bg-blue-900 text-white" : "bg-amber-500 text-black" }`}>
          <div className=" flex align-middle w-[100%]"  >
            <div className="rounded-full border-2 border-white w-[18%] bg-white">
              <div className="p-2">
                <img className="size-10 " src={image} alt={company} />
              </div>
            </div>
            <div className="w-[65%]">
              <span>{company} </span><span className="text-xs">founded by </span> <span>{name}</span>
            </div>
            <div className="icon w-[15%]" {...getToggleProps({onClick: handleOnClick})}>
              {isExpanded ? <FaCircleMinus className="relative top-3 left-5 text-white text-3xl animate-spin" /> : <FaCirclePlus className="relative top-3 left-5 text-white text-3xl hover:animate-spin" />}
            </div>
          </div>
        </div>
        <div  {...getCollapseProps()} className="bg-amber-500 rounded-2xl ">
        <div className="py-5 px-1">
          <div className="text-end text-xs pr-3 pb-1.5">
            <time dateTime="2021-10-15T09:00">{date}</time>
          </div>
          <div className="">
            <p className="bg-amber-500 text-black pb-2">{content}</p>
          </div>
          <div>
          <button className="rounded-full bg-white ring ring-amber-500 ring-offset-2 ring-offset-amber-500 dark:ring-offset-amber-500">
            <a href={website} className="p-5 text-xl ">website</a>
          </button>
          </div>
        </div>
        </div>      
      </div>
                
     </div>
    </>
    )
}
export default Collapse;