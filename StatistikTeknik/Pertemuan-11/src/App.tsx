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
        notes="Selamat datang di Pertemuan 11. Hari ini kita mempelajari Regresi Logistik Biner dan pemodelan klasifikasi statistik: fungsi link logit, estimasi Maximum Likelihood (MLE), interpretasi Odds Ratio, Confusion Matrix, dan evaluasi kurva ROC-AUC."
        kicker="Statistik Teknik · Pertemuan 11"
        title={
          <>
            Regresi Logistik & <span className="accent-text">Model Klasifikasi</span>
          </>
        }
        subtitle="Fungsi Link Logit Sigmoid, glm(family=binomial), Odds Ratio, Confusion Matrix, dan Kurva ROC-AUC di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama regresi logistik. Jelaskan mengapa regresi linear OLS gagal ketika memprediksi variabel kategorikal biner (0 atau 1)."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Regresi Logistik & Klasifikasi Hari Ini."
        items={[
          { title: 'Kegagalan Model Linear pada Data Biner & Motivasi Fungsi Logit', hint: 'Probabilitas [0, 1]' },
          { title: 'Fungsi Sigmoid, Log-Odds, & Estimasi Maximum Likelihood (MLE)', hint: 'Link Binomial' },
          { title: 'Interpretasi Koefisien: Odds Ratio (OR = exp(β))', hint: 'Faktor Peluang Relatif' },
          { title: 'Metrik Evaluasi: Confusion Matrix, Presisi, Recall, & F1-Score', hint: 'Kinerja Klasifikasi' },
          { title: 'Trade-off Threshold, Kurva ROC, & Area Under Curve (AUC) di R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — OLS Linear vs Logistic Regression */}
      <Contrast
        nav="Linear vs Logistik"
        notes="Jelaskan 2 kelemahan fatal regresi linear pada target biner: 1) Prediksi peluang bisa melompat di bawah 0 atau di atas 1 (tidak masuk akal); 2) Galat residual jelas tidak berdistribusi Normal dan heteroskedastis."
        kicker="Paradigma Pemodelan"
        title={
          <>
            Regresi Linear (OLS) vs <span className="accent-text">Regresi Logistik (glm)</span>
          </>
        }
        left={{
          label: 'Regresi Linear OLS (lm())',
          title: 'Gagal untuk Variabel Target Biner',
          points: [
            'Memprediksi nilai pada rentang tak terbatas: (-∞, +∞)',
            'Dapat menghasilkan probabilitas mustahil: p̂ = -0.35 atau p̂ = 1.42',
            'Asumsi normalitas residual dan varians konstan dilanggar secara fatal',
            'Sangat rentan terdistorsi oleh titik observasi ekstrem',
          ],
        }}
        right={{
          label: 'Regresi Logistik (glm(family=binomial))',
          title: 'Kurva S-Curve Sigmoid Terbatas',
          points: [
            'Memetakan input linear ke rentang probabilitas valid: [0, 1]',
            'Menggunakan fungsi link logit: ln(p / (1 - p)) = β₀ + β₁X',
            'Parameter diestimasi menggunakan Maximum Likelihood Estimation (MLE)',
            'Standar emas untuk deteksi intrusi siber, fraud, dan diagnosa medis',
          ],
        }}
      />

      {/* Slide 4: Bento — Anatomi Metrik Confusion Matrix */}
      <Bento
        nav="Confusion Matrix"
        notes="Confusion Matrix memetakan prediksi model terhadap kenyataan ground truth: True Positive, True Negative, False Positive, dan False Negative."
        kicker="Evaluasi Diagnostik"
        title="4 Sel Fundamental Confusion Matrix & Metrik Turunannya"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: 'True Positive (TP) & True Negative (TN)',
            body: 'Prediksi tepat sasaran: Sistem berhasil mendeteksi serangan siber (TP) dan mengidentifikasi akses pengguna sah (TN).',
          },
          {
            c: 6,
            r: 1,
            title: 'False Positive (FP) & False Negative (FN)',
            body: 'Galat klasifikasi: FP (False Alarm memblokir user sah); FN (Kritis: serangan malware lolos tanpa terdeteksi).',
          },
          {
            c: 4,
            r: 1,
            title: 'Presisi (Precision)',
            body: 'TP / (TP + FP): Dari seluruh prediksi serangan yang dibunyikan alarm, berapa persen yang benar-benar serangan siber asli?',
          },
          {
            c: 4,
            r: 1,
            title: 'Sensitivitas (Recall / TPR)',
            body: 'TP / (TP + FN): Dari seluruh serangan nyata yang terjadi di jaringan, berapa persen yang sukses dijaring oleh model?',
          },
          {
            c: 4,
            r: 1,
            variant: 'glow',
            title: 'F1-Score (Harmonic Mean)',
            body: '2 × (Presisi × Recall) / (Presisi + Recall): Rata-rata harmonik penyeimbang saat distribusi kelas target tidak seimbang (imbalance).',
          },
        ]}
      />

      {/* Slide 5: Comparison — Probabilitas vs Odds vs Log-Odds */}
      <Slide
        center
        nav="P vs Odds vs Logit"
        notes="Tunjukkan transformasi matematika 3 wujud probabilitas. Pemahaman odds ratio sangat penting untuk menafsirkan koefisien model logistik."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Transformasi Matematis
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Hubungan Probabilitas (p), Odds, dan Log-Odds (Logit)
        </h2>
        <Comparison
          highlight={1}
          cols={['Konsep', 'Rentang Nilai', 'Formula Matematis', 'Interpretasi Praktis']}
          rows={[
            { label: 'Probabilitas (p)', values: ['[0, 1]', 'Jumlah Sukses / Total Kejadian', 'Peluang transaksi adalah kecurangan (fraud)'] },
            { label: 'Odds', values: ['[0, +∞)', 'p / (1 - p)', 'Rasio peluang sukses dibanding peluang gagal'] },
            { label: 'Log-Odds (Logit)', values: ['(-∞, +∞)', 'ln(p / (1 - p))', 'Skala linier yang dimodelkan oleh persamaan regresi'] },
            { label: 'Odds Ratio (OR)', values: ['(0, +∞)', 'exp(β₁)', 'Faktor pelipatgandaan risiko setiap kenaikan 1 satuan prediktor'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Odds Ratio (exp(β)) */}
      <Slide
        center
        nav="Odds Ratio"
        notes="Tekankan cara menafsirkan koefisien regresi logistik: Kita menghitung exp(beta). Jika exp(beta) = 3.42, artinya peluang risiko melonjak 3.42 kali lipat."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kuantifikasi Risiko Relatif
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Interpretasi Odds Ratio: exp(β)
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
            OR = <CountUp to={3.42} duration={1.5} />× Lipat
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Dengan nilai <code style={{ color: 'var(--primary)' }}>β₁ = 1.23</code> untuk kegagalan autentikasi berulang, maka <code style={{ color: 'var(--primary)' }}>OR = exp(1.23) = 3.42</code>: Setiap penambahan 1 kali percobaan login gagal melipatgandakan odds serangan siber brute-force sebesar <strong>3.42 kali</strong> lipat!
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
            <span>📈 <strong>OR &gt; 1:</strong> Faktor risiko (memperbesar peluang)</span>
            <span>•</span>
            <span>📉 <strong>OR &lt; 1:</strong> Faktor protektif (memperkecil peluang)</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Implementasi glm() di R */}
      <Split
        nav="glm() di R"
        notes="Ajak mahasiswa meneliti kode R glm(family=binomial). Tunjukkan cara mengubah koefisien log-odds menjadi odds ratio menggunakan exp(coef())."
        kicker="Implementasi Praktikum"
        title={
          <>
            Klasifikasi Intrusi: <span className="accent-text">glm(family = binomial)</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Membangun model deteksi anomali paket jaringan pada 1.000 log koneksi:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Variabel Target: <code>status_intrusi</code> (0 = Normal, 1 = Serangan).</li>
              <li>Prediktor: <code>durasi_koneksi</code>, <code>volume_byte</code>, <code>failed_logins</code>.</li>
              <li>Fungsi R: <code>glm(..., family = binomial(link = "logit"))</code>.</li>
              <li>Transformasi Odds Ratio instan dengan <code>exp(coef(model))</code>.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="regresi_logistik_ids.R"
            highlight={[2, 6, 10]}
            code={`# 1. Bangun Model Logistik Binomial
model_logit <- glm(status_intrusi ~ volume_kb + failed_logins,
                   data = network_logs,
                   family = binomial(link = "logit"))

# 2. Ringkasan Estimasi MLE
summary(model_logit)

# 3. Hitung Odds Ratio (OR) & CI 95%
odds_ratios <- exp(cbind(OR = coef(model_logit), confint(model_logit)))
print(round(odds_ratios, 3))
#               OR  2.5 % 97.5 %
# (Intercept) 0.042  0.021  0.078
# volume_kb   1.015  1.008  1.022
# failed_logins 3.421 2.514 4.810`}
          />
        }
      />

      {/* Slide 8: Steps — Kurva ROC & Area Under Curve (AUC) */}
      <Steps
        nav="Kurva ROC & AUC"
        notes="Jelaskan konsep kurva ROC: Grafik trade-off antara True Positive Rate (Sensitivity) vs False Positive Rate (1 - Specificity) pada berbagai ambang batas threshold."
        kicker="Evaluasi Lintas-Threshold"
        title="Evaluasi Kurva Receiver Operating Characteristic (ROC-AUC)."
        items={[
          {
            title: '1. Pemilihan Threshold Keputusan (c)',
            body: 'Secara default c = 0.5. Jika model memprediksi p > c, tetapkan kelas 1. Menurunkan c membuat model lebih sensitif (menjaring lebih banyak serangan).',
          },
          {
            title: '2. Plot Sumbu ROC: TPR vs FPR',
            body: 'Sumbu Y adalah True Positive Rate (Recall); Sumbu X adalah False Positive Rate. Garis diagonal merepresentasikan tebakan acak (AUC = 0.50).',
          },
          {
            title: '3. Menghitung Area Under Curve (AUC)',
            body: 'AUC mengukur kemampuan diskriminasi global model independen dari threshold: AUC 0.8 - 0.9 = Baik; AUC > 0.9 = Sangat Superior.',
          },
          {
            title: '4. Eksekusi Paket pROC di R',
            body: 'Gunakan kurva <- pROC::roc(actual, predicted_prob) lalu visualisasikan dengan plot(kurva) dan hitung auc(kurva).',
          },
        ]}
      />

      {/* Slide 9: Split — Prediksi Probabilitas & Confusion Matrix */}
      <Split
        flip
        nav="Evaluasi Prediksi"
        notes="Tunjukkan langkah mendapatkan prediksi kelas dari probabilitas kontinu dan menghitung akurasi dengan table() di R."
        kicker="Prediksi Data Baru"
        title={
          <>
            Klasifikasi Threshold & <span className="accent-text">Confusion Matrix</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Untuk mengklasifikasikan observasi baru, kita mengekstrak probabilitas dengan <code>type = "response"</code>:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li>Peluang dihitung untuk tiap koneksi baru: <code>p_pred &lt;- predict(model, type = "response")</code>.</li>
              <li>Klasifikasikan: <code>kelas_pred &lt;- ifelse(p_pred &gt; 0.5, 1, 0)</code>.</li>
              <li>Hasil pengujian: Akurasi = <strong>94.5%</strong>, Sensitivitas = <strong>91.2%</strong>.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="evaluasi_klasifikasi.R"
            highlight={[2, 5, 8]}
            code={`# 1. Prediksi Probabilitas Kontinu
prob_uji <- predict(model_logit, newdata = data_test, type = "response")

# 2. Terapkan Threshold Keputusan 0.5
kelas_pred <- ifelse(prob_uji > 0.5, 1, 0)

# 3. Bentuk Confusion Matrix
tabel_eval <- table(Aktual = data_test$status_intrusi, Prediksi = kelas_pred)
print(tabel_eval)
#       Prediksi
# Aktual   0   1
#      0 420  15 (FP = 15)
#      1  12 153 (FN = 12)

# Akurasi Global: (420 + 153) / 600 = 95.5%`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan instruksi pengerjaan praktikum_bab11.R mengenai deteksi fraud transaksi keuangan e-commerce."
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
          Praktikum Bab 11: <span className="accent-text">Deteksi Serangan Siber & Fraud</span>
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
          Buka <code>praktikum_bab11.R</code> di RStudio. Bangun model regresi logistik untuk mendeteksi transaksi e-commerce mencurigakan, hitung odds ratio seluruh prediktor, buat kurva ROC dengan <code>pROC</code>, dan tentukan threshold optimal Youden Index.
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
                Mahasiswa terampil memodelkan variabel target biner, menafsirkan odds ratio, dan mengevaluasi klasifikasi dengan ROC-AUC.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Persiapan Bagian IV</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Bab 12 membuka Bagian IV (Komputasi Statistik Lanjut): Metode Simulasi Monte Carlo.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
