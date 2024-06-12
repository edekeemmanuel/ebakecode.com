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
     <div className="pb-6 4xs:text-xs myPhone:text-sm" key={id ? id : company}>
      <div>
        <div className={`hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition transition delay-100 ease-in-out duration-1000 p-3 hover:bg-blue-900 hover:text-white cursor-pointer  rounded-2xl proza-libre-bold ${bgColor ?  "bg-blue-900 text-white" : "bg-amber-500 text-black" }`}>
          <div className=" flex align-middle w-[100%]"  >
            <div className="rounded-full border-2 border-white myPhone:w-[18%] 4xs:w-[23%] 2xs:w-[15%] sm:w-[18%] bg-white md:w-[15%] mlg:w-[13%] relative mlg:left-3">
              <div className="p-2 sm:p-5">
                <img className="size-10 " src={image} alt={company} />
              </div>
            </div>
            <div className="myPhone:w-[65%] 4xs:w-[55%] 4xs:pl-2 myPhone:pl-0 pt-2 2xs:w-[80%] 2xs:pl-4 2xs:pt-3.5 sm:text-2xl sm:pt-2 md:text-3xl mlg:text-4xl">
              <span>{company} </span><span className="text-xs sm:text-xl md:text-2xl mlg:text-3xl">founded by </span> <span>{name}</span>
            </div>
            <div className="icon w-[15%]" {...getToggleProps({onClick: handleOnClick})}>
              {isExpanded ? <FaCircleMinus className="relative top-3 left-5 text-white text-3xl animate-spin sm:top-6 sm:text-4xl mlg:left-14 mlg:text-6xl" /> : <FaCirclePlus className="relative top-3 left-5 text-white text-3xl hover:animate-spin 2xs:left-6 sm:top-4 sm:text-5xl mlg:left-14 mlg:text-6xl" />}
            </div>
          </div>
        </div>
        <div  {...getCollapseProps()} className="bg-amber-500 rounded-2xl ">
        <div className="py-5 px-1">
          <div className="text-end text-xs pr-3 pb-1.5 sm:text-xl md:text-2xl mlg:text-3xl">
            <time dateTime="2021-10-15T09:00">{date}</time>
          </div>
          <div className="">
            <p className="bg-amber-500 text-black pb-2 sm:text-2xl md:text-3xl mlg:text-4xl mlg:py-4">{content}</p>
          </div>
          <div>
          <button className="rounded-full bg-white ring ring-amber-500 ring-offset-2 ring-offset-amber-500 dark:ring-offset-amber-500 sm:h-14">
            <a href={website} className="p-5 text-xl sm:text-2xl md:text-3xl mlg:text-4xl">website</a>
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