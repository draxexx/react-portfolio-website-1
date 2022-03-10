import React from 'react'
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg"
import AVTR2 from "../../assets/avatar2.jpeg"
import AVTR3 from "../../assets/avatar3.jpeg"
import AVTR4 from "../../assets/avatar4.jpeg"
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <TestimonialItem name="Aniruddha Jarmo" avatar={AVTR1} />
        <TestimonialItem name="Bernetta Blake" avatar={AVTR2} />
        <TestimonialItem name="Odell Neely" avatar={AVTR3} />
        <TestimonialItem name="Sudhir Noam" avatar={AVTR4} />
      </div>
    </section>
  )
}

export default Testimonials