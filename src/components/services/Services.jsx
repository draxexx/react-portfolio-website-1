import React from 'react'
import "./services.css";
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ServiceCard title="UI/UX Design" itemCount={5} />
        <ServiceCard title="Web Development" itemCount={7} />
        <ServiceCard title="Content Creation" itemCount={4} />
      </div>
    </section>
  )
}

export default Services