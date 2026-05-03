import './Gallery.css';

// Unsplash - Türk mutfağı & kebap fotoğrafları (ücretsiz)
const photos = [
  { url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80', label: 'Izgara Kebap' },
  { url: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80', label: 'Lahmacun' },
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', label: 'Adana Kebap' },
  { url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80', label: 'Dürüm' },
  { url: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80', label: 'Pide' },
  { url: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80', label: 'Kebap Tabağı' },
  { url: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&q=80', label: 'Mangal' },
  { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', label: 'Lezzetler' },
  { url: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80', label: 'Izgara' },
  { url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', label: 'Urfa Kebap' },
  { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80', label: 'Tabak Sunumu' },
  { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', label: 'Restoran' },
];

import { useState } from 'react';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const close = () => setLightbox(null);

  return (
    <section className="gallery" id="galeri">
      <div className="gallery__inner">
        <p className="section-label">Lezzetlerimiz</p>
        <h2 className="section-title">Galeri</h2>
        <div className="section-divider" />

        <div className="gallery__grid">
          {photos.map((p, i) => (
            <div
              className={`gallery__item gallery__item--${i}`}
              key={p.label}
              style={{ backgroundImage: `url('${p.url}')` }}
              role="button"
              aria-label={p.label}
              tabIndex={0}
              onClick={() => setLightbox(p)}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(p)}
            />
          ))}
        </div>

        {lightbox && (
          <div className="gallery__lightbox" onClick={close}>
            <button className="gallery__lightbox-close" onClick={close} aria-label="Kapat">✕</button>
            <div
              className="gallery__lightbox-img"
              style={{ backgroundImage: `url('${lightbox.url}')` }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <div className="gallery__instagram">
          <p>Daha fazlası için Instagram'da bizi takip edin</p>
          <a
            href="https://www.instagram.com/urfasofrasi_alibabamlahmacun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📸 @urfasofrasi_alibabamlahmacun
          </a>
        </div>
      </div>
    </section>
  );
}
