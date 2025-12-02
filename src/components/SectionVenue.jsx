// src/components/SectionVenue.jsx
import React from 'react'

export default function SectionVenue({
  mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56046.55554122999!2d77.18167510158268!3d28.602485026174293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1759142008861!5m2!1sen!2sin'
}) {
  return (
    <section id="section-venue" className="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
      <div className="container relative z-2">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>
            <p className="lead wow fadeInUp" data-wow-delay=".6s">
              Hotel will be discloused coming soon,
              <br />
              New Delhi, India
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-sm-6">
            <img
              src="/images/newdelhi.gif"
              className="w-100 rounded-1 wow scale-in-mask"
              alt="New Delhi"
              style={{ display: 'block' }}
            />
          </div>

          <div className="col-sm-6">
            <iframe
              src={mapSrc}
              width="626"
              height="350"
              title="New Delhi Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          <div className="clearfix" />
        </div>
      </div>
    </section>
  )
}
