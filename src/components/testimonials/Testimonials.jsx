import React from 'react'
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg"
import AVTR2 from "../../assets/avatar2.jpeg"
import AVTR3 from "../../assets/avatar3.jpeg"
import AVTR4 from "../../assets/avatar4.jpeg"
import TestimonialItem from './TestimonialItem';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <TestimonialItem name="Aniruddha Jarmo" avatar={AVTR1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Bernetta Blake" avatar={AVTR2} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Odell Neely" avatar={AVTR3} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Sudhir Noam" avatar={AVTR4} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials