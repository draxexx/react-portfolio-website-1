const PortfolioItem = ({ title, image }) => {
    return (
        <article className="portfolie__item">
            <div className="portfolio__item-image">
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <a href="https://github.com" className="btn" target="_blank">Github</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
    )
}

export default PortfolioItem