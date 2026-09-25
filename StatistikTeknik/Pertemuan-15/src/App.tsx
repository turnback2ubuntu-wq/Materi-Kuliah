import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Contrast from './components/Contrast';
import Split from './components/Split';
import Comparison from './components/Comparison';
import Bento from './components/Bento';
import Steps from './components/Steps';
import CodeWindow from './components/CodeWindow';
import CountUp from './components/CountUp';

export default function App() {
  return (
    <Deck>
      {/* Slide 1: Cover */}
      <Cover
        nav="Cover"
        notes="Selamat datang di Bab Penutup: Bab 15 Proyek Akhir Studi Kasus Analisis Data Komprehensif. Ini adalah capstone mata kuliah Statistik Teknik yang mengintegrasikan seluruh kompetensi analitik yang telah dibangun sepanjang 14 bab sebelumnya."
        kicker="Statistik Teknik · Pertemuan 15"
        title={
          <>
            Proyek Akhir Capstone: <span className="accent-text">Analisis Komprehensif</span>
          </>
        }
        subtitle="Dari Perumusan Masalah, Pipeline Tidy R, Inferensi Statistik, hingga Pelaporan Ilmiah Reproducible Standar Industri"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 pilar pelaksanaan Proyek Akhir Capstone. Jelaskan alur kerja dari pemilihan dataset nyata hingga presentasi sidang akhir."
        kicker="Panduan Capstone"
        title="5 Pilar Eksekusi Proyek Akhir Analisis Data."
        items={[
          { title: 'Perumusan Masalah & Pemilihan Dataset Otentik Bidang TI', hint: 'Kriteria Masalah' },
          { title: 'Integrasi End-to-End: Sanitasi, Wrangling, & Eksplorasi Visual (EDA)', hint: 'Pipeline Data' },
          { title: 'Pemodelan Statistik Inferensial (Uji Hipotesis, ANOVA, Regresi, ML)', hint: 'Uji Kebenaran' },
          { title: 'Prinsip Reproducibility: R Markdown / Quarto & Kebersihan Repositori', hint: 'Standar Sains Data' },
          { title: 'Rubrik Penilaian OBE Skala 1–5 & Format Presentasi Demo Akhir', hint: 'Evaluasi Capstone' },
        ]}
      />

      {/* Slide 3: Contrast — Proyek Terpisah vs Capstone Komprehensif */}
      <Contrast
        nav="Filosofi Capstone"
        notes="Bandingkan tugas mingguan terisolasi dengan proyek capstone komprehensif. Capstone menuntut keterpaduan alur pikir logis yang menghubungkan masalah bisnis dengan pembuktian statistik."
        kicker="Integrasi Kompetensi"
        title={
          <>
            Tugas Mingguan Terisolasi vs <span className="accent-text">Proyek Capstone</span>
          </>
        }
        left={{
          label: 'Latihan Praktikum Parsial',
          title: 'Fokus pada Satu Perintah / Fungsi',
          points: [
            'Hanya mengerjakan satu instruksi khusus (misal: hanya membuat boxplot)',
            'Dataset mainan (toy dataset) yang sudah bersih dan rapi',
            'Tidak menghubungkan temuan dengan dampak keputusan arsitektur sistem',
            'Kurang melatih daya kritis saintifik pemecahan masalah end-to-end',
          ],
        }}
        right={{
          label: 'Proyek Akhir Capstone',
          title: 'Siklus Utuh Analisis Data Industri',
          points: [
            'Menghadapi data mentah riil (kotor, hilang, beranomali, tak terstruktur)',
            'Mengintegrasikan seluruh siklus: Data Cleaning → EDA → Inferensi → Model',
            'Menjawab pertanyaan riset nyata: "Apakah arsitektur baru lebih efisien?"',
            'Dokumentasi reproducible 100% menggunakan R Markdown / Quarto',
          ],
        }}
      />

      {/* Slide 4: Bento — 4 Pilar Komponen Wajib Proyek Capstone */}
      <Bento
        nav="4 Komponen Wajib"
        notes="Rangkum 4 babak wajib yang harus ada dalam laporan dan kode proyek akhir mahasiswa."
        kicker="Arsitektur Proyek"
        title="4 Komponen Wajib Proyek Analisis Data Komprehensif"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: '1. Pipeline Data Cleaning & Wrangling (Bab 1–2)',
            body: 'Audit missing values (is.na), filter duplikasi, transformasi format long/wide (tidyr), dan manipulasi efisien berbasis tata bahasa dplyr.',
          },
          {
            c: 6,
            r: 1,
            title: '2. EDA Komprehensif & Visualisasi ggplot2 (Bab 3–4)',
            body: 'Ringkasan ukuran pemusatan dan dispersi robust, deteksi outlier 1.5×IQR, matriks korelasi heatmap, serta visualisasi berlapis multi-panel faceting.',
          },
          {
            c: 6,
            r: 1,
            title: '3. Inferensi Statistik Formal (Bab 5–9)',
            body: 'Uji hipotesis terarah (t-test / paired t-test), estimasi interval kepercayaan 95%, atau analisis komparasi multikelompok One-Way ANOVA & Tukey HSD.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '4. Pemodelan Lanjut & Validasi (Bab 10–14)',
            body: 'Penerapan minimal salah satu metode lanjut: Regresi Linear (OLS & Diagnostik), Regresi Logistik (ROC-AUC), Monte Carlo, Bootstrap, atau PCA & K-Means.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Matriks Rubrik Penilaian Capstone (Skala 1–5) */}
      <Slide
        center
        nav="Rubrik Penilaian"
        notes="Jelaskan rubrik penilaian OBE Unirow skala 1-5 yang digunakan dosen penguji dalam mengevaluasi proyek akhir."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Standar Outcome-Based Education (OBE)
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Rubrik Penilaian Proyek Capstone (Skala 1–5)
        </h2>
        <Comparison
          highlight={1}
          cols={['Dimensi Penilaian', 'Kriteria Sangat Baik (Skor 5)', 'Kriteria Cukup (Skor 3)', 'Kriteria Kurang (Skor 1)']}
          rows={[
            { label: 'Perumusan Masalah & Data', values: ['Masalah TI tajam, dataset otentik > 1.000 baris', 'Masalah umum, dataset bersih tanpa tantangan', 'Masalah tidak jelas, dataset buatan trivial'] },
            { label: 'Rigoritas Statistik', values: ['Uji asumsi lengkap, pemilihan metode tepat, p-value sahih', 'Uji dilakukan tanpa pemeriksaan asumsi awal', 'Metode salah penerapan dan salah interpretasi'] },
            { label: 'Kualitas Koding R', values: ['Skrip rapi, ber-pipe (%>%), fungsi modular, reproducible', 'Kode berjalan namun berantakan tanpa komentar', 'Banyak galat sintaks, kode gagal dieksekusi'] },
            { label: 'Visualisasi & Storytelling', values: ['ggplot2 berstandar Tufte, bebas chartjunk, informatif', 'Grafik standar tanpa kustomisasi label/tema', 'Grafik menyesatkan, tidak berlabel sumbu'] },
            { label: 'Presentasi & Penguasaan', values: ['Argumentasi ilmiah berbasis data, demo lancar', 'Mampu menjelaskan namun kaku membaca slide', 'Gagal menjawab pertanyaan logika penguji'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — 100% Reproducibility */}
      <Slide
        center
        nav="Reproducibility"
        notes="Tekankan standar reproduktifitas: Penguji harus dapat mengkloning repositori git mahasiswa dan me-render seluruh laporan dan grafik hanya dengan satu klik 'Knit' di RStudio."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Standar Emas Sains Data
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Standar Reproduktifitas Penuh (100% Reproducible)
        </h2>
        <div style={{ marginBlock: 'clamp(16px, 3vh, 32px)' }}>
          <span
            className="accent-text"
            style={{
              fontSize: 'clamp(64px, 10vw, 110px)',
              fontWeight: 800,
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            <CountUp to={100} suffix="%" duration={1.5} /> Teruji
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Seluruh analisis, tabel statistik, dan grafik wajib dihasilkan secara otomatis dari skrip kode murni melalui berkas <strong>R Markdown (.Rmd)</strong> atau <strong>Quarto (.qmd)</strong> tanpa copy-paste manual!
        </p>
        <Build at={1}>
          <div
            style={{
              marginTop: 20,
              display: 'inline-flex',
              gap: 20,
              padding: '12px 24px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--surface-2)',
              border: '1px solid var(--hair)',
            }}
          >
            <span>📦 Repositori GitHub Bersih</span>
            <span>•</span>
            <span>🔒 set.seed() untuk Replikasi Acak</span>
            <span>•</span>
            <span>📄 Dokumen HTML / PDF Siap Cetak</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Template Struktur Proyek Standar Industri */}
      <Split
        nav="Struktur Repositori"
        notes="Tunjukkan tata kelola folder repositori proyek profesional. Ini membedakan mahasiswa TI profesional dengan pemula."
        kicker="Tata Kelola Repositori"
        title={
          <>
            Struktur Direktori <span className="accent-text">Proyek Capstone</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Susun berkas proyek dengan hierarki yang bersih dan terisolasi:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><code>data/raw/</code>: Data mentah asli (read-only, tidak boleh diubah manual).</li>
              <li><code>data/processed/</code>: Dataset hasil pembersihan dan filter.</li>
              <li><code>R/</code>: Skrip modular fungsi bantuan analitik.</li>
              <li><code>figures/</code>: Grafik output visualisasi resolusi tinggi (300 DPI).</li>
              <li><code>laporan_capstone.Rmd</code>: Naskah laporan komprehensif.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="struktur_repositori_proyek.txt"
            highlight={[1, 5, 8, 12]}
            code={`proyek-capstone-statistik/
├── README.md               # Deskripsi proyek & panduan replikasi
├── proyek-capstone.Rproj    # RStudio Project file
├── data/
│   ├── raw/                # telemetri_server_mentah.csv
│   └── processed/          # dataset_bersih.rds
├── R/
│   ├── 01_data_cleaning.R  # Pipeline sanitasi dplyr & tidyr
│   ├── 02_eda_visual.R     # Grafik ggplot2 & matriks korelasi
│   ├── 03_inferensi.R      # Uji hipotesis & ANOVA
│   └── 04_pemodelan.R      # Regresi / Monte Carlo / ML
├── figures/                # Gambar output publikasi (PNG 300 DPI)
└── report/
    └── laporan_akhir.Rmd   # Laporan utuh terintegrasi`}
          />
        }
      />

      {/* Slide 8: Steps — Roadmap Eksekusi 4 Pekan Capstone */}
      <Steps
        nav="Roadmap Eksekusi"
        notes="Jelaskan jadwal milestone 4 pekan menuju UAS. Setiap pekan memiliki target deliverables terukur."
        kicker="Milestone Proyek"
        title="Jadwal Roadmap 4 Pekan Penyelesaian Proyek Capstone."
        items={[
          {
            title: 'Pekan 1: Proposal & Akuisisi Data',
            body: 'Perumusan pertanyaan penelitian, pemilihan dataset riil (Kaggle/UCI/Telemetri Lab), dan inspeksi dimensi awal.',
          },
          {
            title: 'Pekan 2: Pipeline Data Cleaning & EDA Visual',
            body: 'Pembersihan missing value, deteksi outlier Tukey 1.5×IQR, dan pembuatan visualisasi komparatif ggplot2.',
          },
          {
            title: 'Pekan 3: Pemodelan Inferensi & Diagnostik',
            body: 'Pengujian hipotesis, evaluasi asumsi Gauss-Markov / Levene, fitting model statistik, dan validasi kinerja.',
          },
          {
            title: 'Pekan 4: Penyusunan Laporan & Sidang Presentasi',
            body: 'Finalisasi naskah R Markdown, rendering laporan reproducible, upload ke GitHub, dan presentasi demo di hadapan tim penguji.',
          },
        ]}
      />

      {/* Slide 9: Split — Contoh R Markdown Chunk Terintegrasi */}
      <Split
        flip
        nav="R Markdown Chunk"
        notes="Tunjukkan potongan kode R Markdown yang menggabungkan teks narasi ilmiah dengan eksekusi kode analitik."
        kicker="Dokumen Reproducible"
        title={
          <>
            Penulisan Naskah <span className="accent-text">R Markdown / Quarto</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              R Markdown menjembatani narasi analitik dengan eksekusi komputasi langsung:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Tabel otomatis dicetak rapi dengan <code>knitr::kable()</code>.</li>
              <li>Parameter inline code menyematkan nilai p-value langsung ke dalam kalimat laporan.</li>
              <li>Ekspor satu klik ke format HTML interaktif atau PDF siap cetak.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="laporan_capstone.Rmd"
            highlight={[2, 6, 9]}
            code={`---
title: "Analisis Kinerja Arsitektur Microservice"
author: "Tim Mahasiswa Teknik Informatika"
output: html_document
---

# 1. Hasil Pengujian Hipotesis
Berdasarkan uji-t dua sampel independen:
\`\`\`{r uji_t, echo = TRUE}
uji <- t.test(latency ~ server_arch, data = df_bersih)
knitr::kable(broom::tidy(uji), digits = 4)
\`\`\`

Rata-rata latensi arsitektur baru adalah \`r round(uji$estimate[1], 2)\` ms,
menunjukkan penurunan signifikan (p = \`r format.pval(uji$p.value)\`).`}
          />
        }
      />

      {/* Slide 10: Conclusion & Sidang Capstone */}
      <Slide
        center
        nav="Penutup & Sidang"
        notes="Tutup seluruh rangkaian perkuliahan semester ganjil. Berikan semangat kepada mahasiswa untuk menyelesaikan proyek akhir dengan integritas ilmiah tertinggi."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Puncak Perkuliahan Statistik Teknik
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            maxWidth: 860,
          }}
        >
          Selamat Berkarya: <span className="accent-text">Sains Data untuk Rekayasa TI</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            maxWidth: 740,
            marginTop: 16,
            marginBottom: 32,
          }}
        >
          Kalian kini telah menguasai seluruh spektrum kompetensi: dari manipulasi data, probabilitas, uji inferensi, pemodelan prediktif, hingga komputasi simulasi. Buktikan keahlian kalian dalam Proyek Akhir Capstone!
        </p>
        <Build at={1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 18,
              maxWidth: 800,
              marginInline: 'auto',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                padding: 18,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface-2)',
                border: '1px solid var(--hair)',
              }}
            >
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-8 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa mampu mengintegrasikan seluruh metode statistik teknik dalam pemecahan masalah rekayasa TI komprehensif.
              </div>
            </div>
            <div
              style={{
                padding: 18,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface-2)',
                border: '1px solid var(--hair)',
              }}
            >
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Kesiapan Industri & Riset</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Portofolio proyek di GitHub siap dipublikasikan untuk bekal karir Data Scientist, Cloud Engineer, dan Peneliti TI.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
