import { useEffect, useState } from 'react';
import './Header.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#how', label: 'How to participate?' },
  { href: '#challenges', label: 'Challenges' },
  { href: '#schedule', label: 'Schedules' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#faq', label: 'FAQs' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-pill" aria-label="Primary">
        <a href="#" className="nav-logo" aria-label="Home">
          <img src="assets/logo.png" alt="H2S Logo" />
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <button className="nav-cta">Sign In</button>
        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li><button className="mobile-cta" onClick={() => setOpen(false)}>Sign In</button></li>
        </ul>
      </div>
    </header>
  );
}
