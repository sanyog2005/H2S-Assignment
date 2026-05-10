import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      {/* Decorative purple bar pattern — left */}
      <svg className="bars bars-left" viewBox="0 0 160 200" preserveAspectRatio="xMinYMid meet" aria-hidden="true">
        {/* Staggered sharp blocks */}
        <rect x="0" y="0" width="80" height="40" fill="#7C3AED" />
        <rect x="80" y="40" width="80" height="40" fill="#7C3AED" />
        <rect x="0" y="80" width="80" height="40" fill="#7C3AED" />
        <rect x="80" y="120" width="80" height="40" fill="#7C3AED" />
        <rect x="0" y="160" width="80" height="40" fill="#7C3AED" />
      </svg>

      {/* Decorative purple bar pattern — right (mirrored) */}
      <svg className="bars bars-right" viewBox="0 0 160 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
        {/* Staggered sharp blocks */}
        <rect x="80" y="0" width="80" height="40" fill="#7C3AED" />
        <rect x="0" y="40" width="80" height="40" fill="#7C3AED" />
        <rect x="80" y="80" width="80" height="40" fill="#7C3AED" />
        <rect x="0" y="120" width="80" height="40" fill="#7C3AED" />
        <rect x="80" y="160" width="80" height="40" fill="#7C3AED" />
      </svg>

      <p className="eyebrow">ABOUT HACKATHON</p>

      <h2 className="about-title">
        WHO CAN<br />PARTICIPATE?
      </h2>

      <p className="about-copy">
        Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating platform designed to
        foster innovation and creativity in the domain of advanced technology and futuristic
        solutions. Organized by the National Center for Applied Research and supported by
        Hack2skill, this hackathon invites undergraduate students, graduate/postgraduate
        students, and PhD researchers to collaborate and solve critical challenges.
      </p>

      <div className="about-cta-wrap">
        <button className="about-apply">Apply Now</button>
      </div>
    </section>
  );
}