import React from 'react'
import "./contact.css";
import ContactOption from './ContactOption';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
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
        <form action="">
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