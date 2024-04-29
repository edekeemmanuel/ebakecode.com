import Collapse from "../../utility/Collapse.tsx"
import {experience} from "../../model/Data.ts"

const Experience = () => {
   return (
     <>
      <div className="select-none">
        <div>
          <h1 className="proza-libre-bold text-start text-blue-900 text-xl">Experiences</h1>
          <div className="pt-5">
            {experience.map(data => <Collapse id={data.id} name={data.name} company={data.company} image={data.image} content={data.content} website={data.website} date={data.date} /> )}
          </div>
        </div>
      </div>
     </>
     )
 };
 export default Experience;