import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/autoplay";



import slider1 from '../assets/slider/slide1.jpg'
import slider2 from '../assets/slider/slide2.jpg'
import slider3 from '../assets/slider/slide3.jpg'
import slider4 from '../assets/slider/slide4.jpg'
import slider5 from '../assets/slider/slide5.jpg'
import slider6 from '../assets/slider/slide6.jpg'

const Slider = () => {
    return (
        <div className="mb-8 ">
      <Swiper
        className="mySwiper "
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
       
        autoplay
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
      </Swiper>
    </div>
    );
};

export default Slider;