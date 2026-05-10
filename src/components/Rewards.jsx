import './Rewards.css';

export default function Rewards() {
  return (
    <section id="rewards" className="rewards section">
      <div className="rewards-bg">
        <img src="assets/artboard29.png" alt="" aria-hidden="true" />
        <div className="rewards-bg-fade" />
      </div>

      <p className="eyebrow">REWARDS AND BENEFITS</p>

      <div className="rewards-grid">
        <article className="reward-card">
          <span className="reward-glow" aria-hidden="true" />
          
          <h3>Mentorship from Experts</h3>
          <p>Work under the guidance of domain professionals and technology mentors.</p>
        </article>

        <article className="reward-card">
          
          <h3>Recognition and Internship Opportunities</h3>
          <p>Outstanding performers may receive offers for internships or collaboration opportunities.</p>
        </article>
      </div>
    </section>
  );
}
