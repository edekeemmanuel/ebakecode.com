import * as React from "react";
import { useRef} from 'react';
import Slider, {Slide} from "../Slide";

const Greeting = () => {
  console.log("greeting")
  const creativeEffect = {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  }
  
  const progressCircle: any = useRef(null);
  const progressContent: any = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if(progressCircle.current != null && progressContent.current != null) {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s` + s;
    }
    };
  const autoplayTime ={
    delay: 10000,
    disableOnInteraction: false,
  };
  
  return (
  <div className="w-[100%] h-14 2xs:h-16 bg-blue-900 4xs:text-[10px] myPhone:text-xs 2xs:text-[16px] md:text-[25px] lg:text-[30px] mlg:w-[55%] sm:w-[65%] myPhone:w-[60%] 4xs:w-[60%] text-neutral-50 relative left-2.5">
        <Slider
      settings={{
        slidesPerView: 1,
        autoplay: autoplayTime,
        onAutoplayTimeLeft:onAutoplayTimeLeft,
        grabCursor:true,
        centeredSlides: true,
        effect: "creative",
        creativeEffect:creativeEffect,
        speed:1000,
        parallax:true,
      }}
    >
        <Slide className="bg-blue-900">
          <h1 className="sm:py-5 myPhone:py-2 md:py-2 h-10 sm:h-20 md:h-24 4xs:h-12 2xs:h-14 lg:h-28 md:leading-8 2xs:leading-6 lg:leading-10" data-swiper-parallax="-8">Welcome to great experience with EBakeCode <span>&#128075;</span></h1>
        </Slide>
        <Slide className="bg-blue-900">
          <h1 className="sm:py-5 myPhone:py-2 h-10 sm:h-20 md:h-24 4xs:h-12 lg:h-28 2xs:h-14" data-swiper-parallax="-3">Hello <span>&#128513;</span></h1>
        </Slide>
        <Slide className="bg-blue-900">
          <h1 className="sm:py-5 myPhone:py-2 h-10 4xs:h-12 sm:h-20 md:h-24 lg:h-28 2xs:h-14 md:leading-8 2xs:leading-6 lg:leading-10" data-swiper-parallax="-6">Building innovative and solution software is my passion&#46;</h1>
        </Slide>
      <div className="hidden autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="15" cy="15" r="11"></circle>
          </svg>
          <span className="text-neutral-700 cursor-pointer" ref={progressContent}></span>
        </div>
    </Slider>
</div>
  );
};
export default Greeting;
