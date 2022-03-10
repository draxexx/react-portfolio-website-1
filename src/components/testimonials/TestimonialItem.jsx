const TestimonialItem = ({ name, avatar }) => {
    return (
        <article className="testimonial">
            <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste illo ullam et quae excepturi, ea officia dolorum nemo quod, laboriosam blanditiis repudiandae. Beatae placeat minima ullam eos earum voluptas!
                </small>
            </div>
        </article>
    )
}

export default TestimonialItem