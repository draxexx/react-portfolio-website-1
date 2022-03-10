import "./services.css";
import { BiCheck } from "react-icons/bi";

const ServiceCard = ({ itemCount, title }) => {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>
            <ul className="service__list">
                {Array(itemCount).fill(<li>
                    <BiCheck className="service__list-icon" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </li>)}
            </ul>
        </article>
    )
}

export default ServiceCard