import ContactMe from "../component/ContactMe.tsx"
import Experience from "../component/about/Experience.tsx"
import Objective from "../component/about/Objective.tsx"
import Skill from "../component/about/Skill.tsx"
import ecode from "../view/image/ecode.jpg"

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
            <img className="hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition rounded shadow-lg shadow-neutral-100 hover:opacity-50 drop-shadow-2xl transition ease-in-out delay-100 duration-500 delay-100" src={ecode} />
          </div>
        </div>
        <div className="px-5">
          <Objective />
        </div>
        <Experience />
        <Skill />
      </div>
      </div>
    </>
    )
}
export default About;