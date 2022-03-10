import React, { useRef } from 'react'
import "./contact.css";
import ContactOption from './ContactOption';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {

  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    console.log(e.target.name.value);

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption icon={<MdOutlineEmail className="contact__option-icon" />} title="Email" content="test@gmail.com" href="mailto:test@gmail.com" />
          <ContactOption icon={<RiMessengerLine className="contact__option-icon" />} title="Messenger" content="egator" href="https://messenger.com" />
          <ContactOption icon={<BsWhatsapp className="contact__option-icon" />} title="WhatsApp" content="+123456789" href="https://api.whatsapp.com/send?+123456780" />
        </div>
        <form ref={form} onSubmit={submitForm}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact