import { useState } from 'react';


function Theme({children}) {
  
 const [darkMode, setDarkMode] = useState(false);


 function toggleMode() {
   setDarkMode(!darkMode);
 }


 const buttonClass = darkMode ? 'bg-secondary text-primary ' : 'bg-primary text-secondary';


 /*const buttonStyles = {
   boxShadow: `0px 2px 0px var(--color-${darkMode ? 'secondary' : 'primary'})`,
 };
*/

 return (
   <div className={`${darkMode ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} rounded-2xl flex-col justify-center items-center`}>
    <div className="flex items-center justify-end p-0.5">
    <div className="pr-1.5 text-xs">
    {darkMode ? 'Light Mode' : 'Dark Mode'}
    </div>
    <label className="switch">
      <input type="checkbox" onClick={toggleMode} className={`${buttonClass} var(--color-${darkMode ? 'secondary' : 'primary'} `} />
      <span className={`slider round var(--color-${darkMode ? 'secondary' : 'primary'}`}></span>
    </label>
    </div>
     
     {children}
   </div>
 );
}
export default Theme;