function Solutions() {
  const solutions = [
    {
      title: "For Startups",
      description:
        "Move quickly, manage projects and keep your growing team aligned.",
    },
    {
      title: "For Remote Teams",
      description:
        "Collaborate efficiently with your team from anywhere.",
    },
    {
      title: "For Enterprises",
      description:
        "Manage complex projects and improve productivity across teams.",
    },
  ];

  return (
    <section className="section" id="solutions">
      <div className="section-heading">
        <span>SOLUTIONS</span>

        <h2>Built for every kind of team</h2>

        <p>
          Powerful solutions designed for modern teams and businesses.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution) => (
          <div className="solution-card" key={solution.title}>
            <h3>{solution.title}</h3>

            <p>{solution.description}</p>

            <a href="#contact">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;