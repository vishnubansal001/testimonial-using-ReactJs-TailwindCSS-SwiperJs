import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Card from './component/Card';
import mypic from './img/mypic.jpg';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div className='slide-container swiper'>
      <div class="slide-content">
      <div class="card-wrapper swiper-wrapper">
        <Swiper modules={[Navigation, Pagination, A11y]} navigation={{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",}} pagination={{el:".swiper-pagination",dynamicBullets:true,clickable: true }} centeredSlides={true} slidesPerView={3} spaceBetween={30} loop={true} fadeEffect={true} grabCursor={true} breakpoints={{0:{slidesPerView:1,},520:{slidesPerView:2,},950:{slidesPerView:3,},}}>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
          <SwiperSlide><Card data={{imgSrc:mypic}}/></SwiperSlide>
        </Swiper>

      </div>
      </div>

      <div class="swiper-button-next swiper-navBtn"></div>
    <div class="swiper-button-prev swiper-navBtn"></div>
    <div class="swiper-pagination"></div>

    </div>
  );
}

export default App;
