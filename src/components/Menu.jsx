import { useState } from 'react';
import './Menu.css';

const categories = [
  {
    id: 'lahmacun',
    icon: '🫓',
    name: 'Lahmacun & Pide',
    items: [
      { name: 'Lahmacun (Paket)', price: '130₺' },
      { name: 'Lahmacun (Salon)', price: '120₺' },
      { name: 'Kıymalı Pide', price: '260₺' },
      { name: 'Kuşbaşılı Pide', price: '290₺' },
      { name: 'Kaşarlı Pide', price: '230₺' },
      { name: 'Kavurmalı Pide', price: '340₺' },
      { name: 'Orta Boy Pizza', price: '270₺' },
      { name: 'Büyük Boy Pizza', price: '370₺' },
    ],
  },
  {
    id: 'durum',
    icon: '🌯',
    name: 'Dürüm Çeşitleri',
    items: [
      { name: 'Adana Dürüm', price: '260₺' },
      { name: 'Urfa Dürüm', price: '260₺' },
      { name: 'Ciğer Dürüm', price: '230₺' },
      { name: 'Tavuk Şiş Dürüm', price: '210₺' },
      { name: 'Kuşbaşı Dürüm', price: '290₺' },
      { name: 'Ekmek Arası Köfte', price: '250₺' },
      { name: 'Çiğköfte Dürüm', price: '100₺' },
      { name: 'Çiğköfte Porsiyon', price: '250₺' },
    ],
  },
  {
    id: 'kebap',
    icon: '🍢',
    name: 'Kebap Çeşitleri',
    items: [
      { name: 'Adana', price: '450₺', popular: true },
      { name: 'Urfa', price: '450₺', popular: true },
      { name: 'Ciğer', price: '400₺' },
      { name: 'Tavuk Şiş', price: '350₺' },
      { name: 'Kuşbaşı', price: '630₺' },
      { name: 'Pirzola', price: '630₺' },
      { name: 'Patlıcanlı Kebap', price: '550₺' },
      { name: 'Domatesli Kebap', price: '550₺', popular: true },
      { name: 'Beyti', price: '550₺' },
      { name: 'İskender', price: '500₺' },
      { name: '2 Kişilik Karışık', price: '1100₺', popular: true },
    ],
  },
  {
    id: 'corba',
    icon: '🍲',
    name: 'Çorbalar',
    items: [
      { name: 'Mercimek', price: '100₺' },
      { name: 'Ezogelin', price: '100₺' },
    ],
  },
  {
    id: 'tatli',
    icon: '🍮',
    name: 'Tatlılar',
    items: [
      { name: 'Künefe', price: '200₺', popular: true },
      { name: 'Baklava', price: '200₺' },
      { name: 'Sütlaç', price: '100₺' },
    ],
  },
  {
    id: 'icecek',
    icon: '🥤',
    name: 'İçecekler',
    items: [
      { name: 'Ayran', price: '50₺' },
      { name: 'Kola', price: '70₺' },
      { name: 'Şalgam', price: '60₺' },
      { name: '1L Ayran', price: '80₺' },
      { name: '1L Kola', price: '100₺' },
      { name: '2.5L Kola', price: '140₺' },
      { name: 'Su', price: '20₺' },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState('kebap');
  const current = categories.find((c) => c.id === active);

  return (
    <section className="menu" id="menu">
      <p className="section-label">Ne Yemek İstersiniz?</p>
      <h2 className="section-title">Menümüz</h2>
      <div className="section-divider" />

      <div className="menu__tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`menu__tab ${active === cat.id ? 'menu__tab--active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="menu__grid">
        {current.items.map((item) => (
          <div className="menu__item" key={item.name}>
            {item.popular && <span className="menu__badge">Popüler</span>}
            <div className="menu__item-dots" />
            <span className="menu__item-name">{item.name}</span>
            <span className="menu__item-price">{item.price}</span>
          </div>
        ))}
      </div>

      <p className="menu__note">
        * Fiyatlarımız değişkenlik gösterebilir. Güncel fiyat listesi için lütfen arayınız.
      </p>
    </section>
  );
}
