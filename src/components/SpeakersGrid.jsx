import React, { useEffect, useState } from 'react'
import './SpeakersGrid.css'

/**
 * SpeakersGrid
 * Props:
 *  - jsonUrl: URL to fetch JSON from (default uses the same URL in your script)
 *  - imgBase: base path to prepend to speaker image filename if the JSON contains only filename
 */
export default function SpeakersGrid({
  jsonUrl = 'https://observenowevents.in/skill-india/speakers.json',
  imgBase = '/speakers/', // change to '/speakers/' if images are hosted in public/speakers/
}) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const resp = await fetch(jsonUrl)
        if (!resp.ok) throw new Error(`Network response not ok: ${resp.status}`)
        const data = await resp.json()
        if (!cancelled) {
          setSpeakers(Array.isArray(data) ? data : [])
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [jsonUrl])

  function formatDesignation(text = '') {
    // Replace newline characters with <br/> for HTML rendering
    return (text || '').replace(/\n/g, '<br/>')
  }

  return (
    <section id="speakers" className="bg-light section-light text-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Speakers</h2>
          </div>
        </div>

        <div className="spacer-single" />

        {loading && (
          <div className="text-center my-4">Loading speakers…</div>
        )}

        {error && (
          <div className="text-center my-4 text-danger">Failed to load speakers: {error}</div>
        )}

        {!loading && !error && (
          <div id="speakerslist1" className="row clearfix justify-content-center">
            {speakers.map((val, idx) => {
              // image path: if speakerimage is a full URL use it, otherwise join with imgBase
              const filename = val.speakerimage || ''
              const isAbsolute = /^https?:\/\//i.test(filename)
              const imgSrc = isAbsolute ? filename : `${imgBase}${encodeURIComponent(filename)}`
              return (
                <div key={idx} className="col-lg-3 col-6 text-center mb-5">
                  <div
                    className="speaker-card"
                    style={{
                      width: '100%',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 20%, rgba(41,137,216,1) 50%, rgba(255,255,255,1) 79%, rgba(255,255,255,1) 81%, rgba(255,255,255,0.4) 100%)',
                      borderRadius: 15,
                      padding: '12px',
                    }}
                  >
                    <img
                      src={imgSrc}
                      className="imgspeaker"
                      alt={val.name || 'speaker'}
                      onError={(e) => {
                        // fallback if image not found - optional
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/images/placeholder-speaker.png'
                      }}
                    />

                    <h3 className="speakerh3">{val.name}</h3>

                    <p
                      className="speakerp"
                      // designation may contain newline characters
                      dangerouslySetInnerHTML={{ __html: formatDesignation(val.designation) }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
