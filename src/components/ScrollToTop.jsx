import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router tidak reset posisi scroll saat pindah route (beda dengan
 * navigasi halaman biasa di browser). Komponen ini dipasang sekali di
 * App.jsx supaya setiap kali path berubah, halaman otomatis scroll ke atas.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}