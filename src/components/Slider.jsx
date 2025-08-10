import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  } from 'swiper/modules';
import img from '../assets/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg'
// import img2 from '../assets/freepik__retouch__92785.png'

const Slider = () => {
    return (
        <div className='my-4'>
             <Swiper
            //  navigation={true} 
             modules={[Autoplay]}
             autoplay={{delay: 2000, disableOnInteraction: false}}
             loop={true} 
             speed={2000}
             className="mySwiper">
                <SwiperSlide><img className='mx-auto w-[90%]' src={img} alt="" /></SwiperSlide>
                {/* <SwiperSlide><img className='mx-auto w-[90%] h-[50%]' src={img2} alt="" /></SwiperSlide> */}
                <SwiperSlide><img className='mx-auto w-[90%]' src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='mx-auto w-[90%]' src={img} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;