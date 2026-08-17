import './App.css'
import './components/LandingSections.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorksSection from './components/HowItWorksSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorksSection />
      <CTA />
      <Footer />
    </div>
  )
}

export default App