// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Abiola from "../../view/image/Picsart_24-05-19_16-36-22-056.jpg"
import Opara from "../../view/image/FB_IMG_1716093888516.jpg"

export default function Recommendation() {
  const pagination ={
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="'+ className +'">'+ (index + 1) +'</span>';
    },
  }
  return (
    <>
      <div className="pt-12 pb-5 ">
          <h1 className="proza-libre-bold text-start text-blue-900 text-xl">Recommendations</h1>
      </div>    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hover:drop-shadow-2xl hover:shadow-md hover:shadow-neutral-500 hover:transition rounded drop-shadow-2xl shadow-md shadow-neutral-500 transition delay-100 ease-in-out duration-1000 hover:bg-blue-900 bg-amber-500 hover:text-white text-black  h-96 flex flex-col justify-center">
            <div className="">
              <div className="flex justify-center">
                <img className="rounded-full size-20" src={Abiola} alt="Abiola Fasanya"/>
              </div>
              <div className="proza-libre-bold">
                <h1>Abiola Fasanya</h1>
                <p className="text-[10px] berkshire-swash">Fullstack Developer</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="px-7 text-center text-[14px]">I and Emmanuel used to learn together @KodeCamp, he's very diligent person who can brilliantly communicate his idea, his collaborative skill is top notch and he's one of the best people i have learned together with.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:drop-shadow-2xl hover:shadow-md hover:shadow-neutral-500 hover:transition rounded drop-shadow-2xl shadow-md shadow-neutral-500 transition delay-100 ease-in-out duration-1000 hover:bg-blue-900 bg-amber-500 hover:text-white text-black  h-96 flex flex-col justify-center">
            <div className="">
              <div className="flex justify-center">
                <img className="rounded-full size-20" src={Opara} alt="Opara Nnadozie"/>
              </div>
              <div className="proza-libre-bold">
                <h1>Nnadozie Opara</h1>
                <p className="text-[10px] berkshire-swash">Software Engineer</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="px-7 text-center text-[14px]">Emmanuel is a great developer who pay attention to details. He is a great team member who carries everyone along and values good relationships with team members.
              He is an all around great guy.</p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
