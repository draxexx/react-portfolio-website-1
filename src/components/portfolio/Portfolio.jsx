import React from 'react'
import "./portfolio.css";
import IMG1 from "../../assets/portfolio_1.jpg"
import IMG2 from "../../assets/portfolio_2.jpg"
import IMG3 from "../../assets/portfolio_3.jpg"
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h3>Portfolio</h3>

      <div className="container portfolio__container">
        <PortfolioItem title="This is a portfolio item title" image={IMG1} />
        <PortfolioItem title="This is a portfolio item title" image={IMG2} />
        <PortfolioItem title="This is a portfolio item title" image={IMG3} />
        <PortfolioItem title="This is a portfolio item title" image={IMG1} />
        <PortfolioItem title="This is a portfolio item title" image={IMG2} />
        <PortfolioItem title="This is a portfolio item title" image={IMG3} />
      </div>
    </section>
  )
}

export default Portfolio