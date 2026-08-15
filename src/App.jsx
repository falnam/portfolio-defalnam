import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import WorkDetail from './components/WorkDetail'
import WorkArchive from './components/WorkArchive'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<WorkArchive />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>

      <Footer />
    </div>
  )
}