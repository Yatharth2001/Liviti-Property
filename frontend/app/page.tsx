import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import Features from './_components/Features'
import HowItWorks from './_components/HowItWorks'
import CtaBand from './_components/CtaBand'
import Faq from './_components/Faq'
import Footer from './_components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="h-16" aria-hidden="true" />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CtaBand />
        <Faq />
      </main>
      <Footer />
    </>
  )
}



