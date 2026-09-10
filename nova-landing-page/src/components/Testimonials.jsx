function Testimonials() {

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      text:
        "NOVA has completely changed the way our team manages projects. Everything is now organized in one place."
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      text:
        "The automation features save our team hours every week. It is simple, powerful and easy to use."
    },
    {
      name: "Emily Davis",
      role: "Marketing Lead",
      text:
        "Our remote team communicates much better with NOVA. It has become an essential part of our workflow."
    }
  ];

  return (
    <section className="section testimonials">

      <div className="section-heading">
        <span>TESTIMONIALS</span>

        <h2>
          Loved by productive teams
        </h2>
      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "{testimonial.text}"
            </p>

            <h4>{testimonial.name}</h4>

            <span>{testimonial.role}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;