// src/components/SectionVenue.jsx
import React from 'react'

export default function SectionVenue({
  mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6382113384507!2d77.24767822549778!3d28.550592275709555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf3e07cf57%3A0x70eea3eb139b4bbd!2sEROS%20HOTEL%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1765956719864!5m2!1sen!2sin'
}) {
  return (
    <section id="section-venue" className="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
      <div className="container relative z-2">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Location & Venue</h2>
            <p className="lead wow fadeInUp" data-wow-delay=".6s">
              Eros Hotel, Nehru Place
              <br />
              New Delhi, India
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-sm-6">
            <img
              src="/images/venue-eros.gif"
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
