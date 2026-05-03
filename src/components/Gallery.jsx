import './Gallery.css';

// Use Vite dev proxy for cross-origin images (in production, set up a server-side proxy or host images directly)
const BASE = '/gmap-img/gps-cs-s/';

const photos = [
  {
    url: BASE + 'APNQkAES7kJf4zFgYIDVq7aSkhs_HtMjLlHajobsy7tm03FiTBvav9yvK5R2qRCAgB2D_PbBAtW9R75-wg1EtV4FUEZy-UDJ3xqPatLAJpodYA8vkwWmelXFyfDjZZ0SYAw_lGtkguvBsQdt8mCy=w800-h600-k-no',
    label: 'Restoran',
  },
  {
    url: BASE + 'APNQkAGZQ5rLn1nf2NbRmvUIQHn2OSYlkunTXHZ_3FWJYzxE2p3C30rbOceGNuT5GlyQWrUWIWB9_AZCjKM_vU1dIbRsTl_gACHQZ6umwgcZAoloFeHp8YV6tVpQwlXE8z3JAQ2pDWJ77ujRAY6-=w800-h1422-k-no',
    label: 'Lezzetlerimiz',
  },
  {
    url: BASE + 'APNQkAFXbx3mO2QCf2Uv4fSz9Mb5ifzYUR26pCMMQumTaRKFAogpwjFZodOhv3js37R-VNvJaYWOR3vojiRBQzcaRoEKjaZCkufMSmVet6Pyr9U6YYN00ITddiEt_FnTadzUOM8Y2a-IrVG3lTlr=w800-h600-k-no',
    label: 'Kebap Çeşitleri',
  },
  {
    url: BASE + 'APNQkAHB2Zkw0BgFbAU2dPP-4wpsNem_dZi5poAJQBfalFJSmK5q9arVdlqtn92izg-wbLVAz9B7qLkHrozyXdvxClcTPS4al5K7mTbWyVwDViAQqlxDCDCNUf4E8YFh-vrV0ghUC16lWaHOvMM=w800-h533-k-no',
    label: 'Adana Kebap',
  },
  {
    url: BASE + 'APNQkAEMZQ1mkJNRDnnmfbON0DCjWiYoCbhtXaF5U3ei3JuYGb5J2wosZ2-SpETQ_eBhLGGOFplJWoAX9DaOyZf7FH2Wll5egz8_4e2UXHmFAivSEiuDNiIRyVNh3w8wZEyQzbsieVSjPzK6VdNb=w800-h600-k-no',
    label: 'Taze Lezzetler',
  },
  {
    url: BASE + 'APNQkAGAfgKltxS7pgMZvM10OTyD95vm56Qd_Mly6PK8-1u5ftBkEbENo3NjTA4P0Q7JHf8_SAfZitnfmSmncjZXGNWxLQ2imtP_d7f_ZqwNqutcUDjFglivFFQ6IAdHLRDWpl0YX4JhkHkX5DU-=w800-h600-k-no',
    label: 'Tabak Sunumu',
  },
  {
    url: BASE + 'APNQkAH7DqIe74AOEppmeDxe108qQibQ0tLVSlu7tfxZeOB9FUZLnZQR7NvYVj8bZ5Dw6Rro7f0QHo_M9eJ6xT4jEQ9pN7Pbap9juBSO8b2hIWDXRQ8H-BcHNnBEWVfSZ9yLKWWqiRuKZVyD3RM=w800-h600-k-no',
    label: 'Urfa Kebap',
  },
  {
    url: BASE + 'APNQkAGnl62XxdDUqrA6UxtKrYJSGIWpNZigtvIR9pDYfDyN7Yf0Y7SpL81ZwmwXj0mOElf0jSqaVKicWWuVRsj9mC19cfzpmyxh_HP9j8wz2qXXHW3whFgCa8aEAG_-XGxNwHb8ZEO3HlNMG34=w800-h1067-k-no',
    label: 'Özel Sunumlar',
  },
  {
    url: BASE + 'APNQkAGjfzDGNDwAfDiRflpZpJ4ptTHkPe42mxr4LEK26V65rs4AwEUaiMNoymjUc-2T1S7ahMucUvU5-FUoJR9rBS11Nvm7rEzG5DyLezxynQYFLmaJbqFs8qhKip_oxD9A_gx_fOa3mKDZgLAL=w800-h600-k-no',
    label: 'Izgara Çeşitleri',
  },
  {
    url: BASE + 'APNQkAGgjgCE6oirbqGx0ReN9HZGbCtEloYtxR4Tf0g7ZaFurcS8c_Ko7B1PXRjoxC3-MZtcHtJtod2t9xBq_ursbAn9rjpdIYYsMk_3_1Ozm_vBmUnrrcHZVTivpXeOuIlQKce2wBOkJKynqnkT=w800-h600-k-no',
    label: 'Lahmacun & Pide',
  },
  {
    url: BASE + 'APNQkAH6DU3iXd30Xs-yq5-BWGF4jEuuPrXAYPEg7hsyhtPk2T54dKGqPFoQqxo0C_fOm2wWHhNgiQUSoiyiXzKQpFfxZGvyfK4WqGkAnE7ilaP035OchYLpIfv4MjpgReX_xTXlBOqY3Bet0zCo=w800-h655-k-no',
    label: 'Dürüm Çeşitleri',
  },
  {
    url: BASE + 'APNQkAE8Rt-8_D30PjLO8q_absbGxc_m1C9fD7Okqp7mxbi08-yAYA0WyiOqEAgyET9Ei-krhJ7zMYOZGvXId8bn3HltHnmIn3VO8wA-SNopF73JkxirR9TD1bbnWn8BPAUJDPV0thwtfcapxDDM=w800-h600-k-no',
    label: 'Karışık Tabak',
  },
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
