// src/components/SectionAbout.jsx
import React from 'react'

export default function SectionAbout({ onExpressClick }) {
  return (
    <section id="section-about" className="section-light text-dark">
      <div className="container">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-10 text-center">
            <div style={{ position: 'absolute', width: '70%' }}>
              <div className="subtitle wow fadeInUp text-dark" data-wow-delay=".2s">
                About the Conference
              </div>

              <h2 className="wow fadeInUp text-uppercase text-dark nogradient" data-wow-delay=".4s">
                Welcome to the <span className="aboutspan">Skill India Leadership Summit 2026</span>
              </h2>

              <p
                className="wow fadeInUp"
                data-wow-delay=".6s"
                style={{ textShadow: 'rgb(0 49 235) 0px 0px 0.7px' }}
              >
                The Skill India Leadership Summit 2026 will be held on 13th Feb 2026 in New Delhi, bringing together
                leaders, policymakers, HR professionals, educators, and industry pioneers to drive the future of India’s
                workforce.
              </p>

              <p
                className="wow fadeInUp"
                data-wow-delay=".6s"
                style={{ textShadow: 'rgb(0 49 235) 0px 0px 0.7px' }}
              >
                Focused on the theme "From Learning To Leadership: Education, Skills &amp; HR For India's Future," the
                summit will highlight the critical role of skilling, upskilling, and reskilling in shaping a competitive
                workforce.
              </p>

              <p
                className="wow fadeInUp"
                data-wow-delay=".6s"
                style={{ textShadow: 'rgb(0 49 235) 0px 0px 0.7px' }}
              >
                From reimagining vocational education to redefining workplace learning, the summit will showcase
                emerging skill development practices, industry partnerships, and innovative workforce models — all
                designed to prepare India’s talent for the opportunities of tomorrow.
              </p>

              <p
                className="wow fadeInUp"
                data-wow-delay=".6s"
                style={{ textShadow: 'rgb(0 49 235) 0px 0px 0.7px' }}
              >
                Join us as we bring together the nation’s education and HR ecosystem to bridge skill gaps, foster
                collaboration, and power India’s journey toward becoming a global skills leader.
              </p>

              <button
                type="button"
                className="btn-main mx-2 fx-slide"
                onClick={() => (onExpressClick ? onExpressClick() : null)}
                style={{ cursor: 'pointer' }}
              >
                <span>Express Your Interest</span>
              </button>
            </div>

            <div
              className="wow scaleIn animated aboutright"
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                visibility: 'visible',
                animationName: 'scaleIn',
              }}
            >
              <img src="/images/misc/c1.webp" className="w-100 rotate-animation" alt="Conference visual" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
