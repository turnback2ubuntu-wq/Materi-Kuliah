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
        notes="Selamat datang di Pertemuan 14. Bab ini menandai transisi dari analisis univariat/bivariat ke ruang multivariat berdimensi tinggi: Principal Component Analysis (PCA), Scree Plot & Biplot, algoritma K-Means Clustering, serta klasifikasi probabilistik Naive Bayes."
        kicker="Statistik Teknik · Pertemuan 14"
        title={
          <>
            Analisis Multivariat & <span className="accent-text">Pengantar Machine Learning</span>
          </>
        }
        subtitle="Reduksi Dimensi PCA, Nilai Eigen > 1, Biplot, K-Means Clustering, Metode Elbow, dan Naive Bayes di R"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama analisis multivariat dan machine learning statistik. Tekankan bahwa metode ML modern berakar kuat pada fondasi teori matriks kovarians dan probabilitas yang telah dipelajari."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Multivariat & Machine Learning Hari Ini."
        items={[
          { title: 'Tantangan Ruang Multivariat (Curse of Dimensionality) & Reduksi Dimensi', hint: 'Kutukan Dimensi' },
          { title: 'Principal Component Analysis (PCA): Variansi Maksimal & Vektor Eigen', hint: 'Kompresi Informasi' },
          { title: 'Interpretasi PCA: Nilai Eigen (Kaiser Rule), Scree Plot, & Biplot', hint: 'Diagnostik PCA' },
          { title: 'Unsupervised Learning: K-Means Clustering & Metode Elbow di R', hint: 'Partisi Kelompok' },
          { title: 'Supervised Learning: Pengklasifikasi Bayesian Naive Bayes & Lab R', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Supervised vs Unsupervised Learning */}
      <Contrast
        nav="Supervised vs Unsupervised"
        notes="Bandingkan dua cabang utama Machine Learning: Supervised (memiliki label Y target) vs Unsupervised (murni menemukan struktur pola tersembunyi tanpa bimbingan label)."
        kicker="Dua Cabang Machine Learning"
        title={
          <>
            Supervised Learning vs <span className="accent-text">Unsupervised Learning</span>
          </>
        }
        left={{
          label: 'Supervised Learning (Berlabel)',
          title: 'Prediksi Berorientasi Target (Y)',
          points: [
            'Setiap baris data memiliki label target ground truth (Y)',
            'Tujuan: Meminimalkan galat prediksi antara Ŷ dan Y riil',
            'Contoh: Regresi Linear (Bab 10), Regresi Logistik (Bab 11), Naive Bayes',
            'Metrik Evaluasi: RMSE, Akurasi, F1-Score, dan AUC-ROC',
          ],
        }}
        right={{
          label: 'Unsupervised Learning (Tanpa Label)',
          title: 'Penemuan Struktur Tersembunyi',
          points: [
            'Tidak ada variabel label target Y; data murni matriks fitur X',
            'Tujuan: Menemukan klaster alamiah atau mereduksi dimensi data',
            'Contoh: PCA (Principal Component Analysis), K-Means, Hierarchical Clustering',
            'Metrik Evaluasi: Proporsi varians terjelaskan, Silhouette Score, WCSS',
          ],
        }}
      />

      {/* Slide 4: Bento — Taksonomi Metode Multivariat */}
      <Bento
        nav="Taksonomi Multivariat"
        notes="Jelaskan 4 metode multivariat yang dibahas pada bab ini: PCA, K-Means, Hierarchical Clustering, dan Naive Bayes."
        kicker="Peta Metode Multivariat"
        title="4 Algoritma Multivariat & Machine Learning Statistik di R"
        tiles={[
          {
            c: 6,
            r: 1,
            variant: 'accent',
            title: '1. Principal Component Analysis (PCA)',
            body: 'Transformasi ortogonal linear yang memproyeksikan p variabel awal ke komponen utama independen yang menyerap variansi terbesar.',
          },
          {
            c: 6,
            r: 1,
            title: '2. K-Means Clustering',
            body: 'Algoritma partisi iteratif berbasis jarak Euclidean yang membagi n observasi ke dalam k klaster dengan meminimalkan varians intra-klaster (WCSS).',
          },
          {
            c: 6,
            r: 1,
            title: '3. Hierarchical Clustering',
            body: 'Membangun pohon klaster bertingkat (dendrogram) tanpa perlu menentukan jumlah k di awal, menggunakan teknik aglomeratif bertahap.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '4. Naive Bayes Classifier',
            body: 'Pengklasifikasi supervised berbasis Teorema Bayes dengan asumsi penyederhanaan "naif" bahwa seluruh prediktor saling independen kondisional.',
          },
        ]}
      />

      {/* Slide 5: Comparison — Skala Data: Standarisasi vs Data Mentah */}
      <Slide
        center
        nav="Standarisasi Data"
        notes="Tekankan aturan emas: Algoritma multivariat berbasis jarak (PCA & K-Means) WAJIB menggunakan data yang telah distandarisasi (scale = TRUE). Jika tidak, variabel dengan skala angka besar (seperti memori dalam Byte) akan mendominasi total variabel lain."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Pra-Pemrosesan Wajib
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Dampak Standarisasi (scale = TRUE) pada PCA & Clustering
        </h2>
        <Comparison
          highlight={1}
          cols={['Kondisi Data', 'Data Mentah (Tanpa Skala)', 'Data Terstandardisasi (scale = TRUE)']}
          rows={[
            { label: 'Penanganan Satuan', values: ['Sangat bias ke variabel berskala besar (misal: Bytes vs Detik)', 'Seluruh variabel disetarakan dengan mean=0 dan sd=1'] },
            { label: 'Matriks yang Digunakan', values: ['Matriks Kovarians (Covariance)', 'Matriks Korelasi Pearson (Correlation)'] },
            { label: 'Dampak pada Jarak Euclidean', values: ['Variabel memori byte mendistorsi jarak hingga 99%', 'Tiap fitur memberikan kontribusi proporsional yang adil'] },
            { label: 'Perintah R Standar', values: ['prcomp(df, scale. = FALSE)', 'prcomp(df, scale. = TRUE) (Wajib!)'] },
          ]}
        />
      </Slide>

      {/* Slide 6: BigNumber — Kriteria Kaiser Nilai Eigen > 1 */}
      <Slide
        center
        nav="Kriteria Kaiser"
        notes="Jelaskan aturan Kaiser: Komponen Utama yang layak dipertahankan adalah yang memiliki Nilai Eigen (Eigenvalue) > 1.0, artinya komponen tersebut merangkum lebih banyak informasi dibanding satu variabel asal tunggal."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Kaidah Seleksi Komponen Utama
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Kriteria Kaiser-Guttman: Nilai Eigen &gt; 1.0
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
            Eigenvalue &gt; <CountUp to={1.0} duration={1.2} />
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 720 }}>
          Pertahankan komponen utama (PC) yang memiliki <strong>Eigenvalue &gt; 1</strong> dan mampu menjelaskan secara kumulatif minimal <strong style={{ color: 'var(--primary)' }}>70% — 80%</strong> variansi total dataset telemetri sistem.
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
            <span>📉 <strong>Scree Plot:</strong> Cari titik siku (elbow) pelandaian varians</span>
            <span>•</span>
            <span>🧭 <strong>Biplot:</strong> Visualisasikan korelasi variabel & observasi</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 7: Split — Eksekusi PCA di R dengan prcomp() */}
      <Split
        nav="PCA di R"
        notes="Ajak mahasiswa meneliti keluaran fungsi prcomp() di R. Tunjukkan bagaimana 6 metrik server berhasil diringkas menjadi 2 Komponen Utama (PC1 dan PC2) yang menyerap 82% informasi."
        kicker="Reduksi Dimensi"
        title={
          <>
            Eksekusi PCA: <span className="accent-text">prcomp(scale. = TRUE)</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Dari 6 metrik kinerja server (cpu, ram, disk_io, net_in, net_out, latency), PCA mereduksinya menjadi representasi 2 dimensi:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>PC1 (58.4% varians):</strong> Merepresentasikan intensitas beban kerja throughput sistem.</li>
              <li><strong>PC2 (24.1% varians):</strong> Merepresentasikan beban I/O penyimpanan database.</li>
              <li><strong>Total Terjelaskan:</strong> <strong>82.5%</strong> informasi terjaga dalam grafik 2D!</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="analisis_pca_server.R"
            highlight={[2, 5, 9]}
            code={`# 1. Jalankan PCA dengan Standarisasi Skala
pca_hasil <- prcomp(telemetri_srv, scale. = TRUE)

# 2. Ringkasan Varians Komponen Utama
summary(pca_hasil)
# Importance of components:
#                           PC1    PC2    PC3    PC4
# Standard deviation     1.872  1.202  0.724  0.512
# Proportion of Variance 0.584  0.241  0.087  0.044
# Cumulative Proportion  0.584  0.825  0.912  0.956

# 3. Visualisasi Biplot 2D Interaktif
biplot(pca_hasil, col = c("#94a3b8", "#10b981"))`}
          />
        }
      />

      {/* Slide 8: Steps — Algoritma K-Means & Penentuan Klaster Optimal */}
      <Steps
        nav="K-Means & Elbow"
        notes="Jelaskan siklus algoritma K-Means: Inisialisasi centroid, penugasan klaster berdasarkan jarak Euclidean terdekat, dan pembaruan posisi centroid hingga konvergen."
        kicker="Segmentasi Tak Terbimbing"
        title="Alur Kerja K-Means Clustering & Metode Elbow."
        items={[
          {
            title: '1. Standarisasi Matriks Fitur dengan scale()',
            body: 'Pastikan seluruh dimensi fitur berada pada skala z-score yang setara agar jarak Euclidean tidak bias.',
          },
          {
            title: '2. Tentukan Jumlah Klaster Optimal via Elbow Method',
            body: 'Hitung Within-Cluster Sum of Squares (WCSS) untuk k = 1 hingga 10. Pilih k pada titik di mana penurunan WCSS mulai melandai tajam.',
          },
          {
            title: '3. Eksekusi kmeans(nstart = 25)',
            body: 'Gunakan parameter nstart = 25 untuk menguji 25 inisialisasi titik awal acak berbeda guna menghindari jebakan local minima.',
          },
          {
            title: '4. Profiling Karakteristik Tiap Klaster',
            body: 'Hitung nilai rata-rata tiap fitur per klaster untuk memberi label bisnis (misal: "Server Idle", "Server Memory-Bound", "Server Network-Stressed").',
          },
        ]}
      />

      {/* Slide 9: Split — K-Means Clustering di R */}
      <Split
        flip
        nav="K-Means di R"
        notes="Tunjukkan kode R pengelompokan server telemetri menggunakan kmeans() dan visualisasi klaster."
        kicker="Segmentasi Klaster"
        title={
          <>
            Segmentasi Server: <span className="accent-text">kmeans(centers = 3)</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Mengelompokkan 150 node server ke dalam <strong>3 profil performa</strong>:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Klaster 1 (45 node):</strong> Beban normal dan stabil (SLA Sehat).</li>
              <li><strong>Klaster 2 (25 node):</strong> CPU tinggi & latensi lonjak (Perlu scale-up).</li>
              <li><strong>Klaster 3 (80 node):</strong> Node idle / utilisasi rendah (Potensi efisiensi biaya).</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="segmentasi_kmeans_server.R"
            highlight={[5, 8, 12]}
            code={`set.seed(42)
data_scaled <- scale(telemetri_srv)

# Eksekusi K-Means dengan k = 3
km_hasil <- kmeans(data_scaled, centers = 3, nstart = 25)

# Distribusi Anggota Tiap Klaster
table(km_hasil$cluster)
#  1  2  3 
# 45 25 80 

# Rata-rata Pusat Tiap Klaster (Centroid)
aggregate(telemetri_srv, by = list(Klaster = km_hasil$cluster), mean)`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Tutup pertemuan dengan instruksi pengerjaan praktikum laboratorium praktikum_bab14.R."
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
          Praktikum Bab 14: <span className="accent-text">Unsupervised Learning Telemetri TI</span>
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
          Buka <code>praktikum_bab14.R</code> di RStudio. Terapkan PCA untuk mereduksi 8 metrik telemetri klaster Kubernetes, buat visualisasi Biplot, lakukan segmentasi node server dengan K-Means, dan bangun model klasifikasi Naive Bayes dengan paket <code>e1071</code>.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>CPMK-7 Terpenuhi</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Mahasiswa terampil menerapkan reduksi dimensi PCA, segmentasi K-Means, dan algoritma machine learning statistik.
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
              <div style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 6 }}>Puncak Perkuliahan</div>
              <div style={{ fontSize: 14, color: 'var(--fg-muted)' }}>
                Bab 15 mengintegrasikan seluruh kompetensi Bab 1 hingga 14 dalam Proyek Akhir Capstone Analisis Data Komprehensif.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
