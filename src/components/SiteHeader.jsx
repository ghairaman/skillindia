import React, { useState } from 'react'

const MENU_ITEMS = [
  { href: '#section-hero', label: 'Home' },
  { href: '#section-about', label: 'About' },
  { href: '#section-why-attend', label: 'Why Attend' },
  { href: '#section-who-attend', label: 'Who Should Attend' },
  { href: '#pastspeaker', label: 'Past Speakers' },

  {
    label: 'Past Conferences',
    submenu: [
      { label: '11th Edition', href: 'https://observenowevents.in/elca/hyderabad/index.html' },
      { label: '10th Edition', href: 'https://observenowevents.in/elca/chandigarh/index.html' },
      { label: '9th Edition', href: 'https://observenowevents.in/elca/delhi/index.html' },
      { label: '8th Edition', href: 'https://observenowevents.in/elca/mumbai/' },
      { label: '7th Edition', href: 'https://observenowevents.in/elca/7th-edition/' },
      { label: '6th Edition', href: 'https://observenowevents.in/elca/6th-edition/' },
      { label: '5th Edition', href: 'https://observenowevents.in/elca/dubai/' },
      { label: '4th Edition', href: 'https://observenowevents.in/elca/4th-edition/' },
      { label: '3rd Edition', href: 'https://observenowevents.in/elca/jaipur/' },
      { label: '2nd Edition', href: 'https://observenowevents.in/elca/2nd-edition/' },
      { label: '1st Edition', href: '#' },
    ],
  },

  { href: '#section-venue', label: 'Venue' },
]


export default function SiteHeader({ onExpressClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(open => {
      const next = !open
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  function handleNavClick(href) {
    setMenuOpen(false)
    document.body.style.overflow = ''
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleScrollToTop(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Elements moved BEFORE the header as requested */}
      <div
        className="float-text show-on-scroll light show"
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span>
          <a href="#top" onClick={handleScrollToTop}>
            Scroll to top
          </a>
        </span>
      </div>

      <div className="scrollbar-v show-on-scroll" />

      {/* page preloader begin */}
      <div id="de-loader" />
      {/* page preloader close */}

      {/* The original header */}
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <a href="/">
                      <img
                        className="logo-main"
                        src="https://observenow.com/assets/imgs/observenow-logo-full.png"
                        alt="ObserveNow logo"
                      />
                      <img
                        className="logo-scroll"
                        src="https://observenow.com/assets/imgs/observenow-logo-full.png"
                        alt="ObserveNow logo"
                      />
                      <img
                        className="logo-mobile"
                        src="https://observenow.com/assets/imgs/observenow-logo-full.png"
                        alt="ObserveNow logo"
                      />
                    </a>
                  </div>
                  {/* logo close */}
                </div>

                <div className="de-flex-col">
                  <div className="de-flex-col header-col-mid">
                    <ul id="mainmenu" className={menuOpen ? 'open' : ''}>
                      {MENU_ITEMS.map((item, idx) => {
                        if (item.submenu) {
                          return (
                            <li key={idx} className="has-submenu">
                              <a className="menu-item">{item.label}</a>
                              <ul className="submenu">
                                {item.submenu.map((sub, sidx) => (
                                  <li key={sidx}>
                                    <a href={sub.href} target="_blank" rel="noopener noreferrer">
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )
                        }

                        return (
                          <li key={idx}>
                            <a
                              className="menu-item"
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(item.href)
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        )
                      })}
                    </ul>

                  </div>
                </div>

                <div className="de-flex-col">
                  <button
                    type="button"
                    className="btn-main mx-2 fx-slide txt"
                    data-hover="Express Your Interest"
                    onClick={() => (onExpressClick ? onExpressClick() : null)}
                    aria-label="Express Your Interest"
                  >
                    <span>Express Your Interest</span>
                  </button>

                  <div className="menu_side_area">
                    <button
                      id="menu-btn"
                      aria-expanded={menuOpen}
                      aria-controls="mainmenu"
                      onClick={toggleMenu}
                      className={`menu-btn ${menuOpen ? 'is-open' : ''}`}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 8,
                        cursor: 'pointer',
                      }}
                      title={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                      <span style={{ display: 'block', width: 22, height: 2, marginBottom: 4, background: '#000' }} />
                      <span style={{ display: 'block', width: 16, height: 2, marginBottom: 4, background: '#000' }} />
                      <span style={{ display: 'block', width: 22, height: 2, background: '#000' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* mobile menu overlay */}
              {menuOpen && (
                <div
                  className="mobile-menu-overlay"
                  style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    zIndex: 999,
                  }}
                  onClick={toggleMenu}
                  aria-hidden="true"
                />
              )}

              {/* mobile menu panel */}
              <nav
                className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`}
                style={{
                  position: 'fixed',
                  top: 0,
                  right: menuOpen ? 0 : '-320px',
                  width: 320,
                  height: '100vh',
                  background: '#fff',
                  zIndex: 1000,
                  transition: 'right 250ms ease-in-out',
                  padding: '2rem',
                  boxShadow: '-6px 0 30px rgba(0,0,0,0.15)',
                }}
                aria-hidden={!menuOpen}
              >
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  style={{ background: 'transparent', border: 0, fontSize: 20, marginBottom: 12, cursor: 'pointer' }}
                >
                  ×
                </button>

                <ul style={{ listStyle: 'none', padding: 0 }}>
  {MENU_ITEMS.map((item, idx) => {
    if (item.submenu) {
      return (
        <li key={idx} style={{ marginBottom: 16 }}>
          <strong>{item.label}</strong>
          <ul style={{ listStyle: 'none', paddingLeft: 12, marginTop: 8 }}>
            {item.submenu.map((sub, sidx) => (
              <li key={sidx} style={{ marginBottom: 8 }}>
                <a
                  href={sub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', fontSize: 16 }}
                >
                  {sub.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      )
    }

    return (
      <li key={idx} style={{ marginBottom: 12 }}>
        <a
          href={item.href}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick(item.href)
          }}
          style={{ fontSize: 18, textDecoration: 'none' }}
        >
          {item.label}
        </a>
      </li>
    )
  })}
</ul>


                <div style={{ marginTop: 24 }}>
                  <button
                    className="btn-main fx-slide txt"
                    onClick={() => {
                      setMenuOpen(false)
                      document.body.style.overflow = ''
                      if (onExpressClick) onExpressClick()
                    }}
                  >
                    <span>Express Your Interest</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
