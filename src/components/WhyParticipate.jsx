import './WhyParticipate.css';

const leftBenefits = [
  {
    title: 'Mentorship from Experts',
    body: 'Gain invaluable insights and guidance from experienced technologists and domain experts.'
  },
  {
    title: 'Networking',
    body: 'Connect with peers, professionals, and innovation leaders from across the nation.'
  }
];

const rightBenefits = [
  {
    title: 'Internship Opportunities',
    body: 'Stand a chance to secure internships at top institutions and innovation labs.'
  },
  {
    title: 'Real-World Impact',
    body: 'Contribute to meaningful challenges that aim to improve lives and systems at scale.'
  }
];

export default function WhyParticipate() {
  return (
    <section className="why">
      <p className="eyebrow">WHY PARTICIPATE?</p>

      <div className="why-stage">
        <div className="why-rings" aria-hidden="true">
          <span className="ring ring-1" />
          <span className="ring ring-2" />
          <span className="ring ring-3" />
          <span className="ring ring-4" />
        </div>

        <div className="why-astronaut" aria-hidden="true">
          <img src="assets/layer2.png" alt="" />
        </div>

        <aside className="why-panel why-panel-left">
          {leftBenefits.map((b, i) => (
            <article className="why-card why-card-left" key={i}>
              <div className="why-text">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
              <div className="why-accent why-accent-left" aria-hidden="true">
                <span className="bar bar-purple" />
                <span className="bar bar-white" />
              </div>
            </article>
          ))}
        </aside>

        <aside className="why-panel why-panel-right">
          {rightBenefits.map((b, i) => (
            <article className="why-card why-card-right" key={i}>
              <div className="why-accent why-accent-right" aria-hidden="true">
                <span className="bar bar-white" />
                <span className="bar bar-purple" />
              </div>
              <div className="why-text">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
