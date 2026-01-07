import React from 'react'

export default function AwardsHero() {
  return (
    <section
      id="section-hero"
      className="section-dark no-top no-bottom text-light jarallax relative mh-400"
      data-video-src="mp4:video/award-5-12-2.mp4"
    >
      <div className="gradient-edge-top h-20 color"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay sw-overlayhero2"></div>

      <div className="abs abs-centered z-2 w-80">
        <div className="container-fluid wow scaleIn" data-wow-duration="3s">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="headerslidetext mt-2 mb-2 p-2 fz-30 lh-base tophd1 blink">
                Skill Leadership Awards
              </div>

              <div className="spacer-single"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
