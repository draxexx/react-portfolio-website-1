import "./experience.css";

const ExperienceDetails = ({ icon, skill, level }) => {
    return (
        <article className="experience__details">
            {icon}
            <div>
                <h4>{skill}</h4>
                <small className="text-light">{level}</small>
            </div>
        </article>
    )
}

export default ExperienceDetails