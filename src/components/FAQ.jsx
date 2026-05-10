import './FAQ.css';

const faqs = [
  {
    q: 'Who can participate in the hackathon?',
    a: 'Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.'
  },
  {
    q: 'What should be the ideal team size?',
    a: 'Each team must consist of 3 to 4 members, possibly from different colleges/universities.'
  },
  {
    q: 'What is the cost of participating?',
    a: 'Participation is entirely free. No registration or submission fee is required.'
  },
  {
    q: 'Can a recent graduate participate?',
    a: 'Only current students from the 2024–25 academic year are eligible.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="faq section">
      <h2 className="faq-heading">FREQUENTLY ASKED QUESTION</h2>

      <ul className="faq-list">
        {faqs.map((f, i) => (
          <li key={i} className="faq-row">
            <div className="faq-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="faq-q-text">{f.q}</div>
            <div className="faq-answer">{f.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}