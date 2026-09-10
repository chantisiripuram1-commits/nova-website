function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Spotify"
  ];

  return (
    <section className="trusted">

      <p>Trusted by teams at</p>

      <div className="company-logos">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>

    </section>
  );
}

export default Trusted;