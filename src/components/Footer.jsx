import './Footer.css';

export default function Footer() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo-icon">🍖</p>
          <h3 className="footer__logo-name">Urfa Sofrası</h3>
          <p className="footer__logo-sub">Ali Babam Lahmacun</p>
          <p className="footer__tagline">
            "Urfa'dan gelen lezzet, sofranda buluşuyor."
          </p>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/urfasofrasi_alibabamlahmacun"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              📸
            </a>
            <a href="tel:05537872632" className="footer__social" aria-label="Telefon">
              📞
            </a>
            <a
              href="https://maps.app.goo.gl/zy31Uo9BfPwXaum28"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Konum"
            >
              📍
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Hızlı Bağlantılar</h4>
          <ul>
            {[['anasayfa', 'Ana Sayfa'], ['hakkimizda', 'Hakkımızda'], ['menu', 'Menü'], ['galeri', 'Galeri'], ['iletisim', 'İletişim']].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); handleScroll(id); }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__nav-title">İletişim</h4>
          <p>📞 <a href="tel:05537872632">0553 787 26 32</a></p>
          <p>📸 <a href="https://www.instagram.com/urfasofrasi_alibabamlahmacun" target="_blank" rel="noopener noreferrer">Instagram</a></p>
          <p>📍 <a href="https://maps.app.goo.gl/zy31Uo9BfPwXaum28" target="_blank" rel="noopener noreferrer">Konum Görüntüle</a></p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Urfa Sofrası Ali Babam Lahmacun. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
