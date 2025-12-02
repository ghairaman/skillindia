import React, { useEffect, useRef } from 'react'

export default function RegisterModal({ isOpen, onClose }) {
  const firstInputRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      // lock background scrolling
      document.body.style.overflow = 'hidden'
      // focus the first input after open
      setTimeout(() => firstInputRef.current && firstInputRef.current.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000bd',
      }}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="modal-dialog-wrapper"
        role="dialog"
        aria-modal="true"
        aria-label="Register for Skill India Leadership Summit"
        onClick={(e) => e.stopPropagation()} // prevent backdrop click from closing when clicking modal
        style={{
          maxWidth: '540px',
          width: '100%',
          margin: '1rem',
        }}
      >
        <div className="modal-content" style={{ borderRadius: 8, overflow: 'hidden' }}>
          <div className="modal-header bg-dark" style={{ padding: '0.2rem 1.25rem', color: '#fff' }}>
            <div>
              <p className="modal-title" style={{ margin: 0 }}>
                <span className="h6">Skill India Leadership Summit</span>
                <br />
                <span className="p" style={{ fontSize: 15 }}>
                  13th February 2026
                </span>
              </p>
            </div>
            <div>
              <button
                type="button"
                className="close"
                onClick={onClose}
                aria-label="Close registration"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: 28,
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            </div>
          </div>

          <div className="modal-body" style={{ background: '#fff', padding: '1.25rem' }}>
            {/* Keep the original form action and fields exactly (Zoho target) */}
            <div className="container">
              <form
                action="https://forms.zohopublic.in/observenow/form/SkillIndiaLeadershipSummitNewDelhi/formperma/onMkGmAmmTEaMbmlEBonGImllvYeq5xDJ9LQ3HtK6mw/htmlRecords/submit"
                name="form"
                id="form"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="SingleLine"
                      className="form-control"
                      checktype="c1"
                      maxLength="255"
                      fieldType={1}
                      placeholder="Name"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      fieldType={9}
                      className="form-control"
                      type="email"
                      maxLength="255"
                      name="Email"
                      checktype="c5"
                      placeholder="Email"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      compname="PhoneNumber"
                      name="PhoneNumber_countrycode"
                      maxLength="20"
                      checktype="c7"
                      phoneFormat="1"
                      isCountryCodeEnabled={false}
                      fieldType="11"
                      id="international_PhoneNumber_countrycode"
                      valType="number"
                      phoneFormatType="1"
                      placeholder="Contact Number"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine1"
                      checktype="c1"
                      maxLength="255"
                      fieldType={1}
                      placeholder="Designation"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine2"
                      checktype="c1"
                      maxLength="255"
                      fieldType={1}
                      placeholder="Organization"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine3"
                      maxLength="255"
                      fieldType={1}
                      placeholder="City"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <select
                      name="Dropdown"
                      className="form-control"
                      checktype="c1"
                      required
                      style={{ width: '100%', padding: '.5rem', borderRadius: 4, border: '1px solid #ddd' }}
                    >
                      <option value="-Select-" defaultValue>
                        -Select Interest-
                      </option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Speakership">Speakership</option>
                      <option value="Exhibition">Exhibition</option>
                      <option value="Media Partnership">Media Partnership</option>
                      <option value="Delegate">Delegate</option>
                    </select>
                  </div>
                </div>

                <div className="row" style={{ marginTop: 12 }}>
                  <div className="col-lg-12 text-left">
                    <button type="submit" className="btn-one1" style={{ padding: '.6rem 1.25rem' }}>
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      style={{ marginLeft: 8, padding: '.6rem 1rem' }}
                      className="btn-one1 btn-cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
