//import Resume from "./resumes.png";

const Header = () => {
  return  (
    <header className="py-6 px-2 grid grid-cols-3">
    <div className="">
      <a className="leading-6 2xs:leading-8" href="https://www.linkedin.com/in/ebakecode/">
      <span className="relative myPhone:left-1.5 2xs:left-5 xs:left-7 md:left-5 header__svg"><svg enable-background="new 0 0 32 32" height="40px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle clip-rule="evenodd" cx="16" cy="16" fill="#007BB5" fill-rule="evenodd" r="16"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g><g/><g/><g/><g/><g/><g/></svg></span>
      <span className="relative myPhone:right-8 4xs:text-[12px] 4xs:bottom-1 3xs:text-[15px] 2xs:text-[18px] xs:text-[20px] xs:right-9 3xs:right-7 sm:text-[18px] sm:right-12 md:text-[20px] md:right-16">LinkedIn</span>
      </a>
    </div>
    <div className="">
      <a className="leading-6 2xs:leading-8" href="https://github.com/edekeemmanuel/">
      <span className="relative 2xs:left-12 xs:left-16 sm:left-20 md:left-[90px] myPhone:left-11 header__svg"><svg enable-background="new 0 0 32 32" id="Social_Icons" version="1.1" viewBox="0 0 128 128" width="40px" height="40px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="_x31__stroke"><g id="Github_1_"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="16" width="4"/><path clip-rule="evenodd" d="M63.996,1.333C28.656,1.333,0,30.099,0,65.591    c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927    c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907    c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59    c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003    c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165    c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244    c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626    c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333" fill="#3E75C3" fill-rule="evenodd" id="Github"/></g></g></svg></span>
        <span className="relative left-2 4xs:text-[12px] 4xs:bottom-1 4xs:left-1 3xs:text-[14px] 3xs:left-0 2xs:text-[18px] xs:text-[20px] sm:text-[18px] sm:left-1 md:text-[20px]">GitHub</span>
      </a>
    </div>
    <div className="relative 2xs:left-20 xs:left-28 sm:left-32 md:left-[165px] myPhone:left-[70px]">
      <a>
        <img className="4xs:w-[30px] 4xs:h-[30px] myPhone:w-[40px] myPhone:h-[40px] md:w-[70px] md:h-[70px]" src={"./resumes.png"} />
        <span className="relative 4xs:text-[12px] 4xs:bottom-1 4xs:right-9 myPhone:right-10 3xs:text-[14px] 2xs:text-[18px] xs:text-[20px] 3xs:right-10 2xs:right-12 xs:right-16 sm:text-[18px] sm:right-20 md:right-[90px] md:text-[20px]">CV</span>
      </a>
    </div>
    </header>
    )
}
export default Header;