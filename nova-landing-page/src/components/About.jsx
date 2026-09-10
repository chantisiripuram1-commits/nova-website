function About() {
  return (
    <section className="about section" id="about">

      <div className="about-image">
        <div className="about-card">
          <span>AI</span>
          <h3>Work Smarter</h3>
          <p>Automate. Collaborate. Grow.</p>
        </div>
      </div>

      <div className="about-content">

        <span>ABOUT NOVA</span>

        <h2>
          A smarter way to get work done
        </h2>

        <p>
          NOVA is an AI-powered productivity platform created to help
          modern teams organize projects, automate repetitive work and
          collaborate more effectively.
        </p>

        <p>
          With powerful tools in one workspace, your team can focus less
          on managing work and more on creating meaningful results.
        </p>

        <a href="#pricing" className="primary-button">
          Start Using NOVA
        </a>

      </div>

    </section>
  );
}

export default About;