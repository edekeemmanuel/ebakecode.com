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
          <h1 className="proza-libre-bold text-start text-blue-900 text-xl">Awards</h1>
      </div>    
      <Swiper
      zoom={true}
        effect={'cards'}
        grabCursor={true}
        modules={[Zoom, EffectCards, Pagination, ]}
        className="overflow-hidden w-[240px]"
      >
        <SwiperSlide lazy={true} className="swiper-slidecert">
          <div className="swiper-zoom-container"><img className="" src={jobbermancert} loading="lazy"/></div>
        </SwiperSlide >
        <SwiperSlide lazy={true} className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={sidehustlecert} loading="lazy"/></div></SwiperSlide>
        <SwiperSlide lazy={true} className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={kodecampcert}  loading="lazy"/></div></SwiperSlide>
        <SwiperSlide lazy={true} className="swiper-slidecert"><div className="swiper-zoom-container"><img className="" src={devcert}  loading="lazy"/></div></SwiperSlide>
        
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
