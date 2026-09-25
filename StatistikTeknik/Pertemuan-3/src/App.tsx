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
        notes="Selamat datang di perkuliahan Pertemuan 3. Hari ini kita mendalami teknik statistika deskriptif dan eksplorasi data (EDA) univariat serta bivariat sebelum melangkah ke inferensi statistik formal."
        kicker="Statistik Teknik · Pertemuan 3"
        title={
          <>
            Statistika Deskriptif & <span className="accent-text">Eksplorasi Data (EDA)</span>
          </>
        }
        subtitle="Ukuran Pemusatan, Dispersi, Deteksi Outlier Tukey 1.5×IQR, dan Skewness dalam Analisis Sistem TI"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama yang memadukan teori statistik dengan kode R dan studi kasus nyata latensi server."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Eksplorasi Data Hari Ini."
        items={[
          { title: 'Ukuran Pemusatan: Mean, Median, Modus & Kepekaan Nilai Ekstrem', hint: 'Karakteristik Pusat' },
          { title: 'Ukuran Penyebaran: Rentang, Varians, Standar Deviasi, & IQR', hint: 'Dispersi & Risiko' },
          { title: 'Bentuk Sebaran: Skewness & Kurtosis Distribusi', hint: 'Asimetri Data' },
          { title: 'Five-Number Summary & Deteksi Outlier Tukey (1.5×IQR)', hint: 'Boxplot & Anomali' },
          { title: 'Kerangka Kerja EDA Terstruktur & Studi Kasus Server Latency', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Mean vs Median */}
      <Contrast
        nav="Mean vs Median"
        notes="Jelaskan bahwa dalam sistem komputasi (seperti web service latensi), data hampir selalu miring ke kanan. Rata-rata aritmatika terdistorsi oleh cold-start lonjakan latensi, sehingga median menjadi ukuran sentral yang jauh lebih objektif."
        kicker="Sensitivitas Nilai Ekstrem"
        title={
          <>
            Mean Aritmatika vs <span className="accent-text">Median Robust</span>
          </>
        }
        left={{
          label: 'Mean Aritmatika (mean())',
          title: 'Sensitif Terhadap Outlier',
          points: [
            'Memperhitungkan seluruh nilai numerik secara linier',
            'Sangat rentan terseret oleh satu lonjakan ekstrim (misal cold-start API 640 ms)',
            'Gagal menggambarkan latensi tipikal pengguna saat distribusi asimetris',
            'Cocok hanya untuk data terdistribusi normal simetris',
          ],
        }}
        right={{
          label: 'Median Sampel (median())',
          title: 'Ketahanan Statistik (Robust)',
          points: [
            'Titik tengah persentil ke-50 yang membelah data menjadi dua bagian sama besar',
            'Tidak terpengaruh oleh magnitudo nilai ekstrim di ujung ekor',
            'Menjadi standar industri pelaporan SLA sistem (P50)',
            'Fondasi bagi statistik non-parametrik dan boxplot',
          ],
        }}
      />

      {/* Slide 4: Split — Dispersi & Variabilitas Latensi Cloud */}
      <Split
        nav="Ukuran Dispersi"
        notes="Dispersi mengukur risiko dan konsistensi sistem. Dua penyedia cloud dengan rata-rata latensi sama dapat memiliki keandalan berbeda drastis jika variansnya jomplang."
        kicker="Variabilitas Sistem"
        title={
          <>
            Mengukur <span className="accent-text">Dispersi & Ketidakpastian</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Dua server bisa memiliki <strong>mean latensi yang identik</strong>, namun server dengan variabilitas tinggi menimbulkan pengalaman pengguna yang buruk dan tidak terduga:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Rentang (Range):</strong> Selisih max - min; sangat rentan outlier.</li>
              <li><strong>Varians (s²) & Standar Deviasi (s):</strong> Mengukur deviasi kuadrat terhadap mean.</li>
              <li><strong>Interquartile Range (IQR):</strong> Rentang 50% data inti (Q3 - Q1); ukuran dispersi yang tahan banting (robust).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="analisis_dispersi_cloud.R"
            highlight={[4, 9, 13]}
            code={`# Bandingkan variabilitas dua provider cloud
latensi_a <- c(45, 48, 46, 44, 47, 45, 46) # Cloud A: Stabil
latensi_b <- c(20, 70, 35, 60, 25, 65, 45) # Cloud B: Fluktuatif

# Standar Deviasi
sd(latensi_a) # [1] 1.35 ms (Konsisten)
sd(latensi_b) # [1] 18.93 ms (Tidak stabil)

# Interquartile Range (IQR = Q3 - Q1)
IQR(latensi_a) # [1] 2.0 ms
IQR(latensi_b) # [1] 35.0 ms`}
          />
        }
      />

      {/* Slide 5: Comparison — Skewness & Kurtosis */}
      <Slide
        center
        nav="Asimetri Data"
        notes="Tekankan pentingnya mengenali arah kemiringan data. Kebanyakan metrik IT (waktu respon, durasi query) memiliki kemiringan positif (right-skewed)."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Bentuk Distribusi
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Asimetri Sebaran (Skewness)
        </h2>
        <Comparison
          highlight={1}
          cols={['Karakteristik', 'Positif (Right-Skewed)', 'Simetris (Normal)', 'Negatif (Left-Skewed)']}
          rows={[
            { label: 'Hubungan Nilai', values: ['Mean > Median > Modus', 'Mean ≈ Median ≈ Modus', 'Mean < Median < Modus'] },
            { label: 'Ekor Distribusi', values: ['Memanjang ke kanan (nilai tinggi)', 'Seimbang di kedua sisi', 'Memanjang ke kiri (nilai rendah)'] },
            { label: 'Contoh Nyata TI', values: ['Latensi API, durasi build CI/CD', 'Galat pengukuran sensor fisik', 'Skor ujian mahasiswa yang mudah'] },
            { label: 'Ukuran Pusat Ideal', values: ['Median & IQR', 'Mean & Standar Deviasi', 'Median & IQR'] },
          ]}
        />
      </Slide>

      {/* Slide 6: Bento — Five-Number Summary & Boxplot */}
      <Bento
        nav="Tukey Boxplot"
        notes="Five-number summary dicetuskan oleh John Tukey dan divisualisasikan melalui boxplot. Ini cara tercepat mendeteksi struktur distribusi dan pencilan."
        kicker="Ringkasan 5 Angka John Tukey"
        title="Anatomi Five-Number Summary & Boxplot"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: 'Kuartil: Q1, Median (Q2), Q3',
            body: 'Q1 (25%), Median (50%), dan Q3 (75%) membagi data terurut menjadi 4 kuadran sama besar. Kotak boxplot merepresentasikan 50% data di tengah.',
          },
          {
            c: 6,
            r: 1,
            title: 'Pagar Peringatan 1.5 × IQR',
            body: 'Pagar Bawah = Q1 - 1.5×IQR, Pagar Atas = Q3 + 1.5×IQR. Observasi di luar pagar ini otomatis ditandai sebagai titik outlier.',
          },
          {
            c: 4,
            r: 1,
            title: 'fivenum() vs summary()',
            body: 'fivenum() menghitung Tukey hinges; summary() menghitung persentil kuantil tipe 7 standar.',
          },
          {
            c: 8,
            r: 1,
            variant: 'glow',
            title: 'Deteksi Anomali Sistem Otomatis',
            body: 'Aturan 1.5×IQR menjadi fondasi algoritma pembersihan data dan pendeteksian serangan DoS atau kebocoran memori pada telemetri server.',
          },
        ]}
      />

      {/* Slide 7: BigNumber — 1.5 x IQR Rule */}
      <Slide
        center
        nav="Aturan 1.5xIQR"
        notes="Tekankan asal angka 1.5: Pada distribusi normal murni, rentang Q1 - 1.5*IQR hingga Q3 + 1.5*IQR mencakup 99.3% data, sehingga probabilitas data jatuh di luar batas hanyalah 0.7%."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Standar Klasik Tukey
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Aturan Deteksi Outlier Berbasis Rentang Kuartil
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
            1.5 × IQR
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 700 }}>
          Pagar Atas = <code style={{ color: 'var(--primary)' }}>Q3 + 1.5 × IQR</code> &nbsp;•&nbsp; Pagar Bawah = <code style={{ color: 'var(--primary)' }}>Q1 - 1.5 × IQR</code>.
          Pada distribusi normal, aturan ini menyisakan peluang anomali hanya <CountUp to={0.7} suffix="%" duration={1.5} />.
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
            <span>🔍 <strong>Mild Outlier:</strong> 1.5 × IQR</span>
            <span>•</span>
            <span>🚨 <strong>Extreme Outlier:</strong> 3.0 × IQR</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 8: Steps — Kerangka Kerja EDA Terstruktur */}
      <Steps
        nav="Framework EDA"
        notes="Tunjukkan metodologi 4 tahap eksplorasi data. Mahasiswa dilarang langsung meloncat ke pemodelan regresi atau machine learning sebelum memahami distribusi data mentah."
        kicker="Metodologi Analisis"
        title="4 Tahap Kerangka Kerja Exploratory Data Analysis."
        items={[
          {
            title: '1. Inspeksi Dimensi & Tipe',
            body: 'Gunakan dim(), str(), dan glimpse() untuk mengidentifikasi struktur baris, tipe kolom numerik vs kategorikal, dan missing values.',
          },
          {
            title: '2. Ringkasan Univariat',
            body: 'Hitung ukuran pusat (mean/median), dispersi (sd/IQR), serta bentuk sebaran (skewness) untuk masing-masing variabel individual.',
          },
          {
            title: '3. Visualisasi Sebaran & Pencilan',
            body: 'Gambarkan histogram dan boxplot untuk mengonfirmasi asimetri dan memverifikasi observasi di luar batas 1.5×IQR.',
          },
          {
            title: '4. Eksplorasi Bivariat',
            body: 'Hitung matriks korelasi Pearson/Spearman dan buat scatter plot untuk mendeteksi relasi antar dua variabel sistem.',
          },
        ]}
      />

      {/* Slide 9: Split — R Implementation Endpoint Checkout */}
      <Split
        flip
        nav="Kasus Endpoint"
        notes="Ajak mahasiswa melihat kode R nyata dari buku naskah. Perhatikan bagaimana fungsi hitung_modus dan deteksi outlier dijalankan secara terstruktur."
        kicker="Studi Kasus Lab"
        title={
          <>
            Analisis Latensi <span className="accent-text">API Checkout</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Pengujian 12 kali request pada endpoint <code>/checkout</code> menghasilkan data latensi dalam milidetik (ms).
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Nilai Ekstrem:</strong> Terdapat dua request mengalami cold-start 640 ms.</li>
              <li><strong>Dampak:</strong> Mean melompat ke <strong>261.6 ms</strong>, sedangkan Median stabil di <strong>206.5 ms</strong>.</li>
              <li><strong>Rekomendasi:</strong> Gunakan persentil (P95/P99) untuk pelaporan SLA resmi.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="eda_api_checkout.R"
            highlight={[2, 5, 8, 12]}
            code={`# Waktu respons 12 kali pengujian endpoint (ms)
resp <- c(210, 195, 205, 640, 198, 215, 202, 208, 199, 640, 211, 206)

# Perbandingan Ukuran Pemusatan
mean(resp)   # [1] 261.5833 (Terdistorsi)
median(resp) # [1] 206.5000 (Representatif)

# Identifikasi Outlier dengan Boxplot Stats
bp <- boxplot.stats(resp)
bp$out       # [1] 640 640 (Dua outlier terdeteksi!)
bp$stats     # Batas: [195, 200.5, 206.5, 210.5, 215]`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup sesi dengan mengarahkan mahasiswa mengerjakan praktikum_bab3.R dan menyelesaikan tugas mandiri analisis performa query database."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Instruksi Praktikum Laboratorium
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
          Praktikum Bab 3: <span className="accent-text">Audit Kinerja Sistem Web</span>
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
          Buka RStudio dan jalankan skrip <code>praktikum_bab3.R</code>. Lakukan eksplorasi data komprehensif pada dataset <code>server_latency.csv</code>: hitung pemusatan, dispersi, skewness, serta buat visualisasi boxplot deteksi outlier.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-2 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa terampil menerapkan teknik eksplorasi data univariat dan mendeteksi anomali numerik.
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
                Bandingkan efisiensi metrik P50 vs P99 pada log query database SQL berukuran 10.000 transaksi.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
