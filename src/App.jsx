import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import SiteHeader from './components/SiteHeader'
import SectionHero from './components/SectionHero'
import SectionAbout from './components/SectionAbout'
import SectionMarquee from './components/SectionMarquee'
import SectionPartners from './components/SectionPartners'
import SectionWhyAttend from './components/SectionWhyAttend'
import SectionWhoAttend from './components/SectionWhoAttend'
import SectionSpeakers from './components/SectionSpeakers'
import SectionPastGlimpses from './components/SectionPastGlimpses'
import SectionLegacyPartners from './components/SectionLegacyPartners'
import SectionVenue from './components/SectionVenue'
import SectionTestimonials from './components/SectionTestimonials'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer'
import RegisterModal from './components/RegisterModal'
import SpeakersGrid from './components/SpeakersGrid'

// 👉 NEW
import AwardsPage from './components/AwardsPage'

/* ---------------- HOME PAGE ---------------- */
function HomePage() {
  const [isRegOpen, setIsRegOpen] = useState(false)

  function openReg() {
    setIsRegOpen(true)
  }
  function closeReg() {
    setIsRegOpen(false)
  }

  return (
    <>
      <SiteHeader onExpressClick={openReg} />
      <SectionHero onExpressClick={openReg} />
      <SectionAbout onExpressClick={openReg} />
      <SectionMarquee />
      <SectionPartners />

      <SpeakersGrid
        jsonUrl="https://skillindia-oob0p.kinsta.page/speakers.json"
        imgBase="/speakers/"
      />

      <SectionWhyAttend />
      <SectionWhoAttend />
      <SectionSpeakers speed={50} jsonPath="/speaker.json" />
      <SectionPastGlimpses />
      <SectionLegacyPartners duration={22} />
      <SectionVenue />
      <SectionTestimonials />
      <SectionContact />
      <Footer />

      <RegisterModal isOpen={isRegOpen} onClose={closeReg} />
    </>
  )
}

/* ---------------- APP ROUTES ---------------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/awards" element={<AwardsPage />} />
    </Routes>
  )
}
