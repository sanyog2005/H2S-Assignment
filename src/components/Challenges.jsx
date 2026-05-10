import './Challenges.css';

const challenges = [
  { img: 'assets/ps2.png',           text: 'Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.' },
  { img: 'assets/ps4.png',           text: 'Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.' },
  { img: 'assets/vector1.svg',       text: 'Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.' },
  { img: 'assets/ps6.png',           text: 'Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.' },
  { img: 'assets/img7066.png',       text: 'Create a decentralized platform that allows institutions to issue and verify digital certificates securely.' },
  { img: 'assets/municipal-gis1.png', text: 'Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.' },
  { img: 'assets/ps7.png',           text: 'Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.' },
  { img: 'assets/ps8.png',           text: 'Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet.' },
  { img: 'assets/chandrayan-2.png',  text: 'Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.' },
  { img: 'assets/ps10.png',          text: 'Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises.' },
  { img: 'assets/lander.png',        text: 'Build a pipeline that processes aerial imagery to detect crop diseases and recommend corrective actions.' },
  { img: 'assets/satellite-data1.png', text: 'Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.' }
];

export default function Challenges() {
  return (
    <section id="challenges" className="challenges section">
      <ul className="challenges-list">
        {challenges.map((c, i) => (
          <li key={i} className="challenge-row">
            
            {/* Number */}
            <div className="challenge-num">
              [ {String(i + 1).padStart(2, '0')}
            </div>
            
            {/* Thumbnail */}
            <div className="challenge-thumb">
              <img src={c.img} alt={`Challenge ${i + 1}`} />
            </div>
            
            {/* Content (Text + Expandable Button) */}
            <div className="challenge-content">
              <p className="challenge-text">{c.text}</p>
              
              {/* The magical grid wrapper for smooth expansion */}
              <div className="learn-more-wrapper">
                <div className="learn-more-inner">
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="challenge-arrow">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            
          </li>
        ))}
      </ul>
    </section>
  );
}