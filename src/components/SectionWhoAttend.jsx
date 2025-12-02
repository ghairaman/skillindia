import React from 'react'
import './SectionWhoAttend.css'

const ITEMS = [
  'Education Leaders & Policymakers – shaping the future of skilling and workforce development.',
  'HR & L&D Professionals – driving upskilling, reskilling, and talent transformation.',
  'Corporate Leaders & CXOs – seeking skilled talent to power growth and innovation.',
  'Skill Development Institutions & Training Providers – showcasing innovative programs and models.',
  'EdTech & HRTech Companies – building solutions to bridge education and industry gaps.',
]

export default function SectionWhoAttend({ className = '' }) {
  return (
    <section id="section-who-attend"
      className={`bg-dark section-dark text-light pt-80 relative jarallax ${className}`}
      aria-label="section"
    >
      <img src="/images/bg-er1.jpg" className="jarallax-img" alt="background" />
      <div className="gradient-edge-top" />
      <div className="gradient-edge-bottom" />
      <div className="sw-overlay op-8" />
      <div className="container relative z-4">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div className="marquee marquee-h">
              <h2>Who Should Attend?</h2>

              {/* Vertical marquee wrapper */}
              <div className="marquee-vertical-wrapper" id="marqueeUP" aria-hidden="false">
                <div className="marquee-vertical-track">
                  <ul className="p-0 marquee-vertical-list">
                    {ITEMS.map((t, i) => (
                      <li key={`a-${i}`} className="marquee-vertical-item">
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* duplicate for seamless loop */}
                  <ul className="p-0 marquee-vertical-list" aria-hidden="true">
                    {ITEMS.map((t, i) => (
                      <li key={`b-${i}`} className="marquee-vertical-item">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
