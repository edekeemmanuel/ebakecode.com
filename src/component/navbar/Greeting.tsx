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
  <div className="w-[100%] myPhone:h-14 bg-blue-900  myPhone:text-xs myPhone:w-[60%] text-neutral-50">
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
          <h1 className="sm:py-5 myPhone:py-2 h-10 " data-swiper-parallax="-8">Welcome to great experience with EBakeCode <span>&#128075;</span></h1>
        </Slide>
        <Slide className="bg-blue-900">
          <h1 className="sm:py-5 myPhone:py-2 h-10" data-swiper-parallax="-3">Hello <span>&#128513;</span></h1>
        </Slide>
        <Slide className="bg-blue-900">
          <h1 className="sm:py-5 myPhone:py-2 h-10" data-swiper-parallax="-6">Building innovative and solution software is my passion&#46;</h1>
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
