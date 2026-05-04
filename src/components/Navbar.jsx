import { useState, useEffect } from 'react';
import { GiMeat } from 'react-icons/gi';
import './Navbar.css';

const links = [
  { href: '#anasayfa', label: 'Ana Sayfa' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#menu', label: 'Menü' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#anasayfa" className="navbar__logo" onClick={(e) => handleLink(e, '#anasayfa')}>
        <GiMeat className="navbar__logo-icon" />
        <span>
          <span className="navbar__logo-main">Urfa Sofrası</span>
          <span className="navbar__logo-sub">Ali Babam Lahmacun</span>
        </span>
      </a>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleLink(e, l.href)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="tel:05537872632" className="navbar__cta">Rezervasyon</a>
        </li>
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menüyü aç/kapat"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
