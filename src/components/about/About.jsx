import "./about.css";
import ME from "../../assets/me.png"
import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard title="Experience" description="3+ Years Working" icon={<FaAward className="about__icon" />} />
            <AboutCard title="Clients" description="200+ Worldwide" icon={<FiUsers className="about__icon" />} />
            <AboutCard title="Projects" description="80+ Completed" icon={<VscFolderLibrary className="about__icon" />} />
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci nostrum dolorem voluptatibus. Doloribus id reprehenderit vitae, dolor voluptate, modi repellendus nam, nisi veritatis odit eaque dolore expedita deserunt officiis.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About