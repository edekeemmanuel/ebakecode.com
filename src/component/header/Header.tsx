//import Resume from "./resumes.png";

const Header = () => {
  return  (
    <header className="py-6 px-2 flex">
    <div className="mlg:relative mlg:left-[10%]">
      <a className="leading-6 2xs:leading-8 cursor-pointer" href="https://www.linkedin.com/in/ebakecode/">
      <span className="relative myPhone:left-1.5 header__svg"><svg enable-background="new 0 0 32 32" height="40px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="40px" className="xs:w-14 xs:h-14" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle clip-rule="evenodd" cx="16" cy="16" fill="#007BB5" fill-rule="evenodd" r="16"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g><g/><g/><g/><g/><g/><g/></svg></span>
      <span className="relative myPhone:left-2 myPhone:text-[6px] 3xs::text-[6px] 4xs:text-[12px] 4xs:bottom-1 3xs:text-[6px] 2xs:text-[6px] 2xs:left-[10%] xs:text-[8px] xs:right-9 3xs:right-7 sm:text-[10px] sm: md:text-[15px] md:right-16">LinkedIn</span>
      </a>
    </div>
    <div className="relative left-[25%] 2xs:left-[30%] mlg:left-[35%]">
      <a className="leading-6 2xs:leading-8 cursor-pointer" href="https://github.com/edekeemmanuel/">
      <span className="relative 4xs:left-2 xs:left-8 md: myPhone:left-[55%] myPhone:bottom-1 header__svg bg-neutral-50"><svg height="50px" id="Layer_1" enable-background="new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="50px" className="xs:w-16 xs:h-16 sm:w-20 md:w-28 mlg:w-28 mlg:h-32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path  d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g></svg> </span>
        <span className="relative myPhone:bottom-[15%] myPhone:left-[55%] md:top-[1px] 4xs:text-[12px] 4xs:bottom-1 4xs:left-1 3xs:text-[6px] 3xs:left-[52%] 2xs:text-[6px] xs:text-[8px] sm:text-[10px] sm:left-8 md:text-[15px] myPhone:text-[6px] ">GitHub</span>
      </a>
    </div>
    <div className="relative md:left-[69%] myPhone:left-[61%] 4xs:left-[57%] 3xs:left-[64%] 2xs:left-[68%] xs:left-[65%] sm:left-[65%] mlg:left-[66%]">
      <a>
        <img className="xs:w-[55px] xs:h-[55px] 4xs:w-[30px] 4xs:h-[30px] myPhone:w-[40px] myPhone:h-[40px] md:w-[70px] md:h-[70px]" src={"./resumes.png"} />
        <span className="relative 4xs:text-[12px] 4xs:bottom-1 myPhone:right-0.5 myPhone:text-[6px] 3xs:text-[6px] 2xs:text-[6px] xs:text-[8px] sm:text-[10px] md:text-[15px] ">CV</span>
      </a>
    </div>
    </header>
    )
}
export default Header;