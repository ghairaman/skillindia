import React, { useState } from 'react'

const MENU_ITEMS = [
  { href: '#section-hero', label: 'Home' },
  { href: '#section-about', label: 'About' },
  { href: '#section-why-attend', label: 'Why Attend' },
  { href: '#section-who-attend', label: 'Who Should Attend' },
  { href: '#pastspeaker', label: 'Past Speakers' },
  { href: '#pastpartners', label: 'Past Partners' },
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
                    <ul
                      id="mainmenu"
                      className={menuOpen ? 'open' : ''}
                      style={{ listStyle: 'none', margin: 0, padding: 0 }}
                    >
                      {MENU_ITEMS.map((item, idx) => (
                        <li key={idx} style={{ display: 'inline-block', marginRight: 12 }}>
                          <a
                            className={`menu-item ${item.href === '#section-hero' ? 'active' : ''}`}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
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

                <ul style={{ listStyle: 'none', padding: 0, marginTop: 8 }}>
                  {MENU_ITEMS.map((item, idx) => (
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
                  ))}
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
