import { useEffect, useState } from "react";
import "./App.css";

const features = [
  {
    icon: "⚡",
    title: "AI Automation",
    text: "Automate repetitive tasks and save valuable time every day.",
  },
  {
    icon: "📊",
    title: "Project Management",
    text: "Manage projects, deadlines and tasks from one powerful workspace.",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    text: "Keep your team connected and work together from anywhere.",
  },
  {
    icon: "📈",
    title: "Smart Analytics",
    text: "Turn your team's activity into useful insights and decisions.",
  },
  {
    icon: "🔒",
    title: "Secure Workspace",
    text: "Keep your projects and company information protected.",
  },
  {
    icon: "🔗",
    title: "Easy Integrations",
    text: "Connect NOVA with the tools your team already uses.",
  },
];

const solutions = [
  {
    icon: "🚀",
    title: "For Startups",
    text: "Move quickly, manage projects and keep your growing team aligned.",
  },
  {
    icon: "🌍",
    title: "For Remote Teams",
    text: "Collaborate efficiently with your team from anywhere in the world.",
  },
  {
    icon: "🏢",
    title: "For Enterprises",
    text: "Manage complex projects and improve productivity across teams.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "NOVA has completely changed the way our team manages projects. Everything is organized in one place.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    text: "The automation features save our team hours every week. It is simple, powerful and easy to use.",
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    role: "Marketing Lead",
    text: "Our remote team communicates much better with NOVA. It has become an essential part of our workflow.",
    avatar: "ED",
  },
];

const faqs = [
  {
    question: "What is NOVA?",
    answer:
      "NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive work and collaborate efficiently.",
  },
  {
    question: "Can I use NOVA for free?",
    answer:
      "Yes. NOVA offers a starter plan for individuals and small projects so you can experience the platform before upgrading.",
  },
  {
    question: "Does NOVA work for remote teams?",
    answer:
      "Absolutely. NOVA is designed to help distributed teams manage projects, communicate and stay organized from anywhere.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Yes. You can cancel your subscription whenever you want. Your plan remains available until the end of the billing period.",
  },
  {
    question: "Is my data secure?",
    answer:
      "NOVA uses security-focused infrastructure and access controls to help protect your workspace and company information.",
  },
];

