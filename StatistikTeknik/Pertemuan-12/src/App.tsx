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
        notes="Selamat datang di Bagian IV: Komputasi Statistik Lanjut. Pertemuan 12 membahas Simulasi Monte Carlo: pemanfaatan pembangkitan bilangan acak masif berulang untuk mengestimasi kuantitas matematis dan risiko sistem TI yang mustahil diselesaikan secara analitis murni."
        kicker="Statistik Teknik · Pertemuan 12"
        title={
          <>
            Simulasi <span className="accent-text">Monte Carlo</span>
          </>
        }
        subtitle="Hukum Bilangan Besar (LLN), Laju Konvergensi 1/√N, Inverse Transform Sampling, dan Estimasi Risiko Sistem TI di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama Monte Carlo. Kaitkan sejarah Proyek Manhattan (von Neumann & Stanislaw Ulam) dengan aplikasi komputasi modern seperti ray tracing dan AI gaming."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Komputasi Monte Carlo Hari Ini."
        items={[
          { title: 'Prinsip Dasar Monte Carlo & Fondasi Hukum Bilangan Besar (LLN)', hint: 'Konvergensi Stokastik' },
          { title: 'Laju Konvergensi Error O(1/√N) & Presisi Replikasi Komputasi', hint: 'Akurasi vs Beban CPU' },
          { title: 'Metode Inverse Transform Sampling untuk Distribusi Kustom', hint: 'Pembangkitan Acak' },
          { title: 'Eksperimen Monte Carlo Klasik: Estimasi Geometris Nilai Pi (π)', hint: 'Eksperimen Jarum' },
          { title: 'Simulasi Ketersediaan Sistem SLA Klaster & Praktikum Lab R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Solusi Analitis vs Simulasi Monte Carlo */}
      <Contrast
        nav="Analitis vs Monte Carlo"
        notes="Bandingkan solusi analitis rumus matematika eksak dengan simulasi Monte Carlo. Ketika sistem memiliki puluhan variabel acak yang saling berinteraksi non-linier, solusi rumus matematika eksak tidak lagi dapat dirumuskan."
        kicker="Pendekatan Pemecahan Masalah"
        title={
          <>
            Solusi Analitis Tertutup vs <span className="accent-text">Simulasi Monte Carlo</span>
          </>
        }
        left={{
          label: 'Solusi Analitis Murni (Closed-Form)',
          title: 'Deduksi Rumus Eksak Tertutup',
          points: [
            'Menuntut asumsi matematika ketat yang sering kali tidak realistis di dunia nyata',
            'Tidak mampu menyelesaikan integral berdimensi tinggi pada topologi rumit',
            'Rentan macet saat komponen sistem memiliki dependensi non-standar',
            'Sangat cepat dievaluasi begitu rumusnya berhasil diturunkan',
          ],
        }}
        right={{
          label: 'Simulasi Monte Carlo (Stokastik)',
          title: 'Eksperimen Empiris Berulang Skala Masif',
          points: [
            'Bebas dari batasan asumsi bentuk rumus matematika analitis',
            'Meniru perilaku acak operasional sistem nyata ribuan hingga jutaan iterasi',
            'Menghasilkan estimasi empiris beserta batas galat interval kepercayaan',
            'Mampu memodelkan arsitektur microservice dan rantai pasok kompleks',
          ],
        }}
      />

      {/* Slide 4: Bento — 4 Pilar Komputasi Monte Carlo di R */}
      <Bento
        nav="Pilar Monte Carlo"
        notes="Rangkum 4 pilar teknis pelaksanaan simulasi Monte Carlo efisien di R."
        kicker="Arsitektur Komputasi"
        title="4 Pilar Pelaksanaan Simulasi Monte Carlo Efisien di R"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: '1. Pseudorandom Generator Terkontrol: set.seed()',
            body: 'Algoritma Mersenne Twister di R menjamin sifat keacakan berkualitas tinggi sekaligus menjamin replikasi ilmiah yang reproducible 100%.',
          },
          {
            c: 6,
            r: 1,
            title: '2. Ukuran Replikasi Berskala Besar (N ≥ 10.000)',
            body: 'Memanfaatkan Law of Large Numbers: rata-rata empiris hasil simulasi dipastikan berkonvergen mendekati nilai ekspektasi teoretis sejati.',
          },
          {
            c: 6,
            r: 1,
            title: '3. Vectorization Eksekusi (Hindari for-loop Lambat)',
            body: 'Gunakan fungsi vektor R seperti runif(), rnorm(), atau replicate() untuk mengeksekusi 1.000.000 iterasi dalam hitungan milidetik di level C.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '4. Kuantifikasi Galat Standar Simulasi (SE = s / √N)',
            body: 'Setiap taksiran Monte Carlo wajib disertai laporan Margin of Error untuk menyatakan tingkat kepastian kuantitatif hasil simulasi.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Metode Sampling Stokastik */}
      <Slide
        center
        nav="Metode Sampling"
        notes="Bandingkan metode sampling: Inverse Transform, Rejection Sampling, dan generator bawaan R."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Teknik Pembangkitan Bilangan Acak
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Perbandingan Teknik Sampling Stokastik
        </h2>
        <Comparison
          highlight={0}
          cols={['Metode Sampling', 'Prinsip Kerja', 'Efisiensi Komputasi', 'Kapan Digunakan']}
          rows={[
            { label: 'Inverse Transform', values: ['X = F⁻¹(U) di mana U ~ Uniform(0,1)', 'Sangat tinggi (100% sampel terpakai)', 'Ketika fungsi CDF invers dapat diturunkan analitis'] },
            { label: 'Acceptance-Rejection', values: ['Bangkitkan kandidat lalu uji kriteria lolos', 'Sedang (ada sampel yang terbuang/reject)', 'Distribusi densitas rumit tanpa rumus CDF invers'] },
            { label: 'Pembangkit Bawaan R', values: ['rnorm(), rpois(), rexp() berbasis C', 'Optimal maksimal C-Speed', 'Distribusi parametrik standar yang sudah disediakan R'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Hukum Laju Konvergensi 1/√N */}
      <Slide
        center
        nav="Laju Konvergensi"
        notes="Tekankan hukum fundamental Monte Carlo: Galat estimasi menyusut dengan laju 1/akar(N). Untuk menurunkan galat hingga 1/10 (meningkatkan akurasi 10x), jumlah replikasi N harus dilipatgandakan 100x!"
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Hukum Pertukaran Komputasi
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Laju Konvergensi Galat Monte Carlo: O(1 / √N)
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
            Error ∝ 1 / √N
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Untuk meningkatkan ketelitian estimasi sebesar <CountUp to={10} suffix="×" /> lebih presisi, kita wajib menambah jumlah replikasi iterasi simulasi sebanyak <strong>100× lipat</strong>!
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
            <span>🔹 <strong>N = 10.000:</strong> Galat Relatif ≈ ± 1.0%</span>
            <span>•</span>
            <span>🔹 <strong>N = 1.000.000:</strong> Galat Relatif ≈ ± 0.1%</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Estimasi Geometris Pi (π) */}
      <Split
        nav="Estimasi Pi"
        notes="Ajak mahasiswa melihat demonstrasi klasik Monte Carlo: Mengestimasi nilai Pi dengan melempar titik acak seragam ke dalam bujur sangkar dan menghitung rasio titik yang jatuh di dalam lingkaran kuadran."
        kicker="Eksperimen Klasik"
        title={
          <>
            Estimasi Nilai Pi (π) <span className="accent-text">Metode Geometris di R</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Kita melempar <strong>N = 100.000 titik acak</strong> ke dalam kuadran bujur sangkar satuan [0, 1] × [0, 1]:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Kondisi Titik di Dalam Lingkaran: <code>x² + y² ≤ 1</code>.</li>
              <li>Peluang Teoretis: Luas Lingkaran / Luas Persegi = π / 4.</li>
              <li>Estimasi Monte Carlo: <code>π̂ = 4 × (Jumlah Titik Dalam / N)</code>.</li>
              <li>Hasil: <code>π̂ = 3.14192</code> (Mendekati nilai asli π = 3.14159...).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="estimasi_pi_monte_carlo.R"
            highlight={[4, 5, 8, 12]}
            code={`set.seed(42)
N <- 100000

# Bangkitkan koordinat acak seragam (x, y)
x <- runif(N, min = 0, max = 1)
y <- runif(N, min = 0, max = 1)

# Cek kondisi jarak euclidean ke titik asal <= 1
di_dalam <- (x^2 + y^2) <= 1

# Taksiran Nilai Pi
pi_estimasi <- 4 * sum(di_dalam) / N
cat("Estimasi Pi:", pi_estimasi, "\n") # 3.14192
cat("Galat Error:", abs(pi_estimasi - pi), "\n") # 0.000327`}
          />
        }
      />

      {/* Slide 8: Steps — Siklus Desain Eksperimen Monte Carlo */}
      <Steps
        nav="Siklus Desain"
        notes="Tunjukkan 4 fase metodologis dalam merancang simulasi Monte Carlo untuk sistem rekayasa perangkat lunak."
        kicker="Metodologi Rekayasa"
        title="4 Tahap Perancangan Simulasi Monte Carlo Sistem TI."
        items={[
          {
            title: '1. Formulasi Model Matematis & Variabel Input Acak',
            body: 'Identifikasi parameter ketidakpastian (misal: beban CPU berdistribusi Gamma, latensi jaringan berdistribusi Lognormal).',
          },
          {
            title: '2. Bangkitkan Replikasi Sampel Acak di R',
            body: 'Gunakan fungsi generator acak R dengan set.seed() untuk memastikan eksperimen dapat diaudit kembali secara independen.',
          },
          {
            title: '3. Evaluasi Output Sistem Secara Vectorized',
            body: 'Jalankan kalkulasi logika sistem (apakah terjadi timeout, buffer overflow, atau pelanggaran SLA) pada setiap baris observasi.',
          },
          {
            title: '4. Agregasi Statistik & Hitung Interval Kepercayaan',
            body: 'Hitung probabilitas kejadian ekstrim, persentil P99, dan margin of error simulasi: CI = p̂ ± 1.96 × √(p̂(1-p̂)/N).',
          },
        ]}
      />

      {/* Slide 9: Split — Kasus Risiko Ketersediaan Klaster TI */}
      <Split
        flip
        nav="Simulasi SLA"
        notes="Bahas studi kasus nyata dari naskah buku: Simulasi keandalan klaster multi-server dengan dependensi kegagalan listrik acak."
        kicker="Studi Kasus Keandalan"
        title={
          <>
            Simulasi Ketersediaan <span className="accent-text">SLA Multi-Server</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Sebuah sistem microservice terdiri dari 5 server dengan probabilitas kegagalan independen dan risiko insiden listrik bersama:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Disimulasikan selama <strong>100.000 jam operasional</strong>.</li>
              <li>Hasil: Estimasi downtime tahunan = <strong>8.7 jam/tahun</strong>.</li>
              <li>Ketersediaan SLA: <strong>99.901%</strong> (Memenuhi standar Three-Nines).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="simulasi_sla_microservice.R"
            highlight={[5, 8, 12]}
            code={`set.seed(2026)
jam_simulasi <- 100000

# 1. Bangkitkan status gagal 5 server independen (p = 0.001)
srv_down <- matrix(rbinom(jam_simulasi * 5, 1, 0.001), ncol = 5)

# 2. Insiden listrik bersama (p = 0.0001)
power_fail <- rbinom(jam_simulasi, 1, 0.0001)

# 3. Sistem kolaps jika >= 3 server mati ATAU listrik padam
sistem_down <- (rowSums(srv_down) >= 3) | (power_fail == 1)

# Persentase Uptime SLA
uptime <- 1 - mean(sistem_down)
cat("SLA Uptime:", round(uptime * 100, 3), "%\n") # 99.901 %`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan instruksi pengerjaan praktikum_bab12.R mengenai estimasi risiko finansial cloud computing."
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
          Praktikum Bab 12: <span className="accent-text">Simulasi Risiko Kapasitas Cloud</span>
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
          Buka <code>praktikum_bab12.R</code> di RStudio. Simulasikan fluktuasi biaya penagihan server cloud dinamis (AWS EC2 Spot Instances) selama 1 tahun menggunakan 100.000 iterasi Monte Carlo dan hitung estimasi Value at Risk (VaR 95%).
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-6 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa mampu merancang simulator stokastik Monte Carlo untuk mengukur risiko dan ketersediaan sistem komputasi.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Koneksi ke Bab 13</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Bila Monte Carlo membangkitkan data dari distribusi teoretis, Bootstrap membangkitkan sampel langsung dari data empiris yang sudah ada.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
