import ContactMe from "../component/ContactMe.tsx"

const About = () => {
  return (
    <>
      <div className="bg-white text-blue-800">
      <div className="py-10 px-3">
        <div className="flex pb-10">
          <div className="w-[50%] pr-2">
            <div className="pt-3 proza-libre-bold"><span>Hi, I'm</span>  </div>
            <div className="berkshire-swash-regular scale-y-[2] leading-[3rem] text-amber-500"> Emmanuel Edeke</div>
            <div className="proza-libre-bold leading-[1.8rem]">Enthusaist</div>
            <div className="la-belle-aurore-regular text-red-500 scale-y-[1.5]"> Software Engineer </div>
            <div className="text-red-500  text-xs">(JS)</div>
            <div className="pt-3 flex justify-center">
              <ContactMe />
            </div>
          </div>
          <div className="w-[50%] ">
            <img className="rounded" src={"ecode.jpg"} />
          </div>
        </div>
        <div>
          <div className="proza-libre-bold">
          <div>Super passionate software engineer that enjoy coding and building websites, that is well resourceful and sustainable (readability, testability and maintainability). Dedicated in enhancing my professional skills, capabilities and knowledge in the tech world and how impactful I can help the society.
          </div>
          </div>
            <div>What keeps me moving in my work ethics, is having this understanding that grace is sufficient to learn and understand all thing. </div>
        </div>
      </div>
      </div>
    </>
    )
}
export default About;