const monthlyPlans = [
  {
    name: "Starter",
    price: "9",
    description: "For individuals and small projects.",
    features: ["5 Projects", "Basic AI Tools", "5 GB Storage", "Email Support"],
  },
  {
    name: "Professional",
    price: "29",
    description: "For growing teams and businesses.",
    popular: true,
    features: [
      "Unlimited Projects",
      "Advanced AI Tools",
      "50 GB Storage",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "79",
    description: "For large organizations.",
    features: [
      "Unlimited Projects",
      "Full AI Automation",
      "500 GB Storage",
      "Dedicated Support",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(1);
  const [showDemo, setShowDemo] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const plans = monthlyPlans.map((plan) => ({
    ...plan,
    price: annual ? Math.round(Number(plan.price) * 0.8) : plan.price,
  }));

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          NOVA<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a href="#pricing" className="nav-cta">
            Get Started
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-bg-circle circle-one"></div>
          <div className="hero-bg-circle circle-two"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="pulse"></span>
              AI-Powered Productivity Platform
            </div>

            <h1>
              Build Better.
              <br />
              <span>Work Smarter.</span>
            </h1>

            <p>
              NOVA helps modern teams manage projects, automate repetitive
              tasks and collaborate efficiently with powerful AI tools.
            </p>

            <div className="hero-buttons">
              <a href="#pricing" className="primary-btn">
                Start for Free <span>→</span>
              </a>

              <button
                className="secondary-btn"
                onClick={() => setShowDemo(true)}
              >
                <span className="play-icon">▶</span>
                Watch Demo
              </button>
            </div>

            <div className="hero-note">
              ✓ No credit card required
              <span>•</span>
              ✓ Free starter plan
              <span>•</span>
              ✓ Cancel anytime
            </div>
          </div>

          {/* PRODUCT MOCKUP */}
          <div className="dashboard-wrapper">
            <div className="dashboard-glow"></div>

            <div className="dashboard">
              <div className="dashboard-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="dashboard-title">NOVA Workspace</span>

                <span className="online-dot">●</span>
              </div>

              <div className="dashboard-body">
                <aside className="dashboard-sidebar">
                  <div className="mini-logo">N</div>

                  <div className="side-item active">▦</div>
                  <div className="side-item">✓</div>
                  <div className="side-item">◫</div>
                  <div className="side-item">⚙</div>
                </aside>

                <div className="dashboard-main">
                  <div className="dashboard-heading">
                    <div>
                      <span>Monday, September 11</span>
                      <h3>Good morning, team 👋</h3>
                    </div>

                    <button className="avatar">JD</button>
                  </div>

                  <div className="dashboard-cards">
                    <div className="dash-card">
                      <span>Active Projects</span>
                      <strong>24</strong>
                      <small>↑ 12% this month</small>
                    </div>

                    <div className="dash-card">
                      <span>Tasks Completed</span>
                      <strong>128</strong>
                      <small>↑ 18% this week</small>
                    </div>

                    <div className="dash-card">
                      <span>Productivity</span>
                      <strong>94%</strong>
                      <small>↑ 8% this month</small>
                    </div>
                  </div>

                  <div className="dashboard-chart">
                    <div className="chart-header">
                      <strong>Team Productivity</strong>
                      <span>Last 7 days ▾</span>
                    </div>

                    <div className="chart">
                      <span style={{ height: "35%" }}></span>
                      <span style={{ height: "48%" }}></span>
                      <span style={{ height: "42%" }}></span>
                      <span style={{ height: "65%" }}></span>
                      <span style={{ height: "55%" }}></span>
                      <span style={{ height: "78%" }}></span>
                      <span style={{ height: "92%" }}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED */}
        <section className="trusted">
          <p>Trusted by innovative teams at</p>

          <div className="company-logos">
            <span>Google</span>
            <span>Microsoft</span>
            <span>Amazon</span>
            <span>Adobe</span>
            <span>Spotify</span>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section features-section" id="features">
          <div className="section-heading">
            <span className="section-label">FEATURES</span>
            <h2>Everything your team needs</h2>
            <p>
              Powerful tools designed to make your everyday work easier,
              faster and more organized.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-number">
                  0{index + 1}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href="#pricing">Learn more →</a>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="about-visual">
            <div className="about-window">
              <div className="about-window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ai-content">
                <div className="ai-avatar">AI</div>
                <div>
                  <strong>NOVA AI Assistant</strong>
                  <p>How can I help your team today?</p>
                </div>
              </div>

              <div className="ai-task">
                <span className="check">✓</span>
                <div>
                  <strong>Automate weekly report</strong>
                  <small>Completed automatically</small>
                </div>
                <span className="done">Done</span>
              </div>

              <div className="ai-task">
                <span className="check">✓</span>
                <div>
                  <strong>Organize project tasks</strong>
                  <small>AI optimized 12 tasks</small>
                </div>
                <span className="done">Done</span>
              </div>

              <div className="ai-input">
                Ask NOVA anything...
                <span>→</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT NOVA</span>

            <h2>A smarter way to get work done</h2>

            <p>
              NOVA brings project management, AI automation, analytics and
              collaboration together in one intelligent workspace.
            </p>

            <p>
              Spend less time managing work and more time creating meaningful
              results with your team.
            </p>

            <div className="about-points">
              <div>
                <span>✓</span>
                <strong>One powerful workspace</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>AI-powered automation</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Built for modern teams</strong>
              </div>
            </div>

            <a href="#pricing" className="primary-btn">
              Start Using NOVA →
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section how-section" id="how-it-works">
          <div className="section-heading">
            <span className="section-label">HOW IT WORKS</span>
            <h2>Get started in three simple steps</h2>
            <p>From setup to automation in just a few minutes.</p>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-icon">👋</div>
              <h3>Create your workspace</h3>
              <p>Set up your NOVA workspace and invite your team.</p>
            </div>

            <div className="step-line"></div>

            <div className="step">
              <span className="step-number">02</span>
              <div className="step-icon">📋</div>
              <h3>Organize your work</h3>
              <p>Create projects, assign tasks and manage deadlines.</p>
            </div>

            <div className="step-line"></div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-icon">✨</div>
              <h3>Automate with AI</h3>
              <p>Let NOVA handle repetitive work and improve productivity.</p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats-grid">
            <div>
              <strong>50K+</strong>
              <span>Active Users</span>
            </div>

            <div>
              <strong>120K+</strong>
              <span>Projects Created</span>
            </div>

            <div>
              <strong>99.9%</strong>
              <span>Platform Uptime</span>
            </div>

            <div>
              <strong>4.9/5</strong>
              <span>User Rating</span>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="section" id="solutions">
          <div className="section-heading">
            <span className="section-label">SOLUTIONS</span>
            <h2>Built for every kind of team</h2>
            <p>
              Flexible solutions designed for modern teams and businesses.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <a href="#contact">Explore solution →</a>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section testimonials-section">
          <div className="section-heading">
            <span className="section-label">TESTIMONIALS</span>
            <h2>Loved by productive teams</h2>
            <p>See why teams choose NOVA every day.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars">★★★★★</div>

                <p>"{testimonial.text}"</p>

                <div className="person">
                  <div className="person-avatar">{testimonial.avatar}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="section pricing-section" id="pricing">
          <div className="section-heading">
            <span className="section-label">PRICING</span>
            <h2>Simple plans for every team</h2>
            <p>Start free and upgrade when your team is ready.</p>

            <div className="pricing-toggle">
              <button
                className={!annual ? "active" : ""}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>

              <button
                className={annual ? "active" : ""}
                onClick={() => setAnnual(true)}
              >
                Annual <span>Save 20%</span>
              </button>
            </div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={
                  plan.popular ? "pricing-card popular" : "pricing-card"
                }
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}

                <h3>{plan.name}</h3>
                <p>{plan.description}</p>

                <div className="price">
                  <span>$</span>
                  <strong>{plan.price}</strong>
                  <small>/month</small>
                </div>

                {annual && <div className="annual-note">Billed annually</div>}

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={
                    plan.popular ? "primary-btn full" : "outline-btn full"
                  }
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <span className="section-label">FAQ</span>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about NOVA.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={openFaq === index ? "faq-item open" : "faq-item"}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  {faq.question}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="contact">
          <div className="cta-glow"></div>

          <span className="section-label">READY TO GET STARTED?</span>

          <h2>Build better. Work smarter.</h2>

          <p>
            Join thousands of teams using NOVA to improve the way they work.
          </p>

          <a href="#pricing" className="white-btn">
            Start for Free →
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo">
              NOVA<span>.</span>
            </a>

            <p>AI-powered productivity for modern teams.</p>

            <div className="socials">
              <a href="#home" aria-label="Twitter">
                𝕏
              </a>
              <a href="#home" aria-label="LinkedIn">
                in
              </a>
              <a href="#home" aria-label="GitHub">
                ◉
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#solutions">Solutions</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
            <a href="#home">Blog</a>
          </div>

          <div className="footer-newsletter">
            <h4>Stay productive</h4>
            <p>Get useful productivity tips and NOVA updates.</p>

            {subscribed ? (
              <div className="success-message">✓ You're subscribed!</div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">→</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NOVA. All rights reserved.</span>

          <div>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
            <a href="#home">Security</a>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {showDemo && (
        <div className="modal-overlay" onClick={() => setShowDemo(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowDemo(false)}
            >
              ✕
            </button>

            <div className="demo-play">▶</div>

            <span className="section-label">NOVA PRODUCT DEMO</span>

            <h2>Work smarter with NOVA</h2>

            <p>
              Imagine your entire team's projects, tasks, automation and
              analytics working together in one intelligent workspace.
            </p>

            <button
              className="primary-btn"
              onClick={() => setShowDemo(false)}
            >
              Got it →
            </button>
          </div>
        </div>
      )}

      {/* BACK TO TOP */}
      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;