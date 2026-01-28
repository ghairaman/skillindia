import React from 'react'

const PARTNERS = [
  {
    role: 'Online Learning Partner',
    src: '/images/coursera.png',
    style: {
      background: '#fff',
      padding: '19px 17px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'Coursera',
    colClass: 'col-lg-3',
  },
  {
    role: 'Printing & Digitization Partner',
    src: '/images/canon.jpeg',
    style: {
      background: '#fff',
      padding: '24px 17px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'Canon',
    colClass: 'col-lg-3',
  },
  {
    role: 'Associate Partner',
    src: '/images/epson.jpeg',
    style: {
      background: '#fff',
      padding: '45px 17px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'Epson',
    colClass: 'col-lg-3',
  },
  {
    role: 'Associate Partner',
    src: '/images/YD-logo-02-500.png',
    style: {
      background: '#fff',
      padding: '21px 1px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'YD',
    colClass: 'col-lg-3',
  },
  {
    role: 'Online Learning Partner',
    src: '/images/codetantra.png',
    style: {
      background: '#fff',
      padding: '52px 1px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'CodeTantra',
    colClass: 'col-lg-3',
  },
  {
    role: 'Exhibitor',
    src: '/images/d2l.jpeg',
    style: {
      background: '#fff',
      padding: '23px 15px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'D2L',
    colClass: 'col-lg-3',
  },
  {
    role: 'University Partner',
    src: '/images/iem-uem-logo.jpg',
    style: {
      background: '#fff',
      padding: '27px 1px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'IEM UEM',
    colClass: 'col-lg-3',
  },
  {
    role: 'University Partner',
    src: '/images/SVSU.jpg',
    style: {
      background: '#fff',
      padding: '49px 1px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'SVSU',
    colClass: 'col-lg-3',
  },
  {
    role: 'Gifting Partner',
    src: '/images/khaas.png',
    style: {
      background: '#fff',
      padding: '11px 22px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '85%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'Khaas Gifts',
    colClass: 'col-lg-2',
  },
  {
    role: 'AI Healthcare Partner',
    src: '/images/mgood-29.jpg',
    style: {
      background: '#fff',
      padding: '35px 17px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '100%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'mGood',
    colClass: 'col-lg-3',
  },
  {
    role: 'CSR Partner',
    src: '/images/strides.avif',
    style: {
      background: '#fff',
      padding: '7px 22px',
      border: '1px solid #f1f1f1',
      borderRadius: 7,
      width: '91%',
      boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
    },
    alt: 'Strides',
    colClass: 'col-lg-2',
  },
];


export default function SectionPartners() {
  return (
    <section id="partners" className="bg-light section-light text-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Partners
            </h2>
          </div>
        </div>

        <div className="spacer-single" />

        <div className="row justify-content-center g-4">
          {PARTNERS.map((p, idx) => (
            <div key={idx} className={`${p.colClass} text-center`}>
              <p className="partnername">{p.role}</p>
              <img src={p.src} alt={p.alt} style={p.style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
