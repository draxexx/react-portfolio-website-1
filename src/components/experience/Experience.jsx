import React from 'react'
import "./experience.css";
import ExperienceDetails from './ExperienceDetails';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="HTML" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="CSS" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="JavaScript" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="Bootstrap" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="Angular" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="React" level="Experienced" />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="NODE JS" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="MongoDB" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="PHP" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="MySQL" level="Basic" />
            <ExperienceDetails icon={<BsPatchCheckFill className="experience__details-icon" />} skill="Python" level="Experienced" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience