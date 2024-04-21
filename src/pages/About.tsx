import ContactMe from "../component/ContactMe.tsx"

const About = () => {
  return (
    <>
      <div className="bg-white text-blue-800">
      <div className="py-10 px-3">
        <div className="flex pb-10">
          <div className="w-[50%] pr-2">
            <div className="pt-3 proza-libre-bold"><span>Hi, I'm</span>  
            </div>
            <div className="berkshire-swash-regular scale-y-[2] leading-[3rem] text-amber-500"> Emmanuel Edeke
            </div>
            <div className="proza-libre-bold leading-[1.8rem]">Enthusaist
            </div>
            <div className="la-belle-aurore-regular text-red-500 scale-y-[1.5]"> Software Engineer 
            </div>
            <div className="text-red-500  text-xs">(JS)
            </div>
            <div className="pt-3 flex justify-center">
              <ContactMe />
            </div>
          </div>
          <div className="w-[50%] ">
            <img className="rounded" src={"ecode.jpg"} />
          </div>
        </div>
        <div>
        <div className="px-5">
          <div className="rounded-md border-4 border-amber-700 p-2 bg-amber-700">
          <div className=" rounded-md border-4 border-amber-700 border-dotted">
          <div className="bg-neutral-50 text-black p-3">Super passionate software engineer that enjoys coding and building websites that are well resourceful and sustainable (readability, testability, and maintainability). I am dedicated to enhancing my professional skills, capabilities, and knowledge in the tech world and how impactful I can be on society.
          </div>
          </div>
          </div>
        </div>
        </div>
        <div className="flex px-3 w-[100%]">
          <div className="w-[50%]">
            <img className="h-60 w-32 " src={"images (11).png"} />
          </div>
          <div className="w-[50%]">
            <div className="pr-3 relative right-[13%] top-[12%] shadows-into-light-regular text-black">What keeps me moving in my work ethics, is having this understanding that grace is sufficient to learn and understand all thing. 
            </div>
          </div>
        </div>
        
        
      </div>
      </div>
    </>
    )
}
export default About;