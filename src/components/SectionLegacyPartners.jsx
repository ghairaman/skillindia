import React from 'react'
import './SectionLegacyPartners.css'

const PARTNER_IMAGES = [
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/d2l-partner.png', alt: 'D2L Partner', paddingTop: 20 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/canon.jpeg', alt: 'Canon', paddingTop: 10 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/peoplelink.jpeg', alt: 'Peoplelink', paddingTop: 30 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/anurag1.png', alt: 'Anurag', paddingTop: 30 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/silver-partner.jpg', alt: 'Silver Partner', paddingTop: 20 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/employee1.png', alt: 'Employee', paddingTop: 0 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/icfai.png', alt: 'ICFAI', paddingTop: 20 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/codetantra.png', alt: 'Codetantra', paddingTop: 30 },
  { src: 'https://observenowevents.in/elca/hyderabad/assets/images/vmart.png', alt: 'Vmart', paddingTop: 0 },
]

export default function SectionLegacyPartners({ duration = 22 /* seconds, lower = faster */ }) {
  // animation duration applied inline, so it's easy to tweak per instance
  return (
    <section id="pastpartners" className="bg-white section-light pt-80 relative jarallax legacy-partners" aria-label="section">
      <div className="gradient-edge-top" />
      <div className="gradient-edge-bottom" />
      <div className="sw-overlay op-8" />
      <div className="container">
        <div className="row g-4">
          <div className="col-md-12 wow fadeInUp">
            <div className="text-center mb-4">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Legacy Partners</h2>
            </div>

            {/* marquee carousel - duplicated content inside track for seamless loop */}
            <div className="partners-marquee" aria-hidden="false">
              <div
                className="partners-track"
                style={{ animationDuration: `${duration}s` }}
                role="presentation"
              >
                <ul className="partners-list">
                  {PARTNER_IMAGES.map((p, i) => (
                    <li key={`a-${i}`} className="partner-item">
                      <img src={p.src} alt={p.alt} style={{ paddingTop: p.paddingTop }} />
                    </li>
                  ))}
                </ul>

                {/* duplicate for seamless loop */}
                <ul className="partners-list" aria-hidden="true">
                  {PARTNER_IMAGES.map((p, i) => (
                    <li key={`b-${i}`} className="partner-item">
                      <img src={p.src} alt={`${p.alt} duplicate`} style={{ paddingTop: p.paddingTop }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* end marquee */}
          </div>
        </div>
      </div>
    </section>
  )
}
