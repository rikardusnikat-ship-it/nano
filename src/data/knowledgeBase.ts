export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // === PENGANTAR & SELAMAT DATANG ===
  {
    keywords: ["halo", "hai", "hi", "hello", "selamat", "pagi", "siang", "sore", "malam", "apa kabar"],
    response: "Halo! 👋 Selamat datang di **CakraNewton** — asisten virtual untuk pengembangan video pembelajaran fisika. Saya siap membantu Anda membahas berbagai topik seputar pembuatan video pembelajaran fisika yang efektif dan menarik. Ada yang bisa saya bantu hari ini?",
    category: "pengantar"
  },
  {
    keywords: ["siapa kamu", "siapa anda", "kamu siapa", "apa itu cakranewton", "tentang kamu"],
    response: "Saya adalah **CakraNewton** 🤖, chatbot yang dirancang khusus untuk membantu mahasiswa Pendidikan Fisika dalam mengembangkan video pembelajaran. Saya memiliki pengetahuan tentang:\n\n• 📹 Teknik pembuatan video pembelajaran\n• 🎬 Software editing video\n• 📐 Visualisasi konsep fisika\n• 📚 Desain instruksional\n• 🎯 Strategi pedagogi digital\n\nSilakan tanyakan apa saja seputar pengembangan video pembelajaran fisika!",
    category: "pengantar"
  },
  {
    keywords: ["terima kasih", "thanks", "makasih", "thank"],
    response: "Sama-sama! 😊 Senang bisa membantu. Jangan ragu untuk bertanya lagi seputar pengembangan video pembelajaran fisika ya! Semangat berkarya! 🚀",
    category: "pengantar"
  },

  // === SOFTWARE & TOOLS ===
  {
    keywords: ["software", "aplikasi", "tools", "alat", "program", "edit video", "editing"],
    response: "🎬 **Software Rekomendasi untuk Video Pembelajaran Fisika:**\n\n**Gratis/Open Source:**\n• **DaVinci Resolve** — Editor profesional gratis, cocok untuk animasi fisika\n• **OBS Studio** — Screen recording & live streaming\n• **Blender** — 3D modeling & animasi konsep fisika\n• **Manim** — Library Python untuk animasi matematika/fisika (dibuat oleh 3Blue1Brown)\n• **GeoGebra** — Simulasi interaktif matematika & fisika\n\n**Berbayar:**\n• **Adobe Premiere Pro** — Editing video profesional\n• **Camtasia** — Khusus untuk video pembelajaran\n• **After Effects** — Animasi & motion graphics\n• **Algodoo** — Simulasi fisika 2D interaktif\n\n💡 **Tips:** Untuk pemula, mulai dengan **DaVinci Resolve** (gratis & powerful) + **GeoGebra** untuk simulasi!",
    category: "tools"
  },
  {
    keywords: ["manim", "animasi matematika", "3blue1brown", "python animation"],
    response: "🐍 **Manim — Library Animasi untuk Fisika & Matematika:**\n\nManim adalah library Python yang dibuat oleh Grant Sanderson (3Blue1Brown) untuk membuat animasi edukatif berkualitas tinggi.\n\n**Keunggulan Manim untuk Fisika:**\n• Animasi vektor yang crisp dan profesional\n• Cocok untuk visualisasi grafik, fungsi, dan persamaan\n• Bisa menampilkan persamaan LaTeX dengan sempurna\n• Gratis dan open source\n\n**Contoh penggunaan untuk fisika:**\n• Animasi gerak parabola\n• Visualisasi medan listrik/magnet\n• Diagram gaya dan vektor\n• Gelombang dan interferensi\n\n**Cara memulai:**\n```pip install manim```\n\n**Alternatif:** Manim Community Edition (manimce) lebih mudah dipelajari!\n\n📚 Dokumentasi: docs.manim.community",
    category: "tools"
  },
  {
    keywords: ["blender", "3d", "tiga dimensi", "modeling", "render"],
    response: "🧊 **Blender untuk Visualisasi Fisika 3D:**\n\nBlender adalah software 3D gratis yang sangat powerful untuk membuat visualisasi konsep fisika.\n\n**Penerapan untuk Video Pembelajaran Fisika:**\n• 🌌 Simulasi orbit planet & hukum Kepler\n• ⚛️ Model atom & struktur kristal\n• 🔬 Visualisasi medan listrik/magnet 3D\n• 🌊 Animasi gelombang mekanik\n• 💡 Demonstrasi optik geometri\n\n**Tips untuk Mahasiswa Pendidikan Fisika:**\n1. Mulai dari tutorial dasar Blender (Donut Tutorial by Blender Guru)\n2. Pelajari Physics Simulation di Blender\n3. Gunakan modifier untuk efek visual\n4. Export sebagai video atau GIF\n5. Kombinasikan dengan screen recording untuk narasi\n\n⏱️ **Waktu belajar:** 2-4 minggu untuk dasar, 2-3 bulan untuk mahir membuat konten fisika",
    category: "tools"
  },
  {
    keywords: ["geogebra", "simulasi", "interaktif", "grafik"],
    response: "📊 **GeoGebra untuk Video Pembelajaran Fisika:**\n\nGeoGebra adalah tools gratis yang sangat cocok untuk membuat simulasi interaktif fisika.\n\n**Fitur yang Berguna:**\n• 📈 Grafik fungsi dan persamaan fisika\n• 🎛️ Slider interaktif untuk mengubah variabel\n• 📐 Geometri dinamis untuk optik & mekanika\n• 📱 Bisa di-embed di video atau presentasi\n\n**Cara Menggunakan untuk Video:**\n1. Buat simulasi di GeoGebra\n2. Gunakan fitur **Record** atau screen capture\n3. Manipulasi slider sambil merekam\n4. Tambahkan narasi penjelasan\n5. Edit di software video editing\n\n**Contoh Simulasi Fisika di GeoGebra:**\n• Hukum Newton (F=ma dengan slider massa & gaya)\n• Gerak harmonik sederhana\n• Rangkaian listrik\n• Optik lensa\n• Termodinamika (diagram PV)\n\n🔗 Resource: geogebra.org/materials",
    category: "tools"
  },
  {
    keywords: ["canva", "presentasi", "slide", "powerpoint"],
    response: "🎨 **Canva & Tools Presentasi untuk Video Fisika:**\n\n**Canva untuk Video Pembelajaran:**\n• Template presentasi yang menarik\n• Elemen grafis sains (atom, gelombang, dll)\n• Animasi sederhana untuk transisi konsep\n• Bisa export sebagai video MP4\n• Kolaborasi tim secara real-time\n\n**PowerPoint/Google Slides + Record:**\n• Buat slide animasi langkah demi langkah\n• Gunakan fitur **Record Narration**\n• Export sebagai video\n• Cocok untuk video penjelasan konsep\n\n**Tips Desain Slide Fisika:**\n1. 🎯 Satu slide = satu konsep utama\n2. 📝 Minimal teks, perbanyak visual\n3. 🎨 Konsisten warna dan font\n4. 📐 Gunakan diagram yang jelas\n5. 🔄 Animasi bertahap (step-by-step)\n\n💡 **Rekomendasi workflow:** Buat materi di Canva/PPT → Rekam dengan OBS → Edit di DaVinci Resolve",
    category: "tools"
  },

  // === DESAIN INSTRUKSIONAL ===
  {
    keywords: ["desain instruksional", "instructional design", "model pembelajaran", "rancangan"],
    response: "📋 **Desain Instruksional untuk Video Pembelajaran Fisika:**\n\n**Model ADDIE (paling populer):**\n1. **Analysis** — Analisis kebutuhan siswa & kurikulum\n2. **Design** — Rancang storyboard & learning objectives\n3. **Development** — Produksi video & materi\n4. **Implementation** — Distribusi & penggunaan\n5. **Evaluation** — Evaluasi efektivitas video\n\n**Model ASSURE:**\n• **A**nalyze learners\n• **S**tate objectives\n• **S**elect methods & media\n• **U**tilize media & materials\n• **R**equire learner participation\n• **E**valuate & revise\n\n**Prinsip Mayer untuk Multimedia Learning:**\n• 🎯 **Coherence** — Hapus elemen tidak relevan\n• 📝 **Signaling** — Tandai informasi penting\n• 🔄 **Contiguity** — Dekatkan teks & gambar terkait\n• 📊 **Modality** — Gunakan narasi + visual (bukan teks + visual)\n• ⏱️ **Segmenting** — Pecah menjadi segmen pendek\n\n💡 Untuk fisika, kombinasikan demonstrasi visual + penjelasan konseptual!",
    category: "desain"
  },
  {
    keywords: ["storyboard", "naskah", "script", "alur video", "struktur video"],
    response: "📝 **Membuat Storyboard & Script Video Fisika:**\n\n**Struktur Video Pembelajaran yang Efektif:**\n\n**1. Pembukaan (10-15% durasi)**\n• Hook: pertanyaan/masalah/fenomena menarik\n• Contoh: \"Mengapa pelangi berbentuk lengkung?\"\n• Tujuan pembelajaran yang jelas\n\n**2. Isi/Pembahasan (70-80% durasi)**\n• Penjelasan konsep bertahap\n• Visualisasi/demonstrasi\n• Contoh soal & pembahasan\n• Koneksi antar konsep\n\n**3. Penutup (10-15% durasi)**\n• Ringkasan poin utama\n• Aplikasi konsep dalam kehidupan\n• Pertanyaan reflektif\n\n**Template Script:**\n```\n[SCENE 1 - Hook] 0:00-0:30\nVisual: [deskripsi]\nNarasi: [teks]\n\n[SCENE 2 - Konsep] 0:30-3:00\nVisual: [animasi/demonstrasi]\nNarasi: [penjelasan]\n...\n```\n\n💡 **Tips:** Durasi ideal video = 6-12 menit (berdasarkan riset MIT)",
    category: "desain"
  },
  {
    keywords: ["learning objectives", "tujuan pembelajaran", "capaian", "kompetensi"],
    response: "🎯 **Merumuskan Tujuan Pembelajaran untuk Video Fisika:**\n\n**Taksonomi Bloom (Revisi Anderson & Krathwohl):**\n\nGunakan kata kerja operasional sesuai level kognitif:\n\n**C1 - Mengingat:**\n• Menyebutkan hukum Newton\n• Mendefinisikan besaran fisika\n\n**C2 - Memahami:**\n• Menjelaskan konsep energi\n• Menginterpretasikan grafik GLBB\n\n**C3 - Menerapkan:**\n• Menghitung resultan gaya\n• Menyelesaikan soal rangkaian listrik\n\n**C4 - Menganalisis:**\n• Menganalisis hubungan variabel dalam Hukum Ohm\n• Membandingkan jenis-jenis gelombang\n\n**C5 - Mengevaluasi:**\n• Mengevaluasi hasil eksperimen\n• Menilai validitas kesimpulan\n\n**C6 - Mencipta:**\n• Merancang eksperimen sederhana\n• Membuat model penyelesaian masalah\n\n💡 **Format ABCD:**\n**A**udience + **B**ehavior + **C**ondition + **D**egree\n\nContoh: \"Setelah menonton video (C), mahasiswa (A) mampu menyelesaikan soal hukum Newton (B) dengan benar minimal 80% (D)\"",
    category: "desain"
  },

  // === TEKNIK PRODUKSI ===
  {
    keywords: ["rekam", "recording", "capture", "screen record", "tangkapan layar"],
    response: "🎥 **Teknik Recording Video Pembelajaran Fisika:**\n\n**Jenis-jenis Recording:**\n\n**1. Screencast (Paling Mudah)**\n• Rekam layar + narasi suara\n• Tools: OBS Studio, Camtasia, Loom\n• Cocok untuk: simulasi GeoGebra, presentasi\n\n**2. Whiteboard/Khan Academy Style**\n• Tulis & gambar di tablet/screen\n• Tools: OneNote + OBS, Explain Everything\n• Cocok untuk: penurunan rumus, contoh soal\n\n**3. Talking Head + Overlay**\n• Wajah pembicara + konten di samping\n• Tools: Webcam + OBS/Zoom\n• Cocok untuk: penjelasan konsep, diskusi\n\n**4. Animasi Penuh**\n• Full animasi 2D/3D\n• Tools: Manim, Blender, After Effects\n• Cocok untuk: konsep abstrak (medan, gelombang)\n\n**Setup Minimal yang Direkomendasikan:**\n• 💻 Laptop/PC\n• 🎤 Microphone USB (Boya M1 ~Rp100rb)\n• 📱 Webcam atau HP sebagai kamera\n• 💡 Lighting sederhana\n• 🖥️ OBS Studio (gratis)\n\n💡 **Tips Audio:** Audio berkualitas LEBIH PENTING dari visual!",
    category: "produksi"
  },
  {
    keywords: ["editing", "edit", "pasca produksi", "post production", "cut", "trim"],
    response: "✂️ **Teknik Editing Video Pembelajaran Fisika:**\n\n**Prinsip Editing Video Edukatif:**\n\n**1. Struktur yang Jelas**\n• Cut pada perpindahan konsep\n• Transisi halus antar segmen\n• Jeda 1-2 detik antar poin penting\n\n**2. Visual Enhancement**\n• Zoom in pada bagian penting\n• Highlight/tanda pada area fokus\n• Text overlay untuk rumus/kata kunci\n• Picture-in-picture untuk demonstrasi\n\n**3. Audio Editing**\n• Normalisasi volume (-16 LUFS standar)\n• Hapus noise background\n• Tambahkan musik latar (volume rendah)\n• Pastikan narasi jelas & terdengar\n\n**4. Elemen Tambahan**\n• Lower third (nama & topik)\n• Progress bar/timestamp\n• Call-to-action di akhir\n• Credits & referensi\n\n**Workflow Editing:**\n1. Import semua footage\n2. Rough cut (buang bagian tidak perlu)\n3. Fine cut (perhalus transisi)\n4. Tambahkan overlay & teks\n5. Audio mixing\n6. Color correction\n7. Export\n\n⚙️ **Export Settings:**\n• Format: MP4 (H.264)\n• Resolusi: 1080p (1920x1080)\n• Frame rate: 30fps\n• Bitrate: 8-12 Mbps",
    category: "produksi"
  },
  {
    keywords: ["animasi", "motion graphics", "visualisasi", "gerak"],
    response: "🎬 **Animasi & Visualisasi untuk Video Fisika:**\n\n**Konsep Fisika yang Cocok Dianimasikan:**\n\n**Mekanika:**\n• Gerak parabola dengan vektor kecepatan\n• Tumbukan elastis & non-elastis\n• Osilasi bandul & pegas\n• Rotasi benda tegar\n\n**Listrik & Magnet:**\n• Aliran elektron dalam rangkaian\n• Medan magnet di sekitar kawat berarus\n• Induksi elektromagnetik\n• Gaya Lorentz\n\n**Gelombang & Optik:**\n• Superposisi gelombang\n• Difraksi & interferensi\n• Pembiasan cahaya (Snellius)\n• Polarization\n\n**Fisika Modern:**\n• Efek fotolistrik\n• Model atom Bohr\n• Dualisme gelombang-partikel\n\n**Tools Animasi per Level:**\n\n🟢 **Pemula:** Canva, PowerPoint animations\n🟡 **Menengah:** GeoGebra, Algodoo, PhET\n🔴 **Advanced:** Manim (Python), Blender, After Effects\n\n💡 **Tips:** Mulai dari konsep yang paling sulit dipahami siswa — animasi bisa membuat konsep abstrak menjadi konkret!",
    category: "produksi"
  },

  // === KONTEN FISIKA ===
  {
    keywords: ["mekanika", "hukum newton", "gaya", "gerak", "kinematika", "dinamika"],
    response: "🍎 **Video Pembelajaran Mekanika — Tips & Ide:**\n\n**Topik yang Sering Divideo-kan:**\n\n**1. Hukum Newton I, II, III**\n• Demonstrasi dengan benda sehari-hari\n• Animasi free body diagram\n• Contoh soal bertahap\n\n**2. Gerak Lurus (GLB & GLBB)**\n• Grafik x-t, v-t, a-t animasi\n• Simulasi dengan slider variabel\n• Soal kontekstual (mobil, atlet)\n\n**3. Gerak Parabola**\n• Animasi trajectory dengan vektor\n• Pengaruh sudut tembak\n• Aplikasi: olahraga, proyektil\n\n**4. Energi & Momentum**\n• Transformasi energi visual\n• Animasi tumbukan\n• Hukum kekekalan\n\n**Ide Video Kreatif:**\n• 🎬 \"Fisika di Sekitar Kita\" — fenomena sehari-hari\n• 🧪 Demo eksperimen sederhana di rumah\n• 📊 Perbandingan konsep (misal: GLB vs GLBB)\n• 🎮 Simulasi game fisika (Algodoo)\n\n**Durasi rekomendasi per subtopik:** 8-12 menit\n**Format:** Hook → Konsep → Demonstrasi → Contoh Soal → Ringkasan",
    category: "konten"
  },
  {
    keywords: ["listrik", "magnet", "elektromagnetik", "rangkaian", "arus"],
    response: "⚡ **Video Pembelajaran Listrik & Magnet:**\n\n**Tantangan Visualisasi:**\nListrik & magnet bersifat abstrak — tidak terlihat! Maka animasi SANGAT PENTING.\n\n**Ide Visualisasi:**\n\n**1. Rangkaian Listrik**\n• Animasi aliran elektron (conventional current vs electron flow)\n• Warna berbeda untuk tegangan, arus, hambatan\n• Simulasi interaktif Ohm's Law\n\n**2. Medan Magnet**\n• Visualisasi garis gaya magnet\n• Animasi kaidah tangan kanan\n• Medan di sekitar solenoida\n\n**3. Induksi Elektromagnetik**\n• Animasi fluks magnetik berubah\n• Visualisasi GGL induksi\n• Hukum Lenz dengan animasi arah arus\n\n**4. Gelombang EM**\n• Animasi medan E dan B saling tegak lurus\n• Spektrum elektromagnetik\n• Propagasi gelombang\n\n**Tools Terbaik:**\n• **PhET Simulations** — simulasi interaktif gratis\n• **Falstad Circuit Simulator** — rangkaian listrik online\n• **Manim** — animasi custom berkualitas tinggi\n\n💡 **Tips:** Gunakan analogi visual (air mengalir = arus listrik) untuk memudahkan pemahaman!",
    category: "konten"
  },
  {
    keywords: ["termodinamika", "suhu", "kalor", "panas", "energi dalam"],
    response: "🌡️ **Video Pembelajaran Termodinamika:**\n\n**Konsep yang Perlu Divisualisasikan:**\n\n**1. Suhu & Kalor**\n• Animasi gerak partikel (kinetik vs suhu)\n• Perpindahan kalor: konduksi, konveksi, radiasi\n• Termometer & skala suhu\n\n**2. Hukum Termodinamika**\n• **Hukum 0:** Kesetimbangan termal (animasi)\n• **Hukum 1:** Diagram energi masuk-keluar\n• **Hukum 2:** Entropi & arah proses spontan\n• **Hukum 3:** Pendekatan nol mutlak\n\n**3. Gas Ideal**\n• Diagram PV, PT, VT\n• Animasi partikel gas dalam wadah\n• Proses: isotermal, isobarik, isokhorik, adiabatik\n\n**4. Mesin Kalor**\n• Siklus Carnot animasi\n• Efisiensi mesin\n• Diagram PV siklus\n\n**Ide Video Kreatif:**\n• 🍳 Termodinamika di dapur (memasak)\n• 🚗 Mesin kendaraan sebagai mesin kalor\n• 🧊 Eksperimen sederhana (es mencair, air mendidih)\n• 🌍 Pemanasan global & efek rumah kaca\n\n**Tools:** PhET (Gas Properties), GeoGebra (diagram PV), Manim (animasi partikel)",
    category: "konten"
  },
  {
    keywords: ["gelombang", "optik", "cahaya", "bunyi", "frekuensi"],
    response: "🌊 **Video Pembelajaran Gelombang & Optik:**\n\n**Gelombang — Visualisasi Kunci:**\n\n**1. Gelombang Mekanik**\n• Animasi transversal vs longitudinal\n• Parameter: amplitudo, frekuensi, λ, v\n• Superposisi & interferensi\n• Gelombang berdiri (standing waves)\n\n**2. Bunyi**\n• Visualisasi gelombang tekanan\n• Efek Doppler (animasi sumber bergerak)\n• Resonansi pada pipa organa\n• Spektrum frekuensi bunyi\n\n**3. Optik**\n• Pembiasan (animasi Snellius)\n• Pemantulan total internal\n• Lensa cembung/cekung + sinar istimewa\n• Difraksi & interferensi cahaya\n• Polarization\n\n**Tools Visualisasi Terbaik:**\n• 🌐 **PhET Wave Interference** — simulasi gratis\n• 🌐 **Falstad Ripple** — simulasi gelombang 2D\n• 📐 **GeoGebra** — diagram sinar optik\n• 🐍 **Manim** — animasi gelombang custom\n\n**Ide Video Menarik:**\n• 🌈 Pelangi & dispersi cahaya\n• 🎵 Musik & gelombang bunyi\n• 📱 Cara kerja layar HP (polarisasi)\n• 🏥 USG & aplikasi gelombang dalam medis\n\n💡 Gelombang adalah topik yang PALING COCOK untuk animasi karena sangat visual!",
    category: "konten"
  },
  {
    keywords: ["fisika modern", "kuantum", "relativitas", "atom", "nuklir"],
    response: "⚛️ **Video Pembelajaran Fisika Modern:**\n\nFisika modern sangat abstrak — animasi & visualisasi WAJIB digunakan!\n\n**Topik & Ide Visualisasi:**\n\n**1. Dualisme Gelombang-Partikel**\n• Animasi eksperimen celah ganda Young\n• Visualisasi probabilitas finding particle\n• De Broglie wavelength animation\n\n**2. Efek Fotolistrik**\n• Animasi foton menumbuk logam\n• Threshold frequency visualization\n• Grafik Einstein (Ek vs f)\n\n**3. Model Atom**\n• Evolusi model: Dalton → Thomson → Rutherford → Bohr → Mekanika Kuantum\n• Animasi transisi elektron & emisi foton\n• Orbital atom 3D (Blender)\n\n**4. Relativitas Khusus**\n• Time dilation animation\n• Length contraction visualization\n• Diagram ruang-waktu (Minkowski)\n\n**5. Fisika Nuklir**\n• Animasi peluruhan radioaktif\n• Reaksi fisi & fusi\n• Binding energy curve\n\n**Tools:**\n• **Blender** — model atom 3D\n• **Manim** — animasi konsep abstrak\n• **PhET** — simulasi kuantum\n\n💡 **Tips:** Gunakan analogi dan perbandingan untuk konsep yang sangat abstrak!",
    category: "konten"
  },

  // === PEDAGOGI & STRATEGI ===
  {
    keywords: ["pedagogi", "strategi", "metode", "pendekatan", "pembelajaran"],
    response: "📚 **Strategi Pedagogi untuk Video Pembelajaran Fisika:**\n\n**1. Constructivist Approach**\n• Mulai dari miskonsepsi siswa\n• Bangun pengetahuan dari yang sudah diketahui\n• Gunakan pertanyaan provokatif\n\n**2. Inquiry-Based Learning**\n• Ajukan masalah → investigasi → kesimpulan\n• Video sebagai trigger pertanyaan\n• Dorong siswa berpikir kritis\n\n**3. Flipped Classroom**\n• Video untuk materi di rumah\n• Kelas untuk diskusi & pemecahan masalah\n• Video harus self-contained & jelas\n\n**4. Scaffolding dalam Video**\n• Mulai dari konsep sederhana → kompleks\n• Berikan contoh sebelum teori\n• Gunakan advance organizer\n\n**5. Multimedia Learning (Mayer's Principles)**\n• 🖼️ Gambar + narasi > teks + gambar\n• 📍 Letakkan label dekat bagian gambar\n• 🚫 Hindari informasi redundant\n• ⏱️ Kontrol kecepatan (allow pause/replay)\n• 🎯 Fokus pada esensi, hilangkan distraksi\n\n**Tips Khusus Fisika:**\n• Selalu hubungkan rumus dengan makna fisis\n• Tunjukkan aplikasi dalam kehidupan nyata\n• Gunakan multiple representasi (verbal, visual, matematis)",
    category: "pedagogi"
  },
  {
    keywords: ["miskonsepsi", "kesalahpahaman", "misconception", "kesulitan"],
    response: "🧠 **Menangani Miskonsepsi Fisika dalam Video:**\n\n**Miskonsepsi Umum yang Perlu Diatasi:**\n\n**Mekanika:**\n• ❌ \"Benda berat jatuh lebih cepat\" → ✅ Tunjukkan eksperimen Galileo\n• ❌ \"Gaya diperlukan untuk mempertahankan gerak\" → ✅ Hukum I Newton\n• ❌ \"Akselerasi selalu searah gaya\" → ✅ Gerak melingkar\n\n**Listrik:**\n• ❌ \"Arus habis di sepanjang rangkaian\" → ✅ Animasi aliran elektron\n• ❌ \"Baterai menghasilkan arus tetap\" → ✅ Tergantung hambatan\n\n**Optik:**\n• ❌ \"Bayangan di cermin ada di permukaan cermin\" → ✅ Animasi perpanjangan sinar\n• ❌ \"Lensа hanya memperbesar\" → ✅ Bisa memperkecil juga\n\n**Strategi dalam Video:**\n1. **Elicit** — Tanyakan dulu pendapat siswa\n2. **Confront** — Tunjukkan bukti/kontradiksi\n3. **Resolve** — Jelaskan konsep yang benar\n4. **Extend** — Berikan contoh aplikasi\n\n💡 **Format Video:**\n\"Mitos vs Fakta\" atau \"Apa yang Salah?\" — format ini sangat engaging!",
    category: "pedagogi"
  },
  {
    keywords: ["asesmen", "evaluasi", "penilaian", "quiz", "soal"],
    response: "📝 **Asesmen dalam Video Pembelajaran Fisika:**\n\n**Jenis Asesmen yang Bisa Diintegrasikan:**\n\n**1. Pre-Assessment (dalam video)**\n• Pertanyaan pembuka untuk mengaktivasi prior knowledge\n• \"Menurut kalian, apa yang terjadi jika...?\"\n• Polling/quiz singkat\n\n**2. Formative Assessment (di tengah video)**\n• Check for understanding setiap 3-4 menit\n• \"Coba pause video dan kerjakan soal ini...\"\n• Embedded questions (jika platform mendukung)\n\n**3. Post-Assessment (akhir video)**\n• Soal latihan dengan pembahasan\n• Reflection questions\n• Link ke quiz online\n\n**Tips Membuat Soal dalam Video:**\n• Variasi level kognitif (C1-C6)\n• Kontekstual & relevan\n• Berikan waktu pause untuk berpikir\n• Tunjukkan langkah penyelesaian bertahap\n\n**Platform untuk Interactive Video:**\n• 🌐 **Edpuzzle** — embed quiz di video\n• 🌐 **H5P** — interactive content\n• 🌐 **YouTube Cards & End Screens**\n• 🌐 **LMS (Moodle, Google Classroom)**\n\n💡 **Best Practice:** Setiap 6-8 menit video, sisipkan 1 pertanyaan check-understanding!",
    category: "pedagogi"
  },

  // === PLATFORM & DISTRIBUSI ===
  {
    keywords: ["youtube", "upload", "platform", "distribusi", "share", "bagikan"],
    response: "📤 **Platform Distribusi Video Pembelajaran Fisika:**\n\n**1. YouTube (Paling Populer)**\n✅ Jangkauan luas, gratis, analitik lengkap\n✅ Fitur: playlist, chapter, cards, subtitles\n💡 Tips SEO: judul mengandung kata kunci, thumbnail menarik, deskripsi lengkap\n\n**2. Google Classroom / LMS**\n✅ Terintegrasi dengan tugas & penilaian\n✅ Privasi terjaga (hanya siswa tertentu)\n💡 Upload langsung atau share link YouTube (unlisted)\n\n**3. Website/Blog Pribadi**\n✅ Branding personal, kontrol penuh\n✅ Bisa embed video + materi pendukung\n💡 Gunakan WordPress, Notion, atau GitHub Pages\n\n**4. Media Sosial Edukatif**\n✅ Instagram Reels / TikTok — video pendek (1-3 menit)\n✅ Twitter/X — thread penjelasan konsep\n💡 Cocok untuk \"Fisika dalam 60 Detik\"\n\n**5. Repository Institusi**\n✅ Google Drive, OneDrive\n✅ Akses terbatas untuk mahasiswa\n\n**Tips Optimasi:**\n• 📱 Pastikan responsive (mobile-friendly)\n• 📝 Tambahkan subtitle/caption\n• 🏷️ Gunakan tag & kategori yang tepat\n• 📊 Monitor analytics untuk improvement\n• 🔄 Update konten secara berkala",
    category: "platform"
  },
  {
    keywords: ["aksesibilitas", "accessibility", "subtitle", "caption", "inklusi"],
    response: "♿ **Aksesibilitas Video Pembelajaran Fisika:**\n\n**Mengapa Aksesibilitas Penting?**\n• Mahasiswa dengan gangguan pendengaran\n• Mahasiswa yang belajar di tempat bising\n• Non-native speakers\n• Belajar di mode silent\n\n**Checklist Aksesibilitas:**\n\n**1. Subtitle/Caption** ✅\n• YouTube auto-generate → edit manual\n• Gunakan format SRT\n• Pastikan istilah fisika benar\n\n**2. Audio Description** 🎧\n• Narasi yang menjelaskan visual\n• \"Perhatikan grafik di sebelah kiri...\"\n• Jangan hanya mengandalkan visual\n\n**3. Visual Accessibility** 👁️\n• Kontras warna tinggi\n• Font minimal 24pt untuk teks\n• Hindari flickering (epilepsy)\n• Color-blind friendly palette\n\n**4. Navigasi** 🧭\n• Chapter markers/timestamps\n• Playlist terstruktur\n• Kecepatan playback adjustable\n\n**5. Transkrip** 📄\n• Sediakan transkrip lengkap\n• Berguna untuk review & pencarian\n• Bisa dijadikan materi bacaan\n\n💡 **Tools:**\n• YouTube Studio → Auto-caption\n• Otter.ai → Transkrip otomatis\n• Accessible Colors: coolors.co",
    category: "platform"
  },

  // === TIPS & BEST PRACTICES ===
  {
    keywords: ["tips", "saran", "rekomendasi", "best practice", "trik"],
    response: "💡 **Tips & Best Practices Video Pembelajaran Fisika:**\n\n**Konten:**\n1. 🎯 Satu video = satu topik spesifik\n2. ⏱️ Durasi ideal: 6-12 menit\n3. 📝 Gunakan bahasa yang sesuai level mahasiswa\n4. 🔄 Hubungkan dengan materi sebelumnya\n5. 🌍 Berikan konteks kehidupan nyata\n\n**Visual:**\n6. 🎨 Konsisten visual style & branding\n7. 📐 Diagram & grafik harus jelas & terbaca\n8. 🖌️ Gunakan warna untuk membedakan variabel\n9. ✨ Animasi secukupnya (jangan berlebihan)\n10. 📏 Pastikan notasi matematika benar\n\n**Audio:**\n11. 🎤 Audio jelas > visual bagus\n12. 🗣️ Bicara dengan tempo sedang\n13. 📢 Intonasi bervariasi (jangan monoton)\n14. 🔇 Hapus noise & background yang mengganggu\n15. 🎵 Musik latar opsional, volume rendah\n\n**Engagement:**\n16. 🪝 Hook di 10 detik pertama\n17. ❓ Ajukan pertanyaan retoris\n18. 🧩 Gunakan analogi & metafora\n19. 😄 Sedikit humor bisa membantu\n20. 📊 Tunjukkan \"mengapa ini penting\"\n\n**Produksi:**\n21. 📋 Selalu buat storyboard dulu\n22. 🎬 Rekam audio terpisah jika perlu\n23. 💾 Backup semua file project\n24. 📝 Simpan template untuk konsistensi\n25. 🔄 Iterasi berdasarkan feedback",
    category: "tips"
  },
  {
    keywords: ["kolaborasi", "tim", "kerja sama", "pembagian tugas"],
    response: "👥 **Kolaborasi Tim dalam Produksi Video Fisika:**\n\n**Peran dalam Tim Produksi:**\n\n**1. Content Developer (Ahli Materi)**\n• Menyusun materi fisika\n• Memastikan kebenaran konsep\n• Membuat naskah/script\n\n**2. Instructional Designer**\n• Merancang alur pembelajaran\n• Menentukan strategi pedagogi\n• Membuat storyboard\n\n**3. Visual Designer/Animator**\n• Membuat grafis & animasi\n• Desain slide & overlay\n• Ilustrasi konsep\n\n**4. Video Editor**\n• Editing & post-production\n• Audio mixing\n• Final rendering\n\n**5. Quality Reviewer**\n• Review konten fisika\n• Review pedagogi\n• Review kualitas produksi\n\n**Tools Kolaborasi:**\n• 📋 **Trello/Notion** — manajemen project\n• 💬 **Discord/WhatsApp** — komunikasi\n• ☁️ **Google Drive** — berbagi file\n• 🎨 **Figma** — desain kolaboratif\n• 📝 **Google Docs** — penulisan naskah\n\n**Workflow Tim:**\n1. Brainstorming & planning\n2. Script writing & review\n3. Asset creation (parallel)\n4. Recording\n5. Editing\n6. Review & revision\n7. Final export & publish\n\n💡 **Tips:** Gunakan version control untuk file project!",
    category: "tips"
  },
  {
    keywords: ["evaluasi video", "penilaian video", "rubrik", "kriteria"],
    response: "📊 **Evaluasi & Rubrik Penilaian Video Pembelajaran:**\n\n**Rubrik Evaluasi Video Fisika:**\n\n**1. Konten (30%)**\n• Kebenaran konsep fisika\n• Kelengkapan materi\n• Kedalaman pembahasan\n• Kesesuaian dengan kurikulum\n\n**2. Desain Instruksional (25%)**\n• Kejelasan tujuan pembelajaran\n• Struktur & alur logis\n• Scaffolding & sequencing\n• Integrasi asesmen\n\n**3. Kualitas Visual (20%)**\n• Kejelasan gambar/diagram\n• Kualitas animasi\n• Konsistensi visual\n• Keterbacaan teks\n\n**4. Kualitas Audio (15%)**\n• Kejelasan narasi\n• Volume konsisten\n• Tempo bicara sesuai\n• Minim noise\n\n**5. Engagement (10%)**\n• Hook & opening menarik\n• Variasi visual\n• Interaktivitas\n• Motivasi belajar\n\n**Metode Evaluasi:**\n• 👥 Peer review antar mahasiswa\n• 📝 Self-assessment checklist\n• 📊 Analytics (views, watch time, completion rate)\n• 💬 Feedback dari siswa target\n• 🧪 Pre-post test untuk mengukur efektivitas\n\n💡 **Formulir Evaluasi Sederhana:**\nSkala 1-5 untuk setiap aspek + kolom komentar!",
    category: "tips"
  },

  // === REFERENSI & SUMBER BELAJAR ===
  {
    keywords: ["referensi", "sumber belajar", "tutorial", "belajar", "course", "kursus"],
    response: "📚 **Sumber Belajar untuk Pengembangan Video Fisika:**\n\n**Tutorial Video Editing:**\n• 🎬 DaVinci Resolve — YouTube (Casey Faris, Blackmagic Design)\n• 🎬 Premiere Pro — YouTube (Premiere Gal)\n• 🎬 Camtasia — TechSmith official tutorials\n\n**Tutorial Animasi Fisika:**\n• 🐍 Manim — YouTube (Theorem of Beethoven, Power of Ten)\n• 🧊 Blender — Blender Guru, CG Cookie\n• 📊 GeoGebra — GeoGebra official tutorials\n\n**Pedagogi & Desain Instruksional:**\n• 📖 \"Multimedia Learning\" — Richard Mayer\n• 📖 \"E-Learning and the Science of Instruction\" — Clark & Mayer\n• 🎓 Coursera: \"Learning to Teach Online\" (UNSW)\n• 🎓 edX: \"Introduction to Instructional Design\"\n\n**Channel YouTube Fisika (Referensi Konten):**\n• 🇮🇩 Physics Academy, Sibejoo\n• 🌍 Veritasium, 3Blue1Brown, Physics Girl\n• 🌍 MinutePhysics, SmarterEveryDay\n• 🌍 Walter Lewin lectures (MIT OCW)\n\n**Komunitas:**\n• 💬 Forum Pendidikan Fisika Indonesia\n• 💬 Reddit: r/PhysicsTeachers\n• 💬 AAPT (American Association of Physics Teachers)\n\n💡 **Rekomendasi:** Luangkan 30 menit/hari untuk belajar satu tools baru!",
    category: "referensi"
  },
  {
    keywords: ["penelitian", "research", "jurnal", "skripsi", "tesis"],
    response: "🔬 **Penelitian Terkait Video Pembelajaran Fisika:**\n\n**Topik Penelitian yang Relevan:**\n\n**1. Efektivitas Video**\n• Pengaruh video terhadap hasil belajar\n• Perbandingan video vs metode konvensional\n• Video animasi vs video demonstrasi\n\n**2. Desain Video**\n• Pengaruh durasi video terhadap engagement\n• Desain multimedia berdasarkan prinsip Mayer\n• Pengaruh gaya narasi terhadap pemahaman\n\n**3. Teknologi**\n• Interactive video vs passive video\n• VR/AR untuk pembelajaran fisika\n• AI-generated educational content\n\n**Jurnal Referensi:**\n• 📰 Jurnal Pendidikan Fisika Indonesia (JPFI)\n• 📰 Physical Review Physics Education Research\n• 📰 Journal of Science Education and Technology\n• 📰 Computers & Education\n• 📰 Jurnal Inovasi Pendidikan Fisika (JIPF)\n\n**Kata Kunci Pencarian:**\n• \"video pembelajaran fisika\"\n• \"multimedia physics education\"\n• \"animated video physics learning\"\n• \"instructional video effectiveness\"\n• \"physics education technology\"\n\n💡 **Tips Skripsi:** Kombinasikan pengembangan video + uji efektivitas dengan pre-post test + N-Gain!",
    category: "referensi"
  }
];

