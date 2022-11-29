import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const MySwiper = () => {
  const swiperRef = useRef();

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      <div>
        <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </div>
    </div>
  );
};

export default MySwiper;
