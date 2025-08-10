import React from 'react'
import SiteNavbar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import FAQComponent from './components/FAQ'

export default function App() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <Services />
      <FAQComponent/>
      <Footer />
    </>
  )
}
