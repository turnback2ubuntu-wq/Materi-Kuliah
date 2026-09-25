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
        notes="Selamat datang di Bagian II: Probabilitas dan Inferensi Statistik. Pertemuan 5 meletakkan fondasi matematis teori probabilitas dan pemodelan fenomena diskrit pada sistem komputasi."
        kicker="Statistik Teknik · Pertemuan 5"
        title={
          <>
            Teori Probabilitas & <span className="accent-text">Distribusi Diskrit</span>
          </>
        }
        subtitle="Ruang Sampel, Teorema Bayes, PMF/CDF, Binomial, Geometrik, Poisson, dan Hipergeometrik pada Rekayasa TI"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 modul utama probabilitas diskrit. Hubungkan konsep teori dengan aplikasi nyata seperti filter spam Naive Bayes dan pemodelan antrean paket jaringan."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Probabilitas Diskrit Hari Ini."
        items={[
          { title: 'Aksioma Probabilitas, Ruang Sampel, & Peluang Bersyarat', hint: 'Fondasi Kolmogorov' },
          { title: 'Teorema Bayes: Memperbarui Keyakinan dengan Data Bukti', hint: 'Filter Spam & AI' },
          { title: 'Variabel Acak Diskrit: Fungsi PMF, CDF, Ekspektasi, & Varians', hint: 'Karakteristik Matematis' },
          { title: 'Model Diskrit Klasik: Binomial, Geometrik, & Hipergeometrik', hint: 'Trial Sukses/Gagal' },
          { title: 'Distribusi Poisson: Laju Kedatangan Paket & Praktikum Lab R', hint: 'Antrean Jaringan' },
        ]}
      />

      {/* Slide 3: Contrast — Peluang Klasik vs Bayes */}
      <Contrast
        nav="Prior vs Posterior"
        notes="Jelaskan pergeseran paradigma dari probabilitas apriori klasik ke inferensi Bayesian. Teorema Bayes memungkinkan kita memperbarui probabilitas hipotesis setelah melihat bukti log server."
        kicker="Inferensi Ketidakpastian"
        title={
          <>
            Peluang Klasik vs <span className="accent-text">Teorema Bayes</span>
          </>
        }
        left={{
          label: 'Peluang Apriori (Prior)',
          title: 'Keyakinan Awal Tanpa Bukti',
          points: [
            'Dihitung sebelum data empiris diamati: P(Spam) = 20%',
            'Bersifat statis dan merefleksikan frekuensi umum historis',
            'Tidak mampu beradaptasi terhadap konteks pesan spesifik',
            'Rentan salah deteksi jika kondisi lingkungan berubah drastis',
          ],
        }}
        right={{
          label: 'Peluang Aposteriori (Posterior)',
          title: 'Pembaruan Berbasis Bukti (Bayesian)',
          points: [
            'Dihitung setelah bukti kata kunci ditemukan: P(Spam | Kata "Promo")',
            'Menggabungkan Prior P(H) dengan Likelihood P(E|H)',
            'Fondasi algoritma filter spam email dan mesin klasifikasi modern',
            'Sintaks matematis: P(A|B) = [P(B|A) × P(A)] / P(B)',
          ],
        }}
      />

      {/* Slide 4: Bento — 4 Model Distribusi Diskrit Utama */}
      <Bento
        nav="Model Diskrit"
        notes="Rangkum 4 distribusi diskrit yang paling sering dipakai di bidang rekayasa perangkat lunak dan jaringan komputer."
        kicker="Taksonomi Probabilitas"
        title="4 Keluarga Distribusi Peluang Diskrit Utama"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: 'Distribusi Binomial — B(n, p)',
            body: 'Jumlah sukses x dari n percobaan Bernoulli independen dengan peluang sukses p tetap. Contoh: jumlah server gagal dari klaster 50 node.',
          },
          {
            c: 6,
            r: 1,
            title: 'Distribusi Geometrik — Geom(p)',
            body: 'Jumlah percobaan gagal sebelum sukses pertama tercapai. Contoh: berapa kali request API harus diulang (retry) hingga status 200 OK didapat.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: 'Distribusi Poisson — Pois(λ)',
            body: 'Jumlah kedatangan peristiwa langka dalam interval waktu/ruang kontinu dengan laju rata-rata λ. Contoh: jumlah request masuk per detik ke web gateway.',
          },
          {
            c: 6,
            r: 1,
            title: 'Distribusi Hipergeometrik',
            body: 'Pemilihan tanpa pengembalian (sampling without replacement) dari populasi berhingga N dengan k objek bertipe khusus. Peluang berubah tiap tarikan.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Matriks Karakteristik & Fungsi R */}
      <Slide
        center
        nav="Keluarga Fungsi R"
        notes="Jelaskan konvensi 4 prefiks fungsi probabilitas di R: d (density/pmf), p (cumulative/cdf), q (quantile), r (random generator)."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Standardisasi Komputasi R
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Parameter, Momen, dan Prefiks Fungsi R
        </h2>
        <Comparison
          highlight={0}
          cols={['Distribusi', 'Prefiks Fungsi R', 'Ekspektasi E(X)', 'Varians Var(X)', 'Aplikasi Khas TI']}
          rows={[
            { label: 'Binomial', values: ['dbinom, pbinom, qbinom, rbinom', 'n × p', 'n × p × (1 - p)', 'Audit bug dalam rilis software'] },
            { label: 'Geometrik', values: ['dgeom, pgeom, qgeom, rgeom', '(1 - p) / p', '(1 - p) / p²', 'Eksplorasi retry koneksi socket'] },
            { label: 'Poisson', values: ['dpois, ppois, qpois, rpois', 'λ', 'λ (Mean = Varians!)', 'Trafik paket router per milidetik'] },
            { label: 'Hipergeometrik', values: ['dhyper, phyper, qhyper, rhyper', 'n × (k / N)', 'n × (k/N) × (1 - k/N) × fpc', 'Quality assurance batch modul IoT'] },
          ]}
        />
      </Slide>

      {/* Slide 6: Split — Pemodelan Trafik Jaringan dengan Poisson */}
      <Split
        nav="Kasus Poisson"
        notes="Tunjukkan implementasi nyata distribusi Poisson di R. Ciri khas Poisson adalah nilai mean sama dengan nilai variansnya (λ)."
        kicker="Studi Kasus Antrean"
        title={
          <>
            Pemodelan Laju Trafik <span className="accent-text">Poisson di R</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Sebuah server menerima rata-rata <strong>λ = 15 request per detik</strong>. Administrator ingin mengestimasi risiko kelebihan beban (<em>overload</em>):
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><code>dpois(x = 15, lambda = 15)</code>: Peluang tepat 15 request tiba (10.24%).</li>
              <li><code>ppois(q = 20, lambda = 15, lower.tail = FALSE)</code>: Peluang request melebihi kapasitas 20 req/detik (8.30%).</li>
              <li><code>rpois(n = 1000, lambda = 15)</code>: Pembangkitan simulasi trafik beban puncak.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="simulasi_poisson_server.R"
            highlight={[4, 8, 12]}
            code={`# Parameter: rata-rata 15 request/detik
lambda_srv <- 15

# 1. Peluang tepat menerima 15 request
p_tepat_15 <- dpois(x = 15, lambda = lambda_srv)
cat("P(X = 15):", round(p_tepat_15, 4), "\n") # 0.1024

# 2. Peluang bahaya overload (request > 20)
p_overload <- ppois(q = 20, lambda = lambda_srv, lower.tail = FALSE)
cat("P(X > 20):", round(p_overload, 4), "\n") # 0.0830

# 3. Simulasi 1000 detik operasional
set.seed(42)
trafik_simulasi <- rpois(n = 1000, lambda = lambda_srv)
max(trafik_simulasi) # [1] 29 (Lonjakan ekstrim!)`}
          />
        }
      />

      {/* Slide 7: BigNumber — Teorema Bayes Spam Filter */}
      <Slide
        center
        nav="Teorema Bayes"
        notes="Tunjukkan kekuatan Teorema Bayes dalam angka. Meskipun probabilitas prior spam hanya 20%, kemunculan kata spesifik melonjakkan keyakinan posterior menjadi 94%."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kekuatan Inferensi Probabilitas
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Pembaruan Probabilitas Posterior Email Spam
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
            <CountUp to={94.2} suffix="%" duration={1.5} />
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 700 }}>
          Dengan prior <code style={{ color: 'var(--primary)' }}>P(Spam) = 20%</code>, mendeteksi token kata <em>"Gratis Hadiah"</em> yang muncul di 80% spam dan hanya 1% email sah mengerek probabilitas posterior menjadi <strong>94.2%</strong>.
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
            <span>⚖️ <strong>Prior:</strong> P(H)</span>
            <span>•</span>
            <span>📡 <strong>Likelihood:</strong> P(E|H)</span>
            <span>•</span>
            <span>🎯 <strong>Posterior:</strong> P(H|E)</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 8: Steps — Panduan Pemilihan Distribusi Diskrit */}
      <Steps
        nav="Pemilihan Model"
        notes="Berikan panduan keputusan praktis kepada mahasiswa saat berhadapan dengan masalah rekayasa sistem nyata."
        kicker="Pohon Keputusan"
        title="4 Kriteria Memilih Distribusi Diskrit yang Tepat."
        items={[
          {
            title: '1. Hitung Jumlah Percobaan (n)',
            body: 'Apakah jumlah pengujian sudah ditetapkan di awal (Binomial) ataukah pengujian berlangsung terus sampai sukses pertama terjadi (Geometrik)?',
          },
          {
            title: '2. Cek Independensi Tarikan',
            body: 'Apakah objek yang telah diuji dikembalikan ke dalam populasi (Binomial) atau diambil permanen tanpa pengembalian (Hipergeometrik)?',
          },
          {
            title: '3. Kenali Interval Waktu / Kontinu',
            body: 'Jika yang dihitung adalah frekuensi kejadian per satuan waktu, luas, atau volume tanpa batas atas n yang kaku, gunakan Poisson.',
          },
          {
            title: '4. Verifikasi Asumsi Mean vs Varians',
            body: 'Pada Poisson, rata-rata empiris harus mendekati varians sampel. Jika varians >> mean (overdispersi), pertimbangkan model Negatif Binomial.',
          },
        ]}
      />

      {/* Slide 9: Split — Kasus Binomial Keandalan Cluster */}
      <Split
        flip
        nav="Keandalan Server"
        notes="Ajak mahasiswa melihat bagaimana rumus Binomial dipakai mengkalkulasi ketersediaan sistem High-Availability bertoleransi kesalahan."
        kicker="Simulasi Keandalan Sistem"
        title={
          <>
            Audit Toleransi Kesalahan <span className="accent-text">Klaster Server</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Sebuah klaster komputasi terdiri dari <strong>n = 10 server</strong>. Sistem tetap berfungsi selama minimal 7 server aktif (maksimal 3 server mati).
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Peluang Gagal Tiap Node (p):</strong> 5% (0.05).</li>
              <li><strong>Peluang Sukses Klaster:</strong> Dihitung dengan <code>pbinom(3, size = 10, prob = 0.05)</code> = <strong>99.90%</strong>.</li>
              <li><strong>Hasil:</strong> Memenuhi standar SLA ketersediaan 3-nine (99.9%).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="keandalan_klaster_ha.R"
            highlight={[3, 4, 7, 10]}
            code={`# Parameter Sistem
n_server <- 10
p_gagal  <- 0.05

# Peluang sistem selamat (kegagalan <= 3 node)
p_aman <- pbinom(q = 3, size = n_server, prob = p_gagal)
cat("Ketersediaan Klaster:", round(p_aman * 100, 2), "%\n")
# Ketersediaan Klaster: 99.90 %

# Distribusi peluang lengkap kegagalan 0 hingga 5 server
data.frame(
  gagal   = 0:5,
  peluang = round(dbinom(0:5, size = n_server, prob = p_gagal), 4)
)`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup sesi dengan memberi penugasan laboratorium praktikum_bab5.R yang mencakup simulasi antrean jaringan."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Sesi Praktikum Laboratorium
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            fontSize: 'clamp(32px, 4.5vw, 54px)',
            maxWidth: 840,
          }}
        >
          Praktikum Bab 5: <span className="accent-text">Simulasi Antrean Jaringan TI</span>
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
          Buka RStudio dan buka skrip <code>praktikum_bab5.R</code>. Simulasikan kedatangan paket data router selama 3.600 detik menggunakan <code>rpois()</code> dan evaluasi batas antrean (buffer overflow).
        </p>
        <Build at={1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 18,
              maxWidth: 780,
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-3 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa mampu memodelkan kejadian acak diskrit dan mengkalkulasi probabilitas sistem komputasi.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Tugas Mandiri</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Rancang simulator filter spam sederhana di R berbasis aturan Bayes Naive untuk dataset 100 SMS.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
