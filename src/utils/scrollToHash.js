// Sticky navbar-nya kira-kira setinggi ini (padding + tinggi konten navbar).
// Kalau desain navbar berubah tingginya, sesuaikan angka ini juga.
const NAVBAR_OFFSET = 88

/**
 * Scroll halus ke elemen dengan id tertentu, dikurangi tinggi navbar sticky
 * supaya bagian atas section tidak ketutup navbar saat mendarat.
 */
export function scrollToHash(hash) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}