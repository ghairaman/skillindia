import React from 'react'
import './SectionPastGlimpses.css'

const COLS = [
  {
    id: 'marqueeUP1',
    direction: 'up',
    images: [
      'https://observenowevents.in/elca/delhi/img/g1.jpg',
      'https://observenowevents.in/elca/delhi/img/g2.jpg',
      'https://observenowevents.in/elca/delhi/img/g3.jpg',
      'https://observenowevents.in/elca/delhi/img/g4.jpg',
      'https://observenowevents.in/elca/delhi/img/g5.jpg',
      'https://observenowevents.in/elca/delhi/img/g6.jpg',
      'https://observenowevents.in/elca/delhi/img/g7.jpg',
      'https://observenowevents.in/elca/delhi/img/g8.jpg',
      'https://observenowevents.in/elca/delhi/img/g9.jpg',
      'https://observenowevents.in/elca/delhi/img/g10.jpg',
      'https://observenowevents.in/elca/delhi/img/g11.jpg',
      'https://observenowevents.in/elca/delhi/img/g12.jpg',
    ],
  },
  {
    id: 'marqueeDown1',
    direction: 'down',
    images: [
      'https://observenowevents.in/elca/delhi/img/g24.jpg',
      'https://observenowevents.in/elca/delhi/img/g25.jpg',
      'https://observenowevents.in/elca/delhi/img/g26.jpg',
      'https://observenowevents.in/elca/delhi/img/g27.jpg',
      'https://observenowevents.in/elca/delhi/img/g28.jpg',
      'https://observenowevents.in/elca/delhi/img/g29.jpg',
      'https://observenowevents.in/elca/delhi/img/g30.jpg',
      'https://observenowevents.in/elca/delhi/img/g31.jpg',
      'https://observenowevents.in/elca/delhi/img/g32.jpg',
      'https://observenowevents.in/elca/delhi/img/g33.jpg',
      'https://observenowevents.in/elca/delhi/img/g34.jpg',
      'https://observenowevents.in/elca/delhi/img/g35.jpg',
      'https://observenowevents.in/elca/delhi/img/g36.jpg',
    ],
  },
  {
    id: 'marqueeUP2',
    direction: 'up',
    images: [
      'https://observenowevents.in/elca/delhi/img/g12.jpg',
      'https://observenowevents.in/elca/delhi/img/g25.jpg',
      'https://observenowevents.in/elca/delhi/img/g26.jpg',
      'https://observenowevents.in/elca/delhi/img/g27.jpg',
      'https://observenowevents.in/elca/delhi/img/g28.jpg',
      'https://observenowevents.in/elca/delhi/img/g29.jpg',
      'https://observenowevents.in/elca/delhi/img/g30.jpg',
      'https://observenowevents.in/elca/delhi/img/g31.jpg',
      'https://observenowevents.in/elca/delhi/img/g32.jpg',
      'https://observenowevents.in/elca/delhi/img/g33.jpg',
      'https://observenowevents.in/elca/delhi/img/g34.jpg',
      'https://observenowevents.in/elca/delhi/img/g35.jpg',
      'https://observenowevents.in/elca/delhi/img/g36.jpg',
      'https://observenowevents.in/elca/delhi/img/g1.jpg',
      'https://observenowevents.in/elca/delhi/img/g2.jpg',
      'https://observenowevents.in/elca/delhi/img/g3.jpg',
      'https://observenowevents.in/elca/delhi/img/g4.jpg',
      'https://observenowevents.in/elca/delhi/img/g5.jpg',
      'https://observenowevents.in/elca/delhi/img/g6.jpg',
      'https://observenowevents.in/elca/delhi/img/g7.jpg',
      'https://observenowevents.in/elca/delhi/img/g8.jpg',
      'https://observenowevents.in/elca/delhi/img/g9.jpg',
      'https://observenowevents.in/elca/delhi/img/g10.jpg',
      'https://observenowevents.in/elca/delhi/img/g11.jpg',
    ],
  },
  {
    id: 'marqueeDown2',
    direction: 'down',
    images: [
      'https://observenowevents.in/elca/delhi/img/g4.jpg',
      'https://observenowevents.in/elca/delhi/img/g5.jpg',
      'https://observenowevents.in/elca/delhi/img/g8.jpg',
      'https://observenowevents.in/elca/delhi/img/g9.jpg',
      'https://observenowevents.in/elca/delhi/img/g1.jpg',
      'https://observenowevents.in/elca/delhi/img/g2.jpg',
      'https://observenowevents.in/elca/delhi/img/g3.jpg',
      'https://observenowevents.in/elca/delhi/img/g10.jpg',
      'https://observenowevents.in/elca/delhi/img/g11.jpg',
      'https://observenowevents.in/elca/delhi/img/g6.jpg',
      'https://observenowevents.in/elca/delhi/img/g7.jpg',
      'https://observenowevents.in/elca/delhi/img/g12.jpg',
    ],
  },
]

function MarqueeColumn({ id, images, direction = 'up', duration = 28 }) {
  // duplicate flag handled in JSX: two <ul> for seamless loop
  const cls = `glimpmarquee ${direction === 'down' ? 'marquee-down' : 'marquee-up'}`
  // inline style sets animation duration (seconds)
  return (
    <div className="counter-block_one col-lg-3 col-6" style={{ maxHeight: 600, overflow: 'hidden' }}>
      <div className="marquee marquee-h">
        <div className="marquee-wrapper glimpmarquee" id={id}>
          <div className={cls} style={{ animationDuration: `${duration}s` }}>
            <ul className="glimps-list">
              {images.map((src, i) => (
                <li key={`a-${i}`}><img src={src} alt={`glimpse-${i}`} /></li>
              ))}
            </ul>

            {/* duplicated for seamless loop */}
            <ul className="glimps-list" aria-hidden="true">
              {images.map((src, i) => (
                <li key={`b-${i}`}><img src={src} alt={`glimpse-dup-${i}`} /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SectionPastGlimpses() {
  return (
    <section className="choose-one">
      <div className="container-fluid">
        <div className="sec-title style-two centered text-center">
          <h2 className="wow fadeInUp1" data-wow-delay=".2s">Past Glimpses</h2>
        </div>

        <div className="row clearfix">
          {COLS.map((col) => (
            <MarqueeColumn key={col.id} id={col.id} images={col.images} direction={col.direction} duration={28} />
          ))}
        </div>
      </div>
    </section>
  )
}
