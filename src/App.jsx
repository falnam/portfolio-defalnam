import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './Home'
import WorkDetail from './components/WorkDetail'
import WorkArchive from './components/WorkArchive'
import ExperienceArchive from './components/ExperienceArchive'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<WorkArchive />} />
        <Route path="/experience" element={<ExperienceArchive />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>

      <Footer />
      <Analytics />
    </div>
  )
}