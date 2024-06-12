// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import required modules
import { Zoom,EffectCards, Pagination, } from 'swiper/modules';

import jobbermancert from "../../view/image/Screenshot_2024-05-09_065853.jpg"
import sidehustlecert from "../../view/image/Edeke_Emmanuel_Sidehustle_Certificate.jpg"
import kodecampcert from "../../view/image/Screenshot_2024-05-09_065817.jpg"
import devcert from "../../view/image/Screenshot_2024-05-09_065838.jpg"


export default function Certificate() {
  
  return (
    <>
      <div className="pt-10 pb-5">
          <h1 className="proza-libre-bold text-start text-blue-900 text-xl sm:text-3xl md:text-4xl mlg:text-5xl">Awards</h1>
      </div>    
      <Swiper
      zoom={true}
        effect={'cards'}
        grabCursor={true}
        modules={[Zoom, EffectCards, Pagination, ]}
        className="overflow-hidden w-[240px] 3xs:w-[300px] 2xs:w-[360px] sm:w-[500px] md:w-[600px] "
      >
        <SwiperSlide  className="swiper-slidecert">
          <div className="swiper-zoom-container"><img className="" src={jobbermancert} /></div>
        </SwiperSlide >
        <SwiperSlide  className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={sidehustlecert} /></div></SwiperSlide>
        <SwiperSlide  className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={kodecampcert}  /></div></SwiperSlide>
        <SwiperSlide  className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={devcert}  /></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}

/*
const pagination ={
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="'+ className +'">'+ (index + 1) +'</span>';
    },
  }
  */
