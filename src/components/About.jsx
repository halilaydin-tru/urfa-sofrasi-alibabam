import { FaFire, FaLeaf, FaHistory, FaRocket, FaPhone } from 'react-icons/fa';
import './About.css';

const features = [
  { icon: FaFire, title: 'Odun Ateşinde Pişirilir', desc: 'Geleneksel yöntemlerle, odun ateşinin dumanlı lezzetiyle.' },
  { icon: FaLeaf, title: 'Taze Malzemeler', desc: 'Her gün taze alınan malzemelerle hazırlanan otantik lezzetler.' },
  { icon: FaHistory, title: 'Urfa Geleneği', desc: 'Şanlıurfa\'nın köklü mutfak kültüründen ilham alınan tarifler.' },
  { icon: FaRocket, title: 'Hızlı Servis', desc: 'Paket servis ve salon hizmetinde hız ve kaliteden ödün vermiyoruz.' },
];

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="about__inner">
        <div className="about__text">
          <p className="section-label">Hakkımızda</p>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Urfa'nın Lezzetini<br />
            <span className="about__title-accent">Sofranıza Taşıyoruz</span>
          </h2>
          <div className="section-divider" style={{ margin: '0 0 2rem' }} />
          <p className="about__desc">
            <strong>Ali Babam Lahmacun & Urfa Sofrası</strong> olarak Şanlıurfa'nın eşsiz mutfak mirasını
            şehrin kalbine taşıyoruz. Adana kebabından Urfa kebabına, domatesli kebaptan İskender'e,
            çıtır pidelerden lahmacunlara kadar geniş menümüzle her damak tadına hitap ediyoruz.
          </p>
          <p className="about__desc">
            Odun ateşinde pişirilen etlerimiz, her gün taze hazırlanan hamur ürünlerimiz ve
            şefimizin özel soslarıyla hazırlanan yemeklerimiz sizi Güneydoğu Anadolu'nun
            zengin lezzet dünyasına davet ediyor.
          </p>
          <a href="tel:05537872632" className="btn-primary about__cta">
            <FaPhone style={{ marginRight: '0.4rem' }} /> Hemen Ara: 0553 787 26 32
          </a>
        </div>

        <div className="about__features">
          {features.map((f) => {
            const Icon = f.icon;
            return (
            <div className="about__feature-card" key={f.title}>
              <span className="about__feature-icon"><Icon /></span>
              <div>
                <h4 className="about__feature-title">{f.title}</h4>
                <p className="about__feature-desc">{f.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
