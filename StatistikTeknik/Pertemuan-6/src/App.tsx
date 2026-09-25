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
        notes="Selamat datang di Pertemuan 6. Hari ini kita mempelajari variabel acak kontinu, distribusi Normal Gauss, distribusi inferensial (t, Chi-Square, F), dan keajaiban Teorema Limit Pusat (CLT) yang menjadi jembatan ke statistika inferensial."
        kicker="Statistik Teknik · Pertemuan 6"
        title={
          <>
            Distribusi Kontinu & <span className="accent-text">Teorema Limit Pusat</span>
          </>
        }
        subtitle="Standardisasi Z-Score, Distribusi t/Chi-Square/F, Waktu Hidup Eksponensial, dan Bukti Empiris CLT di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama perkuliahan distribusi kontinu. Berikan penekanan khusus pada Teorema Limit Pusat sebagai fondasi utama uji hipotesis dan interval kepercayaan di bab-bab berikutnya."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Distribusi Kontinu & CLT Hari Ini."
        items={[
          { title: 'Variabel Acak Kontinu & Fungsi Kepekatan Peluang (PDF)', hint: 'Integral Luas Area' },
          { title: 'Distribusi Normal Gauss & Standardisasi Nilai Z-Score', hint: 'Aturan 68-95-99.7' },
          { title: 'Distribusi Turunan Inferensial: Student-t, Chi-Square, & F', hint: 'Fondasi Inferensi' },
          { title: 'Distribusi Eksponensial: Memoryless Property & Keandalan TI', hint: 'MTBF & Sistem' },
          { title: 'Teorema Limit Pusat (CLT) & Simulasi Distribusi Sampling di R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Diskrit (PMF) vs Kontinu (PDF) */}
      <Contrast
        nav="PMF vs PDF"
        notes="Tekankan perbedaan mendasar: Pada variabel acak kontinu, probabilitas pada satu titik eksak P(X = c) adalah 0! Peluang hanya bermakna sebagai luas area di bawah kurva fungsi densitas f(x)."
        kicker="Fondasi Matematika"
        title={
          <>
            Peluang Titik (PMF) vs <span className="accent-text">Area Kontinu (PDF)</span>
          </>
        }
        left={{
          label: 'Variabel Diskrit (PMF)',
          title: 'Massa Peluang Pada Titik Eksak',
          points: [
            'Dihitung untuk nilai bilangan bulat diskrit (misal: tepat 3 server mati)',
            'Nilai P(X = x) memiliki bobot probabilitas nyata > 0',
            'Total penjumlahan seluruh probabilitas titik: Σ P(x) = 1.0',
            'Fungsi R: dbinom(), dpois(), dgeom()',
          ],
        }}
        right={{
          label: 'Variabel Kontinu (PDF)',
          title: 'Densitas & Integral Luas Kurva',
          points: [
            'Didefinisikan pada interval riil kontinu (misal: waktu eksekusi milidetik)',
            'Peluang pada satu titik persis selalu nol: P(X = 205.342 ms) = 0',
            'Probabilitas adalah integral area di bawah kurva: P(a ≤ X ≤ b) = ∫ f(x) dx',
            'Fungsi R: pnorm(), pt(), pchisq(), pexp()',
          ],
        }}
      />

      {/* Slide 4: Bento — 4 Distribusi Kontinu Utama */}
      <Bento
        nav="Distribusi Utama"
        notes="Jelaskan peran masing-masing dari 4 distribusi kontinu. Normal adalah sentral, Student-t untuk varians tak diketahui, Chi-Square untuk varians, dan Eksponensial untuk durasi waktu."
        kicker="Spektrum Distribusi Kontinu"
        title="4 Distribusi Kontinu Penopang Statistik Teknik"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: 'Distribusi Normal — N(μ, σ²)',
            body: 'Kurva lonceng simetris sempurna. Menjadi model alami galat pengukuran, tinggi badan, dan rata-rata sampel skala besar (CLT).',
          },
          {
            c: 6,
            r: 1,
            title: 'Distribusi Student-t — t(df)',
            body: 'Serupa kurva normal namun berekor lebih tebal (heavier tails). Dipakai saat ukuran sampel n kecil dan standar deviasi populasi σ tidak diketahui.',
          },
          {
            c: 6,
            r: 1,
            title: 'Distribusi Chi-Square — χ²(df)',
            body: 'Distribusi positif miring ke kanan, dibentuk dari jumlah kuadrat variabel normal baku. Fondasi uji goodness-of-fit dan independensi tabel kontingensi.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: 'Distribusi Eksponensial — Exp(λ)',
            body: 'Memodelkan waktu antar-kejadian proses Poisson. Memiliki sifat tanpa memori (memoryless): peluang rusak di masa depan tidak tergantung umur saat ini.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Matriks Parameter & Fungsi R Kontinu */}
      <Slide
        center
        nav="Komparasi Distribusi"
        notes="Bandingkan rumus parameter dan penggunaan fungsi komputasi distribusi kontinu di R."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Komputasi Distribusi di R
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Karakteristik Distribusi Kontinu
        </h2>
        <Comparison
          highlight={0}
          cols={['Distribusi', 'Prefiks Fungsi R', 'Parameter', 'Domain Nilai', 'Peran Utama Rekayasa']}
          rows={[
            { label: 'Normal Gauss', values: ['dnorm, pnorm, qnorm, rnorm', 'Mean (μ), SD (σ)', '(-∞, +∞)', 'Tolok ukur acuan inferensi & Z-score'] },
            { label: 'Student-t', values: ['dt, pt, qt, rt', 'Derajat Bebas (df = n - 1)', '(-∞, +∞)', 'Uji hipotesis sampel kecil & CI rata-rata'] },
            { label: 'Eksponensial', values: ['dexp, pexp, qexp, rexp', 'Laju Rate (λ = 1/MTBF)', '[0, +∞)', 'Keandalan hardware & waktu hidup server'] },
            { label: 'F-Snedecor', values: ['df, pf, qf, rf', 'Derajat Bebas (df1, df2)', '[0, +∞)', 'Uji rasio dua varians & analisis ANOVA'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Teorema Limit Pusat (CLT) */}
      <Slide
        center
        nav="Keajaiban CLT"
        notes="Jelaskan fenomena CLT: Apapun bentuk distribusi populasinya (bahkan jika miring atau seragam), distribusi rata-rata sampelnya pasti mendekati Normal seiring n membesar (umumnya n >= 30)."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Teorema Paling Penting dalam Statistika
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Teorema Limit Pusat (Central Limit Theorem)
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
            n ≥ <CountUp to={30} duration={1.2} /> Sampel
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Distribusi rata-rata sampel (<span style={{ fontFamily: 'var(--font-mono)' }}>x̄</span>) akan berkonvergen menuju <strong>Distribusi Normal</strong> dengan rata-rata <code style={{ color: 'var(--primary)' }}>μ</code> dan varians <code style={{ color: 'var(--primary)' }}>σ² / n</code>, tanpa mempedulikan bentuk sebaran populasi asalnya!
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
            <span>🎯 Standard Error: <strong>SE = σ / √n</strong></span>
            <span>•</span>
            <span>📉 Variabilitas sampling menyusut seiring √n membesar</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Z-Score & P-Norm Calculation */}
      <Split
        nav="Z-Score di R"
        notes="Demonstrasikan bagaimana standardisasi Z = (X - mu) / sigma mengubah nilai metrik mentah menjadi skala baku dengan mean 0 dan varians 1."
        kicker="Standardisasi Pengukuran"
        title={
          <>
            Transformasi <span className="accent-text">Z-Score & Aturan 68-95-99.7</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Dengan mengubah variabel ke <strong>Z-Score</strong> (<code style={{ color: 'var(--primary)' }}>Z = (X - μ) / σ</code>), kita dapat membandingkan variabel berskala berbeda:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>68.27%</strong> data berada dalam rentang μ ± 1σ.</li>
              <li><strong>95.45%</strong> data berada dalam rentang μ ± 2σ.</li>
              <li><strong>99.73%</strong> data berada dalam rentang μ ± 3σ.</li>
              <li>Di luar ±3σ diklasifikasikan sebagai kejadian langka (anomali).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="kalkulasi_zscore.R"
            highlight={[4, 8, 12]}
            code={`# Kasus: Latensi API microservice ~ N(mu = 200, sigma = 25)
mu <- 200; sigma <- 25

# 1. Peluang request selesai di bawah 230 ms
p_kurang_230 <- pnorm(q = 230, mean = mu, sd = sigma)
cat("P(X <= 230):", round(p_kurang_230, 4), "\n") # 0.8849

# 2. Nilai Z-Score dari waktu 250 ms (deviasi 2 SD)
z_val <- (250 - mu) / sigma # Z = +2.0

# 3. Kuantil latensi SLA P99 (ambang batas 99% request)
sla_p99 <- qnorm(p = 0.99, mean = mu, sd = sigma)
cat("Ambang Batas P99:", round(sla_p99, 2), "ms\n") # 258.16 ms`}
          />
        }
      />

      {/* Slide 8: Steps — Sifat Memoryless Distribusi Eksponensial */}
      <Steps
        nav="Distribusi Eksponensial"
        notes="Jelaskan aplikasi praktis distribusi eksponensial dalam keandalan sistem TI dan properti memoryless yang sangat unik."
        kicker="Keandalan Perangkat Keras & Lunak"
        title="Sifat Tanpa Memori (Memoryless) & Mean Time Between Failures."
        items={[
          {
            title: '1. Definisi Laju Kegagalan (Rate λ)',
            body: 'Jika sebuah server memiliki MTBF (Mean Time Between Failures) sebesar 1.000 jam, maka laju kegagalannya adalah λ = 1/1.000 = 0.001 kegagalan/jam.',
          },
          {
            title: '2. Sifat Memoryless P(X > s + t | X > s)',
            body: 'Peluang komponen bertahan t jam ke depan, diketahui sudah bertahan s jam, sama persis dengan peluang komponen baru bertahan t jam: P(X > t).',
          },
          {
            title: '3. Implikasi pada Rekayasa TI',
            body: 'Komponen yang mengikuti distribusi eksponensial tidak mengalami proses "penuaan gradual" (wear-out); kegagalan murni dipicu oleh lonjakan acak eksternal.',
          },
          {
            title: '4. Transisi ke Distribusi Weibull',
            body: 'Jika perangkat keras mengalami keausan fisik seiring usia pemakaian, fungsi hazard tidak lagi konstan dan model digantikan oleh distribusi Weibull.',
          },
        ]}
      />

      {/* Slide 9: Split — Simulasi R Membuktikan CLT */}
      <Split
        flip
        nav="Simulasi CLT di R"
        notes="Ajak mahasiswa meneliti kode R simulasi CLT. Perhatikan bagaimana 10.000 kali pengambilan sampel dari distribusi Uniform yang sangat rata menghasilkan kurva lonceng Normal yang sangat indah."
        kicker="Eksperimen Komputasi Lab"
        title={
          <>
            Simulasi <span className="accent-text">Teorema Limit Pusat</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Kita membangkitkan sampel berulang (<code style={{ color: 'var(--primary)' }}>B = 10.000</code>) dari populasi berdistribusi <strong>Uniform(0, 10)</strong> yang sama sekali tidak berbentuk lonceng:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Ukuran Sampel n = 2:</strong> Rata-rata sampel membentuk segitiga.</li>
              <li><strong>Ukuran Sampel n = 30:</strong> Kurva rata-rata sampel berubah menjadi distribusi Normal sempurna.</li>
              <li><strong>Validasi R:</strong> <code>shapiro.test()</code> mengonfirmasi normalitas sampling mean.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="bukti_simulasi_clt.R"
            highlight={[5, 6, 10]}
            code={`set.seed(2026)
B <- 10000 # Jumlah replikasi sampling
n <- 30    # Ukuran sampel

# Ambil sampel dari populasi seragam Uniform(0, 10)
sampling_means <- replicate(B, {
  sampel <- runif(n, min = 0, max = 10)
  mean(sampel)
})

# Evaluasi Momen Sampling
cat("Mean Teoretis:", 5.0, "| Mean Empiris:", round(mean(sampling_means), 3), "\n")
# SE Teoretis: sqrt((10^2/12) / 30) = 0.527
cat("SE Empiris:", round(sd(sampling_means), 3), "\n") # 0.529`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup sesi dengan mengarahkan mahasiswa ke tugas laboratorium praktikum_bab6.R untuk membuktikan CLT pada distribusi eksponensial."
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
          Praktikum Bab 6: <span className="accent-text">Eksperimen Sampling & CLT di R</span>
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
          Buka berkas <code>praktikum_bab6.R</code>. Lakukan eksperimen simulasi Central Limit Theorem dengan membandingkan konvergensi distribusi sampling rata-rata untuk ukuran sampel <code>n = 5, 15, 30, 100</code>.
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
                Penguasaan konsep variabel acak kontinu, standardisasi Z, dan teorema limit pusat.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Persiapan Bab 7</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Pemahaman SE = σ/√n menjadi syarat mutlak perumusan Interval Kepercayaan (Confidence Interval).
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
