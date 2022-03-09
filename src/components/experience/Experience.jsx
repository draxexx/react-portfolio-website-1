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
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="HTML" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="CSS" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="JavaScript" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="Bootstrap" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="Angular" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="React" level="Experienced" />
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="NODE JS" level="Experienced" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="MongoDB" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="PHP" level="Intermediate" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="MySQL" level="Basic" />
            <ExperienceDetails icon={<BsPatchCheckFill />} skill="Python" level="Experienced" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience