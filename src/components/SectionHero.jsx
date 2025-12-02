import React, { useEffect, useState } from 'react'

/**
 * SectionHero
 * Props:
 *  - eventDate (string | Date) optional: target date for countdown. Default: "2026-02-13T00:00:00" (local time)
 *  - onExpressClick (function) optional: handler for Express Your Interest button
 */
export default function SectionHero({
  eventDate = '2026-02-13T00:00:00',
  onExpressClick,
}) {
  const target = typeof eventDate === 'string' ? new Date(eventDate) : eventDate

  const calculate = () => {
    const now = new Date()
    const diff = target.getTime() - now.getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }

    const secondsTotal = Math.floor(diff / 1000)
    const days = Math.floor(secondsTotal / (3600 * 24))
    const hours = Math.floor((secondsTotal % (3600 * 24)) / 3600)
    const minutes = Math.floor((secondsTotal % 3600) / 60)
    const seconds = Math.floor(secondsTotal % 60)
    return { days, hours, minutes, seconds, finished: false }
  }

  const [timeLeft, setTimeLeft] = useState(calculate())

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculate())
    }, 1000)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventDate])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section
      id="section-hero"
      className="section-dark no-top no-bottom text-light jarallax relative mh-800"
      data-video-src="mp4:video/skill-2.mp4"
    >
      <div className="gradient-edge-top h-50 color" />
      <div className="gradient-edge-bottom" />
      <div className="sw-overlay sw-overlayhero" />
      <div className="abs abs-centered z-2 w-80">
        <div className="container wow scaleIn" data-wow-duration="3s">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="fs-120 text-uppercase fs-sm-12vw mb-4 lh-1">
                <img src="/images/skill-logo.png" alt="Skill logo" style={{ width: '65%' }} />
              </h1>

              <div className="headerslidetext border-top-1 mt-2 mb-2 border-bottom-1 p-2 fz-30 lh-base text-dark">
                <span className="tophd">From Learning To Leadership</span>
                <br />
                <span className="lowerhd">Education, Skills &amp; HR For India's Future</span>
              </div>

              <div className="d-block d-md-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center mx-4">
                  <i className="fa fa-calendar id-color me-3" aria-hidden="true" />
                  <h4 className="mb-0 text-dark">February 13th, 2026</h4>
                </div>

                <div className="d-flex justify-content-center align-items-center mx-4">
                  <i className="fa fa-location-pin id-color me-3" aria-hidden="true" />
                  <h4 className="mb-0 text-dark">New Delhi, India</h4>
                </div>
              </div>

              <div className="spacer-single" />

              <button
                type="button"
                className="btn-main mx-2 fx-slide txt"
                data-hover="Express Your Interest"
                onClick={() => (onExpressClick ? onExpressClick() : null)}
              >
                <span>Express Your Interest</span>
              </button>

              <div
                id="countdown"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  fontFamily: 'Arial, sans-serif',
                  display: 'flex',
                  margin: '0 auto',
                  gap: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '1rem',
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                {timeLeft.finished ? (
                  <span>Event started</span>
                ) : (
                  <>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 28 }}>{timeLeft.days}</div>
                      <div style={{ fontSize: 12 }}>Days</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 28 }}>{pad(timeLeft.hours)}</div>
                      <div style={{ fontSize: 12 }}>Hours</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 28 }}>{pad(timeLeft.minutes)}</div>
                      <div style={{ fontSize: 12 }}>Mins</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 28 }}>{pad(timeLeft.seconds)}</div>
                      <div style={{ fontSize: 12 }}>Secs</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
