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
        notes="Selamat datang di perkuliahan Pertemuan 4. Hari ini kita mendalami seni dan rekayasa visualisasi data dengan R, berfokus pada Grammar of Graphics dan ekosistem ggplot2 untuk analisis telemetri sistem TI."
        kicker="Statistik Teknik · Pertemuan 4"
        title={
          <>
            Visualisasi Data & <span className="accent-text">Grammar of Graphics</span>
          </>
        }
        subtitle="Dari Base R Graphics hingga ggplot2: Estetika Berlapis, Faceting, Visual Encoding, dan Heatmap Korelasi"
        foot="Program Studi Teknik Informatika · Semester Ganjil 2026"
      />

      {/* Slide 2: Agenda */}
      <Agenda
        nav="Agenda"
        notes="Paparkan 5 topik utama perkuliahan visualisasi. Jelaskan bahwa visualisasi bukan sekadar hiasan kosmetik, melainkan alat penemuan pola anomali dan komunikasi temuan analitik."
        kicker="Roadmap Perkuliahan"
        title="5 Agenda Visualisasi Data Hari Ini."
        items={[
          { title: 'Prinsip Desain Visual Edward Tufte: Rasio Data-Tinta', hint: 'Kaidah Efisiensi' },
          { title: 'Base R Graphics: Plot Cepat & Diagnostik Sederhana', hint: 'Eksplorasi Kilat' },
          { title: 'Grammar of Graphics: 7 Lapisan Konstruksi ggplot2', hint: 'Tata Bahasa Visual' },
          { title: 'Geom Primer, Estetika (aes), Facet, & Kustomisasi Tema', hint: 'Desain Produksi' },
          { title: 'Visualisasi Multivariat: Heatmap Korelasi Metrik Server', hint: 'Praktikum Lab R' },
        ]}
      />

      {/* Slide 3: Contrast — Base R vs ggplot2 */}
      <Contrast
        nav="Base R vs ggplot2"
        notes="Bandingkan dua paradigma visualisasi R. Base R melukis langsung di canvas seperti cat minyak di kanvas (tidak bisa diedit ulang), sementara ggplot2 membangun grafik secara deklaratif dari data layer demi layer."
        kicker="Paradigma Visualisasi"
        title={
          <>
            Base Graphics vs <span className="accent-text">Ekosistem ggplot2</span>
          </>
        }
        left={{
          label: 'Base R (plot, hist, boxplot)',
          title: 'Model Kanvas Cat (Imperatif)',
          points: [
            'Cepat untuk inspeksi data 1-baris saat eksplorasi cepat konsol',
            'Elemen ditimpa langsung ke perangkat grafis (irreversible)',
            'Sintaks argumen tidak konsisten antar-fungsi grafis',
            'Sangat rumit untuk grouping multivariat dan multi-panel facet',
          ],
        }}
        right={{
          label: 'ggplot2 (Hadley Wickham)',
          title: 'Grammar of Graphics (Deklaratif)',
          points: [
            'Memisahkan data murni, pemetaan estetika (aes), dan geometri (geom)',
            'Mendukung penambahan layer dinamis dengan operator +',
            'Otomatisasi legenda, skala warna kontinu/diskrit, dan tema',
            'Standar industri publikasi akademik dan dashboard analitik',
          ],
        }}
      />

      {/* Slide 4: Bento — 7 Layers of Grammar of Graphics */}
      <Bento
        nav="7 Lapisan ggplot2"
        notes="Grammar of Graphics memecah grafik menjadi 7 komponen formal: Data, Aesthetics, Geometries, Facets, Statistics, Coordinates, dan Themes."
        kicker="Arsitektur Leland Wilkinson"
        title="7 Lapisan Formal Tata Bahasa Grafik (ggplot2)"
        tiles={[
          {
            c: 4,
            r: 1,
            variant: 'accent',
            title: '1. Data & 2. Aesthetics (aes)',
            body: 'Tabel data frame rapi (tidy) dan pemetaan variabel ke properti visual: sumbu x/y, color, fill, shape, dan size.',
          },
          {
            c: 4,
            r: 1,
            title: '3. Geometries (geom)',
            body: 'Bentuk geometris fisik data: titik (geom_point), batang (geom_col), garis (geom_line), atau bidang distribusi (geom_density).',
          },
          {
            c: 4,
            r: 1,
            title: '4. Facets (Small Multiples)',
            body: 'Membelah grafik tunggal menjadi kisi multi-panel menurut variabel kelompok kategori (facet_wrap & facet_grid).',
          },
          {
            c: 6,
            r: 1,
            title: '5. Statistics & 6. Coordinates',
            body: 'Transformasi matematika bawaan (seperti stat_smooth untuk tren regresi atau stat_bin untuk frekuensi) serta proyeksi bidang kartesius vs polar.',
          },
          {
            c: 6,
            r: 1,
            variant: 'glow',
            title: '7. Themes (Tampilan Non-Data)',
            body: 'Kontrol penuh tipografi font, warna latar, garis kisi kisi (grid lines), posisi legenda, dan margin publikasi (theme_minimal, theme_bw).',
          },
        ]}
      />

      {/* Slide 5: Split — Geom Primer & Code */}
      <Split
        nav="Geom Primer"
        notes="Tunjukkan potongan kode ggplot2 tipikal. Tekankan penggunaan operator + untuk merangkai data mentah dengan scatter plot titik dan garis regresi loess halus."
        kicker="Komposisi Layer"
        title={
          <>
            Sintaks Deklaratif <span className="accent-text">ggplot()</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Dengan <strong>ggplot2</strong>, penambahan fitur visual dilakukan secara bertingkat:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><code>ggplot(df, aes(x, y))</code>: Inisialisasi kanvas dan variabel sumbu.</li>
              <li><code>+ geom_point(alpha = 0.6)</code>: Tambahkan titik sebaran transparan.</li>
              <li><code>+ geom_smooth(method = "lm")</code>: Tarik garis tren tren linear.</li>
              <li><code>+ theme_minimal()</code>: Terapkan gaya modern bersih tanpa gangguan visual.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="analisis_beban_server.R"
            highlight={[2, 6, 7, 8]}
            code={`library(ggplot2)

# Scatter plot beban CPU vs Waktu Respon
ggplot(data = server_df, 
       aes(x = cpu_usage, y = response_time, color = environment)) +
  geom_point(alpha = 0.7, size = 2.5) +
  geom_smooth(method = "lm", se = TRUE, color = "#10b981") +
  labs(
    title = "Korelasi Penggunaan CPU terhadap Waktu Respons API",
    x = "CPU Utilization (%)",
    y = "Response Time (ms)",
    color = "Server Node"
  ) +
  theme_minimal(base_size = 13)`}
          />
        }
      />

      {/* Slide 6: Comparison — Matriks Pemilihan Tipe Visualisasi */}
      <Slide
        center
        nav="Katalog Grafik"
        notes="Pemandu mahasiswa memilih grafik yang tepat berdasarkan jenis variabel: univariat vs bivariat, numerik kontinu vs diskrit/kategorikal."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Panduan Desain
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 24 }}>
          Matriks Pemilihan Grafik Berdasarkan Struktur Data
        </h2>
        <Comparison
          highlight={1}
          cols={['Tipe Data & Tujuan', 'Geom ggplot2 Terbaik', 'Alternatif Base R', 'Fungsi Utama']}
          rows={[
            { label: 'Univariat Kontinu (Distribusi)', values: ['geom_histogram() / geom_density()', 'hist()', 'Melihat bentuk sebaran, modalitas, & asimetri'] },
            { label: 'Univariat Kategorikal (Frekuensi)', values: ['geom_bar() / geom_col()', 'barplot(table())', 'Menghitung frekuensi kemunculan kategori'] },
            { label: 'Bivariat: Kategori vs Numerik', values: ['geom_boxplot() / geom_violin()', 'boxplot()', 'Membandingkan dispersi & outlier antar-grup'] },
            { label: 'Bivariat: Kontinu vs Kontinu', values: ['geom_point() + geom_smooth()', 'plot()', 'Menemukan pola korelasi & tren hubungan'] },
            { label: 'Deret Waktu (Time Series)', values: ['geom_line()', 'plot(type="l")', 'Melacak fluktuasi metrik seiring berjalannya waktu'] },
          ]}
        />
      </Slide>

      {/* Slide 7: BigNumber — Edward Tufte Data-Ink Ratio */}
      <Slide
        center
        nav="Data-Ink Ratio"
        notes="Edward Tufte mengenalkan prinsip data-ink ratio: setiap tetes tinta grafis harus menyampaikan informasi riil. Hindari chartjunk, efek 3D palsu, dan latar belakang grid pekat yang melelahkan mata."
      >
        <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
          Filosofi Edward Tufte
        </div>
        <h2 className="headline" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 12 }}>
          Maksimalkan Rasio Data-Tinta (Data-Ink Ratio)
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
            <CountUp to={100} suffix="%" duration={1.5} /> Fokus
          </span>
        </div>
        <p className="lead" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: 700 }}>
          <em>"Above all else show the data."</em> Singkirkan <strong>chartjunk</strong>, warna berlebihan tanpa makna, dan efek bayangan semu yang mengalihkan perhatian dari pesan statistik.
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
            <span>❌ Hindari Pie Chart &gt; 5 Sektor</span>
            <span>•</span>
            <span>❌ Haram Grafik Batang 3D</span>
            <span>•</span>
            <span>✅ Gunakan Facet & Palet Colorblind-Friendly</span>
          </div>
        </Build>
      </Slide>

      {/* Slide 8: Steps — Visualisasi Multivariat & Heatmap */}
      <Steps
        nav="Visualisasi Multivariat"
        notes="Jelaskan alur pembuatan Heatmap Korelasi di R. Korelasi multivariat menjadi jembatan langsung sebelum kita masuk ke Bab 10 (Regresi) dan Bab 14 (PCA)."
        kicker="Analisis Dimensi Tinggi"
        title="4 Tahap Membangun Heatmap Korelasi Multivariat."
        items={[
          {
            title: '1. Filter Variabel Numerik',
            body: 'Pilih kolom metrik kuantitatif (cpu, memori, iops, latency, throughput) menggunakan select(where(is.numeric)).',
          },
          {
            title: '2. Hitung Matriks Korelasi',
            body: 'Gunakan matriks_kor <- cor(df_numerik, use = "complete.obs") untuk mendapatkan koefisien Pearson antar-pasang variabel.',
          },
          {
            title: '3. Reshaping ke Format Long',
            body: 'Transformasikan matriks kuadrat ke format tidy (var1, var2, nilai_korelasi) dengan bantuan reshape2::melt() atau pivot_longer().',
          },
          {
            title: '4. Visualisasikan dengan geom_tile()',
            body: 'Petakan nilai korelasi ke gradien warna divergen (-1 biru, 0 putih, +1 hijau zamrud) dengan scale_fill_gradient2().',
          },
        ]}
      />

      {/* Slide 9: Split — Heatmap Code Snippet */}
      <Split
        flip
        nav="Kode Heatmap"
        notes="Ajak mahasiswa menelaah kode R heatmap telemetri server dari naskah buku. Garis bawahi kemudahan penggunaan scale_fill_gradient2."
        kicker="Implementasi Praktikum"
        title={
          <>
            Heatmap Korelasi <span className="accent-text">Telemetri Server</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Heatmap korelasi memungkinkan administrator sistem mendeteksi <em>bottleneck</em> infrastruktur secara visual instan:
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              <li><strong>Korelasi Kuat (+0.89):</strong> Penggunaan CPU dan waktu tunggu queue server.</li>
              <li><strong>Korelasi Negatif (-0.74):</strong> Throughput request terhadap error rate koneksi.</li>
              <li><strong>Deteksi Multikolinearitas:</strong> Mengidentifikasi prediktor yang redundan sebelum pemodelan regresi.</li>
            </ul>
          </div>
        }
        media={
          <CodeWindow
            title="heatmap_korelasi_server.R"
            highlight={[6, 7, 8, 12]}
            code={`library(ggplot2)
library(reshape2)

# Hitung korelasi & ubah ke format panjang
matriks_kor <- cor(server_telemetri[, 1:5])
df_melted <- melt(matriks_kor)

# Bangun Heatmap Berlapis
ggplot(df_melted, aes(x = Var1, y = Var2, fill = value)) +
  geom_tile(color = "white") +
  geom_text(aes(label = round(value, 2)), color = "black", size = 4) +
  scale_fill_gradient2(low = "#ef4444", mid = "#ffffff", high = "#10b981", 
                       midpoint = 0, limit = c(-1, 1), name = "Pearson\nCorr") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1))`}
          />
        }
      />

      {/* Slide 10: Conclusion & Practical Lab */}
      <Slide
        center
        nav="Praktikum Lab"
        notes="Arahkan mahasiswa untuk membuka RStudio dan menyelesaikan praktikum_bab4.R. Tekankan target membuat minimal 3 jenis visualisasi publikasi."
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
          Praktikum Bab 4: <span className="accent-text">Storytelling Visual Data TI</span>
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
          Implementasikan skrip <code>praktikum_bab4.R</code>. Bangun visualisasi multi-panel (faceting) beban kerja server dan simpan hasil grafik resolusi tinggi siap publikasi menggunakan <code>ggsave("output_grafik.png", dpi = 300)</code>.
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
                Mahasiswa mampu menyusun grafik ilmiah interaktif dan informatif berbasis Grammar of Graphics.
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
                Buatlah panel faceted boxplot 2x2 yang membandingkan performa microservice sebelum & sesudah deployment.
              </div>
            </div>
          </div>
        </Build>
      </Slide>
    </Deck>
  );
}
