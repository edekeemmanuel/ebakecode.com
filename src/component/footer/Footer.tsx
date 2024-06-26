import {useState, useEffect} from "react"
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
//import { IoMdMailUnread } from "react-icons/io";


const Footer = () => {
  const [dates, setDates] = useState(1)
  useEffect(() =>{
    const Year = () =>{
      const d = new Date(); 
      let currentYear = d.getFullYear(); 
      return currentYear;
    }
  setDates(Year())
  }, [dates])
  return  (
    <footer className="bg-white text-black">
      <div className="cursor-pointer flex py-2 sm:py-8 xs:py-8 hover:text-amber-500 ">
        <div className="relative left-4 flex text-2xl xs:text-3xl text-neutral-50 top-3 xs:top-6 sm:text-5xl mlg:text-6xl text-black">
         <a className="">
          <span>&#128640;</span>
          <span className="text-[10px] relative top-4 sm:top-6 md:top-7 right-8 sm:right-12 md:text-[15px] text-black mlg:text-[20px] mlg:top-10 mlg:right-16">project</span>
         </a>
         <a className="relative right-5">
          <span>&#128221;</span>
          <span className="text-[10px] relative top-4 sm:top-6 md:top-7 md:right-[48px] sm:right-[40px] right-[26px] md:text-[15px] text-black mlg:text-[20px] mlg:top-10 mlg:right-14">blog</span>
         </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ebakecode@gmail.com" className="relative right-7 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bg-white rounded xs:w-12 xs:h-8 sm:h-14 mlg:w-20 mlg:h-20" data-name="Layer 1" viewBox="0 0 32 32" id="gmail"><path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,...66.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path></svg>
            <span className="text-[10px] relative bottom-4 sm:bottom-8 md:text-[15px] md:bottom-7 text-black mlg:text-[20px] mlg:bottom-10">mail</span>
          </a>
        </div>
        <div className="grid  grid-cols-2  gap-1 text-3xl 2xs:text-4xl xs:text-5xl sm:text-6xl mlg:text-7xl absolute 4xs:left-[75%] 3xs:left-[79%] 2xs:left-[79%] xs:left-[79%] myPhone:left-[77%] sm:left-[77%] md:left-[80%] mlg:left-[80%] text-blue-900 hover:text-amber-500">
        <a href="https://wa.me/message/2IKMWHGVFTLMD1">
          <FaSquareWhatsapp />
         </a>
         <a href="https://twitter.com/EBakeCode">
          <FaSquareTwitter />
         </a>
         <a href="https://facebook.com/ebakecode">
          <FaSquareFacebook />
         </a>
         <a href="https://instagram.com/ebakecode">
          <FaSquareInstagram />
         </a>
        </div>
      </div>
      <div className="">
        <small className="text-[5px] relative bottom-0.5 sm:text-xs md:text-lg">&copy; Copyright {dates}, EBakeCode. All Rights Reserved</small>
      </div>
    </footer>
    )
}
export default Footer;