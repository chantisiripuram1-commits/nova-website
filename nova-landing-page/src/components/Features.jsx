function Features() {

  const features = [
    {
      icon: "⚡",
      title: "AI Automation",
      description:
        "Automate repetitive tasks and save valuable time."
    },
    {
      icon: "📊",
      title: "Project Management",
      description:
        "Manage projects, deadlines and tasks from one place."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description:
        "Work together with your team and stay connected."
    },
    {
      icon: "📈",
      title: "Smart Analytics",
      description:
        "Get useful insights and understand your team's performance."
    },
    {
      icon: "🔒",
      title: "Secure Workspace",
      description:
        "Keep your projects and company information protected."
    },
    {
      icon: "🔗",
      title: "Easy Integrations",
      description:
        "Connect NOVA with the tools your team already uses."
    }
  ];

  return (
    <section className="section" id="features">

      <div className="section-heading">
        <span>FEATURES</span>

        <h2>
          Everything your team needs
        </h2>

        <p>
          Powerful tools designed to make your everyday work easier.
        </p>
      </div>

      <div className="features-grid">

        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;