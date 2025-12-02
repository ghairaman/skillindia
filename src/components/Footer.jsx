// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footerr">
      <div className="container footertop">
        <div className="row g-4 align-items-center">
          <div className="col-md-12">
            <div className="d-lg-flex align-items-center justify-content-between text-center">
              <div />

              <div>
                <img
                  src="https://observenow.com/assets/imgs/observenow-logo-full.png"
                  className="w-150px"
                  alt="ObserveNow"
                />
                <br />
                <div
                  className="social-icons mb-sm-30 mt-4"
                  style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                  <a
                    href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="http://instagram.com/now_observe"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="http://linkedin.com/company/observenow/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a
                    href="https://twitter.com/ObservenowMedia"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ObserveNowMedia"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter footerbottom text-light section-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright {year} - ObserveNow Media
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
