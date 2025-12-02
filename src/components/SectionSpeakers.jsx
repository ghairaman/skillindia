import React, { useEffect, useState } from 'react'
import './SectionSpeakers.css'

export default function SectionSpeakers({ speed = 15 /* px/sec roughly */, jsonPath = '/speaker.json' }) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          setSpeakers(Array.isArray(data) ? data : [])
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, [jsonPath])

  // Map "speed" to animation duration (seconds). Lower duration => faster marquee.
  // heuristic: totalWidth / speed => duration; we don't know width, so use a base mapping:
  const duration = Math.max(18, Math.round(120 / (speed / 5))) // tweak if needed

  return (
    <section id="pastspeaker" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-12 relative z-3">
            <div className="text-center">
              <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Speakers</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Legend Visionaries</h2>

              {loading && <p className="speaker-loading">Loading speakers…</p>}
              {error && <p className="speaker-error">Failed to load speakers: {error}</p>}

              {!loading && !error && speakers.length === 0 && (
                <p className="speaker-empty">No speakers available</p>
              )}

              {speakers.length > 0 && (
                <div className="marquee speakers-marquee" aria-hidden="false">
                  {/* track with duplicated content for seamless loop */}
                  <div
                    id="marqueeLeft"
                    className="marquee-track marquee-left marqueespeaker"
                    style={{ animationDuration: `${duration}s` }}
                  >
                    <ul className="speaker-list flex">
                      {speakers.map((s, i) => (
                        <SpeakerItem key={`a-${i}`} speaker={s} />
                      ))}
                    </ul>

                    {/* duplicate */}
                    <ul className="speaker-list" aria-hidden="true">
                      {speakers.map((s, i) => (
                        <SpeakerItem key={`b-${i}`} speaker={s} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpeakerItem({ speaker }) {
  // speaker.speakerimage, speaker.name, speaker.designation
  const imgSrc = `/speakers/${speaker.speakerimage}`
  return (
    <li className="speaker-item" role="listitem" style={{ listStyle: 'none' }}>
      <img
        alt={speaker.name}
        src={imgSrc}
        width={400}
        height={400}
        className="speaker-img"
        loading="lazy"
      />
      <div className="speakerdetails">
        <h4 className="speakerh4">{speaker.name}</h4>
        <p className="speakerp" dangerouslySetInnerHTML={{ __html: escapeNewlines(speaker.designation) }} />
      </div>
    </li>
  )
}

function escapeNewlines(text = '') {
  // replaces newline chars with <br/> for the designation field
  return (text || '').replace(/\n/g, '<br/>')
}
