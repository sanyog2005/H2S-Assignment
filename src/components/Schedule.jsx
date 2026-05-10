import { useState } from 'react';
import './Schedule.css';

const events = [
  {
    title: ['Registrations and Idea', 'Submission Open'],
    date: 'Thu, Jul 04, 2025'
  },
  {
    title: ['Introductory and Problem', 'Statement Explainer Session'],
    date: 'Thu, Jul 08, 2025'
  },
  {
    title: ['Mentor-Mentee', 'Connects - Begins'],
    date: 'Thu, Jul 08, 2025'
  },
  {
    title: ['Mentor-Mentee', 'Connects - Ends'],
    date: 'Tue, Jul 16, 2025'
  }
];

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="schedule" className="schedule section">
      <p className="eyebrow">HACKATHON SCHEDULE</p>

      {/* The Interactive Slider */}
      <div className="slider-wrapper">
        <label htmlFor="timeline-slider" className="sr-only">Slide to explore timeline</label>
        <input 
          id="timeline-slider"
          type="range" 
          min="0" 
          max={events.length - 1} 
          step="1"
          value={activeIndex}
          onChange={(e) => setActiveIndex(Number(e.target.value))}
          className="interactive-slider"
        />
        <div className="slider-glow" style={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }} />
      </div>

      <div className="schedule-track">
        <div className="schedule-events">
          {events.map((e, i) => {
            const isActive = i <= activeIndex;
            
            return (
              <div key={i} className={`schedule-event ${isActive ? 'is-active' : ''}`}>
                <div className="schedule-title">
                  {e.title.map((t, j) => <p key={j}>{t}</p>)}
                </div>
                <div className="schedule-bar" />
                <p className="schedule-date">{e.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}