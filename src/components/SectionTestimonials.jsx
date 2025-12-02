// src/components/SectionTestimonials.jsx
import React, { useRef, useState, useEffect } from 'react'

export default function SectionTestimonials({
  videoSrc = '/images/testimonial.mp4',
  poster = '/img/banner1.avif',
}) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    // Keep the muted state synced to the element (useful if browser resets)
    vid.muted = muted

    // Try to autoplay (most browsers allow autoplay if muted)
    const playPromise = vid.play()
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {
        // autoplay blocked — that's okay, we'll not force it
      })
    }
  }, [muted])

  function toggleMute() {
    const vid = videoRef.current
    if (!vid) return
    const next = !muted
    setMuted(next)
    vid.muted = next
  }

  return (
    <section className="cta-two testimonial">
      <div className="container">
        <div className="inner-container">
          <div className="row clearfix">
            {/* Left Box */}
            <div className="cta-two_title-column col-lg-7 col-md-12 col-sm-12">
              <div className="cta-two_title-outer">
                <div className="sec-title style-two light">
                  <h2 className="sec-title_heading-test texton biggest">Industry Testimonials</h2>
                  <div className="sec-title_text">
                    Our experience with ObserveNow has been nothing short of exceptional. From the seamless event
                    execution to the insightful discussions and valuable networking, everything was thoughtfully curated.
                    The platform brought together some of the brightest minds in the industry.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="cta-two_image-column col-lg-5 col-md-12 col-sm-12">
              <div className="cta-two_image-outer text-center" style={{ position: 'relative' }}>
                <video
                  id="testimonialVideo"
                  ref={videoRef}
                  poster={poster}
                  width="100%"
                  height="100%"
                  autoPlay
                  playsInline
                  loop
                  muted={muted}
                  className="banner-img"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: 300,
                    maxHeight: 500,
                    objectFit: 'cover',
                    width: 'auto',
                    marginTop: '-130px',
                    borderRadius: '6%',
                    border: '10px solid #000',
                    minWidth: 'auto',
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  {/* fallback text */}
                  Your browser does not support the video tag.
                </video>

                <button
                  type="button"
                  className="mutebutton"
                  onClick={toggleMute}
                  aria-pressed={!muted}
                  aria-label={muted ? 'Unmute testimonial video' : 'Mute testimonial video'}
                  style={{
                    position: 'absolute',
                    right: 16,
                    bottom: 16,
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 10px',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontSize: 18,
                  }}
                >
                  {muted ? '🔇' : '🔊'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
