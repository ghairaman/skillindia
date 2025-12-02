// src/components/SectionContact.jsx
import React from 'react'

const CONTACTS = [
  {
    role: 'For Partnership Opportunities',
    name: 'Sumit Rawat',
    email: 'sumit@observenow.com',
    phone: '+91 8979691125',
  },
  {
    role: 'For Partnership Opportunities',
    name: 'Shubham Rastogi',
    email: 'shubham@observenow.com',
    phone: '+91 7906680658',
  },
  {
    role: 'For Speaking Opportunities(Higher Education)',
    name: 'Garvita Taneja',
    email: 'garvita@observenow.com',
    phone: '+91 9311431985',
  },
  {
    role: 'For Speaking Opportunities(HR)',
    name: 'Drishti Arora',
    email: 'drishti@observenow.com',
    phone: '+91 9667305596',
  },
]

export default function SectionContact({
  videoSrc = '/images/absc.mp4',
  poster = '/img/banner1.avif',
  cardBg = '/images/contact-us.gif',
  phoneIcon = '/images/phone.png',
}) {
  return (
    <section className="bg-dark section-dark text-light pt-0 relative jarallax relative">
      {/* background video */}
      <video
        poster={poster}
        width="100%"
        height="100%"
        autoPlay
        playsInline
        loop
        muted
        className="banner-img"
        style={{ filter: 'hue-rotate(5deg)', position: 'absolute', objectFit: 'cover', display: 'flex' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="gradient-edge-top" />
      <div className="gradient-edge-bottom" />
      <div className="sw-overlay op-8" />

      <div className="container relative z-2">
        <div className="row justify-content-center contactussection">
          <div className="col-lg-8 text-center pt-80">
            <div className="subtitle wow fadeInUp" data-wow-delay=".0s">
              Connect with Us
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              For More Information
            </h2>
          </div>

          {CONTACTS.map((c, idx) => (
            <div key={idx} className="col-lg-6" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
              <div
                className="blog-two__list-item mb-30 wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{
                  background: `url('${cardBg}') center center / cover no-repeat`,
                  visibility: 'visible',
                  animationDuration: '1500ms',
                  animationDelay: '0ms',
                  animationName: 'fadeInUp',
                }}
              >
                <div className="blog__content" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                  <h5>
                    <a className="primary-hover">{c.role}</a>
                  </h5>
                  <h3>
                    <a className="primary-hover">{c.name}</a>
                  </h3>

                  <div className="about__info mt-20" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="d-flex gap-2 align-items-center" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                      <img alt="phone" src={phoneIcon} />
                      <div className="info" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <a href={`mailto:${c.email}`} className="primary-color fvb">
                          {c.email}
                        </a>
                        <h5>{c.phone}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
