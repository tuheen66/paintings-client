import { Swiper, SwiperSlide } from "swiper/react";
import {
 
  Pagination,
  Parallax,
  Scrollbar,
  Autoplay,
  
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import "swiper/css/grid";

import slider1 from "../assets/small-slider/slider2-01.jpg";
import slider2 from "../assets/small-slider/slider2-02.jpg";
import slider3 from "../assets/small-slider/slider2-03.jpg";
import slider4 from "../assets/small-slider/slider2-04.jpg";
import slider5 from "../assets/small-slider/slider2-05.jpg";
import slider6 from "../assets/small-slider/slider2-06.jpg";
import slider7 from "../assets/small-slider/slider2-07.jpg";
import slider8 from "../assets/small-slider/slider2-08.jpg";
import slider9 from "../assets/small-slider/slider2-09.jpg";
import slider10 from "../assets/small-slider/slider2-10.jpg";
import slider11 from "../assets/small-slider/slider2-11.jpg";
import slider12 from "../assets/small-slider/slider2-12.jpg";
import slider13 from "../assets/small-slider/slider2-13.jpg";
import slider14 from "../assets/small-slider/slider2-14.jpg";
import slider15 from "../assets/small-slider/slider2-15.jpg";
import slider16 from "../assets/small-slider/slider2-16.jpg";
import slider17 from "../assets/small-slider/slider2-17.jpg";
import slider18 from "../assets/small-slider/slider2-18.jpg";
import slider19 from "../assets/small-slider/slider2-19.jpg";
import slider20 from "../assets/small-slider/slider2-20.jpg";
import slider21 from "../assets/small-slider/slider2-21.jpg";
import slider22 from "../assets/small-slider/slider2-22.jpg";
import slider23 from "../assets/small-slider/slider2-23.jpg";
import slider24 from "../assets/small-slider/slider2-24.jpg";


const SmallImageSlider = () => {
    return (
        <div className="mb-8 mt-20 ">
        <h2 className="font-bold text-center text-4xl my-8">Paintings & Sketches</h2>
        <div className="bg-[#b7e994ad] p-8">

      <Swiper
        className=""
        // install Swiper modules
        modules={[ Pagination, Parallax, Autoplay, Scrollbar]}
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        
        parallax
        autoplay={{
          delay: 1000,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={slider1} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider10} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider11} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider12} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider13} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider14} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider15} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider16} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider17} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider18} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider19} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider20} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider21} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider22} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider23} className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider24} className="w-full" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
    );
};

export default SmallImageSlider;