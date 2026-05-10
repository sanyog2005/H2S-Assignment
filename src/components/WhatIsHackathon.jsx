import './WhatIsHackathon.css';

export default function WhatIsHackathon() {
  return (
    <section className="whatis section">
      <div className="whatis-grid">
        <div className="whatis-copy">
          <h2 className="whatis-title">
            WHAT IS THE<br />HACKATHON?
          </h2>

          <p>
            The Lorem Ipsum Innovation Hackathon is a flagship event crafted to
            uncover pioneering ideas in science, technology, and system design.
            As technological advancements accelerate globally, this initiative
            aims to bridge academic knowledge with practical implementation.
          </p>
          <p>
            Participants will work on challenge statements designed by leading
            R&amp;D units, applying theoretical expertise to build innovative
            prototypes and solutions with potential real-world application.
          </p>

          <div className="whatis-meta">
            <div className="whatis-countdown">
              <p className="whatis-countdown-label">Submission Closing In:</p>
              {/* Added the unique bracketed style to the countdown */}
              <div className="whatis-bracketed">
                <span className="dot" />
                16d 12h 42m 31s
              </div>
            </div>
             {/* Added the unique bracketed style to the register button */}
            <button className="whatis-bracketed solid">Register Now</button>
          </div>
        </div>

        <div className="whatis-collage" aria-hidden="true">
          {/* tile-A: orange typing — top-left narrow tall */}
          <div className="tile tile-a">
            <img src="assets/rect4493.png" alt="" />
          </div>

          {/* tile-B: crystal ball — top-right tall */}
          <div className="tile tile-b">
            <img src="assets/rect4489.png" alt="" />
          </div>

          {/* tile-C: VR woman — wide middle */}
          <div className="tile tile-c">
            <img src="assets/rect4492.png" alt="" />
          </div>

          {/* tile-D: people at desks — bottom-left square */}
          <div className="tile tile-d">
            <img src="assets/rect4491.png" alt="" />
          </div>

          {/* tile-E: dark workspace — bottom-right small */}
          <div className="tile tile-e">
            <img src="assets/rect4490.png" alt="" />
          </div>

          {/* big + icon overlay between top tiles */}
          <span className="plus-big" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round">
              <line x1="50" y1="0" x2="50" y2="100" />
              <line x1="0" y1="50" x2="100" y2="50" />
            </svg>
          </span>

          {/* small + corner markers */}
          <span className="plus-small plus-1" aria-hidden="true" />
          <span className="plus-small plus-2" aria-hidden="true" />
          <span className="plus-small plus-3" aria-hidden="true" />
          <span className="plus-small plus-4" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}