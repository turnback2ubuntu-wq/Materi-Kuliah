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
        notes="Selamat datang di perkuliahan Pertemuan 2 Statistik Teknik. Hari ini kita membahas Struktur Data Lanjut dan Manipulasi Data di R yang menjadi fondasi wajib sebelum kita masuk ke statistika deskriptif dan pemodelan."
        kicker="Statistik Teknik · Pertemuan 2"
        title={
          <>
            Struktur Data & <span className="accent-text">Manipulasi Data</span> di R
          </>
        }
        subtitle="Menguasai Factor, List, Vectorization, Tata Bahasa dplyr, dan Pipeline Data Cleaning Skala Industri"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 pilar materi yang akan dipelajari dalam 3x50 menit sesi teori dan praktikum lab. Tekankan bahwa keterampilan manipulasi data menyita hingga 80% alur kerja data science."
        kicker="Roadmap Perkuliahan"
        title="5 Topik Pembelajaran Hari Ini."
        items={[
          { title: 'Tipe Data Lanjut: Factor Ordinal & Nested List', hint: 'Kategorikal & Hirarkis' },
          { title: 'Indexing & Subsetting Presisi: [ ], [[ ]], $, dan Logical Indexing', hint: 'Ekstraksi Data' },
          { title: 'Vectorization & Keluarga Fungsi Apply', hint: 'Komputasi C-Speed' },
          { title: 'Manipulasi Tabular (dplyr) & Reshaping (tidyr)', hint: 'Tidy Data Pipeline' },
          { title: 'Data Cleaning & Studi Kasus Log API Server', hint: 'Praktikum Lab' },
        ]}
      />

      {/* Slide 3: Contrast — Factor vs Vector Character */}
      <Contrast
        nav="Factor vs Vektor"
        notes="Jelaskan beda vector character biasa dengan factor. Dalam sistem TI, status insiden 'Tinggi' > 'Rendah' bukan sekadar teks, melainkan kategori ordinal yang memiliki bobot matematis."
        kicker="Tipe Data Kategorikal"
        title={
          <>
            Karakter Biasa vs <span className="accent-text">Factor Ordinal</span>
          </>
        }
        left={{
          label: 'Character Vector',
          title: 'Teks Mentah Bebas',
          points: [
            'Hanya deretan string karakter tanpa struktur hirarki',
            'Tidak memiliki definisi level matematis kategori',
            'Tidak bisa dibandingkan dengan operator relasional (> atau <)',
            'Rentan salah interpretasi saat menjadi prediktor model statistik',
          ],
        }}
        right={{
          label: 'Factor (Ordered: TRUE)',
          title: 'Kategori Berbobot Terstruktur',
          points: [
            'Menyimpan informasi levels (misal: Rendah < Sedang < Tinggi)',
            'Mendukung perbandingan logika langsung: tingkat[2] > tingkat[3]',
            'Mencegah nilai kategori liar di luar levels yang diizinkan',
            'Siap digunakan langsung untuk pemodelan ANOVA & Regresi linear',
          ],
        }}
      />

      {/* Slide 4: Split — List & Nested Objects */}
      <Split
        nav="Struktur List"
        notes="Tekankan fleksibilitas List. List adalah tulang punggung integrasi data modern di R, mulai dari parsing payload JSON dari REST API server hingga menangkap objek hasil uji hipotesis dan regresi."
        kicker="Heterogen & Bertingkat"
        title={
          <>
            <span className="accent-text">List</span> untuk Data Kompleks & JSON
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Berbeda dari vector atau matrix yang menuntut tipe data homogen, <strong>List</strong> dapat menyimpan kumpulan objek bertipe dan berdimensi berbeda, termasuk list di dalam list (<em>nested</em>).
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Wadah alami untuk payload response REST API / format JSON.</li>
              <li>Format return standar keluaran fungsi analitik R (seperti <code>lm()</code>).</li>
              <li>Akses cepat via <code>$</code> atau ekstrak murni dengan <code>[[ ]]</code>.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="studi_kasus_server.R"
            highlight={[4, 5, 8]}
            code={`# Studi Kasus: Log Pemantauan Server
info_server <- list(
  id            = "SRV-07",
  metrik        = c(cpu = 78, memori = 65, disk = 40),
  is_bermasalah = FALSE,
  log_terakhir  = list(
    waktu = "2026-07-10 08:15",
    pesan = "Restart layanan berhasil"
  )
)

# Ekstraksi elemen nested
pesan_log <- info_server[["log_terakhir"]]$pesan
print(pesan_log) # [1] "Restart layanan berhasil"`}
          />
        }
      />

      {/* Slide 5: Comparison — Indexing & Subsetting */}
      <Slide
        center
        nav="Indexing"
        notes="Tekankan jebakan umum mahasiswa: tertukarnya kurung tunggal dan ganda. Kurung tunggal menghasilkan irisan struktur pembungkusnya, sedangkan kurung ganda membongkar bungkus dan mengambil isinya."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Sintaks Fundamental
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Operator Subsetting di R
        </h2>
        <Comparison
          highlight={0}
          cols={['Operator', '[ ] Tunggal', '[[ ]] Ganda', '$ Dollar']}
          rows={[
            { label: 'Struktur Kembalian', values: ['Pertahankan struktur asal', 'Bongkar isi elemen murni', 'Ekstrak kolom/elemen'] },
            { label: 'Multi-Elemen (Vektor Indeks)', values: [true, false, false] },
            { label: 'Akses Kolom Berdasarkan Nama', values: [true, true, true] },
            { label: 'Dukungan Logical Indexing', values: [true, false, false] },
            { label: 'Contoh Penggunaan', values: ['df[df$cpu > 80, ]', 'list_x[[1]]', 'df_server$is_aktif'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Vectorization */}
      <Slide
        center
        nav="Vectorization"
        notes="Jelaskan dari sudut arsitektur komputer: Vectorization memanfaatkan kompilasi bahasa C/Fortran internal dan SIMD processor instruction, menyingkirkan overhead iterasi pada R interpreter."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Efisiensi Komputasi
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Kecepatan Eksekusi: Vectorized vs For-Loop
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
            <CountUp to={100} suffix="×" />
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 680 }}>
          Operasi <strong>vectorized</strong> mengeksekusi instruksi langsung pada memori kontinu di tingkat primitif C, jauh melampaui perulangan eksplisit (<em>for-loop</em>) pada data berskala besar.
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
            <span>⚡ <code>apply()</code> untuk matriks</span>
            <span>•</span>
            <span>📦 <code>lapply()</code> untuk list</span>
            <span>•</span>
            <span>🎯 <code>sapply()</code> penyederhanaan otomatis</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Bento — 5 Verbs of dplyr */}
      <Bento
        nav="dplyr Grammar"
        notes="dplyr memperkenalkan tata bahasa manipulasi data yang deklaratif dan ekspresif. Operator pipe (%>%) membuat barisan kode terbaca seperti paragraf logika dari kiri ke kanan."
        kicker="Modern Data Wrangling"
        title="5 Kata Kerja Inti dplyr + Operator Pipe (%>%)"
        tiles={[
          {
            c: 7,
            r: 1,
            variant: 'accent',
            title: 'filter() & select()',
            body: 'Menyaring observasi baris berdasarkan kondisi logis, lalu memilih subset kolom spesifik tanpa pengulangan nama data frame.',
          },
          {
            c: 5,
            r: 1,
            title: 'mutate()',
            body: 'Membentuk kolom variabel baru dari transformasi matematika atau logika (mis. normalisasi beban kerja server).',
          },
          {
            c: 4,
            r: 1,
            title: 'group_by()',
            body: 'Membagi tabel menjadi partisi kelompok logis tanpa memecah struktur fisik data frame.',
          },
          {
            c: 8,
            r: 1,
            variant: 'glow',
            title: 'summarise() & Operator Pipe (%>%)',
            body: 'Mereduksi ribuan baris menjadi ringkasan statistik (mean, sd, n()) per grup. Rangkaikan dengan pipe: data %>% filter() %>% group_by() %>% summarise().',
          },
        ]}
      />

      {/* Slide 8: Split — Reshaping tidyr */}
      <Split
        flip
        nav="Reshaping Data"
        notes="Tegaskan bahwa format long (tidy data) adalah syarat mutlak visualisasi modern dengan ggplot2 dan pemodelan statistik lanjutan. Setiap variabel satu kolom, setiap observasi satu baris."
        kicker="tidyr Transformation"
        title={
          <>
            Format <span className="accent-text">Wide vs Long</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Bentuk data harus disesuaikan dengan kebutuhan analisis. <strong>tidyr</strong> menyediakan dua fungsi transformasi reversibel:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>
                <strong><code>pivot_longer()</code></strong>: Meleburkan kolom bulanan (Jan, Feb, Mar) menjadi variabel <code>bulan</code> dan <code>bandwidth_gb</code>. Standar untuk visualisasi <em>ggplot2</em>.
              </li>
              <li>
                <strong><code>pivot_wider()</code></strong>: Mengembalikan data long menjadi format matriks ringkasan tabel laporan.
              </li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="reshaping_bandwidth.R"
            highlight={[4, 5, 9]}
            code={`# WIDE -> LONG (Format Tidy untuk ggplot2)
bw_long <- bw_wide %>%
  pivot_longer(
    cols      = Jan:Mar,
    names_to  = "bulan",
    values_to = "bandwidth_gb"
  )

# LONG -> WIDE (Format Rekapitulasi)
bw_wide_lagi <- bw_long %>%
  pivot_wider(
    names_from  = bulan,
    values_from = bandwidth_gb
  )`}
          />
        }
      />

      {/* Slide 9: Steps — Data Cleaning Pipeline */}
      <Steps
        nav="Data Cleaning"
        notes="Data mentah di industri tidak pernah langsung bersih. Tiga langkah sanitasi ini wajib dilewati sebelum model analitik apa pun boleh dijalankan."
        kicker="Pipeline Sanitasi Data"
        title="3 Tahap Pembersihan Data Mentah Sebelum Analisis."
        items={[
          {
            title: '1. Deteksi & Penanganan NA',
            body: 'Gunakan colSums(is.na(df)) untuk audit nilai hilang. Ambil keputusan rasional: filter(!is.na()) atau imputasi median jika data krusial.',
          },
          {
            title: '2. Eliminasi Duplikasi Baris',
            body: 'Gunakan distinct(user_id, .keep_all = TRUE) untuk menjamin setiap observasi sistem merepresentasikan entitas tunggal yang unik.',
          },
          {
            title: '3. Standardisasi String & Format',
            body: 'Gunakan trimws() untuk membuang spasi liar dan tools::toTitleCase() guna menyeragamkan variasi huruf besar/kecil kategori.',
          },
        ]}
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Arahkan mahasiswa untuk membuka RStudio, membuat berkas praktikum_bab2.R, dan mengerjakan alur 6 langkah praktikum API E-Commerce."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Sesi Praktikum Laboratorium
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            maxWidth: 820,
          }}
        >
          Studi Kasus: <span className="accent-text">Analisis Log API E-Commerce</span>
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
          Terapkan seluruh keterampilan Bab 2 dalam skrip <code>praktikum_bab2.R</code>: mulai dari pembersihan data mentah, subsetting, manipulasi ringkasan grup dengan <code>dplyr</code>, hingga uji reversibilitas <code>pivot_longer()</code>.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-1 Tercapai</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Pemahaman mendalam mengenai arsitektur tipe data R & komputasi vektor.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-2 Tercapai</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Kemahiran manipulasi data tabular dan pembersihan log sistem nyata.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
