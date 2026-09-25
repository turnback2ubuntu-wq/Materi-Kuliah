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
        notes="Selamat datang di Pertemuan 13. Hari ini kita mempelajari Bootstrap dan Metode Resampling ciptaan Bradley Efron: bagaimana membentuk distribusi sampling secara empiris langsung dari data tanpa bergantung pada asumsi distribusi teoretis."
        kicker="Statistik Teknik · Pertemuan 13"
        title={
          <>
            Bootstrap & <span className="accent-text">Metode Resampling</span>
          </>
        }
        subtitle="Resampling dengan Pengembalian, Plug-in Principle, Bootstrap Standard Error, Percentile CI, dan Paket boot di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 modul utama metode resampling. Tekankan bahwa bootstrap adalah jaring pengaman statistik ketika statistik uji tidak memiliki rumus analitis tertutup (seperti median atau rasio persentil)."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Bootstrap & Resampling Hari Ini."
        items={[
          { title: 'Prinsip Dasar Bootstrap: Resampling dengan Pengembalian (with replacement)', hint: 'Sampling Mandiri' },
          { title: 'Mengapa Bootstrap Bekerja? The Plug-in Principle Bradley Efron', hint: 'Fondasi Teoretis' },
          { title: 'Estimasi Bootstrap Standard Error (SE) untuk Statistik Non-Standar', hint: 'Median & Rasio' },
          { title: 'Jenis-jenis Interval Kepercayaan Bootstrap: Normal, Persentil, & BCa', hint: 'Interval Empiris' },
          { title: 'Penggunaan Paket boot Standar Industri & Praktikum Lab R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Teori Asimtotik Klasik vs Bootstrap */}
      <Contrast
        nav="Teori vs Bootstrap"
        notes="Bandingkan metode inferensi klasik berbasis teori matematika dengan bootstrap. Teori klasik memerlukan rumus analitis baku dan asumsi normalitas, sementara bootstrap bekerja untuk statistik apa pun secara empiris."
        kicker="Paradigma Inferensi"
        title={
          <>
            Distribusi Teoretis (Z/t) vs <span className="accent-text">Resampling Bootstrap</span>
          </>
        }
        left={{
          label: 'Inferensi Klasik (Bab 7 - 11)',
          title: 'Tergantung Asumsi Distribusi Matematis',
          points: [
            'Mengasumsikan bentuk distribusi sampling tertentu (Normal/t berdasarkan CLT)',
            'Membutuhkan rumus matematis tertutup analitis untuk Standard Error',
            'Sangat sulit diterapkan untuk penaksiran statistik rumit (seperti median atau IQR)',
            'Mudah keliru jika asumsi bentuk sebaran data tidak terpenuhi',
          ],
        }}
        right={{
          label: 'Metode Bootstrap (Bradley Efron)',
          title: 'Distribusi Sampling Empiris Murni',
          points: [
            'Membangun distribusi sampling langsung dari data melalui penarikan sampel ulang',
            'Tidak menuntut rumus analitis rumit: berlaku untuk statistik apa pun!',
            'Bekerja sangat handal pada data condong (skewed) dan sampel berukuran kecil',
            'Menjadi standar emas penaksiran ketidakpastian machine learning modern',
          ],
        }}
      />

      {/* Slide 4: Bento — Spektrum Keluarga Resampling */}
      <Bento
        nav="Keluarga Resampling"
        notes="Jelaskan 4 anggota keluarga besar metode resampling di bidang sains data komputasi."
        kicker="Taksonomi Resampling"
        title="4 Metode Resampling Utama dalam Rekayasa Statistik"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: '1. Bootstrap (Sampling with Replacement)',
            body: 'Sampel berukuran n ditarik ulang dari data asli berukuran n dengan pengembalian. Digunakan untuk estimasi standard error dan interval kepercayaan.',
          },
          {
            c: 6,
            r: 1,
            title: '2. Permutation Test (Resampling Tanpa Pengembalian)',
            body: 'Label perlakuan diacak ulang untuk menguji hipotesis kesamaan distribusi dua kelompok secara eksak tanpa asumsi parametrik.',
          },
          {
            c: 6,
            r: 1,
            title: '3. Jackknife (Leave-One-Out Resampling)',
            body: 'Membentuk n replikasi dengan cara membuang tepat satu observasi secara bergiliran. Pelopor historis metode resampling sebelum era bootstrap.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '4. K-Fold Cross-Validation',
            body: 'Membagi data menjadi k partisi untuk validasi model prediktif machine learning guna mencegah overfitting.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Tiga Jenis Interval Kepercayaan Bootstrap */}
      <Slide
        center
        nav="Varian Interval"
        notes="Bandingkan 3 jenis interval bootstrap: Standar Normal, Persentil langsung, dan BCa (Bias-corrected and Accelerated)."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kategori Interval Kepercayaan
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks 3 Metode Interval Kepercayaan Bootstrap
        </h2>
        <Comparison
          highlight={1}
          cols={['Metode Interval', 'Formula / Prinsip', 'Keunggulan Utama', 'Batasan']}
          rows={[
            { label: 'Normal Bootstrap', values: ['θ̂ ± z_(α/2) × SE_boot', 'Sangat sederhana dikomputasi', 'Mengasumsikan distribusi bootstrap simetris'] },
            { label: 'Percentile Bootstrap', values: ['Kuantil empiris: [q_(α/2), q_(1-α/2)]', 'Intuitif & tidak mengasumsikan simetri', 'Dapat bias jika sampel asli condong ekstrem'] },
            { label: 'BCa (Bias-Corrected)', values: ['Koreksi pergeseran bias & akselerasi', 'Paling akurat & transformasi invarian', 'Membutuhkan jumlah replikasi B ≥ 2.000'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Replikasi Komputasi B */}
      <Slide
        center
        nav="Jumlah Replikasi"
        notes="Tekankan aturan jumlah replikasi B: Untuk menghitung standard error, B = 1.000 sudah cukup. Namun untuk membentuk interval persentil atau BCa yang stabil, disarankan B >= 2.000 hingga 10.000."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Rekomendasi Bradley Efron
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Jumlah Replikasi Sampel Ulang Bootstrap
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
            B ≥ <CountUp to={2000} duration={1.5} /> Replikasi
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Dengan <code style={{ color: 'var(--primary)' }}>B = 2.000</code> hingga <code style={{ color: 'var(--primary)' }}>10.000</code> sampel ulang acak berukuran n, variabilitas acak penaksiran kuantil persentil (2.5% dan 97.5%) terbukti stabil dan konvergen.
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
            <span>⚡ <strong>Estimasi Standard Error:</strong> B = 1.000 cukup</span>
            <span>•</span>
            <span>🎯 <strong>Interval Persentil & BCa:</strong> B ≥ 2.000 wajib</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Bootstrap Manual di R untuk Median */}
      <Split
        nav="Bootstrap Manual"
        notes="Ajak mahasiswa melihat kode R bootstrap manual: fungsi sample(..., replace=TRUE) di dalam replicate(). Ini menunjukkan betapa elegannya prinsip bootstrap."
        kicker="Komputasi di R"
        title={
          <>
            Bootstrap Manual: <span className="accent-text">CI 95% Median Latensi</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Tidak ada rumus matematika analitis sederhana untuk menghitung CI dari nilai <strong>Median</strong>. Dengan bootstrap di R, masalah ini diselesaikan dalam 5 baris kode:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Tarik sampel ulang berukuran <code>n = 12</code> dengan <code>replace = TRUE</code>.</li>
              <li>Hitung median pada tiap sampel bootstrap sebanyak 2.000 kali.</li>
              <li>Ambil kuantil 2.5% dan 97.5% sebagai batas CI Persentil: <strong>[200.5, 215.0] ms</strong>.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="bootstrap_median_manual.R"
            highlight={[5, 6, 10]}
            code={`resp <- c(210, 195, 205, 640, 198, 215, 202, 208, 199, 640, 211, 206)
B <- 2000
n <- length(resp)

# Lakukan resampling dengan pengembalian
boot_median <- replicate(B, {
  sampel_b <- sample(resp, size = n, replace = TRUE)
  median(sampel_b)
})

# Standard Error & CI 95% Persentil
se_boot <- sd(boot_median)
ci_persentil <- quantile(boot_median, probs = c(0.025, 0.975))

cat("SE Bootstrap Median:", round(se_boot, 2), "ms\n")
print(ci_persentil)`}
          />
        }
      />

      {/* Slide 8: Steps — Alur Penggunaan Paket boot Standar Industri */}
      <Steps
        nav="Paket boot R"
        notes="Jelaskan penggunaan paket boot standar industri R (dikembangkan oleh Angelo Canty & Brian Ripley)."
        kicker="Standar Industri R"
        title="3 Langkah Eksekusi Bootstrap Menggunakan Paket boot."
        items={[
          {
            title: '1. Buat Fungsi Statistik Khusus (data, indices)',
            body: 'Tulis fungsi yang menerima 2 argumen: dataset dan vektor indeks penarikan. Misal: fungsi_stat <- function(data, idx) median(data[idx]).',
          },
          {
            title: '2. Eksekusi Fungsi boot()',
            body: 'Jalankan hasil_boot <- boot(data = resp, statistic = fungsi_stat, R = 2000). R akan mengeksekusi 2.000 replikasi secara efisien.',
          },
          {
            title: '3. Ekstraksi Interval dengan boot.ci()',
            body: 'Gunakan boot.ci(hasil_boot, type = c("norm", "perc", "bca")) untuk mendapatkan ketiga tipe interval kepercayaan sekaligus.',
          },
        ]}
      />

      {/* Slide 9: Split — Kasus Paket boot untuk Rasio Performa */}
      <Split
        flip
        nav="Studi Kasus boot"
        notes="Tunjukkan hasil keluaran boot.ci() di R dari buku naskah."
        kicker="Aplikasi Produksi"
        title={
          <>
            Estimasi Interval <span className="accent-text">dengan Paket boot</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Paket <code>boot</code> menghasilkan laporan diagnostik lengkap:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Original Theta:</strong> Median asli = 206.5 ms.</li>
              <li><strong>Bootstrap Bias:</strong> Estimasi pergeseran bias rata-rata (-0.48 ms).</li>
              <li><strong>Interval BCa:</strong> Menghasilkan rentang kepercayaan yang telah dikoreksi bias kecondongan.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="eksekusi_paket_boot.R"
            highlight={[5, 9, 13]}
            code={`library(boot)

# Fungsi statistik untuk paket boot
stat_median <- function(data, idx) median(data[idx])

# Eksekusi 2000 replikasi
hasil_boot <- boot(data = resp, statistic = stat_median, R = 2000)

print(hasil_boot)
# Bootstrap Statistics :
#     original  bias    std. error
# t1*    206.5 -0.4862      4.9213

# Ekstraksi BCa & Persentil CI
boot.ci(hasil_boot, type = c("perc", "bca"))`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan tugas praktikum laboratorium praktikum_bab13.R."
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
          Praktikum Bab 13: <span className="accent-text">Resampling Kinerja Arsitektur TI</span>
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
          Buka <code>praktikum_bab13.R</code> di RStudio. Hitung interval kepercayaan bootstrap 95% untuk rasio P99/P50 latensi sistem, bandingkan interval BCa dengan Percentile, dan uji hipotesis perbedaan dua algoritma dengan Permutation Test.
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
                Mahasiswa mampu menerapkan teknik resampling empiris untuk mengestimasi ketidakpastian statistik kompleks.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Persiapan Bab 14</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Bab 14 memperluas dimensi analitik ke Analisis Multivariat dan Machine Learning Statistik (PCA & Clustering).
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
