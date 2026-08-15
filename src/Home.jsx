import Hero from './components/Hero'
import Stats from './components/Stats'
import Approach from './components/Approach'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import EducationCerts from './components/EducationCerts'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <Approach />
      <div className="dash-line" />

      <Skills />
      <div className="dash-line" />

      <Work />
      <div className="dash-line" />

      <Experience />
      <div className="dash-line" />

      <EducationCerts />

      <CTA />
    </>
  )
}
