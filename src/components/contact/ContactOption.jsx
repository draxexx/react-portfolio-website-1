import "./contact.css";

const ContactOption = ({ icon, title, content, href }) => {
    return (
        <article className="contact__option">
            {icon}
            <h4>{title}</h4>
            <h5>{content}</h5>
            <a href={href} target="_blank">Send a message</a>
        </article>
    )
}

export default ContactOption