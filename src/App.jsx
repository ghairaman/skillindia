import React, { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)
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

export default App
