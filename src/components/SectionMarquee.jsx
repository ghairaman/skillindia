import React from 'react'
import './SectionMarquee.css' // import the CSS (see below)

const leftItems = [
  { type: 'count', value: '80+', label: 'Speakers' },
  { type: 'img', src: '/images/_VDS6361.jpg' },
  { type: 'img', src: '/images/_VDS6188.jpg' },
  { type: 'count', value: '30+', label: 'Partners' },
  { type: 'img', src: '/images/_VDS6227.jpg' },
  { type: 'img', src: '/images/_RDS9643.jpg' },
  { type: 'count', value: '500+', label: 'Delegates' },
  { type: 'img', src: '/images/_VDS6723.jpg' },
  { type: 'img', src: '/images/_VDS6427.jpg' },
  { type: 'count', value: '10+', label: 'Government\nLeaders' },
  { type: 'img', src: '/images/_VDS6486.jpg' },
  { type: 'img', src: '/images/_VDS6403.jpg' },
  { type: 'count', value: '50+', label: 'Award\nCategories' },
  { type: 'img', src: '/images/1749108637560.jpg' },
  { type: 'img', src: '/images/1749108640132.jpg' },
]

const rightItems = [
  { type: 'count', value: '80+', label: 'Speakers' },
  { type: 'img', src: '/images/_RDS8668.jpg' },
  { type: 'img', src: '/images/_RDS8678.jpg' },
  { type: 'count', value: '30+', label: 'Partners' },
  { type: 'img', src: '/images/_RDS8694.jpg' },
  { type: 'img', src: '/images/_RDS8705.jpg' },
  { type: 'count', value: '500+', label: 'Delegates' },
  { type: 'img', src: '/images/_RDS8822.jpg' },
  { type: 'img', src: '/images/_RDS8853.jpg' },
  { type: 'count', value: '10+', label: 'Government\nLeaders' },
  { type: 'img', src: '/images/_RDS8876.jpg' },
  { type: 'img', src: '/images/_RDS8891.jpg' },
  { type: 'count', value: '50+', label: 'Award\nCategories' },
  { type: 'img', src: '/images/_RDS8903.jpg' },
  { type: 'img', src: '/images/_RDS9641.jpg' },
]

function MarqueeTrack({ items, direction = 'left', speed = 15, id }) {
  // speed controls animation duration: larger speed -> slower; we'll derive duration from speed
  // We'll translate speed to seconds — tweak if you want different pacing
  // mapping: speed (px per second) approximated by duration = trackWidth / speed,
  // but for simplicity provide a base duration multiplier
  const baseDuration = Math.max(24, Math.round(120 / (speed / 5))) // heuristic
  const className = `marquee-track marquee-${direction}`

  return (
    <div className="marquee" aria-hidden="false">
      {/* duplicate content: two identical tracks inside wrapper for seamless loop */}
      <div
        id={id}
        className={className}
        style={{ animationDuration: `${baseDuration}s` }}
      >
        <ul className="marquee-list flex">
          {items.map((it, i) => (
            <li key={`a-${i}`} className="marquee-item">
              {it.type === 'img' ? (
                <img src={it.src} alt="" className="marquee-img" />
              ) : (
                <div className="counter-block">
                  <div className="counter-block_two-count" style={{ lineHeight: '0.8em', color: '#fff', paddingTop: 15 }}>
                    {it.value.includes('+') ? (
                      <>
                        {it.value.replace('+', '')}
                        <i>+</i>
                      </>
                    ) : it.value}
                  </div>
                  <h4 dangerouslySetInnerHTML={{ __html: it.label.replace('\n', '<br/>') }} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* duplicated for seamless loop */}
        <ul className="marquee-list" aria-hidden="true">
          {items.map((it, i) => (
            <li key={`b-${i}`} className="marquee-item">
              {it.type === 'img' ? (
                <img src={it.src} alt="" className="marquee-img" />
              ) : (
                <div className="counter-block">
                  <div className="counter-block_two-count" style={{ lineHeight: '0.8em', color: '#fff', paddingTop: 15 }}>
                    {it.value.includes('+') ? (
                      <>
                        {it.value.replace('+', '')}
                        <i>+</i>
                      </>
                    ) : it.value}
                  </div>
                  <h4 dangerouslySetInnerHTML={{ __html: it.label.replace('\n', '<br/>') }} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SectionMarquee() {
  return (
    <section className="section-light bg-light" aria-label="section">
      <div className="text-light d-flex py-0 lh-1 rot-2">
        <MarqueeTrack items={leftItems} direction="left" id="marqueenumberleft" />
      </div>

      <div className="text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">
        <MarqueeTrack items={rightItems} direction="right" id="marqueenumberright" />
      </div>
    </section>
  )
}
