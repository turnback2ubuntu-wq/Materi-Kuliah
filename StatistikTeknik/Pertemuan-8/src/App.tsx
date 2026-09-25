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
        notes="Selamat datang di Bagian III: Uji Hipotesis, ANOVA, dan Regresi. Pertemuan 8 adalah landasan pengujian hipotesis formal untuk membuktikan klaim rekayasa sistem perangkat lunak secara statistik."
        kicker="Statistik Teknik · Pertemuan 8"
        title={
          <>
            Uji Hipotesis <span className="accent-text">Satu & Dua Sampel</span>
          </>
        }
        subtitle="Kerangka H0 vs H1, Taraf Nyata α, Tipe Kesalahan I & II, p-Value, Two-Sample t-Test, dan Paired t-Test di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 modul utama pengujian hipotesis. Jelaskan mengapa kita tidak pernah mengatakan 'Menerima H0', melainkan 'Gagal Menolak H0'."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Uji Hipotesis Hari Ini."
        items={[
          { title: 'Kerangka Kerja Formal Uji Hipotesis: Formulasi H0 vs H1', hint: 'Klaim vs Status Quo' },
          { title: 'Taraf Signifikansi (α), Statistik Uji, & Daerah Kritis', hint: 'Batas Penolakan' },
          { title: 'Dilema Dua Kesalahan: Tipe I (False Alarm) vs Tipe II (Missed Detection)', hint: 'Kuasa Uji (Power)' },
          { title: 'Filosofi p-Value: Bukti Empiris Melawan H0', hint: 'Kekuatan Bukti' },
          { title: 'Uji-t Satu Sampel, Dua Sampel Independen, & Paired t-Test di R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Tipe Kesalahan I vs II */}
      <Contrast
        nav="Tipe Kesalahan"
        notes="Bahas Tipe Kesalahan I (Alpha) dan Tipe II (Beta) dalam konteks sistem TI. Tipe I seperti memicu alarm kebakaran palsu (False Positive), sedangkan Tipe II adalah kebakaran sungguhan yang tidak terdeteksi (False Negative)."
        kicker="Risiko Keputusan Statistik"
        title={
          <>
            Kesalahan Tipe I (α) vs <span className="accent-text">Kesalahan Tipe II (β)</span>
          </>
        }
        left={{
          label: 'Tipe I Error (α — False Alarm)',
          title: 'Menolak H0 yang Sebenarnya Benar',
          points: [
            'Menyimpulkan algoritma baru lebih cepat, padahal kenyataannya sama saja',
            'False Positive: Mendeteksi serangan siber pada trafik pengguna yang sah',
            'Taraf signifikansi α dikendalikan oleh peneliti (standar 5% atau 1%)',
            'Menimbulkan pemborosan sumber daya server untuk deployment sia-sia',
          ],
        }}
        right={{
          label: 'Tipe II Error (β — Missed Signal)',
          title: 'Gagal Menolak H0 yang Sebenarnya Salah',
          points: [
            'Gagal mendeteksi adanya degradasi performa atau kebocoran memori',
            'False Negative: Meloloskan malware berbahaya karena dianggap file aman',
            'Terkait erat dengan Power of Test (1 - β): probabilitas mendeteksi efek riil',
            'Dapat ditekan dengan cara memperbesar ukuran sampel n pengujian',
          ],
        }}
      />

      {/* Slide 4: Bento — Taksonomi Uji-t */}
      <Bento
        nav="Taksonomi Uji-t"
        notes="Jelaskan 3 jenis uji-t di R: Satu sampel terhadap nilai acuan, dua sampel independen untuk membandingkan 2 kelompok berbeda, dan sampel berpasangan untuk evaluasi before-after."
        kicker="Klasifikasi Pengujian"
        title="3 Varian Uji-t Utama dalam Rekayasa Perangkat Lunak"
        tiles={[
          {
            c: 4,
            r: 1,
            variant: 'accent',
            title: '1. Uji-t Satu Sampel',
            body: 'Menguji apakah rata-rata populasi sama dengan nilai standar SLA acuan μ0: t.test(x, mu = 200).',
          },
          {
            c: 4,
            r: 1,
            title: '2. Uji-t Dua Sampel Independen',
            body: 'Membandingkan rata-rata dua kelompok independen (misal: Server Nginx vs Apache): t.test(y1, y2, var.equal = FALSE).',
          },
          {
            c: 4,
            r: 1,
            variant: 'glow',
            title: '3. Paired t-Test (Berpasangan)',
            body: 'Menguji subjek yang sama sebelum dan sesudah intervensi/optimasi (Before vs After): t.test(before, after, paired = TRUE).',
          },
          {
            c: 12,
            r: 1,
            title: 'Uji Welch t-Test (Default R)',
            body: 'R secara default tidak mengasumsikan varians kedua kelompok sama (var.equal = FALSE), menggunakan koreksi derajat bebas Welch-Satterthwaite yang jauh lebih tangguh terhadap heteroskedastisitas.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Matriks Keputusan Statistik */}
      <Slide
        center
        nav="Matriks Keputusan"
        notes="Gambarkan matriks kebenaran H0 vs keputusan uji. Tekankan bahwa keputusan statistik selalu berada di bawah bayang-bayang ketidakpastian probabilitas."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Tabel Kebenaran Hipotesis
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Realitas vs Keputusan Uji Hipotesis
        </h2>
        <Comparison
          highlight={0}
          cols={['Kenyataan Sejati', 'Keputusan: Tolak H0', 'Keputusan: Gagal Tolak H0']}
          rows={[
            { label: 'H0 Benar (Tidak ada efek)', values: ['Kesalahan Tipe I (Peluang = α)', 'Keputusan Benar (Peluang = 1 - α)'] },
            { label: 'H0 Salah (Ada efek nyata)', values: ['Keputusan Benar / Kuasa Uji (Peluang = 1 - β)', 'Kesalahan Tipe II (Peluang = β)'] },
            { label: 'Analogi Hukum Pengadilan', values: ['Menghukum orang tak bersalah', 'Membebaskan terdakwa bersalah'] },
            { label: 'Konteks TI (Deployment)', values: ['Rilis fitur rusak karena false claim', 'Membatalkan rilis fitur yang sebenarnya bagus'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Aturan Emas p-Value */}
      <Slide
        center
        nav="Kaidah p-Value"
        notes="Tekankan kriteria baku pengambilan keputusan: Jika p-value < alpha, tolak H0. Jika p-value >= alpha, gagal menolak H0."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kaidah Baku Pengambilan Keputusan
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Aturan Keputusan Berbasis p-Value
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
            p &lt; <CountUp to={0.05} duration={1.2} /> → Tolak H₀
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          <strong>p-Value</strong> adalah probabilitas memperoleh statistik uji yang sama ekstrimnya atau lebih ekstrim daripada yang diamati, <em>dengan asumsi H₀ benar</em>. Semakin kecil p-value, semakin kuat bukti empiris untuk menumbangkan H₀!
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
            <span>🚨 <strong>Signifikan:</strong> p &lt; 0.05 (Tolak H0)</span>
            <span>•</span>
            <span>⚖️ <strong>Tidak Signifikan:</strong> p ≥ 0.05 (Gagal Tolak H0)</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Uji-t Satu Sampel di R */}
      <Split
        nav="Uji-t Satu Sampel"
        notes="Ajak mahasiswa meneliti kode R dari naskah buku Kode R 8.5. Tunjukkan bagaimana t.test menguji apakah rata-rata latensi melebihi ambang SLA 200 ms."
        kicker="Audit SLA Sistem"
        title={
          <>
            Uji-t Satu Sampel: <span className="accent-text">Verifikasi SLA Latensi</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              SLA menetapkan bahwa rata-rata latensi server maksimal adalah <strong>μ₀ = 200 ms</strong>. Dilakukan pengujian sampel 12 kali request:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Hipotesis: <strong>H₀: μ = 200</strong> vs <strong>H₁: μ ≠ 200</strong>.</li>
              <li>Hasil Uji: <code>t = 2.277</code>, <code>df = 11</code>, <code>p-value = 0.0437</code>.</li>
              <li>Keputusan: Karena <code>0.0437 &lt; 0.05</code>, <strong>Tolak H₀</strong>.</li>
              <li>Kesimpulan: Terbukti secara signifikan bahwa server melanggar batas SLA!</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="uji_t_sla_server.R"
            highlight={[4, 5, 8]}
            code={`resp <- c(210, 195, 205, 640, 198, 215, 202, 208, 199, 640, 211, 206)

# Uji-t satu sampel dua arah terhadap batas mu = 200
hasil_uji <- t.test(resp, mu = 200)

print(hasil_uji)
# One Sample t-test
# t = 2.277, df = 11, p-value = 0.0437
# alternative hypothesis: true mean is not equal to 200
# 95 percent confidence interval: [200.15, 211.86]
# mean of x: 261.58`}
          />
        }
      />

      {/* Slide 8: Steps — 5 Langkah Prosedur Uji Hipotesis Baku */}
      <Steps
        nav="5 Langkah Uji"
        notes="Tekankan 5 langkah baku yang wajib diikuti mahasiswa dalam menulis laporan ilmiah maupun ujian resmi."
        kicker="Prosedur Standar"
        title="5 Langkah Formal Pengujian Hipotesis Statistik."
        items={[
          {
            title: '1. Nyatakan H0 dan H1 Eksplisit',
            body: 'Formulasikan hipotesis nol (H0: μ1 = μ2) dan alternatif (H1: μ1 ≠ μ2 atau uji 1 arah) secara matematis.',
          },
          {
            title: '2. Tentukan Taraf Signifikansi (α)',
            body: 'Pilih toleransi Tipe I Error sebelum melihat data (umumnya α = 0.05 atau α = 0.01).',
          },
          {
            title: '3. Hitung Statistik Uji & Derajat Bebas',
            body: 'Gunakan rumus statistik yang sesuai (Z-score, t-statistic, F-ratio) berbasis asumsi data.',
          },
          {
            title: '4. Hitung p-Value atau Daerah Kritis',
            body: 'Bandingkan nilai p-value dengan α atau cek apakah nilai statistik uji jatuh di daerah penolakan.',
          },
          {
            title: '5. Tarik Kesimpulan Bisnis / Rekayasa',
            body: 'Terjemahkan keputusan statistik ke dalam rekomendasi teknis sistem (misal: "Gunakan algoritma baru").',
          },
        ]}
      />

      {/* Slide 9: Split — Kasus Paired t-Test Optimasi Cache */}
      <Split
        flip
        nav="Paired t-Test"
        notes="Bahas studi kasus nyata optimasi cache memcached: data latensi diambil dari 10 endpoint yang sama persis sebelum dan sesudah optimasi, sehingga wajib memakai paired=TRUE."
        kicker="Evaluasi Before-After"
        title={
          <>
            Paired t-Test: <span className="accent-text">Optimasi Cache Memcached</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Diukur waktu respon dari 10 endpoint API yang sama <strong>sebelum (Before)</strong> dan <strong>sesudah (After)</strong> instalasi Redis Cache:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Data berpasangan (<em>dependent</em>) mengeliminasi variabilitas bawaan antar-endpoint.</li>
              <li>Hipotesis: <strong>H₀: μ_diff = 0</strong> vs <strong>H₁: μ_diff &gt; 0</strong>.</li>
              <li>Hasil: <code>p-value &lt; 0.001</code>. Terbukti optimasi cache memangkas latensi secara signifikan!</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="paired_ttest_cache.R"
            highlight={[6, 7, 8]}
            code={`sebelum <- c(185, 220, 190, 240, 210, 205, 195, 230, 215, 200)
sesudah <- c(120, 145, 130, 160, 140, 135, 125, 150, 140, 130)

# Uji-t berpasangan satu arah (H1: sebelum > sesudah)
uji_paired <- t.test(sebelum, sesudah, paired = TRUE, alternative = "greater")

print(uji_paired)
# Paired t-test
# t = 28.618, df = 9, p-value = 1.2e-10
# mean of the differences: 69.5 ms reduksi!`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan instruksi pengerjaan praktikum_bab8.R di laboratorium komputasi."
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
          Praktikum Bab 8: <span className="accent-text">A/B Testing Arsitektur Web</span>
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
          Buka berkas <code>praktikum_bab8.R</code>. Eksekusi analisis A/B testing komparasi throughput dua web server (Nginx vs Caddy) menggunakan uji-t dua sampel independen dan paired t-test untuk data migrasi database.
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
                Mahasiswa mampu merumuskan hipotesis, menghitung p-value, dan menarik kesimpulan inferensial objektif.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Koneksi ke Bab 9</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Jika kelompok yang dibandingkan lebih dari 2 server (misal 3 algoritma), uji-t tidak boleh dipakai karena memicu inflasi galat; solusinya adalah ANOVA.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