export const suggestedQuestions: string[] = [
  "Software apa yang cocok untuk membuat video fisika?",
  "Bagaimana cara membuat storyboard video?",
  "Tips membuat animasi konsep fisika?",
  "Bagaimana mendesain video yang menarik?",
  "Apa saja miskonsepsi fisika yang perlu diatasi?",
  "Bagaimana cara merekam video pembelajaran?",
  "Platform apa yang cocok untuk upload video?",
  "Bagaimana prinsip desain instruksional untuk video?",
  "Tools animasi apa yang gratis untuk fisika?",
  "Bagaimana menangani topik fisika modern dalam video?"
];

export const categories = [
  { id: "tools", label: "🎬 Software & Tools", icon: "🎬" },
  { id: "desain", label: "📋 Desain Instruksional", icon: "📋" },
  { id: "produksi", label: "🎥 Teknik Produksi", icon: "🎥" },
  { id: "konten", label: "📐 Konten Fisika", icon: "📐" },
  { id: "pedagogi", label: "📚 Pedagogi", icon: "📚" },
  { id: "platform", label: "📤 Platform & Distribusi", icon: "📤" },
  { id: "tips", label: "💡 Tips & Best Practices", icon: "💡" },
  { id: "referensi", label: "📚 Referensi & Riset", icon: "📚" }
];
