# 📚 Portal Materi Perkuliahan Informatika

[![Deploy to GitHub Pages](https://github.com/turnback2ubuntu-wq/Materi-Kuliah/actions/workflows/deploy.yml/badge.svg)](https://github.com/turnback2ubuntu-wq/Materi-Kuliah/actions/workflows/deploy.yml)
[![Live Portal](https://img.shields.io/badge/Live_Portal-GitHub_Pages-00f0ff?style=flat-square&logo=github)](https://turnback2ubuntu-wq.github.io/Materi-Kuliah/)
[![Slide Pertemuan 2](https://img.shields.io/badge/Slide_Deck-Pertemuan_2-6366f1?style=flat-square&logo=react)](https://turnback2ubuntu-wq.github.io/Materi-Kuliah/StatistikTeknik/Pertemuan-2/)

Koleksi materi perkuliahan, modul praktikum laboratorium, dan slide presentasi interaktif berbasis web (Vite + React) untuk mahasiswa Program Studi Teknik Informatika.

---

## 🌐 Akses Web & Live Demo

- **Portal Utama**: [https://turnback2ubuntu-wq.github.io/Materi-Kuliah/](https://turnback2ubuntu-wq.github.io/Materi-Kuliah/)
- **Slide Interaktif Pertemuan 2**: [https://turnback2ubuntu-wq.github.io/Materi-Kuliah/StatistikTeknik/Pertemuan-2/](https://turnback2ubuntu-wq.github.io/Materi-Kuliah/StatistikTeknik/Pertemuan-2/)

---

## 📂 Struktur Repositori

```
Materi-Kuliah/
├── index.html                                    # Portal Landing Page
├── .github/workflows/deploy.yml                  # GitHub Actions CI/CD to GitHub Pages
├── StatistikTeknik/
│   └── Pertemuan-2/                              # Materi Bab 2 (Slide Web App)
│       ├── Bab_02_Struktur_Data_dan_...docx      # Modul Teori & Praktikum Resmi
│       ├── index.html
│       ├── package.json
│       ├── vite.config.ts
│       ├── src/
│       │   ├── App.tsx                           # 10 Slide Utama Materi Bab 2
│       │   ├── deck/                             # Engine Bolt Slides (Locked)
│       │   ├── components/                       # Library Komponen Presentasi
│       │   └── styles/                           # Theme Tokens (Dark Technical & Neon Cyan)
└── README.md
```

---

## 📊 Statistik Teknik — Pertemuan 2: Struktur Data & Manipulasi Data di R

- **CPMK Terkait**: CPMK-1 & CPMK-2 (Pemahaman lingkungan R, komputasi vektor, dan manipulasi data tabular)
- **Alokasi Waktu**: 3 × 50 menit (Teori & Praktikum Laboratorium)
- **Tema Visual**: *Dark Technical with Neon Cyan Accent* (`#00f0ff`)
- **Fitur Slide**:
  - 10 Slide Reflow Responsif (bebas skala, tidak terpotong di layar HP/proyektor)
  - Mode Presenter Terintegrasi (`P`) dengan timer, preview slide, dan speaker notes
  - Toolkit Anotasi Coretan Layar (`A`) dengan penahan DOM (*content-anchored*)
  - Click-Builds (`Space` / `→`) untuk pemaparan bertahap

### Rangkuman 10 Slide:
1. **Cover**: Struktur Data & Manipulasi Data di R
2. **Agenda**: 5 Pilar Pembelajaran Hari Ini
3. **Contrast**: Character Vector Mentah vs Factor Ordinal
4. **Split + CodeWindow**: List untuk Data Kompleks & Log Server JSON
5. **Comparison**: Matriks Operator Subsetting `[ ]`, `[[ ]]`, dan `$`
6. **BigNumber**: Efisiensi Komputasi Vectorization hingga 100× dibanding for-loop
7. **Bento**: 5 Kata Kerja Inti `dplyr` (`filter`, `select`, `mutate`, `group_by`, `summarise`)
8. **Split (flip)**: Reshaping Data Wide vs Long (`pivot_longer` & `pivot_wider`)
9. **Steps**: 3 Tahap Pipeline Data Cleaning (Missing Value, Duplikasi, Normalisasi Teks)
10. **Slide Aksi**: Arahan Praktikum Laboratorium `praktikum_bab2.R` & CPMK

---

## 💻 Menjalankan Secara Lokal

```bash
# Masuk ke folder materi Pertemuan 2
cd StatistikTeknik/Pertemuan-2

# Install dependensi
npm install

# Jalankan server lokal
npm run dev
```

Buka `http://localhost:5173` pada browser Anda.

---

## ⌨️ Pintasan Keyboard Saat Presentasi

| Tombol | Fungsi |
| :--- | :--- |
| `Space` / `→` | Maju ke build berikutnya / pindah ke slide selanjutnya |
| `←` | Kembali ke slide sebelumnya |
| `P` | Membuka **Presenter Mode** di tab baru (sinkron dengan layar audiens) |
| `A` | Mengaktifkan **Anotasi / Coretan Layar** |
| `G` | Tampilan **Grid Overview** seluruh slide |
| `S` | Tampilan **Thumbnail Sidebar** |
| `F` | Mode Fullscreen |
| `H` | Sembunyikan / Tampilkan bar navigasi dock |

---

&copy; 2026 Andy Haryoko. Program Studi Teknik Informatika.
