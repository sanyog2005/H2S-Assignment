import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/assets/artboard.png" alt="" />
        <div className="hero-bg-fade" />
      </div>

      <div className="hero-stage">
        {/* Title — rendered before the portrait so the model overlaps it (matches Figma source order) */}
        <h1 className="hero-title" aria-label="Code The Future">
          <span className="line line-1">CODE THE</span>
          <span className="line line-2">FUTURE</span>
        </h1>

        {/* Model with purple panel behind */}
        <div className="hero-portrait" aria-hidden="true">
          <span className="portrait-panel" />
          <span className="portrait-frame">
            <img src="/assets/rect4495.png" alt="" />
          </span>
        </div>

        {/* Bottom-left tagline */}
        <p className="hero-tagline">Where Innovation Becomes Reality</p>

        {/* Right-side bracket "Register Now" button */}
        <a className="hero-register" href="#register">
          <span className="hero-register-fill" aria-hidden="true" />
          <span className="register-label">Register Now</span>
        </a>
      </div>
    </section>
  );
}
