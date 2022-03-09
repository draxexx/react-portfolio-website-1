const ExperienceDetails = ({ icon, skill, level }) => {
    return (
        <article className="experience__details">
            {icon}
            <h4>{skill}</h4>
            <small className="text-light">{level}</small>
        </article>
    )
}

export default ExperienceDetails