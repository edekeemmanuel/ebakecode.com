import ContactMe from "../component/ContactMe.tsx"
import Experience from "../component/about/Experience.tsx"
import Objective from "../component/about/Objective.tsx"
import Skill from "../component/about/Skill.tsx"
import Certificate from "../component/about/Certificate.tsx"
import Recommendation from "../component/about/Recommendation.tsx"
import ecode from "../view/image/ecode.jpg"

const About = () => {
  return (
    <>
      <div className="bg-white text-black overflow-x-hidden ">
      <div className="py-10 px-4 ">
        <div className="flex pb-10 ">
          <div className="w-[50%] pr-2 ">
            <div className="myPhone:pt-6 4xs:pt-3.5 proza-libre-bold 4xs:text-xs myPhone:text-sm 2xs:text-xl 2xs:pt-7 xs:text-2xl xs:pt-12 sm:text-3xl sm:pt-10 md:pt-24 mlg:text-4xl mlg:pt-32"><span>Hi, I'm</span>  
            </div>
            <div className="cursor-pointer scale-y-[2] leading-[3rem] hover:animate-bounce text-blue-800 hover:text-black proza-libre-bold 4xs:text-xs 4xs:py-2 myPhone:text-sm 2xs:text-xl xs:text-2xl sm:text-2xl mlg:text-4xl"> Emmanuel Edeke
            </div>
            <div className="4xs:text-xs leading-[1.8rem] proza-libre-bold myPhone:text-sm 2xs:text-xl xs:text-2xl sm:text-3xl mlg:text-4xl">Enthusaist
            </div>
            <div className="4xs:text-xs hover:text-blue-800 proza-libre-bold myPhone:text-sm 2xs:text-xl xs:text-2xl sm:text-3xl mlg:text-4xl"> Software Engineer 
            </div>
            <div className="hover:text-blue-800 proza-libre-bold   4xs:text-xs 2xs:text-md xs:text-lg sm:text-xl mlg:text-2xl">(JS)
            </div>
            <div className="pt-3 flex justify-center">
              <ContactMe />
            </div>
          </div>
          <div className="w-[50%] ">
            <img className="hover:drop-shadow-md hover:shadow-md hover:shadow-neutral-500 hover:transition rounded shadow-lg shadow-neutral-100 hover:opacity-50 drop-shadow-2xl transition ease-in-out delay-100 duration-500 delay-100 4xs:h-52 myPhone:h-[100%]" src={ecode} />
          </div>
        </div>
        <div className="px-5">
          <Objective />
        </div>
        <Experience />
        <Skill />
        <div className="overflow-hidden">
        <Certificate />
        </div>
        <Recommendation />
      </div>
      </div>
    </>
    )
}
export default About;