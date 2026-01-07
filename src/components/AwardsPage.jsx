import React from 'react'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import AwardsHero from './AwardsHero'
import AwardsCategories from './AwardsCategories'
import AwardsNominationSection from './AwardsNominationSection'

export default function AwardsPage() {
  return (
    <>
      <SiteHeader />
      <AwardsHero />
      <AwardsCategories />
      <AwardsNominationSection />
      <Footer />
    </>
  )
}
