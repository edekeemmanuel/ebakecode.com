import {useState} from "react"
import {useCollapse} from "react-collapsed"


const Collapse = (props) => {
  const [ isExpanded, setExpanded ] = useState(false);
  const config = {
    duration: 1000,
    easing: 'cubic-bezier(.93,.12,.42,.25)',
    expandStyles: {
        opacity: 0.5,
        color: "orange"
    },
    collapseStyles: {
        opacity: 0
    },
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight|| 0,
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
        },
    isExpanded: isExpanded,
  };
    const { getCollapseProps, getToggleProps } = useCollapse( config);
    const handleOnClick =() => {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
  return (
    <>
      <div className="collapsible">
        <div className="header" {...getToggleProps({onClick: handleOnClick})} >
            <div className="title">{props.title}</div>
            <div className="icon">
                <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    </>
    )
}
export default Collapse;