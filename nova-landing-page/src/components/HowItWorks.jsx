function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description:
        "Set up your NOVA workspace and invite your team."
    },
    {
      number: "02",
      title: "Organize your work",
      description:
        "Create projects, assign tasks and manage deadlines."
    },
    {
      number: "03",
      title: "Automate with AI",
      description:
        "Let NOVA handle repetitive tasks and improve productivity."
    }
  ];

  return (
    <section className="section how-it-works">

      <div className="section-heading">
        <span>HOW IT WORKS</span>

        <h2>
          Get started in three simple steps
        </h2>
      </div>

      <div className="steps-grid">

        {steps.map((step) => (
          <div className="step-card" key={step.number}>

            <span className="step-number">
              {step.number}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;