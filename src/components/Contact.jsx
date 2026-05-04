import { FaPhone, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="contact__inner">
        <p className="section-label">Bize Ulaşın</p>
        <h2 className="section-title">İletişim</h2>
        <div className="section-divider" />

        <div className="contact__grid">
          <div className="contact__cards">
            <a href="tel:05537872632" className="contact__card contact__card--red">
              <span className="contact__card-icon"><FaPhone /></span>
              <div>
                <p className="contact__card-label">Telefon</p>
                <p className="contact__card-value">0553 787 26 32</p>
                <p className="contact__card-hint">Rezervasyon & Sipariş</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/urfasofrasi_alibabamlahmacun"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-icon"><FaInstagram /></span>
              <div>
                <p className="contact__card-label">Instagram</p>
                <p className="contact__card-value">@urfasofrasi_alibabamlahmacun</p>
                <p className="contact__card-hint">18.5K Takipçi</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/zy31Uo9BfPwXaum28"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <span className="contact__card-icon"><FaMapMarkerAlt /></span>
              <div>
                <p className="contact__card-label">Adres</p>
                <p className="contact__card-value">Urfa Sofrası</p>
                <p className="contact__card-hint">Google Haritalar'da Görüntüle →</p>
              </div>
            </a>

            <div className="contact__card contact__card--hours">
              <span className="contact__card-icon"><FaClock /></span>
              <div>
                <p className="contact__card-label">Çalışma Saatleri</p>
                <p className="contact__card-value">Her Gün Açık</p>
                <p className="contact__card-hint">Sizi bekliyoruz!</p>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Urfa Sofrası Konum"
              src="https://maps.google.com/maps?q=Urfa+Sofrasi+Ali+Babam+Lahmacun&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
