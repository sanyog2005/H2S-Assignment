import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src="assets/artboard30.png" alt="" aria-hidden="true" />
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
          <img src="assets/logo.png" alt="H2S" className="footer-logo" />
          <p>Where innovation becomes reality.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#how">How to participate?</a></li>
              <li><a href="#challenges">Challenges</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#rewards">Rewards</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>support@hack2skill.com</li>
              <li>+91 00000 00000</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Code The Future. All rights reserved.</p>
        <div className="socials">
          <a href="#" aria-label="Twitter">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92a8.06 8.06 0 0 1-2.36.65 4.13 4.13 0 0 0 1.81-2.27 8.31 8.31 0 0 1-2.6 1A4.1 4.1 0 0 0 11.85 9a11.65 11.65 0 0 1-8.45-4.28 4.1 4.1 0 0 0 1.27 5.47A4.06 4.06 0 0 1 2.8 9.7v.05a4.1 4.1 0 0 0 3.29 4.02 4.13 4.13 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4 11.62 11.62 0 0 0 8.29 20c7.55 0 11.68-6.25 11.68-11.67v-.53A8.31 8.31 0 0 0 22 5.92z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17.34h-2.5V9.83h2.5v7.51zM7.09 8.78a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zm10.25 8.56h-2.5v-3.65c0-.87-.02-2-1.22-2s-1.4 0.95-1.4 1.93v3.72h-2.5V9.83h2.4v1.03h.03a2.63 2.63 0 0 1 2.37-1.3c2.53 0 3 1.66 3 3.83v3.95z"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-8.0-.4 4 4 0 0 1 8 .4z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
