import './Hero.css';

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="anasayfa">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Urfa'dan Gelen Lezzet</p>
        <h1 className="hero__title">
          Urfa Sofrası<br />
          <span className="hero__title-highlight">Ali Babam Lahmacun</span>
        </h1>
        <p className="hero__desc">
          Adana kebap, lahmacun, pide ve daha fazlası... <br className="hero__br" />
          Şehrin kalbinde otantik Urfa lezzetleri sizleri bekliyor.
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={() => handleScroll('menu')}>
            Menüyü Gör
          </button>
          <button className="btn-outline" onClick={() => handleScroll('iletisim')}>
            Bizi Bul
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">18.5K</span>
            <span className="hero__stat-label">Takipçi</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">721</span>
            <span className="hero__stat-label">Gönderi</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">%100</span>
            <span className="hero__stat-label">Taze & Doğal</span>
          </div>
        </div>
      </div>

      <a href="#hakkimizda" className="hero__scroll-indicator" onClick={(e) => { e.preventDefault(); handleScroll('hakkimizda'); }}>
        <span className="hero__scroll-text">Aşağı Kaydır</span>
        <span className="hero__scroll-arrow">↓</span>
      </a>
    </section>
  );
}
