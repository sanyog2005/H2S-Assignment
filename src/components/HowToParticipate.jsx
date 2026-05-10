import './HowToParticipate.css';

const steps = [
  {
    icon: 'assets/edit-icon.svg',
    title: ['Register', 'for Hackathon'],
    body: ['Sign up now to participate', 'in the hackathon.']
  },
  {
    icon: 'assets/group-icon.svg',
    title: ['Form', 'your Teams'],
    body: ['Collaborate with', 'like-minded individuals', 'to form teams.']
  },
  {
    icon: 'assets/mountain-icon.svg',
    title: ['Choose', 'a Challenge'],
    body: ['Select from the list', 'of challenges provided.']
  },
  {
    icon: 'assets/shuttle-icon.svg',
    title: ['Innovate', 'and Develop'],
    body: ['Work on your solutions,', 'supported by resources', 'and mentorship.']
  },
  {
    icon: 'assets/idea-icon.svg',
    title: ['Submit', 'Your Solution'],
    body: ['Present your innovative', 'ideas for evaluation.']
  }
];

export default function HowToParticipate() {
  return (
    <section id="how" className="how section">
      <p className="eyebrow">HOW TO PARTICIPATE?</p>

      <div className="how-grid">
        {steps.map((s, i) => (
          <div className="how-step" key={i}>
            <div className="how-icon-tile">
              <img src={s.icon} alt="" className="how-icon" />
            </div>
            <div className="how-title">
              {s.title.map((t, j) => <p key={j}>{t}</p>)}
            </div>
            <div className="how-body">
              {s.body.map((b, j) => <p key={j}>{b}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
