// src/components/SectionWhyAttend.jsx
import React from 'react'

const CARDS = [
  { img: '/images/wh1.jpg', text: "Gain insights into emerging skill trends shaping India’s workforce." },
  { img: '/images/wh2.jpg', text: 'Network with 200+ Education Leaders, 150+ HR Leaders, and CXOs from across industries.' },
  { img: '/images/wh3.jpg', text: 'Learn how skilling, upskilling, and reskilling can future-proof organizations.' },
  { img: '/images/wh4.jpg', text: 'Explore collaboration opportunities between academia, corporates, and government.' },
  { img: '/images/wh5.jpg', text: 'Experience thought-provoking panel discussions, keynote addresses, and success stories.' },
  { img: '/images/wh6.jpg', text: 'Be part of a movement to position India as a global skills leader.' },
]

export default function SectionWhyAttend({ className = '' }) {
  return (
    <section id="section-why-attend" className={`bg-light section-light text-dark ${className}`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Why Should You Attend?
            </h2>
            <p className="lead mb-0 wow fadeInUp">
              Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.
            </p>
          </div>
        </div>

        <div className="spacer-single" />

        <div className="row g-4">
          {CARDS.map((c, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="hover">
                <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                  <div className="abs p-40 bottom-0 z-2">
                    <div className="relative wow fadeInUp">
                      <h4>{c.text}</h4>
                    </div>
                  </div>

                  <div className="gradient-edge-bottom h-100" />

                  <img src={c.img} className="w-100 hover-scale-1-1" alt={`Why attend ${i + 1}`} />

                  <div className="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
