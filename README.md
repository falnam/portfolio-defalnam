# Ade Fatkhul Anam — Portfolio

React + Vite + Tailwind + Framer Motion rebuild of the Framer landing page,
built to be easy to maintain long-term (no visual builder lock-in, plain
components, one content file).

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk produksi

```bash
npm run build
```

Hasil build statis ada di folder `dist/` — bisa langsung di-deploy ke Vercel,
Netlify, Cloudflare Pages, atau GitHub Pages.

## Struktur proyek

```
src/
  data/content.js        ← SEMUA teks & data (edit di sini, tidak perlu sentuh komponen)
  components/
    Navbar.jsx
    Hero.jsx
    Stats.jsx
    Approach.jsx
    Skills.jsx
    Work.jsx              ← "Selected Work" — daftar seperti CMS collection
    Experience.jsx
    EducationCerts.jsx
    CTA.jsx
    Footer.jsx
    Headline.jsx          ← animasi headline word-by-word yang dipakai berulang
  App.jsx                 ← menyusun semua section
  index.css               ← garis putus-putus, focus state, reduced-motion
```

## Mengedit konten

Semua teks — hero, stats, proses kerja, skill, daftar karya, pengalaman,
edukasi, sertifikasi, CTA, footer — ada di satu file:
`src/data/content.js`. Tambah/ubah/hapus item di array yang relevan, tidak
perlu menyentuh file komponen.

### Menambah proyek ke "Selected Work"

Tambahkan objek baru ke array `workItems` di `content.js`:

```js
{
  id: 'nama-unik',
  thumbnail: '/images/nama-proyek.jpg', // atau null untuk placeholder
  title: 'Judul Proyek',
  category: 'UI/UX Design',
  description: 'Deskripsi singkat proyek.',
  client: 'Nama Klien',
  year: 2026,
  link: 'https://...',
  order: 7,
}
```

Taruh file gambar di folder `public/images/` lalu isi `thumbnail` dengan
path-nya (mis. `/images/nama-proyek.jpg`).

## Breakpoint responsif

Breakpoint kustom didefinisikan di `tailwind.config.js`:

- `tablet:` → berlaku di layar ≤ 810px
- `phone:` → berlaku di layar ≤ 390px

Gunakan seperti utility Tailwind biasa, contoh: `grid-cols-3 tablet:grid-cols-2 phone:grid-cols-1`.

## Animasi

Semua animasi memakai [Framer Motion](https://www.framer.com/motion/):

- Hero memakai `animate` (langsung berjalan saat halaman dimuat).
- Section lain memakai `whileInView` (berjalan sekali saat scroll masuk viewport).
- Easing standar: `[0.44, 0, 0.56, 1]`, beberapa elemen memakai `type: "spring"` untuk efek bounce ringan.
- `prefers-reduced-motion` dihormati lewat aturan di `index.css`.

## Mengganti font

Font (Space Grotesk, JetBrains Mono, DM Serif Display) di-load lewat Google
Fonts di `index.html`. Untuk mengganti, update link tersebut dan
`fontFamily` di `tailwind.config.js`.
