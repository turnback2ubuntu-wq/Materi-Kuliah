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
        notes="Selamat datang di perkuliahan perdana Statistik Teknik. Hari ini kita membahas fondasi komputasi statistik di bidang Teknik Informatika serta pengenalan lingkungan bahasa R dan RStudio."
        kicker="Statistik Teknik · Pertemuan 1"
        title={
          <>
            Pengantar Statistik Teknik & <span className="accent-text">Lingkungan R</span>
          </>
        }
        subtitle="Fondasi Berpikir Berbasis Data, Anatomi Ekosistem RStudio, dan Laporan Ilmiah Reproducible"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 pilar materi yang akan dipelajari dalam 3x50 menit sesi teori dan demonstrasi lab. Tekankan bahwa pemahaman fondasi ini menjadi kunci 14 pertemuan berikutnya."
        kicker="Roadmap Perkuliahan"
        title="5 Topik Pembelajaran Hari Ini."
        items={[
          { title: 'Statistika dalam Pengambilan Keputusan Bidang Informatika', hint: 'Fondasi Ilmiah' },
          { title: 'Ekosistem R & RStudio: Memahami 4 Panel Kerja Utama', hint: 'Tooling & IDE' },
          { title: 'Sintaks Dasar, Aturan Penugasan, & 4 Tipe Data Primitif', hint: 'Sintaks R' },
          { title: '4 Struktur Data Fundamental: Vector, Matrix, Array, Data Frame', hint: 'Arsitektur Data' },
          { title: 'I/O Data Tabular & Laporan Ilmiah Reproducible (knitr)', hint: 'Praktikum Lab' },
        ]}
      />

      {/* Slide 3: Contrast — Intuisi vs Statistik Berbasis Data */}
      <Contrast
        nav="Peran Statistika"
        notes="Tekankan pentingnya statistika bagi sarjana informatika. Di industri modern, klaim performa sistem atau kestabilan server harus diuji secara statistik, bukan sekadar intuisi atau opini."
        kicker="Paradigma Teknik Informatika"
        title={
          <>
            Pengambilan Keputusan: Asumsi vs <span className="accent-text">Fakta Statistik</span>
          </>
        }
        left={{
          label: 'Intuisi / Tebak-Tebakan',
          title: 'Subjektif & Berisiko',
          points: [
            'Kinerja sistem dinilai hanya dari rata-rata sesaat',
            'Ambang batas (threshold) alarm jaringan ditebak tanpa sebaran data',
            'Komparasi performa algoritma A/B testing tanpa uji hipotesis formal',
            'Sulit dipertanggungjawabkan saat audit SLA dan kepatuhan sistem',
          ],
        }}
        right={{
          label: 'Statistik Berbasis Data',
          title: 'Objektif & Terukur Ilmiah',
          points: [
            'Evaluasi Service Level Agreement (SLA) via persentil p95 & p99',
            'Deteksi anomali trafik jaringan berbasis penyimpangan z-score',
            'Validasi keunggulan model komputasi via uji t-test & ANOVA',
            'Analisis terekam utuh dan dapat direproduksi 100% (Reproducible)',
          ],
        }}
      />

      {/* Slide 4: Split — R vs RStudio */}
      <Split
        nav="R & RStudio"
        notes="Jelaskan analogi mobil: R adalah mesin komputasi internal, sedangkan RStudio adalah dasbor kemudi interaktif. RStudio tidak dapat berjalan tanpa R telah terpasang di sistem."
        kicker="Ekosistem Komputasi"
        title={
          <>
            R adalah <span className="accent-text">Mesin</span>, RStudio adalah <span className="accent-text">Kemudi</span>.
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Jangan tertukar antara bahasa komputasi dan IDE pengembangannya:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>
                <strong>R Engine</strong>: Interpreter bahasa, pengelola alokasi memori, dan komputasi numerik di bawah lisensi GNU GPL.
              </li>
              <li>
                <strong>RStudio Desktop</strong>: IDE modern dengan 4 panel kerja: <em>Source Editor, Console, Environment,</em> dan <em>Files/Plots/Help</em>.
              </li>
              <li>
                <strong>Aturan Emas Package</strong>: <code>install.packages()</code> cukup dijalankan 1× per komputer, sedangkan <code>library()</code> wajib dipanggil di setiap sesi kerja baru.
              </li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="setup_lingkungan.R"
            highlight={[2, 5, 6]}
            code={`# 1. Periksa versi R terpasang
R.version.string # R version 4.7.0 (2026)

# 2. Instalasi package (Cukup 1x seumur hidup)
install.packages(c("tidyverse", "readxl"))

# 3. Muat package ke memori sesi aktif
library(tidyverse)
library(readxl)

# Siap digunakan untuk analisis!`}
          />
        }
      />

      {/* Slide 5: Comparison — 4 Fundamental Data Structures */}
      <Slide
        center
        nav="Struktur Data"
        notes="Jelaskan perbedaan dimensi dan homogenitas. Vektor, matriks, dan array menuntut tipe data yang sama persis, sedangkan Data Frame adalah struktur paling penting karena mengizinkan tipe data berbeda antar-kolom."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Arsitektur Memori R
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          4 Struktur Data Fundamental di R
        </h2>
        <Comparison
          highlight={3}
          cols={['Karakteristik', 'Vector (1D)', 'Matrix (2D)', 'Array (nD)', 'Data Frame (2D)']}
          rows={[
            { label: 'Dimensi', values: ['1 Dimensi', '2D (Baris × Kolom)', 'Multi-Dimensi (n-D)', '2D (Tabel Relasional)'] },
            { label: 'Homogenitas Tipe', values: ['1 Tipe Data Saja', '1 Tipe Data Saja', '1 Tipe Data Saja', 'Beda Tipe Antar-Kolom'] },
            { label: 'Cara Pengaksesan', values: ['v[i]', 'm[i, j]', 'a[i, j, k]', 'df[i, j] atau df$kolom'] },
            { label: 'Kasus Penggunaan', values: ['Deretan skor/latensi', 'Aljabar matriks & graf', 'Citra digital / spasial', 'Dataset nyata (CSV/Excel)'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — str() & summary() */}
      <Slide
        center
        nav="Diagnostik"
        notes="Tanamkan kebiasaan profesional: jangan pernah melakukan perhitungan statistik sebelum menjalankan str() dan summary() pada data yang baru dimuat."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Audit Kualitas Data
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Langkah Wajib Sebelum Analisis Apa Pun
        </h2>
        <div style={{ marginBlock: 'clamp(16px, 3vh, 32px)' }}>
          <span
            className="accent-text"
            style={{
              fontSize: 'clamp(72px, 11vw, 130px)',
              fontWeight: 800,
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            <CountUp to={100} suffix="%" />
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Gunakan <strong><code>str()</code></strong> untuk membedah cetak biru tipe data setiap kolom, serta <strong><code>summary()</code></strong> untuk mengecek ringkasan 5 angka (Min, Q1, Median, Mean, Q3, Max) guna mendeteksi anomali sejak dini.
        </p>
        <Build at={1}>
          <div
            style={{
              marginTop: 24,
              display: 'inline-flex',
              gap: 16,
              padding: '12px 24px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--surface-2)',
              border: '1px solid var(--hair)',
            }}
          >
            <span>🔍 <code>str()</code>: Cek Type Mismatch</span>
            <span>•</span>
            <span>📊 <code>summary()</code>: Cek Sebaran & Outlier</span>
            <span>•</span>
            <span>🚨 Hindari Salah Perhitungan</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split flip — I/O Data Tabular */}
      <Split
        flip
        nav="I/O Tabular"
        notes="Waspadai fenomena type inference saat membaca file CSV. Format CSV hanya menyimpan teks, sehingga R menebak ulang tipe data. Selalu gunakan stringsAsFactors = FALSE."
        kicker="Pertukaran Data"
        title={
          <>
            Ekspor & Impor Data: Waspadai <span className="accent-text">Type Inference</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Proses pertukaran berkas antara R dan media penyimpanan lokal:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>
                <strong><code>write.csv()</code></strong>: Mengekspor data frame ke format CSV standar. Selalu sertakan <code>row.names = FALSE</code> agar tidak muncul kolom nomor baris liar.
              </li>
              <li>
                <strong><code>read.csv()</code></strong>: Membaca berkas tabular ke R. Gunakan argumen <code>stringsAsFactors = FALSE</code> untuk menjaga tipe kolom teks.
              </li>
              <li>
                <strong>Waspada Type Inference</strong>: Kolom numerik yang berisikan teks acak bisa otomatis berubah tipe menjadi character. Selalu audit ulang dengan <code>str()</code>!
              </li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="io_server_logs.R"
            highlight={[5, 9, 13]}
            code={`# 1. Bentuk Data Frame Log Server
df_server <- data.frame(
  server_id    = c("SRV-01", "SRV-02", "SRV-03"),
  cpu_core     = c(8, 16, 8),
  is_aktif     = c(TRUE, TRUE, FALSE),
  rata_respons = c(128.8, 103.5, 163.8)
)

# 2. Ekspor ke berkas CSV
write.csv(df_server, "server_logs.csv", row.names = FALSE)

# 3. Impor kembali dan verifikasi struktur
df_impor <- read.csv("server_logs.csv", stringsAsFactors = FALSE)
str(df_impor)`}
          />
        }
      />

      {/* Slide 8: Bento — Sintaks Dasar & Tipe Primitif */}
      <Bento
        nav="Sintaks Dasar"
        notes="Jelaskan sintaks R: operator assignment panah kiri <- adalah konvensi utama R, case-sensitive yang tegas, serta sistem dokumentasi mandiri yang kuat."
        kicker="Dasar Bahasa R"
        title="Sintaks Pokok, Operator, & 4 Tipe Primitif R"
        tiles={[
          {
            c: 7,
            r: 1,
            variant: 'accent',
            title: 'Operator Penugasan (<-)',
            body: 'Gunakan operator panah kiri "<-" sebagai standar idiomatik penugasan nilai. R bersifat case-sensitive: "Beban_CPU" dan "beban_cpu" adalah objek berbeda.',
          },
          {
            c: 5,
            r: 1,
            title: '4 Tipe Primitif Inti',
            body: 'character ("SRV-01"), numeric (87.5), integer (8080L dengan penanda L), dan logical (TRUE / FALSE).',
          },
          {
            c: 5,
            r: 1,
            title: 'Operator Logika & Relasional',
            body: 'Evaluasi kondisi sistem dengan operator relasional (==, !=, <, >) dan gabungkan dengan operator logika (&, |, !).',
          },
          {
            c: 7,
            r: 1,
            variant: 'glow',
            title: 'Sistem Bantuan Mandiri Terintegrasi',
            body: 'Dapatkan dokumentasi resmi fungsi secara instan di R Console: ketik ?summary, help("read.csv"), atau vignette("dplyr") tanpa perlu keluar dari RStudio.',
          },
        ]}
      />

      {/* Slide 9: Steps — R Markdown & Reproducible Research */}
      <Steps
        nav="R Markdown"
        notes="Tekankan nilai etika dan efisiensi riset reproducible. Dengan R Markdown, laporan analisis tidak lagi rentan salah ketik karena angka dan grafik langsung dihasilkan dari kode sumber."
        kicker="Literate Programming"
        title="3 Langkah Menyusun Laporan Reproducible dengan knitr."
        items={[
          {
            title: '1. Header YAML & Narasi',
            body: 'Tuliskan metadata dokumen (title, author, date, output) di dalam header YAML, lalu jelaskan latar belakang analisis menggunakan pemformatan teks Markdown.',
          },
          {
            title: '2. Sisipkan R Code Chunks',
            body: 'Tanamkan blok kode R menggunakan sintaks ```{r} ... ``` untuk mengeksekusi perhitungan statistik, memuat CSV, dan menghasilkan visualisasi data.',
          },
          {
            title: '3. Kompilasi (Knit) ke Laporan Utuh',
            body: 'Jalankan knitr untuk merender dokumen menjadi berkas HTML, PDF, atau Word final di mana narasi dan hasil eksekusi kode menyatu secara otomatis.',
          },
        ]}
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Beri instruksi teknis praktikum: mahasiswa membuat berkas praktikum_bab1.R dan laporan_bab1.Rmd, mensimulasikan data log server, dan membuktikan konsistensi tipe data."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Sesi Demonstrasi & Praktikum Laboratorium
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            maxWidth: 840,
          }}
        >
          Praktikum: <span className="accent-text">Simulasi & Audit Log Server</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            maxWidth: 720,
            marginTop: 16,
            marginBottom: 32,
          }}
        >
          Terapkan seluruh keterampilan Bab 1: buka RStudio, susun skrip <code>praktikum_bab1.R</code> untuk membangkitkan 10 data log server simulasi, lakukan ekspor-impor CSV, dan susun laporan kompilasi <code>laporan_bab1.Rmd</code>.
        </p>
        <Build at={1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 18,
              maxWidth: 760,
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-1 Fondasi Kuat</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa menguasai lingkungan komputasi statistik R, RStudio, dan struktur data memori.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Standar Reproducible</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Kemampuan menyajikan analisis data terverifikasi dan bebas manipulasi manual via knitr.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
