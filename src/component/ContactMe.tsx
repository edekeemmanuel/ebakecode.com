import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/
import {Link} from "react-router-dom"
import {PathConstants} from "../routes/pathConstants.ts";

export default function ContactMe() {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div className="bg-blue-900 hover:bg-amber-500 hover:text-black rounded myPhone:text-[12px] text-neutral-50 w-[80%] 4xs:text-xs 2xs:text-md sm:text-xl mlg:text-3xl" onClick={() => toggle(!state)}>
      <animated.div
        className="py-2"
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}>
        <Link to={PathConstants.CONTACT}>Contact EBakeCode</Link>
      </animated.div>
    </div>
  )
}