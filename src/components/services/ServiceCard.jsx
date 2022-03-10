import { BiCheck } from "react-icons/bi";

const ServiceCard = ({ itemCount, title }) => {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>
            {Array(itemCount).fill(<ul className="service__list">
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ul>)}
        </article>
    )
}

export default ServiceCard