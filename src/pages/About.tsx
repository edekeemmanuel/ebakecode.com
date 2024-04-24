import ContactMe from "../component/ContactMe.tsx"
import Experience from "../component/about/Experience.tsx"
import Objective from "../component/about/Objective.tsx"

const About = () => {
  return (
    <>
      <div className="bg-white text-black ">
      <div className="py-10 px-4">
        <div className="flex pb-10 ">
          <div className="w-[50%] pr-2">
            <div className="pt-3 proza-libre-bold"><span>Hi, I'm</span>  
            </div>
            <div className="cursor-pointer scale-y-[2] leading-[3rem] hover:animate-bounce text-blue-800 hover:text-black proza-libre-bold"> Emmanuel Edeke
            </div>
            <div className=" leading-[1.8rem] proza-libre-bold">Enthusaist
            </div>
            <div className=" hover:text-blue-800 proza-libre-bold text-sm"> Software Engineer 
            </div>
            <div className="hover:text-blue-800 proza-libre-bold  text-xs">(JS)
            </div>
            <div className="pt-3 flex justify-center">
              <ContactMe />
            </div>
          </div>
          <div className="w-[50%] ">
            <img className="rounded" src={"ecode.jpg"} />
          </div>
        </div>
        <div className="px-5">
          <Objective />
        </div>
        <Experience />
      </div>
      </div>
    </>
    )
}
export default About;