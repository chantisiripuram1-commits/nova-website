function Pricing() {

  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "For individuals and small projects.",
      features: [
        "5 Projects",
        "Basic AI Tools",
        "5 GB Storage",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$29",
      description: "For growing teams and businesses.",
      features: [
        "Unlimited Projects",
        "Advanced AI Tools",
        "50 GB Storage",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$79",
      description: "For large organizations.",
      features: [
        "Unlimited Projects",
        "Full AI Automation",
        "500 GB Storage",
        "Dedicated Support"
      ]
    }
  ];

  return (
    <section className="section pricing" id="pricing">

      <div className="section-heading">
        <span>PRICING</span>

        <h2>
          Simple plans for every team
        </h2>

        <p>
          Choose the plan that works best for you.
        </p>
      </div>

      <div className="pricing-grid">

        {plans.map((plan) => (

          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.name}
          >

            {plan.popular && (
              <span className="popular-badge">
                Most Popular
              </span>
            )}

            <h3>{plan.name}</h3>

            <div className="price">
              {plan.price}
              <span>/month</span>
            </div>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="primary-button">
              Choose Plan
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;