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
        notes="Selamat datang di Pertemuan 9. Hari ini kita mempelajari Analysis of Variance (ANOVA) untuk membandingkan rata-rata dari 3 kelompok atau lebih, uji asumsi normalitas & homogenitas, uji post-hoc Tukey HSD, serta alternatif non-parametrik Kruskal-Wallis & Wilcoxon."
        kicker="Statistik Teknik · Pertemuan 9"
        title={
          <>
            ANOVA & <span className="accent-text">Uji Non-Parametrik</span>
          </>
        }
        subtitle="Dekomposisi Varians F-Test, Masalah Inflasi Alpha, Uji Tukey HSD, Kruskal-Wallis, dan Wilcoxon Rank-Sum di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama perkuliahan ANOVA. Tekankan bahwa ANOVA membedah variabilitas total menjadi variabilitas antar-kelompok dan dalam-kelompok."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda ANOVA & Non-Parametrik Hari Ini."
        items={[
          { title: 'Mengapa Tidak Banyak Uji-t? Masalah Inflasi Galat Tipe I (FWER)', hint: 'Bahaya Multi-Testing' },
          { title: 'Prinsip Dekomposisi Varians: SS Total = SS Between + SS Within', hint: 'Rasio F-Snedecor' },
          { title: 'Pemeriksaan Asumsi ANOVA: Normalitas Residual & Homogenitas Levene', hint: 'Validasi Model' },
          { title: 'Uji Lanjut Post-Hoc: Tukey Honestly Significant Difference (HSD)', hint: 'Pasangan Signifikan' },
          { title: 'Alternatif Non-Parametrik: Kruskal-Wallis & Wilcoxon di R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Mengapa ANOVA Bukan Banyak t-Test */}
      <Contrast
        nav="Bahaya Multi-Test"
        notes="Jelaskan fenomena Family-Wise Error Rate (FWER): Jika membandingkan 5 kelompok perlakuan dengan uji-t pasangan, ada 10 kombinasi pasang. Probabilitas membuat minimal 1 kesalahan Tipe I membengkak dari 5% menjadi 40%!"
        kicker="Inflasi Kesalahan Tipe I"
        title={
          <>
            Banyak Uji-t (Multiple Pairs) vs <span className="accent-text">One-Way ANOVA</span>
          </>
        }
        left={{
          label: 'Banyak Uji-t Pasangan (t.test berkali-kali)',
          title: 'Ledakan Inflasi Galat (FWER)',
          points: [
            'Untuk k = 5 kelompok, terdapat C(5,2) = 10 kali pengujian terpisah',
            'Tingkat kesalahan total membengkak: α_total = 1 - (1 - 0.05)¹⁰ = 40.1%!',
            'Menghasilkan kesimpulan palsu (False Positive) bahwa ada algoritma unggul',
            'Sangat dilarang dalam standar publikasi ilmiah statistika',
          ],
        }}
        right={{
          label: 'One-Way ANOVA (aov())',
          title: 'Pengujian Serentak (Omnibus Test)',
          points: [
            'Menguji seluruh kelompok secara simultan dalam satu uji rasio F tunggal',
            'Mempertahankan taraf signifikansi global tetap tepat pada tingkat α = 5%',
            'H₀: μ₁ = μ₂ = ... = μₖ vs H₁: minimal ada satu kelompok yang berbeda',
            'Jika F signifikan, dilanjutkan dengan uji koreksi post-hoc Tukey HSD',
          ],
        }}
      />

      {/* Slide 4: Bento — Tabel Dekomposisi ANOVA */}
      <Bento
        nav="Tabel ANOVA"
        notes="Jelaskan anatomi tabel ANOVA: Sum of Squares (SS), Degrees of Freedom (df), Mean Squares (MS), dan Statistik F."
        kicker="Arsitektur Varians"
        title="Dekomposisi Varians Total: SS_Total = SS_Between + SS_Within"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: 'SS Between (Variasi Antar-Kelompok)',
            body: 'Mengukur deviasi rata-rata tiap kelompok terhadap rata-rata keseluruhan (grand mean). Mencerminkan efek dari perlakuan sistem.',
          },
          {
            c: 6,
            r: 1,
            title: 'SS Within (Variasi Acak / Galat)',
            body: 'Mengukur fluktuasi alami individu di dalam kelompok yang sama. Mencerminkan noise acak lingkungan sistem komputasi.',
          },
          {
            c: 4,
            r: 1,
            title: 'Statistik F = MSB / MSW',
            body: 'Rasio sinyal perlakuan terhadap noise acak. Jika F > F_kritis, perbedaan antar kelompok nyata bukan kebetulan.',
          },
          {
            c: 8,
            r: 1,
            variant: 'glow',
            title: 'Ukuran Efek: Eta-Squared (η²)',
            body: 'Proporsi varians total yang mampu dijelaskan oleh faktor perlakuan: η² = SSB / SST. Nilai > 0.14 mengindikasikan efek besar.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Parametrik vs Non-Parametrik */}
      <Slide
        center
        nav="Parametrik vs Non"
        notes="Berikan panduan kapan harus beralih ke uji non-parametrik: yaitu ketika asumsi normalitas dilanggar atau data berbentuk skala ordinal peringkat."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Pasangan Uji Hipotesis
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Padanan Uji Parametrik vs Non-Parametrik
        </h2>
        <Comparison
          highlight={0}
          cols={['Tujuan Analisis', 'Uji Parametrik (Asumsi Normal)', 'Uji Non-Parametrik (Bebas Distribusi)']}
          rows={[
            { label: '2 Sampel Independen', values: ['Two-Sample t-Test (t.test())', 'Wilcoxon Rank-Sum / Mann-Whitney (wilcox.test())'] },
            { label: '2 Sampel Berpasangan', values: ['Paired t-Test (t.test(paired=T))', 'Wilcoxon Signed-Rank (wilcox.test(paired=T))'] },
            { label: '≥ 3 Kelompok Independen', values: ['One-Way ANOVA (aov())', 'Kruskal-Wallis Test (kruskal.test())'] },
            { label: 'Bahan Ukuran Inti', values: ['Rata-rata (Mean) & Varians', 'Peringkat Relatif (Rank) & Median'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Rasio F-Snedecor */}
      <Slide
        center
        nav="Statistik F"
        notes="Tunjukkan statistik F: Rasio sinyal dibagi noise. Nilai F yang tinggi dengan p-value < 0.05 menunjukkan bukti kuat bahwa performa algoritma memang berbeda nyata."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Rasio Sinyal Terhadap Noise
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Signifikansi Statistik Rasio F-Snedecor
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
            F = <CountUp to={18.42} duration={1.5} />
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Dengan nilai <code style={{ color: 'var(--primary)' }}>F = 18.42 (p = 0.00012)</code>, variabilitas efisiensi antar-algoritma pengurutan 18× lebih besar daripada variasi galat acak dalam pengujian berulang!
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
            <span>🎯 <strong>H0 Ditolak:</strong> Performa ketiga algoritma tidak sama</span>
            <span>•</span>
            <span>🔍 <strong>Langkah Lanjut:</strong> Jalankan TukeyHSD()</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Implementasi One-Way ANOVA di R */}
      <Split
        nav="ANOVA di R"
        notes="Ajak mahasiswa menelaah kode ANOVA riil di R: formulasi aov(waktu ~ algoritma) dan inspeksi tabel ringkasan summary()."
        kicker="Evaluasi 3 Algoritma"
        title={
          <>
            Eksekusi ANOVA: <span className="accent-text">Komparasi Algoritma Sort</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Diuji waktu komputasi pengurutan 10.000 record pada 3 algoritma: <strong>QuickSort</strong>, <strong>MergeSort</strong>, dan <strong>HeapSort</strong>:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Sintaks: <code>model_anova &lt;- aov(waktu ~ algoritma, data = df)</code>.</li>
              <li>Hasil: Nilai p = 0.00012 &lt; 0.05 (Signifikan).</li>
              <li>Interpretasi: Terdapat perbedaan performa nyata antar-algoritma.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="evaluasi_anova_algoritma.R"
            highlight={[5, 6, 9]}
            code={`# Buat model ANOVA One-Way
model_aov <- aov(waktu_ms ~ algoritma, data = data_benchmark)

# Tampilkan Tabel ANOVA
summary(model_aov)
#             Df Sum Sq Mean Sq F value   Pr(>F)    
# algoritma    2  420.5  210.25   18.42 0.00012 ***
# Residuals   27  308.2   11.41                     
# ---
# Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05

# Ukuran Efek Eta-Squared: 420.5 / (420.5 + 308.2) = 0.577 (Besar!)`}
          />
        }
      />

      {/* Slide 8: Steps — Diagnostik Asumsi ANOVA */}
      <Steps
        nav="Diagnostik Asumsi"
        notes="Ingatkan mahasiswa bahwa sebelum mempercayai hasil ANOVA, 2 asumsi krusial wajib diuji: normalitas residual dan homogenitas varians."
        kicker="Validasi Model"
        title="Pemeriksaan Asumsi Wajib Sebelum Menyimpulkan ANOVA."
        items={[
          {
            title: '1. Uji Normalitas Residual (Shapiro-Wilk)',
            body: 'Ekstrak residual model dengan residuals(model) lalu uji dengan shapiro.test(). Jika p > 0.05, asumsi terpenuhi.',
          },
          {
            title: '2. Uji Homogenitas Varians (Levene Test)',
            body: 'Gunakan car::leveneTest(waktu ~ algoritma). Jika p > 0.05, varians antar kelompok homogen (homoskedastisitas terpenuhi).',
          },
          {
            title: '3. Keputusan Jika Asumsi Dilanggar',
            body: 'Jika data tidak normal atau varians jomplang, jangan paksakan ANOVA biasa: beralihlah ke Kruskal-Wallis atau Welch ANOVA (oneway.test).',
          },
          {
            title: '4. Eksekusi Post-Hoc Tukey HSD',
            body: 'Bila asumsi lolos dan ANOVA signifikan, jalankan TukeyHSD(model) untuk mengetahui pasangan mana yang berselisih nyata.',
          },
        ]}
      />

      {/* Slide 9: Split — Post-Hoc Tukey HSD & Kruskal-Wallis */}
      <Split
        flip
        nav="Tukey & Kruskal"
        notes="Tunjukkan hasil TukeyHSD di R dan cara menjalankan alternatif Kruskal-Wallis jika asumsi dilanggar."
        kicker="Analisis Lanjut Lab"
        title={
          <>
            Uji Post-Hoc <span className="accent-text">Tukey HSD & Kruskal-Wallis</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Tukey HSD menghitung perbedaan rata-rata tiap pasangan dengan penyesuaian p-value konservatif:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>QuickSort vs MergeSort:</strong> p-adj = 0.0003 (QuickSort signifikan lebih cepat 8.5 ms).</li>
              <li><strong>MergeSort vs HeapSort:</strong> p-adj = 0.4210 (Tidak berbeda signifikan).</li>
              <li><strong>Alternatif Non-Parametrik:</strong> <code>kruskal.test(waktu ~ algoritma)</code> menghasilkan kesimpulan yang konsisten.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="posthoc_tukey_kruskal.R"
            highlight={[2, 7]}
            code={`# 1. Post-Hoc Tukey HSD
tukey_res <- TukeyHSD(model_aov)
print(tukey_res)
#                   diff       lwr       upr     p adj
# Quick-Merge     -8.523   -12.842    -4.204   0.00028
# Heap-Merge       2.114    -2.205     6.433   0.42105

# 2. Alternatif Non-Parametrik (Kruskal-Wallis)
kruskal.test(waktu_ms ~ algoritma, data = data_benchmark)
# Kruskal-Wallis chi-squared = 16.24, df = 2, p-value = 0.00029`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan instruksi praktikum laboratorium anova_bab9.R."
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
          Praktikum Bab 9: <span className="accent-text">Benchmarking Infrastruktur Cloud</span>
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
          Buka <code>praktikum_bab9.R</code> di RStudio. Bandingkan latensi jaringan dari 4 penyedia cloud publik (AWS, GCP, Azure, Alibaba), periksa asumsi Levene, eksekusi ANOVA dan Tukey HSD, serta laporkan effect size.
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
                Mahasiswa mampu melakukan perbandingan multikelompok secara terstruktur dan mengenali batasan parametrik.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Persiapan Bab 10</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                ANOVA sesungguhnya adalah bentuk khusus dari model regresi linear di mana prediktornya adalah variabel kategorikal.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
