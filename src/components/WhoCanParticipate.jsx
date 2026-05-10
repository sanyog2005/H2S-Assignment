import './WhoCanParticipate.css';

// Removed the SVG icons from the data array as they are absent in the target design
const groups = [
  {
    title: 'Undergraduate',
    sub: 'Students',
  },
  {
    title: 'Graduate/ Postgraduate',
    sub: 'Students',
  },
  {
    title: 'PhD Students/',
    sub: 'Research Scholars',
  }
];

export default function WhoCanParticipate() {
  return (
    <section className="who section">
      {/* Ambient purple glows for the background */}
      <div className="who-glow glow-left" aria-hidden="true" />
      <div className="who-glow glow-right" aria-hidden="true" />

      <p className="eyebrow">WHO CAN PARTICIPATE?</p>

      <div className="who-grid">
        {groups.map((g, i) => (
          <article key={i} className="who-card">
            <div className="who-text">
              <p>{g.title}</p>
              <p>{g.sub}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="who-note">
        Note: Working Professionals are not eligible to participate in the hackathon.
      </p>
    </section>
  );
}