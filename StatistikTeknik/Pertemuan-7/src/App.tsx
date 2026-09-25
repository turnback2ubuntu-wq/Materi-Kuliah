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
        notes="Selamat datang di Pertemuan 7. Hari ini kita mempelajari jembatan inferensi statistik: bagaimana memperkirakan parameter populasi tak teramati melalui estimasi titik dan interval kepercayaan (Confidence Interval) dengan derajat kepastian kuantitatif."
        kicker="Statistik Teknik · Pertemuan 7"
        title={
          <>
            Estimasi Parameter & <span className="accent-text">Interval Kepercayaan</span>
          </>
        }
        subtitle="Estimasi Titik vs Interval, Sifat Estimator Ideal, CI Rata-rata Z & t, CI Proporsi, dan Ukuran Sampel Minimum"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Uraikan 5 pokok materi inferensi estimasi parameter. Tekankan bahwa angka tunggal rata-rata sampel tidak pernah cukup tanpa margin of error."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Estimasi & Interval Kepercayaan Hari Ini."
        items={[
          { title: 'Estimasi Titik & 3 Kriteria Estimator Ideal (Unbiased, Efisien, Konsisten)', hint: 'Kualitas Estimator' },
          { title: 'Mengapa Estimasi Titik Tidak Cukup? Motivasi Interval Kepercayaan', hint: 'Margin of Error' },
          { title: 'Confidence Interval (CI) Rata-rata: Distribusi Z vs Distribusi t', hint: 'Varians σ Diketahui/Tidak' },
          { title: 'Interval Kepercayaan Proporsi Sukses & Koreksi Kontinuitas', hint: 'Data Biner TI' },
          { title: 'Penentuan Ukuran Sampel Minimum & Studi Kasus Latensi Database di R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Estimasi Titik vs Interval */}
      <Contrast
        nav="Titik vs Interval"
        notes="Bandingkan estimasi titik dengan estimasi interval. Estimasi titik seperti menembak sasaran dengan senapan presisi tanpa jaminan kena, sementara interval seperti melemparkan jaring penangkap."
        kicker="Dilema Kepastian"
        title={
          <>
            Estimasi Titik Tunggal vs <span className="accent-text">Interval Kepercayaan</span>
          </>
        }
        left={{
          label: 'Estimasi Titik (Point Estimate)',
          title: 'Satu Angka Tunggal (x̄ atau p̂)',
          points: [
            'Hanya menyajikan satu nilai tebakan tunggal: "Rata-rata latensi = 206.5 ms"',
            'Probabilitas titik tebakan tepat sama persis dengan parameter populasi riil adalah 0',
            'Tidak memberikan informasi mengenai tingkat ketidakpastian atau variabilitas',
            'Menimbulkan rasa aman semu bagi pembuat keputusan arsitektur sistem',
          ],
        }}
        right={{
          label: 'Estimasi Interval (Confidence Interval)',
          title: 'Rentang Berbobot Kepercayaan (1 - α)',
          points: [
            'Menyajikan rentang nilai rasional: "CI 95%: [200.1 ms — 212.8 ms]"',
            'Secara eksplisit memperhitungkan Margin of Error dan ukuran sampel n',
            'Jika pengambilan sampel diulang 100 kali, 95 di antaranya dipastikan memuat μ',
            'Standar baku audit SLA sistem dan pelaporan riset akademik',
          ],
        }}
      />

      {/* Slide 4: Bento — Anatomi Interval Kepercayaan */}
      <Bento
        nav="Anatomi CI"
        notes="Jelaskan 3 komponen pembentuk rumus CI: Point Estimate, Nilai Kritis, dan Standard Error."
        kicker="Struktur Matematis"
        title="Anatomi Rumus Interval Kepercayaan: CI = Titik ± (Kritis × SE)"
        tiles={[
          {
            c: 4,
            r: 1,
            variant: 'accent',
            title: '1. Estimasi Titik (Point)',
            body: 'Taksiran terbaik di tengah rentang, diambil dari statistik sampel: x̄ (untuk rata-rata) atau p̂ (untuk proporsi sukses).',
          },
          {
            c: 4,
            r: 1,
            title: '2. Nilai Kritis (Critical Value)',
            body: 'Faktor pengali tingkat kepercayaan (1 - α): z_(α/2) untuk distribusi Normal (misal 1.96 untuk 95%) atau t_(α/2, n-1) untuk distribusi t.',
          },
          {
            c: 4,
            r: 1,
            title: '3. Standard Error (SE)',
            body: 'Simpangan baku dari distribusi sampling: SE = σ / √n (atau s / √n). Mengukur presisi penaksiran sampel.',
          },
          {
            c: 12,
            r: 1,
            variant: 'glow',
            title: 'Margin of Error (ME = Nilai Kritis × SE)',
            body: 'Lebar setengah bentangan interval kepercayaan. Semakin besar ukuran sampel n, semakin kecil SE, dan semakin sempit rentang presisi estimasi.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Distribusi Z vs Distribusi t */}
      <Slide
        center
        nav="Z vs t"
        notes="Jelaskan pohon keputusan pemilihan distribusi Z vs t. Dalam dunia nyata, simpangan baku populasi sigma hampir tidak pernah diketahui, sehingga distribusi t-Student menjadi pilihan utama."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kondisi Pemilihan Uji
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Pemilihan: Distribusi Z vs Distribusi t
        </h2>
        <Comparison
          highlight={1}
          cols={['Kondisi & Asumsi', 'Distribusi Z (Normal Baku)', 'Distribusi Student-t']}
          rows={[
            { label: 'Varians Populasi (σ²)', values: ['Wajib diketahui secara pasti (sangat jarang)', 'Tidak diketahui; diestimasi dari sampel s (realistis)'] },
            { label: 'Bentuk Kurva & Ekor', values: ['Ekor standar kurtosis normal', 'Ekor lebih tebal; derajat bebas df = n - 1'] },
            { label: 'Ukuran Sampel', values: ['Valid untuk n besar (n ≥ 30 via CLT)', 'Sangat handal untuk sampel kecil maupun besar'] },
            { label: 'Perintah Eksekusi R', values: ['qnorm(0.975) * (sigma / sqrt(n))', 't.test(data, conf.level = 0.95)$conf.int'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Arti Sejati 95% Confidence Level */}
      <Slide
        center
        nav="Arti 95% CI"
        notes="Luruskan miskonsepsi umum: 95% confidence level BUKAN berarti ada 95% probabilitas parameter mu jatuh di dalam interval itu (karena parameter adalah konstanta tetap tak bergerak). Maksud sebenarnya: jika proses penarikan sampel diulang 100 kali, 95 dari interval yang terbentuk akan mencakup parameter sebenarnya."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Interpretasi Fundamental
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Makna Sejati Tingkat Kepercayaan 95%
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
            <CountUp to={95} suffix="%" duration={1.5} /> Cakupan
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Bukan parameter populasi yang bergerak masuk-keluar interval! Interval lah yang merupakan <strong>variabel acak</strong>: dari 100 kali pengambilan sampel independen, 95 interval dipastikan mengurung nilai <code style={{ color: 'var(--primary)' }}>μ</code> yang sebenarnya.
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
            <span>🛡️ <strong>Taraf Signifikansi:</strong> α = 0.05</span>
            <span>•</span>
            <span>🔒 <strong>Tingkat Keyakinan:</strong> 1 - α = 0.95</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — R Implementation Manual vs t.test */}
      <Split
        nav="Implementasi R"
        notes="Ajak mahasiswa meneliti kode R dari naskah buku Kode R 7.5. Tunjukkan bahwa perhitungan manual rumus t identik sempurna dengan keluaran t.test() bawaan R."
        kicker="Komputasi di R"
        title={
          <>
            Kalkulasi CI 95% <span className="accent-text">Manual vs t.test()</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Pada pengujian 12 kali latensi endpoint API, varians populasi tidak diketahui, sehingga kita menggunakan distribusi t:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><code>n = 12</code>, <code>df = 11</code>, <code>s = 138.8 ms</code>.</li>
              <li>Nilai kritis t: <code>qt(0.975, df = 11) = 2.201</code>.</li>
              <li>Margin of Error: <code>2.201 × (138.8 / √12) = 88.2 ms</code>.</li>
              <li>Keluaran <code>t.test()</code> memberikan interval persis sama: <strong>[173.3, 349.8] ms</strong>.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="estimasi_ci_latensi.R"
            highlight={[5, 10, 14]}
            code={`resp <- c(210, 195, 205, 640, 198, 215, 202, 208, 199, 640, 211, 206)

# 1. Perhitungan Manual Rumus t
xbar <- mean(resp); s <- sd(resp); n <- length(resp)
t_crit <- qt(0.975, df = n - 1)
me <- t_crit * (s / sqrt(n))
ci_manual <- c(xbar - me, xbar + me)

# 2. Fungsi Otomatis Bawaan R
hasil_uji <- t.test(resp, conf.level = 0.95)
ci_otomatis <- hasil_uji$conf.int

# Hasil Identik: [173.34, 349.82]
print(round(ci_otomatis, 2))`}
          />
        }
      />

      {/* Slide 8: Steps — Penentuan Ukuran Sampel Minimum */}
      <Steps
        nav="Ukuran Sampel"
        notes="Bahas rumus penentuan ukuran sampel minimum: n = (Z * sigma / E)^2. Ini adalah keterampilan kunci rekayasa perangkat lunak saat mendesain beban uji benchmark sistem."
        kicker="Perencanaan Eksperimen"
        title="4 Langkah Menentukan Ukuran Sampel Minimum (n)."
        items={[
          {
            title: '1. Tetapkan Toleransi Margin of Error (E)',
            body: 'Berapa galat maksimum yang diizinkan? Misal: toleransi kesalahan estimasi latensi maksimal E = ± 5 milidetik.',
          },
          {
            title: '2. Tentukan Derajat Kepercayaan (1 - α)',
            body: 'Pilih tingkat keyakinan (umumnya 95% yang berkorespondensi dengan nilai kritis Z = 1.96).',
          },
          {
            title: '3. Dapatkan Estimasi Simpangan Baku (σ)',
            body: 'Gunakan deviasi standar dari studi perintis (pilot study) terdahulu atau taksiran kasar rentang / 4.',
          },
          {
            title: '4. Hitung & Bulatkan ke Atas (Ceiling)',
            body: 'Gunakan rumus n = (z × σ / E)². Hasil pecahan wajib dibulatkan ke atas menggunakan ceiling() untuk menjamin margin tercapai.',
          },
        ]}
      />

      {/* Slide 9: Split — Kasus Proporsi SLA Sukses */}
      <Split
        flip
        nav="CI Proporsi"
        notes="Jelaskan estimasi proporsi p-hat untuk metrik sukses ketersediaan web service menggunakan prop.test() di R."
        kicker="Studi Kasus Ketersediaan"
        title={
          <>
            Estimasi CI <span className="accent-text">Proporsi Sukses SLA</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Dari <strong>1.000 transaksi pembayaran</strong> yang dipantau, sebanyak 982 transaksi berhasil sukses tanpa error (p̂ = 98.2%).
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Tantangan:</strong> Apakah proporsi populasi sebenarnya dijamin memenuhi SLA 97.5%?</li>
              <li><strong>Hasil prop.test():</strong> CI 95% berada pada rentang <strong>[97.16%, 98.88%]</strong>.</li>
              <li><strong>Evaluasi:</strong> Karena batas bawah (97.16%) berada di bawah 97.5%, sistem belum terbukti aman 100% memenuhi SLA secara statistik.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="estimasi_proporsi_sla.R"
            highlight={[2, 6, 7]}
            code={`# Pengujian 1000 request dengan 982 sukses
sukses <- 982; total <- 1000

# Estimasi CI 95% Proporsi dengan Wilson Score
hasil_prop <- prop.test(x = sukses, n = total, conf.level = 0.95)

# Ekstraksi Interval Kepercayaan
hasil_prop$conf.int
# [1] 0.9716335 0.9888494
# attr(,"conf.level")
# [1] 0.95`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup sesi dengan mengarahkan mahasiswa mengerjakan praktikum_bab7.R untuk menganalisis waktu eksekusi query SQL."
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
          Praktikum Bab 7: <span className="accent-text">Audit SLA Query Database</span>
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
          Jalankan <code>praktikum_bab7.R</code> di RStudio. Hitung interval kepercayaan 95% dan 99% untuk waktu eksekusi query PostgreSQL kompleks, dan rancang ukuran sampel minimum yang diperlukan untuk mempersempit margin of error hingga ±2 ms.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-4 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa mampu merumuskan estimasi parameter populasi dan menghitung interval kepercayaan berbasis bukti data.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Koneksi ke Bab 8</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Nilai acuan hipotesis H0 yang berada di luar batas CI 95% secara matematis ekuivalen dengan keputusan Tolak H0.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
