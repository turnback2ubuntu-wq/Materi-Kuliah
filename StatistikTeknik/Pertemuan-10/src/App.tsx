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
        notes="Selamat datang di Pertemuan 10. Hari ini kita mempelajari fondasi pemodelan prediktif: Regresi Linear Sederhana dan Berganda, estimasi parameter OLS, interpretasi koefisien ceteris paribus, evaluasi R-squared, serta 4 diagnostik residual klasik."
        kicker="Statistik Teknik · Pertemuan 10"
        title={
          <>
            Regresi Linear <span className="accent-text">Sederhana & Berganda</span>
          </>
        }
        subtitle="Estimasi Ordinary Least Squares (OLS), R² & Adjusted R², Asumsi Gauss-Markov, Multikolinearitas (VIF), dan Diagnostik Residual di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama regresi linear. Beri penekanan khusus pada perbedaan korelasi dengan kausalitas serta bahaya multikolinearitas dalam sistem berdimensi tinggi."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Pemodelan Regresi Linear Hari Ini."
        items={[
          { title: 'Prinsip Ordinary Least Squares (OLS): Meminimalkan Kuadrat Residual', hint: 'Garis Terbaik' },
          { title: 'Interpretasi Koefisien Intercept (β0) & Slope (β1) Ceteris Paribus', hint: 'Kuantifikasi Efek' },
          { title: 'Koefisien Determinasi (R²) vs Adjusted R² & Uji Global F', hint: 'Goodness of Fit' },
          { title: 'Regresi Berganda: Seleksi Fitur & Deteksi Multikolinearitas (VIF)', hint: 'Prediktor Jamak' },
          { title: '4 Diagnostik Residual Klasik (plot(model)) & Praktikum Lab R', hint: 'Validasi Asumsi' },
        ]}
      />

      {/* Slide 3: Contrast — Korelasi vs Regresi Linear */}
      <Contrast
        nav="Korelasi vs Regresi"
        notes="Tegaskan perbedaan mendasar: Korelasi hanya mengukur kekuatan dan arah hubungan linier simetris dua variabel (-1 hingga +1), sedangkan regresi memodelkan hubungan fungsional asimetris terarah untuk keperluan estimasi dan prediksi (Y = f(X))."
        kicker="Derajat Hubungan vs Pemodelan"
        title={
          <>
            Korelasi Pearson (r) vs <span className="accent-text">Regresi Linear (lm)</span>
          </>
        }
        left={{
          label: 'Korelasi Pearson (cor(x, y))',
          title: 'Asosiasi Simetris Dua Arah',
          points: [
            'Mengukur kekuatan hubungan linier semata: r(X, Y) = r(Y, X)',
            'Tidak membedakan mana variabel sebab (X) dan akibat (Y)',
            'Tidak dapat digunakan untuk memprediksi nilai spesifik di masa depan',
            'Slogan klasik: "Correlation does not imply causation"',
          ],
        }}
        right={{
          label: 'Regresi Linear (lm(y ~ x))',
          title: 'Pemodelan Prediktif Bersyarat',
          points: [
            'Memodelkan variabel respons Y sebagai fungsi linier dari prediktor X',
            'Menghasilkan persamaan matematis prediktif: Ŷ = β₀ + β₁X',
            'Memberikan laju perubahan kuantitatif (slope): setiap ΔX = 1 → ΔY = β₁',
            'Mendukung penambahan banyak prediktor secara simultan (regresi berganda)',
          ],
        }}
      />

      {/* Slide 4: Bento — 4 Asumsi Klasik Gauss-Markov */}
      <Bento
        nav="Asumsi Gauss-Markov"
        notes="Agar estimator OLS bersifat BLUE (Best Linear Unbiased Estimator), 4 asumsi klasik Gauss-Markov wajib terpenuhi."
        kicker="Teorema Gauss-Markov"
        title="4 Asumsi Klasik untuk Menjamin Estimator OLS Bersifat BLUE"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: '1. Linearitas Parameter (E[ε] = 0)',
            body: 'Hubungan antara variabel respons Y dan prediktor X bersifat linier dalam parameter. Residual tersebar acak di sekitar sumbu nol.',
          },
          {
            c: 6,
            r: 1,
            title: '2. Homoskedastisitas (Varians Konstan)',
            body: 'Varians dari error term adalah konstan untuk seluruh tingkat nilai prediktor X: Var(εᵢ) = σ². Tidak membentuk pola corong/kipas.',
          },
          {
            c: 6,
            r: 1,
            title: '3. Independensi Error (No Autocorrelation)',
            body: 'Tidak ada korelasi antar-residual satu observasi dengan observasi lainnya: Cov(εᵢ, εⱼ) = 0. Sangat krusial pada data telemetri berkala waktu.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '4. Normalitas Galat Residual',
            body: 'Residual berdistribusi Normal: ε ~ N(0, σ²). Syarat mutlak agar uji-t koefisien dan uji-F model bernilai valid secara inferensial.',
          },
        ]}
      />

      {/* Slide 5: Comparison — R² vs Adjusted R² */}
      <Slide
        center
        nav="R² vs Adj R²"
        notes="Jelaskan bahaya R-squared biasa pada regresi berganda: Menambahkan prediktor sampah/acak pasti akan menaikkan R2! Solusinya adalah Adjusted R2 yang memberikan penalti pada jumlah prediktor berlebihan."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Evaluasi Kebaikan Model (Goodness of Fit)
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Perbandingan R² Biasa vs Adjusted R²
        </h2>
        <Comparison
          highlight={1}
          cols={['Karakteristik Metrik', 'Koefisien Determinasi (R²)', 'Adjusted R-Squared (R̄²)']}
          rows={[
            { label: 'Definisi Matematis', values: ['1 - (SS_Res / SS_Total)', '1 - [(1 - R²) × (n - 1) / (n - p - 1)]'] },
            { label: 'Respon Penambahan Prediktor', values: ['Pasti selalu naik atau tetap (monotonik)', 'Hanya naik jika prediktor baru benar-benar bermutu'] },
            { label: 'Hukuman Kompleksitas', values: ['Nol penalti terhadap over-parameterization', 'Memberikan penalti ketat pada prediktor yang tidak relevan'] },
            { label: 'Penggunaan Terbaik', values: ['Hanya valid untuk Regresi Linear Sederhana (1 prediktor)', 'Wajib digunakan untuk Regresi Linear Berganda'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Interpretasi Slope (β1) */}
      <Slide
        center
        nav="Interpretasi Slope"
        notes="Tunjukkan interpretasi slope dalam kasus nyata pemakaian memori server. Angka slope adalah laju pertambahan beban sistem."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kuantifikasi Dampak Performa
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Interpretasi Koefisien Kemiringan (Slope β₁)
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
            +<CountUp to={2.45} duration={1.5} /> MB / Req
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Dengan model <code style={{ color: 'var(--primary)' }}>Memori = 128.4 + 2.45 × Request</code>, setiap kenaikan 1 permintaan request konkuren diprediksi mengonsumsi tambahan memori RAM rata-rata sebesar <strong>2.45 MB</strong> (ceteris paribus).
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
            <span>🖥️ <strong>Baseline (β0):</strong> 128.4 MB (Konsumsi RAM saat idle)</span>
            <span>•</span>
            <span>📈 <strong>Kapasitas Maksimal:</strong> Prediksi RAM pada 1.000 req</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Implementasi lm() di R */}
      <Split
        nav="Fungsi lm() di R"
        notes="Ajak mahasiswa meneliti struktur keluaran fungsi lm() di R. Tunjukkan cara membaca tabel koefisien, t-value, p-value, residual standard error, dan nilai R-squared."
        kicker="Pemodelan di R"
        title={
          <>
            Membangun Model <span className="accent-text">dengan lm() di R</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Sintaks formula R menggunakan notasi <code>respons ~ prediktor1 + prediktor2</code>:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><code>lm(memori ~ request + cpu_usage, data = srv_df)</code>.</li>
              <li>Uji Signifikansi Parsial: Nilai p koefisien request &lt; 0.001 (Signifikan).</li>
              <li>Goodness of Fit: <code>Adjusted R-squared: 0.884</code> (88.4% variasi konsumsi memori dijelaskan oleh model).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="model_regresi_server.R"
            highlight={[2, 6, 11]}
            code={`# Bangun model regresi linear berganda
model_reg <- lm(memori_mb ~ req_per_sec + cpu_pct, data = srv_log)

# Inspeksi Ringkasan Model
summary(model_reg)
# Coefficients:
#              Estimate Std. Error t value Pr(>|t|)    
# (Intercept) 128.41200   12.35000  10.400 2.15e-11 ***
# req_per_sec   2.45120    0.14200  17.260 1.20e-15 ***
# cpu_pct       1.12050    0.28000   4.000 0.00034 ***
# ---
# Residual standard error: 18.4 on 32 degrees of freedom
# Multiple R-squared: 0.892,  Adjusted R-squared: 0.885 
# F-statistic: 132.4 on 2 and 32 DF,  p-value: < 2.2e-16`}
          />
        }
      />

      {/* Slide 8: Steps — 4 Plot Diagnostik Residual Klasik */}
      <Steps
        nav="Diagnostik Residual"
        notes="Jelaskan plot bawaan plot(model, which=1:4). Diagnostik residual adalah tahap wajib untuk memvalidasi apakah asumsi OLS terpenuhi atau model mengalami miss-spesifikasi."
        kicker="Validasi Visual R"
        title="4 Plot Diagnostik Residual Wajib: plot(model, which = 1:4)"
        items={[
          {
            title: '1. Residuals vs Fitted (Linearitas & Homoskedastisitas)',
            body: 'Titik residual harus tersebar acak di sekitar garis merah horizontal y=0. Tidak boleh membentuk kurva lengkung parabola atau pola corong.',
          },
          {
            title: '2. Normal Q-Q Plot (Normalitas Residual)',
            body: 'Titik residual standar harus menempel rapat di sepanjang garis diagonal putus-putus. Titik yang melenceng jauh di ujung ekor menandakan outlier.',
          },
          {
            title: '3. Scale-Location Plot (Homoskedastisitas Skala)',
            body: 'Memeriksa kestabilan penyebaran residual kuadrat terstandardisasi sepanjang rentang prediksi. Garis tren harus relatif datar.',
          },
          {
            title: '4. Residuals vs Leverage (Pengaruh Cook Distance)',
            body: 'Mendeteksi observasi dengan daya ungkit (leverage) tinggi yang mendistorsi kemiringan garis regresi melebihi batas Cooks distance (0.5).',
          },
        ]}
      />

      {/* Slide 9: Split — Multikolinearitas & Variance Inflation Factor (VIF) */}
      <Split
        flip
        nav="Multikolinearitas"
        notes="Bahas multikolinearitas: ketika prediktor-prediktor saling berkorelasi erat satu sama lain. Gunakan paket car dan fungsi vif(model). Nilai VIF > 5 atau 10 menunjukkan tanda bahaya."
        kicker="Diagnostik Prediktor"
        title={
          <>
            Deteksi Multikolinearitas: <span className="accent-text">Faktor VIF</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Jika dua prediktor saling berkorelasi tinggi (misal: <code>jumlah_core</code> dan <code>kapasitas_ram</code>), estimasi koefisien menjadi tidak stabil:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>VIF = 1:</strong> Tidak ada korelasi antar-prediktor (Ideal).</li>
              <li><strong>VIF 1 – 5:</strong> Korelasi moderat yang masih dapat diterima.</li>
              <li><strong>VIF &gt; 5 – 10:</strong> Multikolinearitas parah! Salah satu prediktor wajib dieliminasi atau direduksi dengan PCA (Bab 14).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="cek_vif_multikolinearitas.R"
            highlight={[2, 6, 7]}
            code={`library(car)

# Evaluasi Variance Inflation Factor pada model
vif_nilai <- vif(model_reg)
print(vif_nilai)
# req_per_sec     cpu_pct 
#    1.241022    1.241022 
# (Seluruh VIF < 5 -> Model Bebas Multikolinearitas!)

# Jika VIF > 10 terdeteksi:
# 1. Buang salah satu variabel yang redundan
# 2. Gabungkan variabel menjadi indeks komposit`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan pengarahan praktikum regresi linear praktikum_bab10.R."
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
          Praktikum Bab 10: <span className="accent-text">Capacity Planning Server TI</span>
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
          Buka <code>praktikum_bab10.R</code>. Bangun model regresi linear berganda untuk memprediksi utilisasi CPU cloud berdasarkan volume transaksi dan konkurensi koneksi socket, lakukan uji asumsi Gauss-Markov, dan ramalkan kebutuhan kapasitas server 6 bulan ke depan.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-5 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa mampu menyusun persamaan regresi linear, menguji kelayakan model, dan menafsirkan koefisien prediktif.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Koneksi ke Bab 11</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Jika variabel respons Y bukan numerik kontinu melainkan status biner (0=Normal, 1=Serangan), kita beralih ke Regresi Logistik.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
