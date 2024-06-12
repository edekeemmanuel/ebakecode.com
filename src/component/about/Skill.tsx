import Theme from "../../utility/Theme.tsx"
import {stack} from "../../model/Data.ts"
import Stack from "./Stack.tsx"
const Skill = () => {
  
  return (
    <>
      <div className="select-none pt-7">
        <div>
          <h1 className="proza-libre-bold text-start text-blue-900 text-xl sm:text-3xl md:text-4xl mlg:text-5xl">Skills</h1>
        </div>
        <Theme>
        <div className="  grid grid-cols-5 gap-1 sm:grid-cols-8">
          {stack.map(data => <Stack className="p-10" id={data.id}  name={data.name} image={data.image}/>)}
        </div>
        </Theme>
      </div>
    </>
    )
}
export default Skill;
