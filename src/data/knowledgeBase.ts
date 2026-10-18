export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // =============================================
  // === PENGANTAR & SELAMAT DATANG ===
  // =============================================
  {
    keywords: ["halo", "hai", "hi", "hello", "selamat", "pagi", "siang", "sore", "malam", "apa kabar", "hey", "p"],
    response: `Halo! 👋 Selamat datang di **CakraNewton** — asisten virtual khusus untuk pengembangan video pembelajaran fisika.

Saya dirancang untuk membantu mahasiswa **Pendidikan Fisika** dalam berbagai aspek pembuatan video pembelajaran, mulai dari perencanaan, produksi, hingga distribusi.

**Apa yang bisa saya bantu?**
🎬 Pemilihan software & tools editing video
📋 Desain instruksional & pembuatan storyboard
🎥 Teknik recording, editing, dan animasi
📐 Visualisasi konsep fisika (mekanika, listrik, gelombang, dll)
📚 Strategi pedagogi & penanganan miskonsepsi
📤 Platform distribusi & aksesibilitas
💡 Tips, best practices, & referensi riset
🔬 Panduan penelitian/skripsi terkait video pembelajaran

Silakan ketik pertanyaan Anda, atau pilih salah satu topik di sidebar untuk menjelajah lebih dalam! 🚀`,
    category: "pengantar"
  },
  {
    keywords: ["siapa kamu", "siapa anda", "kamu siapa", "apa itu cakranewton", "tentang kamu", "apa ini"],
    response: `Saya adalah **CakraNewton** ⚛️🤖 — chatbot yang dirancang khusus sebagai companion bagi mahasiswa Pendidikan Fisika dalam mengembangkan video pembelajaran.

**🎯 Misi Saya:**
Membantu mahasiswa pendidikan fisika menguasai keterampilan produksi video pembelajaran yang efektif, pedagogis, dan menarik — sehingga mereka siap menjadi guru fisika yang kompeten di era digital.

**📚 Pengetahuan Saya Mencakup:**

**1. Software & Tools**
DaVinci Resolve, Blender, Manim, GeoGebra, OBS Studio, Canva, Camtasia, Algodoo, PhET Simulations, dan lainnya.

**2. Desain Instruksional**
Model ADDIE, ASSURE, Dick & Carey, prinsip Mayer, taksonomi Bloom, backward design, dan framework pedagogi lainnya.

**3. Konten Fisika**
Mekanika klasik, listrik-magnet, termodinamika, gelombang-optik, fisika modern, dan fisika inti — lengkap dengan ide visualisasi.

**4. Produksi Video**
Teknik recording, editing, animasi, motion graphics, audio production, dan post-production workflow.

**5. Pedagogi Digital**
Flipped classroom, inquiry-based learning, constructivism, scaffolding, dan penanganan miskonsepsi fisika.

**6. Distribusi & Evaluasi**
Platform upload, SEO, aksesibilitas, rubrik penilaian, dan metode evaluasi efektivitas video.

**7. Penelitian & Skripsi**
Topik penelitian, jurnal referensi, metodologi, dan tips menyusun skripsi tentang video pembelajaran fisika.

Tanyakan apa saja! Saya siap membantu Anda menjadi produsen video pembelajaran fisika yang handal! 💪`,
    category: "pengantar"
  },
  {
    keywords: ["terima kasih", "thanks", "makasih", "thank", "sukses", "mantap", "keren", "bagus"],
    response: `Sama-sama! 😊 Senang bisa membantu perjalanan Anda dalam mengembangkan video pembelajaran fisika.

Beberapa hal yang bisa Anda lakukan selanjutnya:
• 🎬 Mulai buat storyboard untuk video pertama Anda
• 📐 Pilih satu konsep fisika yang ingin divisualisasikan
• 🛠️ Download dan eksplorasi salah satu software yang direkomendasikan
• 📚 Pelajari prinsip multimedia learning dari Richard Mayer

Jangan ragu untuk kembali bertanya kapan saja! Semangat berkarya dan menjadi guru fisika inspiratif! 🚀⚛️`,
    category: "pengantar"
  },
  {
    keywords: ["bisa apa", "fitur", "kemampuan", "fungsi", "help", "bantuan", "menu"],
    response: `Berikut adalah kemampuan saya, **CakraNewton** ⚛️:

**🎬 SOFTWARE & TOOLS**
→ Rekomendasi software editing video (gratis & berbayar)
→ Tutorial Manim, Blender, GeoGebra, OBS Studio
→ Perbandingan tools dan cara memilih yang tepat
→ Setup minimal untuk mulai produksi

**📋 DESAIN INSTRUKSIONAL**
→ Model ADDIE, ASSURE, Dick & Carey
→ Cara membuat storyboard & script
→ Merumuskan tujuan pembelajaran (Taksonomi Bloom)
→ Prinsip Mayer untuk multimedia learning

**🎥 TEKNIK PRODUKSI**
→ Jenis-jenis recording (screencast, whiteboard, talking head)
→ Teknik editing video pembelajaran
→ Animasi & visualisasi konsep fisika
→ Setup audio & lighting

**📐 KONTEN FISIKA**
→ Mekanika (Hukum Newton, kinematika, energi)
→ Listrik-Magnet (rangkaian, medan, induksi)
→ Termodinamika (suhu, kalor, hukum termodinamika)
→ Gelombang & Optik (interferensi, difraksi, lensa)
→ Fisika Modern (kuantum, relativitas, nuklir)

**📚 PEDAGOGI**
→ Strategi pembelajaran (constructivist, inquiry, flipped)
→ Menangani miskonsepsi fisika
→ Asesmen dalam video (pre, formative, post)
→ Differentiated instruction

**📤 PLATFORM & DISTRIBUSI**
→ YouTube, LMS, media sosial, website
→ SEO & optimasi video
→ Aksesibilitas (subtitle, transkrip)
→ Analitik & monitoring

**💡 TIPS & BEST PRACTICES**
→ 25+ tips produksi video
→ Kolaborasi tim produksi
→ Rubrik evaluasi video
→ Workflow & project management

**🔬 REFERENSI & RISET**
→ Sumber belajar & tutorial
→ Jurnal & penelitian terkait
→ Topik skripsi/tesis
→ Komunitas & networking

Silakan tanya topik manapun! 🎓`,
    category: "pengantar"
  },

  // =============================================
  // === SOFTWARE & TOOLS ===
  // =============================================
  {
    keywords: ["software", "aplikasi", "tools", "alat", "program", "edit video", "editing", "rekomendasi software"],
    response: `🎬 **Panduan Lengkap Software untuk Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🟢 LEVEL PEMULA (Gratis & Mudah)**

**1. Canva (Web-based)**
• Kelebihan: Template siap pakai, drag-and-drop, kolaborasi real-time
• Fitur video: Animasi teks, transisi, stock footage, musik
• Cocok untuk: Video penjelasan konsep sederhana, presentasi animasi
• Limitasi: Animasi terbatas, tidak cocok untuk simulasi fisika kompleks
• 💰 Gratis (Pro: ~Rp80rb/bulan)

**2. PowerPoint + Record**
• Kelebihan: Familiar, animasi custom, export video
• Fitur: Morph transition, zoom, screen recording
• Cocok untuk: Video penjelasan bertahap, penurunan rumus
• 💰 Sudah tersedia di kebanyakan laptop

**3. GeoGebra (Web/Desktop)**
• Kelebihan: Simulasi matematika-fisika interaktif, gratis
• Fitur: Grafik dinamis, slider, geometri, 3D
• Cocok untuk: Visualisasi grafik, fungsi, geometri optik
• 💰 100% Gratis

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🟡 LEVEL MENENGAH (Perlu Belajar)**

**4. DaVinci Resolve (Desktop)**
• Kelebihan: Editor profesional GRATIS, color grading terbaik
• Fitur: Multi-track editing, fusion (VFX), Fairlight (audio), color
• Cocok untuk: Editing video serius, color correction, compositing
• 💡 Versi gratis sudah sangat powerful!
• 💰 Gratis (Studio: ~$295 one-time)

**5. OBS Studio (Desktop)**
• Kelebihan: Screen recording & streaming terbaik, open source
• Fitur: Scene management, overlay, virtual camera, streaming
• Cocok untuk: Screencast, recording simulasi, video kuliah
• 💰 100% Gratis & Open Source

**6. Camtasia (Desktop)**
• Kelebihan: Dirancang khusus untuk video pembelajaran
• Fitur: Screen recording, annotations, quiz, cursor effects
• Cocok untuk: Tutorial, demo software, video kuliah online
• 💰 ~$179 (lisensi permanen)

**7. Algodoo (Desktop)**
• Kelebihan: Simulasi fisika 2D interaktif, sangat intuitif
• Fitur: Drag-and-drop objek, simulasi gravitasi, fluida, optik
• Cocok untuk: Demonstrasi hukum fisika, eksperimen virtual
• 💰 Gratis

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🔴 LEVEL ADVANCED (Butuh Dedikasi)**

**8. Blender (Desktop)**
• Kelebihan: 3D modeling, animation, rendering kelas dunia
• Fitur: Physics simulation, compositing, video editing, scripting
• Cocok untuk: Visualisasi 3D konsep fisika, simulasi orbit, model atom
• 💰 100% Gratis & Open Source

**9. Manim (Python)**
• Kelebihan: Animasi matematis-fisis berkualitas tinggi
• Fitur: LaTeX rendering, vektor animasi, scene management
• Cocok untuk: Penurunan rumus, visualisasi vektor, grafik dinamis
• 💡 Dipopulerkan oleh 3Blue1Brown
• 💰 Gratis & Open Source

**10. Adobe After Effects (Desktop)**
• Kelebihan: Motion graphics & VFX terbaik di industri
• Fitur: Keyframe animation, expressions, plugins, 3D
• Cocok untuk: Intro/outro, animasi konsep, efek visual
• 💰 ~Rp300rb/bulan (subscription)

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🛠️ SETUP MINIMAL YANG DIREKOMENDASIKAN:**

Untuk mahasiswa yang baru mulai:
1. **DaVinci Resolve** (editing) — gratis & profesional
2. **OBS Studio** (recording) — gratis & powerful
3. **GeoGebra** (simulasi) — gratis & edukatif
4. **Canva** (grafis/thumbnail) — gratis & mudah

**Total biaya: Rp 0!** 🎉

💡 **Tips:** Jangan terjebak memilih tools. Mulai dengan yang gratis, kuasai, lalu upgrade jika diperlukan. Yang terpenting adalah KONTEN dan PEDAGOGI, bukan kecanggihan tools!`,
    category: "tools"
  },
  {
    keywords: ["manim", "animasi matematika", "3blue1brown", "python animation", "manim community"],
    response: `🐍 **Manim — Panduan Lengkap Animasi Fisika dengan Python**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Apa itu Manim?**
Manim (Mathematical Animation) adalah library Python yang dibuat oleh **Grant Sanderson** (channel YouTube 3Blue1Brown) untuk menghasilkan animasi edukatif berkualitas tinggi secara programatis.

**🎯 Mengapa Manim Cocok untuk Fisika?**
• ✅ Rendering vektor yang crisp di semua resolusi
• ✅ Support LaTeX untuk persamaan matematika
• ✅ Animasi vektor, grafik, dan transformasi yang smooth
• ✅ Bisa membuat visualisasi yang sulit dibuat di software lain
• ✅ Reproducible — cukup jalankan script untuk regenerate
• ✅ Komunitas aktif dan dokumentasi lengkap

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📦 Instalasi & Setup:**

**Opsi 1: Manim Community (Direkomendasikan)**
\`\`\`
pip install manim
\`\`\`

**Opsi 2: ManimGL (Versi Grant Sanderson)**
\`\`\`
pip install manimgl
\`\`\`

**Dependency yang diperlukan:**
• Python 3.7+
• FFmpeg (untuk rendering video)
• LaTeX distribution (MiKTeX/TexLive untuk persamaan)
• Cairo graphics library

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Contoh Kode Dasar:**

**1. Animasi Lingkaran ke Kotak:**
\`\`\`python
from manim import *

class ShapeTransform(Scene):
    def construct(self):
        circle = Circle(color=BLUE, fill_opacity=0.5)
        square = Square(color=RED, fill_opacity=0.5)
        
        self.play(Create(circle))
        self.wait()
        self.play(Transform(circle, square))
        self.wait()
\`\`\`

**2. Visualisasi Gerak Parabola:**
\`\`\`python
from manim import *
import numpy as np

class ProjectileMotion(Scene):
    def construct(self):
        # Setup sumbu
        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 6, 1],
            axis_config={"include_tip": True}
        )
        axes_labels = axes.get_axis_labels(x_label="x (m)", y_label="y (m)")
        
        # Grafik parabola
        def trajectory(x):
            return 5 - 0.1 * (x - 5)**2
        
        path = axes.get_graph(trajectory, color=YELLOW)
        
        # Animasi
        self.play(Create(axes), Write(axes_labels))
        self.play(Create(path))
        
        # Animasi bola bergerak
        dot = Dot(color=RED).move_to(axes.c2p(0, trajectory(0)))
        self.play(
            MoveAlongPath(dot, path),
            run_time=3,
            rate_func=linear
        )
        self.wait()
\`\`\`

**3. Visualisasi Vektor Gaya:**
\`\`\`python
from manim import *

class ForceVectors(Scene):
    def construct(self):
        # Buat objek
        box = Square(side_length=1, color=BLUE, fill_opacity=0.3)
        
        # Vektor gaya
        F_applied = Arrow(ORIGIN, RIGHT * 2, color=GREEN, buff=0)
        F_friction = Arrow(ORIGIN, LEFT * 0.8, color=RED, buff=0)
        F_normal = Arrow(ORIGIN, UP * 1.5, color=YELLOW, buff=0)
        F_gravity = Arrow(ORIGIN, DOWN * 1.5, color=ORANGE, buff=0)
        
        # Label
        labels = VGroup(
            Text("F", color=GREEN).next_to(F_applied, UP),
            Text("f", color=RED).next_to(F_friction, UP),
            Text("N", color=YELLOW).next_to(F_normal, RIGHT),
            Text("W", color=ORANGE).next_to(F_gravity, RIGHT),
        )
        
        self.play(Create(box))
        self.play(
            GrowArrow(F_applied), GrowArrow(F_friction),
            GrowArrow(F_normal), GrowArrow(F_gravity),
        )
        self.play(Write(labels))
        self.wait(2)
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 Contoh Penerapan untuk Topik Fisika:**

| Topik | Ide Animasi Manim |
|-------|-------------------|
| Kinematika | Grafik x-t, v-t animasi + partikel bergerak |
| Hukum Newton | Free body diagram interaktif |
| Gerak Parabola | Trajectory dengan vektor vx, vy |
| Energi | Transformasi Ep ↔ Ek visual |
| Gelombang | Superposisi, standing waves |
| Listrik | Aliran elektron, medan vektor |
| Optik | Ray tracing, pembiasan animasi |
| Kuantum | Fungsi gelombang, probabilitas |

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📚 Sumber Belajar Manim:**

1. **Dokumentasi Resmi:** docs.manim.community
2. **YouTube Channels:**
   • Theorem of Beethoven (tutorial lengkap)
   • Power of Ten (contoh animasi fisika)
   • 3Blue1Brown (inspirasi & teknik advanced)
3. **GitHub:** ManimCommunity/manim (source code & examples)
4. **Reddit:** r/manim (komunitas aktif)

**⏱️ Estimasi Waktu Belajar:**
• Dasar-dasar: 1-2 minggu
• Animasi fisika sederhana: 1 bulan
• Mahir membuat konten kompleks: 3-6 bulan

💡 **Tips:** Mulai dari memodifikasi contoh yang ada, jangan mulai dari nol!`,
    category: "tools"
  },
  {
    keywords: ["blender", "3d", "tiga dimensi", "modeling", "render", "3d modeling"],
    response: `🧊 **Blender — Panduan Lengkap untuk Visualisasi Fisika 3D**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Blender untuk Fisika?**
Blender adalah software 3D open-source yang sangat powerful. Untuk pendidikan fisika, Blender memungkinkan visualisasi konsep yang TIDAK BISA dilihat di dunia nyata:

• 🔬 Struktur atom & molekul
• 🌌 Orbit planet & mekanika langit
• ⚡ Medan listrik & magnet 3D
• 🌊 Propagasi gelombang 3D
• 🔮 Lensa & jalur cahaya
• ⚛️ Reaksi nuklir & peluruhan

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🚀 Memulai Blender untuk Fisika:**

**Step 1: Instalasi**
• Download di blender.org (gratis, semua OS)
• Versi terbaru: 4.x (sudah sangat stabil)
• Ukuran: ~300MB

**Step 2: Tutorial Dasar (Wajib!)**
• **Donut Tutorial** by Blender Guru (YouTube) — 4-5 jam
• Ini akan mengajarkan: UI, modeling, material, lighting, rendering

**Step 3: Fokus ke Fisika**
Setelah dasar, pelajari fitur-fitur spesifik:

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Fitur Blender untuk Fisika:**

**1. Physics Simulations**
• **Rigid Body:** Tumbukan, gravitasi, gerak jatuh
• **Soft Body:** Deformasi, elastisitas
• **Fluid:** Aliran fluida, tekanan
• **Cloth:** Getaran, gelombang pada membran
• **Particles:** Medan partikel, emisi, gaya

**2. Geometry Nodes (Sangat Powerful!)**
• Buat simulasi prosedural
• Visualisasi medan vektor
• Animasi berbasis parameter fisika
• Contoh: Medan magnet dari kawat berarus

**3. Shader & Material**
• Emission shader untuk sumber cahaya
• Transparent/refraction untuk optik
• Volume shader untuk medan & awan
• Node-based material editing

**4. Animation System**
• Keyframe animation
• Drivers (animasi berbasis formula)
• Constraints (hubungan antar objek)
• Shape keys (morphing)

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Ide Project Fisika di Blender:**

**🟢 Pemula:**
1. Model tata surya sederhana
2. Animasi bandul sederhana
3. Visualisasi hukum Pascal (tekanan fluida)
4. Diagram gaya 3D

**🟡 Menengah:**
5. Simulasi tumbukan elastis
6. Animasi gelombang transversal 3D
7. Model atom Bohr dengan orbit elektron
8. Visualisasi medan magnet solenoida

**🔴 Advanced:**
9. Simulasi efek fotolistrik
10. Animasi dualisme gelombang-partikel
11. Visualisasi ruang-waktu (relativitas)
12. Simulasi reaksi fisi/fusi nuklir

━━━━━━━━━━━━━━━━━━━━━━━━━━

**⚙️ Workflow Produksi:**

1. **Model** → Buat objek 3D (atom, planet, dll)
2. **Material** → Berikan warna & tekstur
3. **Animate** → Keyframe gerakan sesuai hukum fisika
4. **Light** → Setup pencahayaan
5. **Camera** → Atur sudut pandang
6. **Render** → Export sebagai video/image sequence
7. **Composite** → Gabungkan dengan narasi di editor video

**⏱️ Render Settings untuk Video:**
• Format: FFmpeg Video
• Container: MPEG-4
• Codec: H.264
• Resolution: 1920x1080
• FPS: 30
• Samples: 128 (Cycles) atau Eevee untuk real-time

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📚 Sumber Belajar:**

**YouTube Channels:**
• **Blender Guru** — Tutorial dasar (Donut series)
• **CG Cookie** — Teknik intermediate
• **Default Cube/CG Matter** — Geometry Nodes & math
• **CrossMind Studio** — Physics simulation

**Untuk Fisika Khusus:**
• **The Physics Classroom** (Blender tutorials)
• Search: "Blender physics education" di YouTube

**⏱️ Timeline Belajar:**
• Minggu 1-2: Dasar Blender (UI, modeling)
• Bulan 1: Material, lighting, animasi dasar
• Bulan 2-3: Physics simulation, geometry nodes
• Bulan 4+: Project fisika kompleks

💡 **Tips Pro:** Gunakan **Eevee** (real-time renderer) untuk preview cepat, dan **Cycles** (ray tracing) untuk final render berkualitas tinggi!`,
    category: "tools"
  },
  {
    keywords: ["geogebra", "simulasi", "interaktif", "grafik", "applet"],
    response: `📊 **GeoGebra — Panduan Lengkap Simulasi Fisika Interaktif**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Apa itu GeoGebra?**
GeoGebra adalah platform matematika dinamis gratis yang menggabungkan geometri, aljabar, spreadsheet, grafik, statistik, dan kalkulus dalam satu paket. Sangat cocok untuk membuat simulasi fisika interaktif!

**🎯 Mengapa GeoGebra Ideal untuk Video Fisika?**
• ✅ 100% gratis & tersedia di web, desktop, dan mobile
• ✅ Slider interaktif untuk mengubah variabel secara real-time
• ✅ Grafik fungsi & persamaan yang presisi
• ✅ Bisa di-export sebagai video, GIF, atau embed
• ✅ Ribuan simulasi fisika sudah tersedia (tinggal pakai!)
• ✅ Komunitas guru fisika yang sangat aktif

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🔧 Fitur GeoGebra untuk Fisika:**

**1. Grafik & Fungsi**
• Plot fungsi matematika (linear, kuadrat, trigonometri)
• Grafik parametrik (gerak parabola, spiral)
• Grafik implisit (kurva equipotensial)
• Turunan & integral visual

**2. Geometri Dinamis**
• Diagram sinar optik (lensa, cermin)
• Vektor gaya & resultan
• Diagram rangkaian listrik
• Bidang miring & free body diagram

**3. Slider & Interaktivitas**
• Kontrol variabel (massa, sudut, kecepatan)
• Animasi otomatis
• Trace (jejak gerak)
• Input box untuk nilai custom

**4. 3D Graphics**
• Visualisasi medan vektor 3D
• Model geometri 3D
• Rotasi & perspektif interaktif

**5. Spreadsheet**
• Pengolahan data eksperimen
• Grafik dari data tabel
• Regresi & curve fitting

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 Contoh Simulasi Fisika di GeoGebra:**

**MEKANIKA:**
• 🚗 GLB & GLBB dengan slider v₀ dan a
• 🎯 Gerak parabola (pengaruh sudut tembak)
• ⚖️ Hukum Newton (F=ma interaktif)
• 🔄 Gerak melingkar (ω, r, v)
• 📐 Bandul sederhana (panjang, gravitasi)
• 🏋️ Katrol & bidang miring

**LISTRIK & MAGNET:**
• 🔌 Hukum Ohm (V=IR interaktif)
• ⚡ Rangkaian seri-paralel
• 🧲 Medan magnet di sekitar kawat
• 🔄 Induksi elektromagnetik

**GELOMBANG & OPTIK:**
• 🌊 Superposisi gelombang
• 🎵 Resonansi pipa organa
• 🔍 Pembiasan cahaya (Hukum Snellius)
• 📷 Pembentukan bayangan lensa

**TERMODINAMIKA:**
• 🌡️ Diagram PV gas ideal
• 🔥 Siklus Carnot
• 📊 Distribusi Maxwell-Boltzmann

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Cara Menggunakan GeoGebra untuk Video:**

**Metode 1: Screen Recording**
1. Buat simulasi di GeoGebra
2. Buka OBS Studio
3. Mulai recording
4. Manipulasi slider sambil menjelaskan
5. Stop recording → edit di DaVinci Resolve

**Metode 2: GeoGebra Recorder**
1. Buat simulasi
2. Gunakan fitur **Export → Video** (jika tersedia)
3. Atur durasi dan parameter animasi
4. Export sebagai MP4/GIF

**Metode 3: Embed di Presentasi**
1. Buat applet di GeoGebra
2. Embed di PowerPoint/Google Slides
3. Presentasikan sambil merekam layar
4. Edit hasil rekaman

**Metode 4: GIF Animasi**
1. Buat animasi di GeoGebra
2. Export sebagai GIF
3. Sisipkan GIF di video editing

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🌐 Resource GeoGebra untuk Fisika:**

**Simulasi Siap Pakai:**
• geogebra.org/materials — Cari "physics"
• PhET Colorado (bisa di-export ke GeoGebra format)
• Komunitas guru fisika Indonesia di GeoGebra

**Tutorial:**
• GeoGebra YouTube Channel (official)
• "GeoGebra untuk Fisika" — berbagai tutorial Bahasa Indonesia
• Forum GeoGebra (tanya jawab komunitas)

**Template Populer:**
• Free Body Diagram Builder
• Circuit Simulator
• Wave Interference
• Lens Ray Tracing
• Projectile Motion Lab

━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **Tips:**
1. Mulai dari modifikasi simulasi yang sudah ada
2. Buat satu simulasi untuk satu konsep
3. Gunakan warna konsisten (merah=gaya, biru=kecepatan, dll)
4. Tambahkan label yang jelas
5. Test simulasi sebelum direkam!`,
    category: "tools"
  },
  {
    keywords: ["obs", "screen recording", "tangkapan layar", "rekom layar", "obs studio", "recording software"],
    response: `🖥️ **OBS Studio — Panduan Lengkap Recording Video Pembelajaran**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Apa itu OBS Studio?**
Open Broadcaster Software (OBS) Studio adalah software gratis & open source untuk merekam layar dan live streaming. Ini adalah standar emas untuk screen recording di dunia pendidikan!

**🎯 Kelebihan OBS untuk Video Pembelajaran:**
• ✅ 100% gratis & open source
• ✅ Multi-source recording (layar + webcam + overlay)
• ✅ Scene management (switch antar tampilan)
• ✅ Audio mixing (mic + system audio)
• ✅ Virtual camera (untuk Zoom/Meet)
• ✅ Custom hotkey & automation
• ✅ Ringan & berjalan di semua OS

━━━━━━━━━━━━━━━━━━━━━━━━━━

**⚙️ Setup OBS untuk Video Pembelajaran Fisika:**

**Step 1: Instalasi**
• Download di obsproject.com
• Install sesuai OS (Windows/Mac/Linux)

**Step 2: Konfigurasi Dasar**
\`\`\`
Settings → Output:
  Recording Format: MP4
  Encoder: x264 (CPU) atau NVENC (GPU NVIDIA)
  Quality: High Quality (medium file size)
  
Settings → Video:
  Base Resolution: 1920x1080
  Output Resolution: 1920x1080
  FPS: 30

Settings → Audio:
  Sample Rate: 44.1 kHz
  Channels: Stereo
\`\`\`

**Step 3: Buat Scene untuk Video Fisika**

**Scene 1: "Intro"**
• Image/Logo CakraNewton
• Judul video
• Background music (volume rendah)

**Scene 2: "Materi - Slide"**
• Display Capture / Window Capture (PowerPoint/GeoGebra)
• Webcam kecil di pojok (opsional)
• Lower third (nama & topik)

**Scene 3: "Materi - Simulasi"**
• Window Capture (GeoGebra/PhET/Algodoo)
• Mouse highlight (Opsional plugin)
• Narration overlay

**Scene 4: "Pembahasan Soal"**
• Whiteboard / OneNote / Drawing tablet
• Stylus input
• Step-by-step reveal

**Scene 5: "Outro"**
• Ringkasan poin
• Call to action
• Credits & referensi

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎤 Setup Audio (SANGAT PENTING!):**

**Rekomendasi Mic:**
• Budget: Boya BY-M1 (~Rp100rb) — lavalier mic
• Mid: Fifine K669 (~Rp300rb) — USB condenser
• Pro: Blue Yeti (~Rp1.5jt) — USB multi-pattern

**Audio Settings di OBS:**
\`\`\`
Filters → Audio:
  1. Noise Suppression (RNNoise)
  2. Compressor (ratio 4:1, threshold -20dB)
  3. Limiter (threshold -3dB)
  4. Gain (sesuaikan, target -16 LUFS)
\`\`\`

**Tips Recording Audio:**
• Rekam di ruangan tenang
• Jarak mic: 15-25 cm dari mulut
• Gunakan pop filter
• Test recording sebelum mulai
• Monitor audio dengan headphone

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Plugin OBS yang Berguna:**

1. **OBS-WebSocket** — Kontrol OBS dari aplikasi lain
2. **Advanced Scene Switcher** — Auto-switch berdasarkan kondisi
3. **Text/GDI+** — Overlay teks dinamis
4. **Source Record** — Record per-source terpisah
5. **Move Transition** — Transisi smooth antar scene
6. **Input Overlay** — Tampilkan tombol keyboard yang ditekan

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Checklist Sebelum Recording:**

□ Audio test — suara jelas, no noise
□ Visual test — semua source tampil benar
□ Lighting — wajah terlihat jelas (jika pakai webcam)
□ Background — bersih & tidak mengganggu
□ Notifikasi — matikan semua (HP, desktop)
□ Script/outline — siap di samping
□ Air minum — di jangkauan
□ Timer — tahu durasi target
□ Backup plan — jika ada error

💡 **Pro Tips:**
• Rekam audio terpisah (backup) dengan Audacity
• Gunakan dual monitor (satu untuk OBS, satu untuk materi)
• Buat template scene agar konsisten antar video
• Selalu do test recording 1 menit sebelum mulai!`,
    category: "tools"
  },
  {
    keywords: ["phet", "simulasi fisika", "simulasi online", "laboratorium virtual"],
    response: `🔬 **PhET Simulations — Laboratorium Virtual Fisika Gratis**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Apa itu PhET?**
PhET Interactive Simulations adalah project dari **University of Colorado Boulder** yang menyediakan simulasi sains & matematika interaktif gratis. Dengan 100+ simulasi fisika, ini adalah sumber daya TAK TERGANTIKAN untuk video pembelajaran!

🌐 phet.colorado.edu

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Simulasi Fisika PhET yang Paling Berguna:**

**MEKANIKA:**
• **Forces and Motion: Basics** — Hukum Newton interaktif
• **Projectile Motion** — Gerak parabola dengan kontrol variabel
• **Energy Skate Park** — Konservasi energi visual
• **Gravity and Orbits** — Orbit planet & gravitasi
• **Masses and Springs** — Gerak harmonik sederhana
• **Collisions** — Tumbukan 1D & 2D
• **Pendulum Lab** — Bandul dengan grafik real-time

**LISTRIK & MAGNET:**
• **Circuit Construction Kit** — Rangkaian listrik interaktif
• **Ohm's Law** — Hubungan V, I, R visual
• **Faraday's Law** — Induksi elektromagnetik
• **Magnets and Electromagnets** — Medan magnet visual
• **Charges and Fields** — Medan listrik & potensial

**GELOMBANG & OPTIK:**
• **Wave Interference** — Superposisi & interferensi
• **Wave on a String** — Gelombang transversal
• **Geometric Optics** — Lensa & cermin
• **Bending Light** — Pembiasan (Snellius)
• **Sound** — Gelombang bunyi

**TERMODINAMIKA:**
• **Gas Properties** — Sifat gas ideal
• **States of Matter** — Fase zat
• **Energy Forms and Changes** — Transformasi energi

**FISIKA MODERN:**
• **Photoelectric Effect** — Efek fotolistrik Einstein
• **Quantum Wave Interference** — Dualisme gelombang-partikel
• **Radioactive Dating Game** — Peluruhan radioaktif

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Cara Menggunakan PhET untuk Video:**

**Metode 1: Screen Record + Narasi**
1. Buka simulasi PhET di browser
2. Mulai recording di OBS
3. Eksplorasi simulasi sambil menjelaskan
4. Ubah parameter & amati hasilnya
5. Narrate proses dan hubungkan dengan teori

**Metode 2: Guided Exploration**
1. Siapkan pertanyaan panduan
2. Rekam proses menjawab pertanyaan
3. Tunjukkan "what if" scenarios
4. Hubungkan observasi dengan hukum fisika

**Metode 3: Before-After Comparison**
1. Tunjukkan kondisi awal
2. Ubah variabel
3. Amati perubahan
4. Jelaskan mengapa hal itu terjadi

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Menggunakan PhET di Video:**

1. **Zoom in** area penting saat menjelaskan
2. **Gunakan fitur reset** untuk mengulang demonstrasi
3. **Screenshot** kondisi penting untuk overlay
4. **Kombinasikan** dengan diagram/manual di samping
5. **Pause & annotate** di post-production
6. **Bandingkan** hasil simulasi dengan perhitungan manual

**Contoh Skenario Video:**
\`\`\`
[0:00-0:30] Hook: "Apa yang terjadi jika gaya diperbesar?"
[0:30-1:00] Buka simulasi Forces and Motion
[1:00-3:00] Eksplorasi: ubah gaya, amati percepatan
[3:00-5:00] Hubungkan dengan F=ma
[5:00-7:00] Contoh soal menggunakan konsep yang sama
[7:00-8:00] Kesimpulan & preview video berikutnya
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🌐 Alternatif Simulasi Online:**

• **Falstad** (falstad.com) — Simulasi fisika Java/HTML5
• **Physlet Physics** — Applet fisika interaktif
• **oPhysics** (ophysics.com) — Simulasi fisika online
• **Interactives** (interactives.chemCollective.org) — Kimia & fisika
• **Algodoo** — Sandbox fisika 2D

💡 **Keunggulan PhET:** Gratis, berbasis riset, valid secara ilmiah, dan terus di-update!`,
    category: "tools"
  },

  // =============================================
  // === DESAIN INSTRUKSIONAL ===
  // =============================================
  {
    keywords: ["desain instruksional", "instructional design", "model pembelajaran", "rancangan", "addie", "assure"],
    response: `📋 **Desain Instruksional untuk Video Pembelajaran Fisika — Panduan Lengkap**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Apa itu Desain Instruksional?**
Desain instruksional adalah proses sistematis untuk merancang pengalaman belajar yang efektif, efisien, dan menarik. Untuk video pembelajaran fisika, ini berarti merencanakan konten, visual, dan interaksi secara terstruktur.

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 MODEL ADDIE (Paling Populer)**

**A — Analysis (Analisis)**
Pertanyaan kunci:
• Siapa target audiens? (SMA/kuliah, kelas berapa?)
• Apa prerequisite knowledge mereka?
• Apa miskonsepsi umum tentang topik ini?
• Apa tujuan pembelajaran yang ingin dicapai?
• Apa kendala teknis yang mungkin dihadapi?
• Berapa durasi ideal untuk topik ini?

**D — Design (Desain)**
• Rumuskan learning objectives (menggunakan Taksonomi Bloom)
• Buat outline & storyboard
• Pilih strategi penyampaian (demo, animasi, problem-solving)
• Tentukan jenis asesmen (quiz, latihan, refleksi)
• Pilih tools & format visual

**D — Development (Pengembangan)**
• Produksi semua aset (rekaman, animasi, grafis)
• Recording narasi
• Editing & compositing
• Review & revisi internal
• Quality check

**I — Implementation (Implementasi)**
• Upload ke platform (YouTube, LMS)
• Distribusi ke siswa
• Panduan penggunaan untuk siswa
• Monitoring & support

**E — Evaluation (Evaluasi)**
• **Formative:** Evaluasi selama proses (peer review, pilot test)
• **Summative:** Evaluasi hasil (pre-post test, survei kepuasan)
• **Analytics:** Watch time, completion rate, engagement

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 MODEL ASSURE (Khusus Media & Teknologi)**

**A — Analyze Learners**
• Karakteristik siswa (gaya belajar, latar belakang)
• Kompetensi awal (prior knowledge)
• Preferensi belajar (visual, auditori, kinestetik)

**S — State Objectives**
• Gunakan ABCD format:
  - **A**udience: "Mahasiswa semester 3..."
  - **B**ehavior: "...mampu menjelaskan..."
  - **C**ondition: "...setelah menonton video..."
  - **D**egree: "...dengan akurasi minimal 80%"

**S — Select Strategies, Technology, Media & Materials**
• Pilih atau modifikasi materi yang ada
• Sesuaikan dengan karakteristik siswa
• Pertimbangkan aksesibilitas teknologi

**U — Utilize Technology, Media & Materials**
• Preview materi sebelum digunakan
• Prepare materi (setup, testing)
• Prepare environment (ruangan, device)
• Execute pembelajaran

**R — Require Learner Participation**
• Active learning activities
• Diskusi & kolaborasi
• Practice & feedback
• Self-assessment

**E — Evaluate & Revise**
• Assess learner achievement
• Evaluate media effectiveness
• Review proses & revise

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 PRINSIP MAYER (Multimedia Learning)**

12 Prinsip yang WAJIB dipahamai:

**🎯 Prinsip Pengurangan (Reduce Extraneous):**
1. **Coherence** — Hapus kata, gambar, suara yang tidak relevan
2. **Signaling** — Tandai informasi penting (highlight, cue)
3. **Redundancy** — JANGAN gabungkan teks on-screen + narasi yang sama
4. **Spatial Contiguity** — Letakkan teks DEKAT bagian gambar yang dijelaskan
5. **Temporal Contiguity** — Sinkronkan narasi dengan animasi

**🧠 Prinsip Penguatan (Essential Processing):**
6. **Segmenting** — Pecah video menjadi segmen ≤5 menit
7. **Pre-training** — Kenalkan istilah & konsep kunci dulu
8. **Modality** — Gunakan GAMBAR + NARASI (bukan gambar + teks panjang)

**🔄 Prinsip Interaksi (Generative Processing):**
9. **Multimedia** — Gabungkan kata + gambar
10. **Personalization** — Gunakan bahasa percakapan
11. **Voice** — Gunakan suara manusia (bukan text-to-speech)
12. **Image** — Gunakan gambar relevan, bukan dekoratif

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Penerapan di Video Fisika:**

**Contoh Penerapan Prinsip Mayer:**

| Prinsip | Penerapan di Video Fisika |
|---------|--------------------------|
| Coherence | Hapus musik latar jika mengganggu narasi |
| Signaling | Highlight rumus yang sedang dibahas |
| Spatial Contiguity | Label vektor tepat di ujung panah |
| Segmenting | Chapter: Konsep → Demo → Contoh Soal |
| Modality | Animasi gerak + narasi penjelasan |
| Personalization | "Nah, coba kalian perhatikan..." |

💡 **Framework Rekomendasi:** Gunakan ADDIE untuk planning keseluruhan, dan prinsip Mayer untuk detail desain setiap segmen video!`,
    category: "desain"
  },
  {
    keywords: ["storyboard", "naskah", "script", "alur video", "struktur video", "template"],
    response: `📝 **Panduan Lengkap Membuat Storyboard & Script Video Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Storyboard Penting?**
Storyboard adalah "cetak biru" video Anda. Tanpa storyboard, produksi video akan:
• ❌ Berantakan & tidak terstruktur
• ❌ Memakan waktu lebih lama (revisi berulang)
• ❌ Konten tidak mencapai tujuan pembelajaran
• ❌ Sulit dikolaborasikan dengan tim

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Template Storyboard Video Fisika:**

**FORMAT TABEL:**

| Scene | Durasi | Visual | Audio/Narasi | Teks Overlay | Notes |
|-------|--------|--------|-------------|-------------|-------|
| 1. Opening | 0:00-0:15 | Logo + judul | Musik intro + "Halo, hari ini kita belajar..." | Judul video | Hook! |
| 2. Hook | 0:15-0:45 | Fenomena menarik | Pertanyaan provokatif | Pertanyaan | Buat penasaran |
| 3. Tujuan | 0:45-1:00 | List objectives | "Setelah video ini, kalian bisa..." | 3-4 poin | Jelas & spesifik |
| 4. Konsep | 1:00-4:00 | Animasi/diagram | Penjelasan konsep bertahap | Rumus, definisi | Step by step |
| 5. Demo | 4:00-6:00 | Simulasi/eksperimen | Narrate proses | Label variabel | Tunjukkan hubungan |
| 6. Contoh | 6:00-8:00 | Penulisan soal | Pembahasan step by step | Langkah penyelesaian | Scaffolding |
| 7. Ringkasan | 8:00-9:00 | Mind map/poin | Recap konsep utama | Poin-poin kunci | Visual summary |
| 8. Outro | 9:00-9:30 | CTA + credits | "Jangan lupa subscribe..." | Link video terkait | Engagement |

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📝 Template Script (Dua Kolom):**

\`\`\`
═══════════════════════════════════════
VIDEO: Hukum II Newton (F = ma)
DURASI: 10 menit
TARGET: Mahasiswa Pendidikan Fisika Sem 3
═══════════════════════════════════════

SCENE 1: HOOK (0:00 - 0:30)
─────────────────────────────
VISUAL:          AUDIO/NARASI:
Video klip mobil | "Pernahkah kalian memperhatikan,
balap yang       |  mengapa mobil balap dirancang
melaju cepat,    |  seringan mungkin? Dan mengapa
cut ke F1 car    |  mesinnya harus sangat powerful?"
design.          |
                 | [PAUSE 2 detik]
                 |
Grafis: tanda    | "Jawabannya ada di Hukum II Newton."
tanya besar      |
di tengah layar. |

SCENE 2: TUJUAN (0:30 - 0:50)
─────────────────────────────
VISUAL:          AUDIO/NARASI:
Slide dengan     | "Setelah menonton video ini, kalian
3 poin tujuan.   |  akan mampu:
Animasi per poin |  1. Menjelaskan bunyi Hukum II Newton
muncul satu-satu |  2. Menghitung percepatan dari gaya
                 |  3. Menggambar free body diagram"
                 |
                 | "Mari kita mulai!"

SCENE 3: KONSEP (0:50 - 4:00)
─────────────────────────────
VISUAL:          AUDIO/NARASI:
Animasi benda    | "Bayangkan sebuah benda dengan massa m
dengan massa m   |  berada di permukaan licin."
di permukaan     |
licin.           | "Ketika gaya F dikerjakan pada benda
                 |  tersebut, benda akan mengalami
Vektor gaya F    |  percepatan a."
muncul → benda
bergerak.        | [Tampilkan rumus F = ma]
                 |
                 | "Perhatikan: percepatan BERBANDING
                 |  LURUS dengan gaya, dan BERBANDING
                 |  TERBALIK dengan massa."
...
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Struktur Video yang Efektif:**

**1. HOOK (10-15% durasi)**
Fungsi: Menarik perhatian & memotivasi
Jenis hook:
• ❓ Pertanyaan provokatif: "Mengapa langit biru?"
• 🤯 Fenomena mengejutkan: Demo yang unexpected
• 📊 Data/statistik menarik: "90% orang salah paham tentang..."
• 🎬 Cerita pendek: "Bayangkan kalian sedang..."
• 🔄 Review singkat: "Kemarin kita belajar tentang..."

**2. TUJUAN PEMBELAJARAN (5% durasi)**
• Sampaikan dengan jelas apa yang akan dipelajari
• Gunakan bahasa yang bisa dipahami siswa
• Buat ekspektasi yang realistis

**3. KONTEN UTAMA (60-70% durasi)**
Struktur konten:
• Konsep 1 → Visualisasi → Contoh
• Konsep 2 → Visualisasi → Contoh
• Koneksi antar konsep
• Aplikasi dalam kehidupan

**4. CONTOH SOAL (10-15% durasi)**
• Mulai dari mudah → sulit
• Tunjukkan langkah penyelesaian
• Jelaskan SETIAP langkah (jangan skip)
• Berikan variasi tipe soal

**5. RINGKASAN & PENUTUP (10% durasi)**
• Recap poin-poin utama (visual summary)
• Preview materi selanjutnya
• Call to action (subscribe, like, comment)
• Referensi untuk belajar lebih lanjut

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Menulis Script:**

1. **Tulis seperti berbicara** — gunakan bahasa percakapan
2. **Baca dengan suara keras** — pastikan terdengar natural
3. **Tandai jeda** — [PAUSE 2 detik] untuk memberi waktu berpikir
4. **Konsisten** — gunakan istilah yang sama throughout
5. **Transisi** — hubungkan antar segmen dengan kalimat transisi
6. **Durasi** — 1 halaman script ≈ 1-1.5 menit video

💡 **Tools untuk Storyboard:**
• **Canva** — template storyboard gratis
• **Google Docs** — kolaborasi real-time
• **Storyboard That** — drag-and-drop storyboard
• **Boords** — storyboard profesional
• **Kertas & pensil** — cara klasik yang tetap efektif!`,
    category: "desain"
  },
  {
    keywords: ["learning objectives", "tujuan pembelajaran", "capaian", "kompetensi", "bloom", "taksonomi"],
    response: `🎯 **Merumuskan Tujuan Pembelajaran Video Fisika — Panduan Lengkap**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Tujuan Pembelajaran Penting?**
Tujuan pembelajaran (learning objectives) adalah PONDASI dari video Anda. Tanpa tujuan yang jelas:
• ❌ Konten tidak terarah
• ❌ Sulit mengukur keberhasilan
• ❌ Siswa tidak tahu apa yang diharapkan
• ❌ Evaluasi tidak bisa dirancang

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 TAKSONOMI BLOOM (Revisi Anderson & Krathwohl, 2001)**

**6 Level Kognitif (dari rendah ke tinggi):**

**C1 — MENGINGAT (Remember)**
Kata kerja: menyebutkan, mendefinisikan, mengidentifikasi, mengingat, mengenal
Contoh untuk fisika:
• "Menyebutkan bunyi Hukum I Newton"
• "Mengidentifikasi besaran vektor dan skalar"
• "Mendefinisikan energi kinetik"

**C2 — MEMAHAMI (Understand)**
Kata kerja: menjelaskan, menginterpretasi, merangkum, mengklasifikasi, membandingkan
Contoh:
• "Menjelaskan perbedaan GLB dan GLBB"
• "Menginterpretasikan grafik v-t"
• "Membandingkan rangkaian seri dan paralel"

**C3 — MENERAPKAN (Apply)**
Kata kerja: menghitung, menyelesaikan, menggunakan, mendemonstrasikan
Contoh:
• "Menghitung resultan gaya pada benda"
• "Menyelesaikan soal rangkaian listrik"
• "Menggunakan hukum kekekalan energi"

**C4 — MENGANALISIS (Analyze)**
Kata kerja: menganalisis, membedakan, mengorganisasi, mengatribusi
Contoh:
• "Menganalisis hubungan variabel dalam Hukum Ohm"
• "Membedakan jenis-jenis tumbukan berdasarkan data"
• "Mengorganisasi langkah penyelesaian soal"

**C5 — MENGEVALUASI (Evaluate)**
Kata kerja: mengevaluasi, menilai, mengkritik, membenarkan, memprediksi
Contoh:
• "Mengevaluasi validitas hasil eksperimen"
• "Menilai ketepatan model atom Bohr"
• "Mengkritik kesimpulan berdasarkan data"

**C6 — MENCIPTA (Create)**
Kata kerja: merancang, membangun, merumuskan, mengembangkan
Contoh:
• "Merancang eksperimen sederhana tentang Hukum Ohm"
• "Membuat model penyelesaian masalah termodinamika"
• "Merumuskan hipotesis berdasarkan observasi"

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📝 FORMAT ABCD untuk Tujuan Pembelajaran:**

**A — Audience (Siapa)**
→ "Mahasiswa semester 3 Pendidikan Fisika..."
→ "Siswa kelas XI IPA..."

**B — Behavior (Apa yang dilakukan)**
→ "...mampu menyelesaikan soal hukum Newton..."
→ "...dapat menjelaskan konsep induksi elektromagnetik..."

**C — Condition (Dalam kondisi apa)**
→ "...setelah menonton video pembelajaran..."
→ "...dengan menggunakan simulasi PhET..."
→ "...diberikan data percobaan..."

**D — Degree (Seberapa baik)**
→ "...dengan benar minimal 80%"
→ "...dalam waktu 10 menit"
→ "...minimal 3 dari 5 soal"

**Contoh Lengkap:**
"Setelah menonton video pembelajaran tentang Hukum II Newton (C), mahasiswa Pendidikan Fisika semester 3 (A) mampu menyelesaikan soal-soal aplikasi hukum II Newton (B) dengan tingkat kebenaran minimal 80% (D)."

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Menerjemahkan Tujuan ke Video:**

**Untuk Level C1-C2 (Mengingat & Memahami):**
• Video penjelasan konsep
• Visualisasi definisi & prinsip
• Animasi fenomena fisika
• Durasi: 5-8 menit

**Untuk Level C3 (Menerapkan):**
• Video contoh soal step-by-step
• Demonstrasi penggunaan rumus
• Simulasi interaktif + narasi
• Durasi: 8-12 menit

**Untuk Level C4-C5 (Menganalisis & Mengevaluasi):**
• Video analisis data eksperimen
• Perbandingan model/teori
• Studi kasus & problem-based
• Durasi: 10-15 menit

**Untuk Level C6 (Mencipta):**
• Video panduan merancang eksperimen
• Project-based learning
• Tutorial pembuatan model
• Durasi: 12-20 menit (bisa seri)

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Merumuskan Tujuan:**

1. ✅ Gunakan SATU kata kerja operasional per tujuan
2. ✅ Pastikan terukur & observable
3. ✅ Sesuaikan dengan level kognitif target
4. ✅ Buat 3-5 tujuan per video (jangan terlalu banyak)
5. ✅ Pastikan achievable dalam durasi video
6. ❌ JANGAN gunakan kata: "memahami", "mengerti", "mengetahui" (tidak terukur!)
7. ❌ JANGAN terlalu banyak tujuan dalam satu video

💡 **Template:**
"Setelah [KONDISI], [AUDIENS] mampu [KATA KERJA OPERASIONAL] [KONTEN] dengan [KRITERIA]."`,
    category: "desain"
  },

  // =============================================
  // === TEKNIK PRODUKSI ===
  // =============================================
  {
    keywords: ["rekam", "recording", "capture", "tangkapan layar", "cara merekam", "setup recording"],
    response: `🎥 **Teknik Recording Video Pembelajaran Fisika — Panduan Lengkap**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Jenis-Jenis Video Pembelajaran Fisika:**

**1. SCREENCAST (Paling Mudah & Populer)**
Apa: Rekam layar + narasi suara
Tools: OBS Studio, Camtasia, Loom
Cocok untuk: Simulasi GeoGebra/PhET, presentasi slide, pembahasan soal
Kelebihan: Cepat diproduksi, tidak perlu kamera
Kekurangan: Kurang personal, monoton jika tidak bervariasi

**2. WHITEBOARD/KHAN ACADEMY STYLE**
Apa: Tulis & gambar di canvas digital sambil menjelaskan
Tools: OneNote + OBS, Explain Everything, tablet + screen record
Cocok untuk: Penurunan rumus, contoh soal, diagram fisika
Kelebihan: Natural, step-by-step, seperti mengajar di kelas
Kekurangan: Perlu tablet/stylus, tulisan harus rapi

**3. TALKING HEAD + OVERLAY**
Apa: Wajah pembicara + konten di samping/overlay
Tools: Webcam + OBS, Zoom recording
Cocok untuk: Pengantar konsep, diskusi, Q&A
Kelebihan: Personal connection, ekspresi wajah terlihat
Kekurangan: Perlu lighting bagus, background rapi

**4. DEMONSTRASI/EKSPERIMEN**
Apa: Rekam eksperimen nyata + penjelasan
Tools: Kamera HP/DSLR + tripod + OBS
Cocok untuk: Hukum fisika, fenomena alam, eksperimen sederhana
Kelebihan: Autentik, engaging, konkret
Kekurangan: Perlu alat & persiapan, lighting penting

**5. ANIMASI PENUH**
Apa: Full animasi 2D/3D
Tools: Manim, Blender, After Effects, Canva
Cocok untuk: Konsep abstrak (medan, gelombang, kuantum)
Kelebihan: Visualisasi tak terbatas, profesional
Kekurangan: Butuh waktu lama, perlu skill khusus

**6. HYBRID (KOMBINASI)** ⭐ REKOMENDASI
Apa: Gabungan beberapa jenis dalam satu video
Contoh: Talking head (intro) → Screencast (simulasi) → Whiteboard (soal)
Cocok untuk: Video komprehensif
Kelebihan: Variasi, engaging, komprehensif
Kekurangan: Editing lebih kompleks

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🛠️ Setup Minimal untuk Setiap Jenis:**

**SCREENCAST:**
• 💻 Laptop/PC
• 🎤 Microphone (minimal earphone dengan mic)
• 🖥️ OBS Studio
• 📋 Script/outline
💰 Budget: Rp 0 - 100rb

**WHITEBOARD:**
• 💻 Laptop + Drawing tablet (Wacom One ~Rp500rb)
• 🎤 Microphone USB
• 📝 Software: OneNote / Xournal++ / Miro
💰 Budget: Rp 500rb - 1jt

**TALKING HEAD:**
• 📱 Webcam (min 720p) atau HP
• 💡 Ring light (Rp100-300rb)
• 🎤 Microphone
• 🖥️ OBS Studio
💰 Budget: Rp 300rb - 1.5jt

**DEMONSTRASI:**
• 📱 HP kamera bagus / DSLR
• 🎤 External mic (lapel mic)
• 💡 Lighting (minimal 2 titik)
• 📐 Alat eksperimen
• 🖥️ Tripod
💰 Budget: Rp 500rb - 5jt

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎤 Tips Audio Recording (KRITIS!):**

**Sebelum Recording:**
• Test mic — pastikan suara jelas
• Cek background noise — matikan AC, kipas, dll
• Jarak mic: 15-25 cm dari mulut
• Gunakan pop filter
• Minum air (jangan perut kosong)

**Saat Recording:**
• Bicara seperti mengobrol (jangan membaca!)
• Variasi intonasi (jangan monoton)
• Tempo sedang (jangan terlalu cepat)
• Pause antar poin penting
• Jika salah, pause 3 detik, lalu ulangi kalimat

**Setup Audio di OBS:**
\`\`\`
Audio Filters (urutan):
1. Noise Suppression (RNNoise) — hilangkan noise
2. Noise Gate — matikan mic saat tidak bicara
3. Compressor — ratakan volume
4. EQ — boost frekuensi suara (2-5 kHz)
5. Limiter — cegah clipping
\`\`\`

💡 **Aturan Emas:** Audio berkualitas TINGGI lebih penting dari visual berkualitas tinggi. Siswa bisa mentolerir visual sederhana, tapi TIDAK bisa mentolerir audio yang buruk!`,
    category: "produksi"
  },
  {
    keywords: ["editing", "edit", "pasca produksi", "post production", "cut", "trim", "workflow editing"],
    response: `✂️ **Panduan Lengkap Editing Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Workflow Editing Profesional:**

**Phase 1: ORGANIZE (15% waktu)**
1. Import semua footage ke project
2. Buat folder/bin: Video, Audio, Graphics, Music, SFX
3. Rename clip dengan deskripsi yang jelas
4. Create sequence/timeline baru
5. Set project settings (1080p, 30fps, H.264)

**Phase 2: ROUGH CUT (30% waktu)**
1. Drag semua clip ke timeline secara berurutan
2. Buang bagian yang tidak perlu (salah bicara, jeda panjang)
3. Susun sesuai storyboard/script
4. Pastikan alur cerita logis
5. Cek durasi total

**Phase 3: FINE CUT (25% waktu)**
1. Perhalus transisi antar clip
2. Tambahkan B-roll (visual pendukung)
3. Atur pacing (ritme video)
4. Tambahkan zoom/pan untuk emphasis
5. Picture-in-picture jika diperlukan

**Phase 4: OVERLAY & GRAPHICS (15% waktu)**
1. Tambahkan text overlay (rumus, label, definisi)
2. Lower third (nama, judul, topik)
3. Animasi teks masuk/keluar
4. Highlight & callout
5. Progress bar / chapter markers

**Phase 5: AUDIO (10% waktu)**
1. Normalize audio level (-16 LUFS)
2. Tambahkan musik latar (volume -20dB di bawah narasi)
3. Sound effects (transisi, emphasis)
4. Audio ducking (musik mengecil saat narasi)
5. Final audio mix

**Phase 6: COLOR & FINAL (5% waktu)**
1. Color correction (white balance, exposure)
2. Color grading (konsisten antar scene)
3. Final review (tonton dari awal sampai akhir)
4. Export dengan settings yang tepat

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Teknik Editing Spesifik untuk Video Fisika:**

**1. Visual Enhancement untuk Konsep:**
• **Zoom In** — Fokus pada bagian diagram/rumus penting
• **Highlight** — Warna berbeda untuk variabel yang sedang dibahas
• **Arrow/Annotation** — Tunjukkan arah gaya, arus, dll
• **Split Screen** — Bandingkan sebelum/sesudah atau dua konsep
• **Picture-in-Picture** — Simulasi di samping narator

**2. Text Overlay untuk Fisika:**
• Rumus muncul bertahap (step by step)
• Label variabel dengan warna konsisten
• Satuan selalu ditampilkan
• Animasi transformasi rumus

**3. Transisi yang Tepat:**
• **Cut** — Perpindahan konsep cepat
• **Dissolve** — Koneksi antar konsep terkait
• **Wipe** — Pindah topik/subtopik
• **Zoom transition** — Masuk ke detail

**4. Timing & Pacing:**
• Konsep baru: slower pace, lebih banyak visual
• Review: faster pace, ringkas
• Contoh soal: medium pace, step by step
• Hook: fast, dynamic

━━━━━━━━━━━━━━━━━━━━━━━━━━

**⚙️ Export Settings:**

**Untuk YouTube:**
\`\`\`
Format: MP4 (H.264)
Resolution: 1920x1080 (Full HD)
Frame Rate: 30 fps
Bitrate: 10-16 Mbps (VBR)
Audio: AAC, 320 kbps, 48 kHz
\`\`\`

**Untuk LMS/Embed:**
\`\`\`
Format: MP4 (H.264)
Resolution: 1280x720 (HD) — file lebih kecil
Frame Rate: 30 fps
Bitrate: 5-8 Mbps
Audio: AAC, 192 kbps
\`\`\`

**Untuk Media Sosial (Short):**
\`\`\`
Format: MP4 (H.264)
Resolution: 1080x1920 (vertical) atau 1080x1080 (square)
Frame Rate: 30 fps
Bitrate: 8-12 Mbps
Durasi: < 60 detik
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Checklist Final Sebelum Export:**

□ Audio: Jelas, level konsisten, no clipping
□ Visual: Tidak ada pixelated/blur
□ Text: Terbaca, tidak terpotong, ejaan benar
□ Timing: Sinkron audio-visual
□ Transisi: Smooth, tidak abrupt
□ Branding: Logo/watermark konsisten
□ Duration: Sesuai target
□ File size: Sesuai platform target
□ Test play: Tonton full sebelum publish

💡 **Tips:** Selalu export satu versi backup dalam kualitas tinggi, lalu buat versi kompres untuk distribusi!`,
    category: "produksi"
  },
  {
    keywords: ["animasi", "motion graphics", "visualisasi", "gerak", "konsep abstrak"],
    response: `🎬 **Animasi & Visualisasi Konsep Fisika — Panduan Komprehensif**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Animasi Penting untuk Fisika?**

Banyak konsep fisika yang TIDAK BISA dilihat langsung:
• ⚡ Medan listrik & magnet — tidak terlihat
• 🌊 Gelombang — terlalu cepat/kecil
• ⚛️ Atom & partikel — terlalu kecil
• 🌌 Orbit planet — terlalu besar/lama
• 📈 Grafik & fungsi — abstrak

Animasi membuat yang TIDAK TERLIHAT menjadi TERLIHAT, dan yang ABSTRAK menjadi KONKRET!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📐 Panduan Visualisasi per Topik Fisika:**

**🍎 MEKANIKA:**

| Konsep | Ide Visualisasi | Tools |
|--------|----------------|-------|
| GLB/GLBB | Mobil bergerak + grafik x-t, v-t | GeoGebra, Manim |
| Gerak Parabola | Trajectory + vektor vx, vy | Manim, GeoGebra |
| Hukum Newton | Free body diagram animasi | Manim, PowerPoint |
| Energi | Bar chart Ep/Ek berubah | GeoGebra, Manim |
| Tumbukan | Before-after + momentum | Algodoo, Manim |
| Gerak Melingkar | Vektor v, ω, a sentripetal | Manim, GeoGebra |
| Bandul | Osilasi + grafik θ-t | GeoGebra, PhET |

**⚡ LISTRIK & MAGNET:**

| Konsep | Ide Visualisasi | Tools |
|--------|----------------|-------|
| Arus listrik | Animasi elektron mengalir | Manim, PhET |
| Hukum Ohm | Slider V,R → perubahan I | GeoGebra |
| Medan magnet | Garis gaya 3D | Blender, Manim |
| Induksi | Fluks berubah → GGL | PhET, Manim |
| Gaya Lorentz | Partikel dalam medan B | Manim, Blender |
| Rangkaian | Animasi arus di rangkaian | PhET, Falstad |

**🌊 GELOMBANG & OPTIK:**

| Konsep | Ide Visualisasi | Tools |
|--------|----------------|-------|
| Gelombang transversal | Tali bergetar + parameter | GeoGebra, PhET |
| Interferensi | Superposisi 2 gelombang | PhET, Manim |
| Difraksi | Celah tunggal/ganda | PhET, Manim |
| Pembiasan | Sinar masuk medium berbeda | GeoGebra, Manim |
| Lensa | Ray tracing interaktif | GeoGebra |
| Efek Doppler | Sumber bergerak + gelombang | Manim, PhET |

**🌡️ TERMODINAMIKA:**

| Konsep | Ide Visualisasi | Tools |
|--------|----------------|-------|
| Gerak partikel | Partikel gas dalam wadah | PhET, Blender |
| Diagram PV | Kurva proses animasi | GeoGebra, Manim |
| Siklus Carnot | Animasi 4 proses | Manim |
| Konduksi | Transfer energi partikel | PhET |
| Entropi | Disorder visualization | Manim, Blender |

**⚛️ FISIKA MODERN:**

| Konsep | Ide Visualisasi | Tools |
|--------|----------------|-------|
| Efek fotolistrik | Foton → elektron keluar | PhET, Manim |
| Model atom | Evolusi model atom | Blender, Manim |
| Dualisme | Celah ganda animasi | Manim, PhET |
| Relativitas | Time dilation visual | Manim, Blender |
| Peluruhan | Atom → partikel + energi | Blender, Manim |

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Prinsip Desain Animasi Fisika:**

**1. KONSISTENSI VISUAL**
• Warna konsisten: merah=gaya, biru=kecepatan, hijau=energi
• Style konsisten antar scene
• Font & ukuran seragam
• Notasi matematika standar

**2. CLARITY (KEJELASAN)**
• Satu animasi = satu konsep
• Label yang jelas & terbaca
• Jangan terlalu banyak elemen sekaligus
• Gunakan highlighting untuk fokus

**3. AKURASI ILMIAH**
• Skala proporsional (atau jelaskan jika tidak)
• Arah vektor benar
• Simulasi sesuai hukum fisika
• Tidak menyesatkan

**4. PROGRESSIVE DISCLOSURE**
• Tampilkan elemen bertahap
• Jangan langsung semua sekaligus
• Bangun kompleksitas perlahan
• Beri waktu untuk memahami

**5. DUAL CODING**
• Gabungkan visual + narasi
• Jangan hanya mengandalkan satu channel
• Teks untuk rumus, visual untuk konsep
• Audio untuk penjelasan

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Praktis:**

1. **Mulai sederhana** — animasi basic dulu, tingkatkan perlahan
2. **Gunakan template** — buat template untuk konsistensi
3. **Re-use assets** — gunakan ulang elemen yang sudah dibuat
4. **Test dengan audiens** — apakah animasi membantu pemahaman?
5. **Iterasi** — perbaiki berdasarkan feedback

💡 **Rekomendasi berdasarkan skill level:**
• 🟢 Pemula: PowerPoint animations + GeoGebra
• 🟡 Menengah: Manim + Canva + OBS
• 🔴 Advanced: Blender + After Effects + Manim`,
    category: "produksi"
  },

  // =============================================
  // === KONTEN FISIKA ===
  // =============================================
  {
    keywords: ["mekanika", "hukum newton", "gaya", "gerak", "kinematika", "dinamika", "materi mekanika"],
    response: `🍎 **Panduan Video Pembelajaran MEKANIKA — Topik, Ide & Strategi**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Overview Mekanika untuk Video:**
Mekanika adalah fondasi fisika dan TOPIK YANG PALING SERING dibuat videonya. Tantangannya: bagaimana membuat topik yang "sudah biasa" ini menjadi MENARIK dan MEMBANTU pemahaman?

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Topik & Ide Video:**

**1. KINEMATIKA (Gerak tanpa Gaya)**

**Video 1: Gerak Lurus Beraturan (GLB)**
• Hook: Video atlet lari 100m — "Bagaimana kita mendeskripsikan gerak ini?"
• Konsep: Definisi, ciri, persamaan
• Visual: Animasi benda bergerak + grafik x-t (linear)
• Demo: Mobil mainan di lintasan lurus
• Soal: 2-3 contoh dengan konteks berbeda
• Durasi: 8-10 menit

**Video 2: Gerak Lurus Berubah Beraturan (GLBB)**
• Hook: Mobil yang direm — "Apa yang berubah?"
• Konsep: Percepatan, 3 persamaan utama
• Visual: Grafik v-t (linear), a-t (konstan)
• Demo: Bola menggelinding di bidang miring
• Soal: Pengereman mobil, jatuh bebas
• Durasi: 10-12 menit

**Video 3: Gerak Jatuh Bebas**
• Hook: "Bola bowling vs bulu — mana yang jatuh lebih cepat?"
• Konsep: g = 9.8 m/s², tanpa hambatan udara
• Visual: Animasi vakum vs udara
• Demo: Eksperimen vacuum chamber (video NASA)
• Soal: Tinggi bangunan, waktu jatuh
• Durasi: 8-10 menit

**Video 4: Gerak Parabola**
• Hook: Tembakan bola basket — "Mengapa bentuknya melengkung?"
• Konsep: Komponen vx (konstan) & vy (dipengaruhi g)
• Visual: Animasi trajectory + vektor terpisah
• Demo: PhET Projectile Motion
• Soal: Jangkauan maksimum, sudut optimal
• Durasi: 12-15 menit

**2. DINAMIKA (Gerak dengan Gaya)**

**Video 5: Hukum I Newton (Inersia)**
• Hook: Penumpang terdorong saat mobil direm mendadak
• Konsep: Kelembaman, benda cenderung mempertahankan keadaan
• Visual: Animasi benda di atas permukaan licin
• Demo: Tarik taplak meja (trik restoran)
• Soal: Analisis situasi sehari-hari
• Durasi: 8-10 menit

**Video 6: Hukum II Newton (F = ma)**
• Hook: "Mengapa mobil balap seringan mungkin?"
• Konsep: Hubungan F, m, a — proporsionalitas
• Visual: Animasi: ubah F → ubah a; ubah m → ubah a
• Demo: Troli + beban + ticker timer
• Soal: Hitung percepatan, gaya resultan
• Durasi: 10-12 menit

**Video 7: Hukum III Newton (Aksi-Reaksi)**
• Hook: Roket meluncur — "Apa yang mendorong roket?"
• Konsep: Gaya berpasangan, sama besar berlawanan arah
• Visual: Animasi pasangan gaya aksi-reaksi
• Demo: Balon ditiup dilepas, skateboard
• Soal: Identifikasi pasangan gaya
• Durasi: 8-10 menit

**Video 8: Aplikasi Hukum Newton (Free Body Diagram)**
• Hook: "Bagaimana cara menyelesaikan soal gaya yang kompleks?"
• Konsep: Langkah-langkah FBD
• Visual: Step-by-step menggambar FBD
• Demo: Berbagai kasus (bidang datar, miring, katrol)
• Soal: 3 contoh bertahap (mudah → sulit)
• Durasi: 12-15 menit

**3. ENERGI & MOMENTUM**

**Video 9: Usaha dan Energi**
• Hook: "Mengapa naik tangga lebih melelahkan dari jalan datar?"
• Visual: Transformasi energi (Ep ↔ Ek)
• Demo: Energy Skate Park (PhET)
• Durasi: 10-12 menit

**Video 10: Hukum Kekekalan Momentum**
• Hook: Video biliar — tumbukan bola
• Visual: Before-after tumbukan + vektor momentum
• Demo: Algodoo collision simulation
• Durasi: 10-12 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Khusus Video Mekanika:**

1. **Gunakan konteks sehari-hari** — olahraga, transportasi, permainan
2. **Multiple representasi** — verbal + visual + matematis + grafis
3. **Animasi vektor** — selalu tampilkan arah & besar gaya/kecepatan
4. **Step-by-step problem solving** — jangan skip langkah
5. **Common mistakes** — tunjukkan kesalahan umum & cara menghindarinya
6. **Koneksi antar topik** — tunjukkan bagaimana GLB → GLBB → Parabola saling terkait

💡 **Urutan Video yang Direkomendasikan:**
GLB → GLBB → Jatuh Bebas → Parabola → Hukum Newton I, II, III → FBD → Energi → Momentum`,
    category: "konten"
  },
  {
    keywords: ["listrik", "magnet", "elektromagnetik", "rangkaian", "arus", "materi listrik"],
    response: `⚡ **Panduan Video Pembelajaran LISTRIK & MAGNET — Visualisasi & Strategi**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Tantangan Utama:**
Listrik & magnet bersifat ABSTRAK — tidak bisa dilihat langsung! Ini membuat visualisasi menjadi SANGAT KRITIS. Animasi yang baik bisa mengubah pemahaman siswa secara dramatis.

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Topik & Ide Video:**

**1. LISTRIK STATIS**

**Video: Muatan Listrik & Hukum Coulomb**
• Hook: Rambut berdiri saat dekat balon — "Mengapa?"
• Konsep: Muatan positif/negatif, gaya Coulomb
• Visual: Animasi partikel bermuatan tarik-menarik/tolak-menolak
• Demo: Elektroskop, penggaris + kain
• Visualisasi medan: Garis gaya antara dua muatan
• Soal: Hitung gaya Coulomb, superposisi gaya
• Durasi: 10-12 menit

**Video: Medan Listrik & Potensial**
• Hook: "Bagaimana muatan 'merasakan' kehadiran muatan lain?"
• Konsep: E = F/q, garis medan, equipotensial
• Visual: Animasi garis medan listrik (2D & 3D)
• Tools: PhET Charges and Fields, Manim
• Durasi: 10-12 menit

**2. LISTRIK DINAMIS**

**Video: Arus, Tegangan & Hambatan (Hukum Ohm)**
• Hook: "Mengapa lampu redup jika ditambah panjang kabel?"
• Konsep: I = V/R, analogi air mengalir
• Visual: 
  - Animasi elektron bergerak dalam kawat
  - Analogi: air (arus), tekanan (tegangan), pipa sempit (hambatan)
  - Slider interaktif: ubah V atau R → lihat perubahan I
• Demo: PhET Circuit Construction Kit
• Soal: Rangkaian sederhana, kombinasi
• Durasi: 10-12 menit

**Video: Rangkaian Seri & Paralel**
• Hook: "Mengapa jika satu lampu mati di rumah, yang lain tetap nyala?"
• Konsep: R_total seri vs paralel, pembagian arus/tegangan
• Visual: Animasi arus di rangkaian (perhatikan percabangan)
• Demo: PhET + hitungan manual
• Tips visual: Warna berbeda untuk arus di setiap cabang
• Durasi: 12-15 menit

**Video: Hukum Kirchhoff**
• Hook: Rangkaian kompleks — "Bagaimana menyelesaikannya?"
• Konsep: KCL (simpul) & KVL (loop)
• Visual: Animasi arus masuk = arus keluar di simpul
• Step-by-step: 2 loop circuit walkthrough
• Durasi: 12-15 menit

**3. MEDAN MAGNET**

**Video: Magnet & Medan Magnet**
• Hook: Kompas menunjuk utara — "Mengapa?"
• Konsep: Kutub magnet, garis gaya, medan di sekitar kawat berarus
• Visual: 
  - Garis gaya magnet 3D (Blender)
  - Kaidah tangan kanan animasi
  - Medan di sekitar kawat lurus, loop, solenoida
• Demo: Besi di sekitar magnet, kompas + kawat
• Durasi: 10-12 menit

**Video: Gaya Lorentz**
• Hook: Motor listrik — "Apa yang membuatnya berputar?"
• Konsep: F = qv × B, F = IL × B
• Visual: 
  - Partikel bermasuk masuk medan B → melengkung
  - Kaidah tangan kanan 3D
  - Animasi motor listrik sederhana
• Demo: Kawat dalam medan magnet (keseimbangan)
• Durasi: 10-12 menit

**4. INDUKSI ELEKTROMAGNETIK**

**Video: Hukum Faraday & Lenz**
• Hook: "Bagaimana gerakan magnet bisa menghasilkan listrik?"
• Konsep: Fluks magnetik, GGL induksi, arah arus induksi
• Visual: 
  - Animasi magnet masuk/keluar kumparan
  - Perubahan fluks → arus terinduksi
  - Hukum Lenz: arah arus melawan perubahan fluks
• Demo: PhET Faraday's Law
• Aplikasi: Generator, transformator
• Durasi: 12-15 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Tips Visualisasi Khusus Listrik-Magnet:**

**KONSENSUS WARNA:**
• 🔴 Merah: Muatan positif / kutub utara
• 🔵 Biru: Muatan negatif / kutub selatan
• 🟡 Kuning: Arus konvensional (I)
• 🟢 Hijau: Medan magnet (B)
• 🟠 Oranye: Gaya (F)
• ⚪ Putih: Elektron (e⁻)

**ANALOGI YANG BERGUNA:**
• Arus = aliran air
• Tegangan = tekanan air / ketinggian
• Hambatan = ukuran pipa
• Kapasitor = tangki penampung air
• Induktor = roda air (inersia)

**TOOLS TERBAIK:**
1. **PhET** — Circuit Construction Kit, Charges and Fields, Faraday
2. **Falstad** — Circuit Simulator (real-time)
3. **GeoGebra** — Grafik & diagram
4. **Manim** — Animasi custom berkualitas tinggi
5. **Blender** — Medan magnet 3D

💡 **Tips Penting:** Selalu jelaskan perbedaan antara ARUS KONVENSIONAL (+ ke -) dan ARUS ELEKTRON (- ke +). Ini sumber miskonsepsi terbesar!`,
    category: "konten"
  },
  {
    keywords: ["gelombang", "optik", "cahaya", "bunyi", "frekuensi", "materi gelombang"],
    response: `🌊 **Panduan Video Pembelajaran GELOMBANG & OPTIK — Visualisasi Terbaik**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Gelombang COCOK untuk Animasi?**
Gelombang adalah topik yang PALING VISUAL di fisika. Hampir semua konsep gelombang bisa divisualisasikan dengan animasi yang menarik. Ini adalah "golden topic" untuk video pembelajaran!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Topik & Ide Video:**

**1. GELOMBANG MEKANIK**

**Video: Pengertian & Jenis Gelombang**
• Hook: Riak air di kolam — "Apa yang berpindah?"
• Konsep: Gelombang = perpindahan ENERGI tanpa perpindahan MATERI
• Visual: 
  - Animasi partikel naik-turun (transversal)
  - Animasi partikel rapatan-regangan (longitudinal)
  - Side-by-side comparison
• Demo: Slinky untuk transversal & longitudinal
• Durasi: 8-10 menit

**Video: Parameter Gelombang**
• Hook: Dua gelombang berbeda — "Apa bedanya?"
• Konsep: A, λ, f, T, v — dan hubungannya (v = fλ)
• Visual: 
  - Animasi gelombang dengan slider A, λ, f
  - Highlight setiap parameter dengan warna berbeda
  - Animasi: ubah f → λ berubah (v konstan)
• Tools: GeoGebra, PhET Wave on a String
• Durasi: 10-12 menit

**Video: Superposisi & Interferensi**
• Hook: Dua batu dilempar ke kolam — pola yang terbentuk
• Konsep: Prinsip superposisi, interferensi konstruktif & destruktif
• Visual: 
  - Dua gelombang bertemu → penjumlahan
  - Pola interferensi (bright & dark fringes)
  - Animasi real-time
• Demo: PhET Wave Interference
• Durasi: 10-12 menit

**Video: Gelombang Berdiri (Standing Waves)**
• Hook: Senar gitar bergetar — "Mengapa ada pola tertentu?"
• Konsep: Superposisi gelombang datang & pantul
• Visual: 
  - Animasi node & antinode
  - Harmonik 1, 2, 3, ...
  - Senar dengan berbagai mode getar
• Demo: PhET, Melde's experiment
• Durasi: 10-12 menit

**2. BUNYI**

**Video: Sifat-Sifat Bunyi**
• Hook: "Mengapa suara berbeda di udara vs air?"
• Konsep: Bunyi = gelombang longitudinal, butuh medium
• Visual: Animasi gelombang tekanan, partikel udara
• Demo: Bell jar experiment (vakum)
• Durasi: 8-10 menit

**Video: Efek Doppler**
• Hook: Sirine ambulans lewat — "Mengapa nadanya berubah?"
• Konsep: Frekuensi berubah karena sumber/pendengar bergerak
• Visual: 
  - Animasi gelombang dari sumber bergerak
  - Front compression (mendekat) & expansion (menjauh)
  - Grafik frekuensi vs waktu
• Demo: Simulasi animasi
• Durasi: 10-12 menit

**Video: Resonansi & Pipa Organa**
• Hook: Tiup botol — "Mengapa nadanya berbeda tergantung isi air?"
• Konsep: Resonansi, harmonik pada pipa terbuka & tertutup
• Visual: 
  - Pola gelombang berdiri dalam pipa
  - Perbandingan pipa terbuka vs tertutup
  - Animasi partikel udara
• Demo: Pipa resonansi + garpu tala
• Durasi: 10-12 menit

**3. OPTIK**

**Video: Pemantulan Cahaya**
• Hook: Cermin — "Mengapa bayangan kita terbalik kiri-kanan?"
• Konsep: Hukum pemantulan, cermin datar & lengkung
• Visual: 
  - Ray tracing animasi (sinar datang = sinar pantul)
  - Pembentukan bayangan di cermin cekung/cembung
  - 3 sinar istimewa animasi
• Tools: GeoGebra (Geometric Optics)
• Durasi: 10-12 menit

**Video: Pembiasan Cahaya (Hukum Snellius)**
• Hook: Sedotan terlihat patah di air — "Mengapa?"
• Konsep: n₁ sin θ₁ = n₂ sin θ₂, indeks bias
• Visual: 
  - Animasi sinar masuk medium berbeda
  - Sudut bias berubah sesuai indeks bias
  - Pembiasan total internal
• Demo: PhET Bending Light
• Aplikasi: Fiber optik, pelangi
• Durasi: 10-12 menit

**Video: Difraksi & Interferensi Cahaya**
• Hook: CD menghasilkan warna-warni — "Mengapa?"
• Konsep: Huygens, celah tunggal/ganda, pola difraksi
• Visual: 
  - Animasi muka gelombang melewati celah
  - Pola interferensi Young (bright & dark fringe)
  - Pengaruh lebar celah & panjang gelombang
• Demo: PhET Wave Interference (light mode)
• Durasi: 12-15 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Tips Visualisasi Gelombang:**

1. **Gunakan warna berbeda** untuk gelombang yang berbeda
2. **Animasi real-time** — siswa bisa lihat hubungan parameter
3. **Slow motion** — perlambat gelombang untuk pemahaman
4. **Partikel view** — tunjukkan gerakan partikel medium
5. **Graph view** — tampilkan grafik y-x dan y-t bersamaan
6. **Side-by-side** — bandingkan berbagai kondisi

💡 **Tools Terbaik:**
• **PhET Wave Interference** — paling lengkap & interaktif
• **Falstad Ripple** — simulasi gelombang 2D
• **GeoGebra** — grafik fungsi gelombang
• **Manim** — animasi custom berkualitas tinggi`,
    category: "konten"
  },
  {
    keywords: ["termodinamika", "suhu", "kalor", "panas", "energi dalam", "gas ideal"],
    response: `🌡️ **Panduan Video Pembelajaran TERMODINAMIKA — Konsep & Visualisasi**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Tantangan Termodinamika:**
Termodinamika melibatkan konsep yang TIDAK BISA DIAMATI langsung (suhu = energi kinetik rata-rata partikel, entropi = derajat ketidakteraturan). Visualisasi partikel dan diagram adalah KUNCI!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Topik & Ide Video:**

**1. SUHU & KALOR**

**Video: Suhu dan Pengukurannya**
• Hook: "Apakah 'panas' dan 'dingin' itu objektif?"
• Konsep: Suhu = ukuran energi kinetik rata-rata partikel
• Visual: 
  - Animasi partikel bergerak cepat (panas) vs lambat (dingin)
  - Skala suhu: Celsius, Fahrenheit, Kelvin
  - Animasi termometer
• Demo: Eksperimen sederhana (es mencair, air mendidih)
• Durasi: 8-10 menit

**Video: Kalor dan Perpindahannya**
• Hook: "Mengapa sendok logam terasa panas di sup?"
• Konsep: Q = mcΔT, konduksi, konveksi, radiasi
• Visual: 
  - Animasi partikel: transfer energi kinetik (konduksi)
  - Animasi aliran fluida (konveksi)
  - Animasi gelombang inframerah (radiasi)
  - Side-by-side comparison 3 jenis perpindahan
• Demo: Eksperimen konduksi (lilin di batang logam)
• Durasi: 10-12 menit

**Video: Kalor Laten & Perubahan Wujud**
• Hook: "Mengapa suhu es yang mencair tetap 0°C?"
• Konsep: Q = mL, grafik pemanasan, plateau saat perubahan wujud
• Visual: 
  - Animasi partikel saat perubahan wujud
  - Grafik T vs Q dengan plateau
  - Breakdown energi: kinetik vs potensial
• Durasi: 8-10 menit

**2. GAS IDEAL**

**Video: Teori Kinetik Gas**
• Hook: "Apa yang sebenarnya terjadi di dalam balon?"
• Konsep: PV = nRT, asumsi gas ideal, energi kinetik rata-rata
• Visual: 
  - Animasi partikel gas dalam wadah (PhET Gas Properties)
  - Partikel menumbuk dinding → tekanan
  - Slider: ubah T → ubah kecepatan partikel → ubah P
• Demo: PhET Gas Properties
• Durasi: 10-12 menit

**Video: Proses-Proses Gas Ideal**
• Hook: "Apa yang terjadi pada gas jika dimampatkan?"
• Konsep: Isotermal, isobarik, isokhorik, adiabatik
• Visual: 
  - Diagram PV untuk setiap proses
  - Animasi piston + partikel untuk setiap proses
  - Perbandingan 4 proses dalam satu diagram PV
• Tools: GeoGebra (diagram PV interaktif)
• Durasi: 12-15 menit

**3. HUKUM TERMODINAMIKA**

**Video: Hukum I Termodinamika**
• Hook: "Energi bisa diciptakan atau dimusnahkan?"
• Konsep: ΔU = Q - W, kekekalan energi
• Visual: 
  - Diagram energi masuk (Q) dan keluar (W)
  - Animasi sistem: gas dalam silinder
  - Breakdown: Q positif/negatif, W positif/negatif
• Demo: Gas dalam silinder + pemanasan
• Durasi: 10-12 menit

**Video: Hukum II Termodinamika & Entropi**
• Hook: "Mengapa telur yang pecah tidak bisa menyatu kembali?"
• Konsep: Entropi, arah proses spontan, mesin kalor
• Visual: 
  - Animasi partikel teratur → acak (entropi naik)
  - Diagram mesin kalor (Q_H → W → Q_C)
  - Siklus Carnot di diagram PV
• Demo: Animasi tetes tinta di air
• Durasi: 12-15 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Tips Visualisasi Termodinamika:**

**PARTIKEL VIEW (Sangat Penting!):**
• Tunjukkan partikel sebagai bola-bola kecil
• Kecepatan = suhu (cepat = panas)
• Jumlah tumbukan dinding = tekanan
• Jarak antar partikel = fase zat

**WARNA KONSISTEN:**
• 🔴 Merah/oranye: Partikel panas (cepat)
• 🔵 Biru: Partikel dingin (lambat)
• 🟡 Kuning: Kalor/energi yang ditransfer
• ⬜ Putih: Kerja (piston bergerak)

**ANALOGI BERGUNA:**
• Gas dalam wadah = bola-bola dalam kotak
• Suhu = kecepatan rata-rata bola
• Tekanan = seberapa sering bola menumbuk dinding
• Kalor = transfer energi kinetik antar bola

💡 **Tools Terbaik:**
• **PhET Gas Properties** — animasi partikel gas terbaik
• **PhET States of Matter** — perubahan wujud
• **GeoGebra** — diagram PV interaktif
• **Manim** — animasi siklus termodinamika`,
    category: "konten"
  },
  {
    keywords: ["fisika modern", "kuantum", "relativitas", "atom", "nuklir", "materi modern"],
    response: `⚛️ **Panduan Video Pembelajaran FISIKA MODERN — Visualisasi Konsep Abstrak**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Tantangan Utama:**
Fisika modern membahas fenomena yang TIDAK BISA DIAMATI dengan mata telanjang dan sering BERLAWANAN dengan intuisi sehari-hari. Animasi dan analogi menjadi SANGAT PENTING!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Topik & Ide Video:**

**1. FISIKA KUANTUM**

**Video: Dualisme Gelombang-Partikel**
• Hook: Eksperimen celah ganda — "Apakah cahaya itu gelombang atau partikel?"
• Konsep: De Broglie wavelength, dual nature
• Visual: 
  - Animasi eksperimen celah ganda Young
  - Partikel satu per satu → pola interferensi terbentuk
  - Perbandingan: perilaku gelombang vs partikel
• Demo: Video eksperimen celah ganda nyata
• Durasi: 12-15 menit

**Video: Efek Fotolistrik**
• Hook: "Mengapa cahaya merah tidak bisa mengeluarkan elektron, tapi cahaya UV bisa?"
• Konsep: Foton, energi foton E=hf, work function
• Visual: 
  - Animasi foton menumbuk permukaan logam
  - Elektron terlepas jika E_foton > W
  - Grafik Einstein: Ek_max vs frekuensi
• Demo: PhET Photoelectric Effect
• Durasi: 10-12 menit

**Video: Model Atom**
• Hook: "Bagaimana bentuk atom? Kita tidak bisa melihatnya!"
• Konsep: Evolusi model atom (Dalton → Thomson → Rutherford → Bohr → Mekanika Kuantum)
• Visual: 
  - Timeline animasi evolusi model atom
  - Setiap model dengan kelebihan & kekurangan
  - Model Bohr: orbit elektron + transisi + emisi foton
  - Model kuantum: orbital probability cloud
• Tools: Blender (model 3D atom)
• Durasi: 12-15 menit

**2. RELATIVITAS KHUSUS**

**Video: Postulat Einstein & Dilatasi Waktu**
• Hook: "Jika kamu bepergian dengan kecepatan cahaya, apa yang terjadi?"
• Konsep: c konstan, waktu relatif, dilatasi waktu
• Visual: 
  - Animasi jam cahaya (light clock)
  - Perbandingan waktu: pengamat diam vs bergerak
  - Twin paradox visualization
• Tools: Manim, Blender
• Durasi: 12-15 menit

**Video: Kontraksi Panjang & E=mc²**
• Hook: "Benda yang bergerak menjadi lebih pendek?!"
• Konsep: Length contraction, mass-energy equivalence
• Visual: 
  - Animasi benda bergerak mendekati c → memendek
  - Visualisasi E=mc²: sedikit massa = energi besar
  - Contoh: reaksi nuklir
• Durasi: 10-12 menit

**3. FISIKA NUKLIR**

**Video: Radioaktivitas & Peluruhan**
• Hook: "Apa yang keluar dari inti atom yang tidak stabil?"
• Konsep: Alpha, beta, gamma decay, waktu paruh
• Visual: 
  - Animasi inti atom memancarkan partikel
  - Alpha: 2p + 2n keluar
  - Beta: neutron → proton + elektron
  - Gamma: foton energi tinggi
  - Grafik peluruhan eksponensial (N vs t)
• Demo: Simulasi peluruhan dengan dadu/koin
• Durasi: 10-12 menit

**Video: Reaksi Fisi & Fusi**
• Hook: "Dari mana energi matahari berasal?"
• Konsep: Fisi (pembelahan) vs fusi (penggabungan), defek massa
• Visual: 
  - Animasi inti berat terbelah (fisi)
  - Animasi inti ringan bergabung (fusi)
  - Defek massa → energi (E=mc²)
  - Perbandingan: bom atom vs matahari
• Tools: Blender (animasi 3D inti atom)
• Durasi: 12-15 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎨 Strategi Visualisasi Fisika Modern:**

**1. GUNAKAN ANALOGI:**
• Fungsi gelombang = "kabut probabilitas"
• Orbital = "awan elektron"
• Foton = "paket energi cahaya"
• Dualisme = "silinder terlihat lingkaran dari atas, kotak dari samping"

**2. EVOLUSI HISTORIS:**
• Ceritakan perkembangan konsep secara kronologis
• Tunjukkan mengapa model lama diganti
• Ini membantu siswa memahami "mengapa" bukan hanya "apa"

**3. PERBANDINGAN VISUAL:**
• Model lama vs baru side-by-side
• Prediksi teori vs hasil eksperimen
• Skala makro vs mikro

**4. INTERAKTIVITAS:**
• PhET simulations untuk kuantum
• Slider parameter (frekuensi, intensitas)
• Before-after scenarios

💡 **Tools Terbaik:**
• **PhET** — Photoelectric Effect, Quantum Wave Interference
• **Blender** — Model atom 3D, visualisasi inti
• **Manim** — Grafik fungsi gelombang, transformasi
• **After Effects** — Motion graphics untuk konsep abstrak

💡 **Tips Penting:** Akui bahwa fisika modern memang "aneh" dan kontraintuitif. Validasi kebingungan siswa, lalu bimbing mereka perlahan!`,
    category: "konten"
  },

  // =============================================
  // === PEDAGOGI ===
  // =============================================
  {
    keywords: ["pedagogi", "strategi", "metode", "pendekatan", "pembelajaran", "flipped", "inquiry"],
    response: `📚 **Strategi Pedagogi untuk Video Pembelajaran Fisika — Panduan Komprehensif**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Pedagogi Penting?**
Video yang secara visual bagus tapi secara pedagogi buruk TIDAK akan efektif. Sebaliknya, video sederhana dengan desain pedagogi yang baik bisa SANGAT EFEKTIF. Pedagogi adalah JIWA dari video pembelajaran!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Strategi Pedagogi untuk Video Fisika:**

**1. CONSTRUCTIVIST APPROACH**
Filosofi: Siswa membangun pengetahuan sendiri dari pengalaman

**Penerapan di Video:**
• Mulai dari pengetahuan awal siswa ("Apa yang kalian tahu tentang...?")
• Ajak siswa memprediksi ("Menurut kalian, apa yang terjadi jika...?")
• Tunjukkan hasil yang mungkin mengejutkan
• Bimbing siswa merekonstruksi pemahaman
• Hubungkan konsep baru dengan yang sudah diketahui

**Contoh Video Constructivist:**
\`\`\`
[Hook] "Kita tahu benda jatuh ke bawah. Tapi apakah benda berat 
        jatuh lebih cepat?"
[Predict] "Coba pause video dan tuliskan prediksimu!"
[Demonstrate] Tunjukkan eksperimen (bola berat vs ringan jatuh bersamaan)
[Explain] "Mengapa? Karena percepatan gravitasi SAMA untuk semua benda"
[Connect] "Ini berkaitan dengan Hukum II Newton yang sudah kita pelajari..."
\`\`\`

**2. INQUIRY-BASED LEARNING**
Filosofi: Belajar melalui pertanyaan dan investigasi

**Penerapan di Video:**
• Ajukan masalah/pertanyaan di awal
• Bimbing siswa melalui proses investigasi
• Biarkan siswa "menemukan" konsep
• Refleksi & kesimpulan

**Contoh Video Inquiry:**
\`\`\`
[Problem] "Bagaimana hubungan antara gaya, massa, dan percepatan?"
[Explore] Simulasi PhET: ubah gaya, amati percepatan
[Analyze] "Apa yang kalian perhatikan? Buat grafik F vs a!"
[Conclude] "Gaya berbanding lurus dengan percepatan → F = ma"
[Apply] "Sekarang coba prediksi: jika massa 2x, percepatan?"
\`\`\`

**3. FLIPPED CLASSROOM**
Filosofi: Materi di video (rumah), aktivitas di kelas

**Penerapan:**
• Video berisi: penjelasan konsep + contoh dasar
• Kelas berisi: diskusi, problem solving, eksperimen
• Video harus SELF-CONTAINED & jelas
• Sertakan embedded questions

**Struktur Video untuk Flipped:**
\`\`\`
[Pre-video] Kirim panduan: "Tonton video ini dan jawab 3 pertanyaan"
[Video] Konsep + contoh + embedded questions
[Post-video] Quiz singkat online (Edpuzzle/Google Form)
[In-class] Diskusi, latihan lanjutan, eksperimen
\`\`\`

**4. SCAFFOLDING**
Filosofi: Bantu siswa bertahap, kurangi bantuan seiring kemampuan meningkat

**Penerapan di Video:**
• Mulai dari yang konkret → abstrak
• Contoh solved → guided → independent
• Visual → verbal → matematis
• Satu konsep → koneksi → aplikasi kompleks

**Level Scaffolding:**
\`\`\`
Level 1: "Perhatikan contoh ini..." (full guidance)
Level 2: "Sekarang coba bersama..." (guided practice)
Level 3: "Coba yourselves..." (independent)
Level 4: "Buat variasi sendiri..." (creation)
\`\`\`

**5. MULTIPLE REPRESENTATIONS**
Filosofi: Sajikan konsep dalam berbagai bentuk representasi

**4 Representasi untuk Setiap Konsep Fisika:**
• **Verbal** — Penjelasan dengan kata-kata
• **Visual** — Diagram, gambar, animasi
• **Matematis** — Rumus, persamaan
• **Grafis** — Grafik, chart

**Contoh: Hukum II Newton**
• Verbal: "Percepatan berbanding lurus dengan gaya"
• Visual: Animasi benda + vektor gaya
• Matematis: F = ma
• Grafis: Grafik F vs a (linear)

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Prinsip Mayer untuk Video Fisika:**

**5 Prinsip TERPENTING:**

1. **Multimedia Principle** — Gambar + kata > kata saja
2. **Contiguity Principle** — Dekatkan teks & gambar terkait
3. **Modality Principle** — Gambar + narasi > gambar + teks
4. **Coherence Principle** — Hapus yang tidak relevan
5. **Segmenting Principle** — Pecah menjadi bagian kecil

━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **Rekomendasi:**
• Gunakan kombinasi CONSTRUCTIVIST + MULTIPLE REPRESENTATIONS
• Terapkan SCAFFOLDING dalam setiap video
• Untuk materi yang butuh eksplorasi: INQUIRY-BASED
• Untuk efisiensi waktu kelas: FLIPPED CLASSROOM`,
    category: "pedagogi"
  },
  {
    keywords: ["miskonsepsi", "kesalahpahaman", "misconception", "kesulitan", "salah paham"],
    response: `🧠 **Menangani Miskonsepsi Fisika dalam Video Pembelajaran**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Miskonsepsi Penting?**
Siswa TIDAK datang dengan "pikiran kosong." Mereka sudah memiliki pemahaman dari pengalaman sehari-hari yang sering kali SALAH. Jika miskonsepsi tidak diatasi, konsep baru TIDAK akan tertanam dengan baik.

**Penelitian menunjukkan:** Miskonsepsi yang tidak ditangani akan BERTAHAN bahkan setelah instruksi formal!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Daftar Miskonsepsi Umum & Cara Menanganinya:**

**MEKANIKA:**

| Miskonsepsi | Kebenaran | Strategi Video |
|-------------|-----------|----------------|
| "Benda berat jatuh lebih cepat" | Semua benda jatuh dengan percepatan yang sama (tanpa hambatan udara) | Tunjukkan eksperimen vacuum chamber + penjelasan F=ma |
| "Gaya diperlukan untuk mempertahankan gerak" | Gaya diperlukan untuk MENGUBAH gerak (Hukum I Newton) | Animasi benda di permukaan licin (gerak tanpa gaya) |
| "Kecepatan dan percepatan selalu searah" | Bisa berlawanan (perlambatan) | Animasi benda melambat: v ke kanan, a ke kiri |
| "Gaya normal selalu = berat" | Tergantung situasi | Tunjukkan kasus: bidang miring, lift, dll |
| "Benda di puncak parabola memiliki v=0" | v≠0, hanya vy=0 | Animasi dengan vektor di puncak |

**LISTRIK:**

| Miskonsepsi | Kebenaran | Strategi Video |
|-------------|-----------|----------------|
| "Arus habis di sepanjang rangkaian" | Arus sama di seluruh rangkaian seri | Animasi elektron: tidak "habis", hanya transfer energi |
| "Baterai menghasilkan arus tetap" | Arus tergantung hambatan (I=V/R) | Slider R → perubahan I |
| "Elektron bergerak sangat cepat" | Drift velocity sangat lambat (~mm/s) | Animasi: elektron bergerak lambat tapi sinyal cepat |
| "Komponen 'memakai' arus" | Komponen memakai ENERGI, bukan arus | Analogi: roda air memakai energi air, bukan airnya |

**GELOMBANG & OPTIK:**

| Miskonsepsi | Kebenaran | Strategi Video |
|-------------|-----------|----------------|
| "Bayangan di cermin ada DI cermin" | Bayangan ada DI BELAKANG cermin (maya) | Animasi perpanjangan sinar di belakang cermin |
| "Lensa selalu memperbesar" | Bisa memperkecil juga | Tunjukkan lensa cekung + benda di berbagai posisi |
| "Gelombang memindahkan materi" | Gelombang memindahkan ENERGI | Animasi partikel hanya naik-turun, tidak berpindah |

**TERMODINAMIKA:**

| Miskonsepsi | Kebenaran | Strategi Video |
|-------------|-----------|----------------|
| "Suhu = banyaknya panas" | Suhu = energi kinetik rata-rata | Animasi partikel: sedikit partikel cepat vs banyak lambat |
| "Logam lebih dingin dari kayu" | Logam konduktor lebih baik (cepat transfer panas) | Demo: sentuh logam & kayu pada suhu yang sama |

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Strategi 4-Step untuk Menangani Miskonsepsi:**

**Step 1: ELICIT (Pancing)**
• Ajukan pertanyaan yang memancing miskonsepsi
• "Menurut kalian, apa yang terjadi jika...?"
• Biarkan siswa mengungkapkan pemahamannya dulu

**Step 2: CONFRONT (Konfrontasi)**
• Tunjukkan bukti yang bertentangan
• Demo/experimen yang hasilnya mengejutkan
• "Ternyata hasilnya BERBEDA dari yang kita prediksi!"

**Step 3: RESOLVE (Resolusi)**
• Jelaskan konsep yang benar
• Gunakan animasi untuk memperjelas
• Hubungkan dengan konsep yang sudah dipahami

**Step 4: EXTEND (Perluas)**
• Berikan contoh aplikasi
• Variasi soal
• Koneksi ke konsep lain

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎬 Format Video "Miskonsepsi":**

**Format 1: "Mitos vs Fakta"**
\`\`\`
[0:00-0:15] "Mitos: Benda berat jatuh lebih cepat"
[0:15-0:45] Tunjukkan "bukti" yang mendukung miskonsepsi
[0:45-1:00] "Tapi tunggu..." — tunjukkan kontradiksi
[1:00-3:00] Eksperimen yang menunjukkan kebenaran
[3:00-5:00] Penjelasan konsep yang benar
[5:00-6:00] Aplikasi & contoh soal
\`\`\`

**Format 2: "Apa yang Salah?"**
\`\`\`
[0:00-0:30] Tunjukkan pernyataan/gambar yang mengandung miskonsepsi
[0:30-1:00] "Coba identifikasi, apa yang salah?"
[1:00-1:30] [PAUSE untuk berpikir]
[1:30-4:00] Bahas kesalahan & jelaskan yang benar
\`\`\`

💡 **Tips:** Format "Mitos vs Fakta" dan "Apa yang Salah?" sangat ENGAGING dan viral-worthy!`,
    category: "pedagogi"
  },
  {
    keywords: ["asesmen", "evaluasi siswa", "penilaian", "quiz", "soal", "check understanding"],
    response: `📝 **Asesmen dalam Video Pembelajaran Fisika — Panduan Lengkap**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Asesmen dalam Video?**
Video tanpa asesmen = ceramah satu arah. Asesmen yang terintegrasi membuat video menjadi INTERAKTIF dan memastikan siswa benar-benar memahami materi.

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Jenis Asesmen dalam Video:**

**1. PRE-ASSESSMENT (Pembuka Video)**

**Tujuan:** Mengaktivasi prior knowledge & memotivasi

**Format:**
• Pertanyaan pemantik: "Apa yang kalian tahu tentang gaya?"
• Predict-observe: "Menurutmu, apa yang terjadi jika...?"
• Quick quiz: 2-3 pertanyaan singkat
• Brain teaser: Teka-teki fisika

**Contoh:**
\`\`\`
[Opening] "Sebelum kita mulai, coba jawab pertanyaan ini:
Sebuah bola dilempar ke atas. Di titik tertinggi,
kecepatan bola adalah... 
A) Maksimum  B) Nol  C) Negatif
Coba pause video dan pikirkan jawabannya!"
[3 second pause]
"Jawabannya: B) Nol. Tapi apakah percepatannya juga nol?
Tonton sampai akhir untuk tahu jawabannya!"
\`\`\`

**2. FORMATIVE ASSESSMENT (Di Tengah Video)**

**Tujuan:** Check for understanding & maintain engagement

**Format:**
• Embedded questions setiap 3-5 menit
• "Pause & Think" moments
• Quick calculation challenges
• Prediction before demonstration

**Contoh:**
\`\`\`
[Setelah penjelasan konsep]
"Sekarang coba kalian hitung:
Jika F = 10 N dan m = 2 kg, berapa percepatannya?
Pause video, kerjakan, lalu lanjutkan!"
[5 second pause]
"Benar! a = F/m = 10/2 = 5 m/s²"
\`\`\`

**3. POST-ASSESSMENT (Akhir Video)**

**Tujuan:** Evaluasi pencapaian tujuan pembelajaran

**Format:**
• Soal latihan dengan pembahasan
• Reflection questions
• Summary quiz
• Link ke quiz online

**Contoh:**
\`\`\`
[Closing] "Sekarang saatnya menguji pemahaman kalian!
Soal: Sebuah benda 5 kg didorong dengan gaya 20 N 
di permukaan licin. Berapa percepatan benda?

A) 0.25 m/s²  B) 4 m/s²  C) 100 m/s²  D) 25 m/s²

Jawabannya: B) 4 m/s²
a = F/m = 20/5 = 4 m/s²

Kalau kalian masih bingung, tonton ulang bagian [timestamp]!"
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🎯 Tips Membuat Soal dalam Video:**

**1. VARIASI LEVEL KOGNITIF:**
• C1-C2: "Sebutkan bunyi Hukum II Newton"
• C3: "Hitung percepatan benda jika F=10N, m=2kg"
• C4: "Analisis mengapa benda di lift terasa lebih berat saat naik"
• C5: "Evaluasi apakah kesimpulan eksperimen ini valid"

**2. KONTEKSTUAL:**
• Gunakan situasi sehari-hari
• Hubungkan dengan pengalaman siswa
• Buat relevan dengan kehidupan

**3. VISUAL:**
• Sertakan diagram/gambar dalam soal
• Animasi situasi soal
• Highlight informasi penting

**4. PEMBAHASAN STEP-BY-STEP:**
• Jangan langsung tunjukkan jawaban
• Beri waktu untuk berpikir
• Tunjukkan setiap langkah
• Jelaskan MENGAPA setiap langkah dilakukan

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🌐 Platform untuk Interactive Video:**

**1. Edpuzzle (edpuzzle.com)**
• ✅ Embed quiz di video YouTube
• ✅ Prevent skipping
• ✅ Analytics per siswa
• ✅ Gratis untuk guru
• 💡 Sangat direkomendasikan!

**2. H5P (h5p.org)**
• ✅ Interactive content (quiz, timeline, dll)
• ✅ Embed di LMS
• ✅ Open source
• ✅ Berbagai tipe interaksi

**3. PlayPosit (playposit.com)**
• ✅ Interactive video bubbles
• ✅ Discussion & annotation
• ✅ Analytics dashboard
• 💰 Freemium

**4. YouTube Cards & End Screens**
• ✅ Link ke video lain
• ✅ Playlist suggestion
• ✅ Gratis
• ❌ Tidak bisa quiz

**5. Google Forms + YouTube**
• ✅ Buat quiz di Google Forms
• ✅ Embed link di deskripsi video
• ✅ Auto-grading
• ✅ Gratis

━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **Best Practice:**
• Sisipkan 1 pertanyaan setiap 5-8 menit
• Berikan waktu pause minimal 5 detik
• Selalu tunjukkan pembahasan
• Variasi tipe soal (pilihan ganda, isian, analisis)
• Hubungkan soal dengan tujuan pembelajaran`,
    category: "pedagogi"
  },

  // =============================================
  // === PLATFORM & DISTRIBUSI ===
  // =============================================
  {
    keywords: ["youtube", "upload", "platform", "distribusi", "share", "bagikan", "seo"],
    response: `📤 **Platform Distribusi Video Pembelajaran Fisika — Panduan Lengkap**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Memilih Platform yang Tepat:**
Setiap platform memiliki kelebihan, kekurangan, dan audiens yang berbeda. Pilih berdasarkan TUJUAN dan TARGET AUDIENS!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Perbandingan Platform:**

**1. YOUTUBE ⭐ (Paling Direkomendasikan)**

**Kelebihan:**
• 🌍 Jangkauan global, miliaran pengguna
• 📊 Analytics lengkap (views, watch time, demographics)
• 💰 Monetisasi (jika memenuhi syarat)
• 🎵 Library musik gratis
• 📝 Auto-caption
• 📱 App mobile yang bagus
• 🔗 Shareable link
• 💬 Komentar & komunitas

**Kekurangan:**
• ❌ Algoritma bisa tidak ramah edukasi
• ❌ Iklan (untuk viewer)
• ❌ Kompetisi sangat tinggi

**Tips Optimasi YouTube:**
• Judul: Mengandung kata kunci + menarik ("Hukum Newton - Penjelasan Lengkap & Contoh Soal")
• Thumbnail: Custom, kontras tinggi, teks besar, wajah ekspresif
• Deskripsi: 200+ kata, kata kunci, timestamp, link terkait
• Tags: 15-20 tags relevan
• Playlist: Organisir per topik
• End screen: Link ke video terkait
• Cards: Link di momen relevan
• Subtitles: Upload SRT manual (lebih akurat dari auto)
• Konsisten: Upload rutin (misal: setiap minggu)

**Setting Upload:**
\`\`\`
Visibility: Public (untuk jangkauan luas)
atau Unlisted (untuk kelas tertentu)
Category: Education
Language: Indonesian
Recording date: isi jika relevan
License: Standard YouTube License
\`\`\`

**2. GOOGLE CLASSROOM / LMS**

**Kelebihan:**
• 🎯 Target audiens jelas (mahasiswa Anda)
• 🔒 Privasi terjaga
• 📝 Terintegrasi tugas & penilaian
• 📊 Tracking submission & grade
• 💬 Discussion forum

**Cara Pakai:**
• Upload video ke YouTube (Unlisted)
• Share link di Google Classroom
• Buat assignment dengan rubrik
• Set deadline & tracking

**3. WEBSITE/BLOG PRIBADI**

**Kelebihan:**
• 🎨 Branding personal penuh
• 📊 Kontrol data & analytics
• 🔗 SEO untuk pencarian Google
• 💼 Portfolio profesional

**Platform:**
• WordPress (paling populer)
• Notion (mudah, modern)
• GitHub Pages (gratis, teknis)
• Wix/Squarespace (drag & drop)

**4. MEDIA SOSIAL (Untuk Video Pendek)**

**Instagram Reels / TikTok:**
• Durasi: 15-60 detik (Reels), 15-60 detik (TikTok)
• Format: Portrait (9:16)
• Konten: "Fisika dalam 60 Detik", fun facts, demo singkat
• Tujuan: Brand awareness, engagement

**Twitter/X:**
• Format: Thread + video
• Konten: Penjelasan konsep singkat, diskusi
• Tujuan: Networking, diskusi akademis

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📊 Strategi Distribusi:**

**Short-term (Minggu 1):**
1. Upload ke YouTube
2. Share di WhatsApp group kelas
3. Post di Google Classroom
4. Share di media sosial pribadi

**Medium-term (Bulan 1):**
1. Buat playlist terorganisir
2. Cross-promote antar video
3. Engage dengan komentar
4. Kolaborasi dengan creator lain

**Long-term (Bulan 3+):**
1. Bangun komunitas (Telegram/Discord)
2. Konsisten upload schedule
3. Analitik → improve konten
4. Diversifikasi platform

💡 **Tips:** Mulai dari YouTube + Google Classroom. Tambahkan platform lain setelah konsisten!`,
    category: "platform"
  },
  {
    keywords: ["aksesibilitas", "accessibility", "subtitle", "caption", "inklusi", "disabilitas"],
    response: `♿ **Aksesibilitas Video Pembelajaran Fisika — Panduan Inklusif**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Aksesibilitas Penting?**

**Data:**
• ~5% populasi dunia memiliki gangguan pendengaran
• ~2.2% populasi memiliki gangguan penglihatan
• Banyak mahasiswa belajar di lingkungan bising
• Non-native speakers butuh teks untuk pemahaman
• Beberapa orang lebih mudah belajar dengan membaca

**Hukum:** UU No. 8/2016 tentang Penyandang Disabilitas mewajibkan aksesibilitas dalam pendidikan!

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Checklist Aksesibilitas Video:**

**1. SUBTITLE/CAPTION 📝**

**Mengapa:**
• Mahasiswa tunarungu
• Belajar di tempat bising/silent mode
• Non-native speakers
• Reinforcement visual-audio
• SEO (YouTube bisa index subtitle)

**Cara Membuat:**
• YouTube auto-generate → EDIT MANUAL (akurasi ~80%)
• Tools: Aegisub, Subtitle Edit, YouTube Studio
• Format: SRT (SubRip)
• Standar: Maksimal 42 karakter per baris, 2 baris

**Tips Subtitle untuk Fisika:**
• Pastikan istilah fisika benar (jangan auto-correct salah!)
• Rumus: tulis dalam format yang bisa dibaca
• Nama ilmuwan: ejaan benar (Newton, bukan "niuton")
• Bahasa asing: tetap dalam bahasa asli + terjemahan

**2. AUDIO DESCRIPTION 🎧**

**Mengapa:** Untuk mahasiswa tunanetra atau yang tidak bisa melihat layar

**Cara:**
• Narasi menjelaskan apa yang terjadi di visual
• "Perhatikan grafik di sebelah kiri, garis biru menunjukkan..."
• Jangan hanya mengandalkan visual tanpa penjelasan
• Baca rumus dengan lengkap: "F sama dengan m dikali a"

**3. VISUAL ACCESSIBILITY 👁️**

**Checklist:**
• ✅ Kontras warna tinggi (text vs background)
• ✅ Font minimal 24pt untuk teks di video
• ✅ Font sans-serif (lebih mudah dibaca)
• ✅ Hindari teks di atas background ramai
• ✅ Hindari flickering > 3x/detik (epilepsy)
• ✅ Color-blind friendly palette
• ✅ Jangan hanya mengandalkan warna untuk informasi

**Color-Blind Friendly Palette:**
• Gunakan ColorBrewer (colorbrewer2.org)
• Hindari merah-hijau sebagai pembeda utama
• Gunakan bentuk + warna (bukan hanya warna)
• Test dengan Coblis (color blind simulator)

**4. NAVIGASI & STRUKTUR 🧭**

**Checklist:**
• ✅ Chapter markers/timestamps di YouTube
• ✅ Playlist terstruktur (mudah navigasi)
• ✅ Kecepatan playback adjustable (0.5x - 2x)
• ✅ Deskripsi video berisi outline
• ✅ Link ke video prerequisite

**5. TRANSKRIP 📄**

**Mengapa:**
• Alternative format untuk belajar
• Bisa di-search (Ctrl+F)
• Bisa diterjemahkan
• Bisa dicetak untuk review
• SEO benefit

**Format Transkirp:**
\`\`\`
[00:00] Halo, selamat datang di video tentang Hukum Newton.
[00:05] Hari ini kita akan membahas Hukum II Newton.
[00:12] Sebelumnya, ingat kembali bahwa Hukum I Newton 
        menyatakan bahwa benda akan tetap diam atau bergerak 
        lurus beraturan jika tidak ada gaya yang bekerja.
...
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🛠️ Tools untuk Aksesibilitas:**

**Subtitle:**
• YouTube Studio (auto + manual edit)
• Aegisub (desktop, advanced)
• Otter.ai (auto-transcribe, English)
• Whisper by OpenAI (auto-transcribe, multi-language)

**Color Check:**
• ColorBrewer (colorbrewer2.org)
• Coblis Color Blind Simulator
• WebAIM Contrast Checker

**Font:**
• Gunakan: Arial, Calibri, Open Sans, Roboto
• Hindari: Times New Roman (serif), font dekoratif
• Size: Min 24pt untuk video

💡 **Prinsip Universal Design for Learning (UDL):**
Desain untuk SEMUA siswa dari awal, bukan sebagai "tambahan" untuk yang berkebutuhan khusus. Video yang aksesibel = video yang LEBIH BAIK untuk SEMUA orang!`,
    category: "platform"
  },

  // =============================================
  // === TIPS & BEST PRACTICES ===
  // =============================================
  {
    keywords: ["tips", "saran", "rekomendasi", "best practice", "trik", "rahasia", "cara terbaik"],
    response: `💡 **25+ Tips & Best Practices Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 KONTEN (Content)**

1. 🎯 **Satu video = satu topik spesifik** — Jangan gabungkan terlalu banyak konsep
2. ⏱️ **Durasi ideal: 6-12 menit** — Berdasarkan riset MIT, engagement turun drastis setelah 12 menit
3. 📝 **Bahasa sesuai level** — Jangan terlalu teknis, jangan terlalu sederhana
4. 🔄 **Hubungkan dengan materi sebelumnya** — "Kemarin kita belajar tentang..."
5. 🌍 **Konteks kehidupan nyata** — "Ini sama seperti saat kalian naik sepeda..."
6. ❓ **Ajukan pertanyaan** — Buat siswa berpikir, bukan pasif menonton
7. 📊 **Multiple representations** — Verbal + visual + matematis + grafis

**🎨 VISUAL**

8. 🎨 **Konsisten visual style** — Warna, font, layout seragam
9. 📐 **Diagram harus jelas** — Label terbaca, tidak terlalu kecil
10. 🖌️ **Warna untuk membedakan** — Variabel berbeda = warna berbeda
11. ✨ **Animasi secukupnya** — Jangan berlebihan, fokus pada konsep
12. 📏 **Notasi matematika benar** — Cek subscript, superscript, simbol
13. 🖼️ **Thumbnail menarik** — Ini yang pertama dilihat orang!
14. 📱 **Mobile-friendly** — Test di layar kecil

**🔊 AUDIO**

15. 🎤 **Audio jelas > visual bagus** — Investasi di microphone dulu!
16. 🗣️ **Tempo sedang** — Tidak terlalu cepat, tidak terlalu lambat
17. 📢 **Intonasi bervariasi** — Jangan monoton, beri penekanan
18. 🔇 **Minim noise** — Rekam di ruangan tenang
19. 🎵 **Musik latar opsional** — Volume rendah, jangan mengganggu narasi

**🎯 ENGAGEMENT**

20. 🪝 **Hook di 10 detik pertama** — Tentukan apakah penonton lanjut atau pergi
21. ❓ **Pertanyaan retoris** — "Pernahkah kalian bertanya mengapa...?"
22. 🧩 **Analogi & metafora** — "Arus listrik seperti air mengalir..."
23. 😄 **Sedikit humor** — Membuat video tidak membosankan
24. 📊 **Tunjukkan "mengapa ini penting"** — Motivasi belajar

**🎬 PRODUKSI**

25. 📋 **Selalu buat storyboard** — Jangan rekam tanpa rencana
26. 🎬 **Rekam audio terpisah** — Backup di Audacity
27. 💾 **Backup semua file** — 3-2-1 rule (3 copies, 2 media, 1 offsite)
28. 📝 **Simpan template** — Konsistensi & efisiensi
29. 🔄 **Iterasi berdasarkan feedback** — Video pertama tidak akan sempurna
30. 📊 **Analisis analytics** — Watch time, drop-off points, comments

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🏆 TOP 5 KESALAHAN YANG HARUS DIHINDARI:**

1. ❌ **Membaca slide** — Siswa bisa baca sendiri! Narasi harus MENAMBAH, bukan mengulang
2. ❌ **Terlalu banyak teks** — Cognitive overload! Gunakan visual
3. ❌ **Audio buruk** — Siswa akan MENINGGALKAN video dalam 10 detik
4. ❌ **Tidak ada hook** — 30% penonton pergi di 30 detik pertama
5. ❌ **Video terlalu panjang** — Pecah jadi seri jika perlu >15 menit

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🌟 VIDEO YANG SUKSES MEMILIKI:**

✅ Hook yang kuat di awal
✅ Tujuan pembelajaran yang jelas
✅ Visual yang mendukung narasi
✅ Audio yang jernih
✅ Struktur yang logis
✅ Contoh & aplikasi nyata
✅ Interaktivitas (pertanyaan, pause moments)
✅ Ringkasan yang efektif
✅ Call-to-action di akhir
✅ Thumbnail & judul yang menarik

💡 **Ingat:** Perfect is the enemy of done. Buat video pertamamu, publish, dapatkan feedback, lalu improve! 🚀`,
    category: "tips"
  },
  {
    keywords: ["kolaborasi", "tim", "kerja sama", "pembagian tugas", "manajemen project"],
    response: `👥 **Kolaborasi Tim dalam Produksi Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Kolaborasi Penting?**
Membuat video pembelajaran yang berkualitas SENDIRIAN sangat sulit dan melelahkan. Tim yang solid bisa menghasilkan video yang lebih baik, lebih cepat, dan lebih konsisten.

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Peran dalam Tim Produksi:**

**1. Content Developer (Ahli Materi Fisika)**
• 📚 Menyusun materi & konten fisika
• ✅ Memastikan kebenaran konsep
• 📝 Membuat naskah/script
• 🔍 Riset referensi & sumber
• 📊 Menyusun soal & asesmen

**Skill yang dibutuhkan:**
• Penguasaan materi fisika yang mendalam
• Kemampuan menulis yang baik
• Pemahaman kurikulum

**2. Instructional Designer**
• 🎯 Merancang alur pembelajaran
• 📋 Membuat storyboard
• 🧠 Menentukan strategi pedagogi
• 📐 Desain asesmen & evaluasi
• 🔄 Sequencing konten

**Skill yang dibutuhkan:**
• Pemahaman pedagogi & desain instruksional
• Kemampuan analisis kebutuhan belajar
• Kreativitas dalam penyajian

**3. Visual Designer / Animator**
• 🎨 Membuat grafis & ilustrasi
• 🎬 Animasi konsep fisika
• 📐 Desain slide & overlay
• 🖼️ Thumbnail & branding
• 🎨 Konsistensi visual

**Skill yang dibutuhkan:**
• Software desain (Canva, Illustrator, dll)
• Animasi (Manim, After Effects, Blender)
• Sense of design & color theory

**4. Video Editor**
• ✂️ Editing & compositing
• 🔊 Audio mixing & mastering
• 🎨 Color correction & grading
• 📤 Final rendering & export
• 📝 Subtitle & caption

**Skill yang dibutuhkan:**
• Software editing (DaVinci Resolve, Premiere)
• Audio editing (Audacity, Adobe Audition)
• Understanding of pacing & storytelling

**5. Quality Reviewer**
• 🔍 Review kebenaran konten fisika
• 📋 Review kualitas pedagogi
• 🎨 Review kualitas visual & audio
• ♿ Review aksesibilitas
• 📊 Evaluasi efektivitas

**Skill yang dibutuhkan:**
• Critical thinking
• Detail-oriented
• Pemahaman standar kualitas

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🔄 Workflow Tim:**

**Phase 1: Pre-Production (1-2 minggu)**
\`\`\`
Content Developer → Outline materi
Instructional Designer → Storyboard & script
Visual Designer → Style guide & mockups
All → Review & approval
\`\`\`

**Phase 2: Production (1-2 minggu)**
\`\`\`
Visual Designer → Buat aset visual & animasi
Content Developer → Record narasi
Video Editor → Setup project & template
All → Daily check-in
\`\`\`

**Phase 3: Post-Production (1 minggu)**
\`\`\`
Video Editor → Editing & compositing
Visual Designer → Review visual quality
Content Developer → Review konten
Instructional Designer → Review pedagogi
Quality Reviewer → Final review
\`\`\`

**Phase 4: Distribution & Evaluation**
\`\`\`
Video Editor → Export & upload
Content Developer → Deskripsi & metadata
All → Monitor analytics & feedback
Instructional Designer → Evaluasi & revisi
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**🛠️ Tools Kolaborasi:**

**Komunikasi:**
• 💬 Discord — voice chat + text channels
• 💬 WhatsApp Group — quick updates
• 💬 Slack — organized channels
• 📧 Email — formal communication

**Project Management:**
• 📋 Trello — Kanban board (gratis)
• 📋 Notion — all-in-one workspace
• 📋 Asana — task management
• 📋 Google Sheets — timeline tracking

**File Sharing:**
• ☁️ Google Drive — kolaborasi real-time
• ☁️ Dropbox — file sync
• ☁️ GitHub — version control (untuk Manim scripts)

**Design Collaboration:**
• 🎨 Figma — design collaboration (gratis)
• 🎨 Canva — team workspace
• 📝 Google Docs — script writing

**Review & Feedback:**
• 📝 Frame.io — video review & annotation
• 📝 Google Forms — structured feedback
• 📝 Loom — async video feedback

💡 **Tips Kolaborasi:**
1. Tentukan peran dengan jelas di awal
2. Buat timeline & deadline realistis
3. Komunikasi rutin (daily standup 15 menit)
4. Gunakan version control untuk file project
5. Dokumentasi semua keputusan
6. Celebrate milestones! 🎉`,
    category: "tips"
  },
  {
    keywords: ["evaluasi video", "penilaian video", "rubrik", "kriteria", "quality"],
    response: `📊 **Evaluasi & Rubrik Penilaian Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Mengapa Evaluasi Penting?**
Tanpa evaluasi, Anda tidak tahu apakah video Anda EFEKTIF. Evaluasi membantu memperbaiki kualitas dan membuktikan bahwa video Anda benar-benar membantu pembelajaran.

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📋 Rubrik Penilaian Video Pembelajaran Fisika:**

**SKOR TOTAL: 100%**

**1. KONTEN & KEBENARAN KONSEP (30%)**

| Kriteria | Skor 4 (Sangat Baik) | Skor 3 (Baik) | Skor 2 (Cukup) | Skor 1 (Kurang) |
|----------|---------------------|---------------|----------------|-----------------|
| Kebenaran konsep | Semua konsep benar & akurat | Ada 1-2 minor error | Ada beberapa error | Banyak kesalahan konsep |
| Kelengkapan | Materi lengkap & komprehensif | Materi cukup lengkap | Ada bagian penting yang terlewat | Banyak materi hilang |
| Kedalaman | Pembahasan mendalam & insight | Pembahasan cukup dalam | Pembahasan dangkal | Hanya permukaan |
| Kesesuaian kurikulum | 100% sesuai CP/KD | Sesuai sebagian besar | Sesuai sebagian kecil | Tidak sesuai kurikulum |

**2. DESAIN INSTRUKSIONAL (25%)**

| Kriteria | Skor 4 | Skor 3 | Skor 2 | Skor 1 |
|----------|--------|--------|--------|--------|
| Tujuan pembelajaran | Jelas, terukur, sesuai Bloom | Cukup jelas | Kurang jelas | Tidak ada |
| Struktur & alur | Logis, sistematis, engaging | Cukup terstruktur | Agak berantakan | Tidak terstruktur |
| Scaffolding | Bertahap, supportif | Cukup bertahap | Kurang scaffolding | Tidak ada scaffolding |
| Asesmen | Terintegrasi, bervariasi | Ada asesmen | Asesmen minimal | Tidak ada asesmen |
| Hook & motivasi | Sangat menarik, memotivasi | Cukup menarik | Kurang menarik | Tidak ada hook |

**3. KUALITAS VISUAL (20%)**

| Kriteria | Skor 4 | Skor 3 | Skor 2 | Skor 1 |
|----------|--------|--------|--------|--------|
| Kejelasan gambar | Sangat jelas, HD | Cukup jelas | Agak buram | Buram/tidak jelas |
| Diagram & animasi | Sangat membantu pemahaman | Cukup membantu | Kurang membantu | Tidak membantu/menyesatkan |
| Konsistensi visual | Sangat konsisten | Cukup konsisten | Agak inkonsisten | Tidak konsisten |
| Keterbacaan teks | Sangat mudah dibaca | Cukup mudah dibaca | Sulit dibaca | Tidak terbaca |
| Desain slide | Profesional & menarik | Cukup baik | Kurang menarik | Tidak menarik |

**4. KUALITAS AUDIO (15%)**

| Kriteria | Skor 4 | Skor 3 | Skor 2 | Skor 1 |
|----------|--------|--------|--------|--------|
| Kejelasan narasi | Sangat jelas, enak didengar | Cukup jelas | Agak tidak jelas | Tidak jelas |
| Volume konsisten | Sangat konsisten | Cukup konsisten | Agak tidak konsisten | Sangat tidak konsisten |
| Tempo bicara | Sangat sesuai | Cukup sesuai | Agak cepat/lambat | Terlalu cepat/lambat |
| Minim noise | Tidak ada noise | Sedikit noise | Noise mengganggu | Noise sangat mengganggu |

**5. ENGAGEMENT & ACCESSIBILITY (10%)**

| Kriteria | Skor 4 | Skor 3 | Skor 2 | Skor 1 |
|----------|--------|--------|--------|--------|
| Hook & opening | Sangat menarik | Cukup menarik | Kurang menarik | Tidak menarik |
| Variasi visual | Sangat bervariasi | Cukup bervariasi | Monoton | Sangat monoton |
| Interaktivitas | Banyak interaksi | Ada interaksi | Minim interaksi | Tidak interaktif |
| Subtitle/caption | Lengkap & akurat | Ada subtitle | Subtitle tidak lengkap | Tidak ada subtitle |

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📊 Metode Evaluasi:**

**1. Self-Assessment (Sebelum Publish)**
• Gunakan rubrik di atas untuk menilai sendiri
• Minta teman sejawat review
• Checklist kualitas sebelum upload

**2. Peer Review**
• Tukar video dengan teman sekelas
• Gunakan rubrik yang sama
• Berikan feedback konstruktif

**3. User Testing**
• Minta 3-5 mahasiswa target menonton
• Observasi saat menonton (di mana mereka pause/rewind?)
• Wawancara setelah menonton
• Kuesioner kepuasan

**4. Analytics-Based Evaluation**
• **Watch time:** Rata-rata berapa lama ditonton?
• **Completion rate:** Berapa % yang menonton sampai akhir?
• **Drop-off points:** Di mana penonton pergi?
• **Engagement:** Like, comment, share
• **Learning outcome:** Pre-post test comparison

**5. Effectiveness Research (Untuk Skripsi)**
• Pre-test → Video → Post-test
• Hitung N-Gain: (post-pre)/(max-pre)
• Bandingkan dengan kelas kontrol
• Uji signifikansi (t-test)

💡 **Tips:** Evaluasi bukan untuk menghukum, tapi untuk MEMPERBAIKI! Setiap iterasi membuat video Anda lebih baik!`,
    category: "tips"
  },

  // =============================================
  // === REFERENSI & RISET ===
  // =============================================
  {
    keywords: ["referensi", "sumber belajar", "tutorial", "belajar", "course", "kursus", "youtube channel"],
    response: `📚 **Sumber Belajar Lengkap untuk Pengembangan Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Kategori Sumber Belajar:**

**1. TUTORIAL VIDEO EDITING**

**DaVinci Resolve:**
• 🎬 Casey Faris (YouTube) — Tutorial lengkap, bahasa mudah
• 🎬 Blackmagic Design Official — Dari basic hingga advanced
• 🎬 MrAlexTech — Tips & tricks, plugin recommendations
• 🎬 Learning DaVinci Resolve (Weybridge) — Buku referensi

**Premiere Pro:**
• 🎬 Premiere Gal (YouTube) — Tutorial step-by-step
• 🎬 Adobe Creative Cloud (Official) — Fitur terbaru
• 🎬 Envato Tuts+ — Project-based learning

**Camtasia:**
• 🎬 TechSmith Official — Tutorial lengkap
• 🎬 Russell Stannard — Khusus untuk video pembelajaran

**2. TUTORIAL ANIMASI FISIKA**

**Manim (Python):**
• 🐍 Theorem of Beethoven (YouTube) — Tutorial Manim terlengkap
• 🐍 Power of Ten (YouTube) — Contoh animasi fisika
• 🐍 3Blue1Brown (YouTube) — Inspirasi & teknik advanced
• 🐍 Manim Community Documentation — docs.manim.community
• 🐍 Reddit r/manim — Komunitas aktif

**Blender:**
• 🧊 Blender Guru (YouTube) — Donut Tutorial (wajib!)
• 🧊 CG Cookie — Intermediate techniques
• 🧊 Default Cube/CG Matter — Geometry Nodes
• 🧊 CrossMind Studio — Physics simulation
• 🧊 Blender Official Documentation

**GeoGebra:**
• 📊 GeoGebra Official (YouTube) — Tutorial fitur
• 📊 GeoGebra Forum — Komunitas & sharing
• 📊 "GeoGebra untuk Pembelajaran Fisika" — Berbagai artikel

**3. PEDAGOGI & DESAIN INSTRUKSIONAL**

**Buku Wajib Baca:**
• 📖 "Multimedia Learning" (2nd Ed) — Richard E. Mayer
• 📖 "E-Learning and the Science of Instruction" — Clark & Mayer
• 📖 "Design for How People Learn" — Julie Dirksen
• 📖 "The Art of Changing the Brain" — James Zull
• 📖 "Making Learning Whole" — David Perkins

**Online Courses:**
• 🎓 Coursera: "Learning to Teach Online" — UNSW (gratis audit)
• 🎓 Coursera: "Instructional Design Foundations" — University of Illinois
• 🎓 edX: "Introduction to Instructional Design" — UQ
• 🎓 FutureLearn: "Learning to Teach Online" — UNSW

**4. CHANNEL YOUTUBE FISIKA (Referensi Konten)**

**Bahasa Indonesia:**
• 🇮🇩 Physics Academy — Penjelasan konsep
• 🇮🇩 Sibejoo — Soal & pembahasan
• 🇮🇩 Pak Guru Fisika — Video pembelajaran
• 🇮🇩 Guru Bimbel — Tutorial fisika SMA

**Bahasa Inggris (Inspirasi):**
• 🌍 Veritasium — Sains populer, sangat engaging
• 🌍 3Blue1Brown — Matematika visual, inspirasi animasi
• 🌍 Physics Girl — Demonstrasi fisika kreatif
• 🌍 MinutePhysics — Animasi fisika singkat
• 🌍 SmarterEveryDay — Eksplorasi sains
• 🌍 Walter Lewin Lectures (MIT OCW) — Kuliah fisika legendaris
• 🌍 Professor Dave Explains — Penjelasan konsep jelas
• 🌍 Flipping Physics — Video pembelajaran fisika
• 🌍 The Physics Classroom — Konsep dasar

**5. KOMUNITAS & FORUM**

**Indonesia:**
• 💬 Forum Pendidikan Fisika Indonesia (F2PI)
• 💬 MGMP Fisika (grup WhatsApp/Telegram per daerah)
• 💬 Komunitas Guru Fisika Indonesia (Facebook Group)

**International:**
• 💬 AAPT (American Association of Physics Teachers)
• 💬 Physics Education Research (PER) community
• 💬 Reddit: r/PhysicsTeachers, r/physicseducation
• 💬 ResearchGate: Physics Education group

**6. WEBSITE & RESOURCE**

• 🌐 physicsclassroom.com — Tutorial & konsep
• 🌐 hyperphysics.phy-astr.gsu.edu — Concept maps
• 🌐phet.colorado.edu — Simulasi interaktif
• 🌐 ophysics.com — Simulasi online
• 🌐 teachengineering.org — Lesson plans

💡 **Rekomendasi:** Luangkan 30 menit/hari untuk belajar satu tools baru atau menonton satu video referensi. Konsistensi > intensitas!`,
    category: "referensi"
  },
  {
    keywords: ["penelitian", "research", "jurnal", "skripsi", "tesis", "metodologi"],
    response: `🔬 **Panduan Penelitian & Skripsi Video Pembelajaran Fisika**

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📖 Topik Penelitian yang Relevan:**

**1. PENGEMBANGAN (R&D)**

**Judul Contoh:**
• "Pengembangan Video Pembelajaran Beranimasi pada Materi Hukum Newton untuk Mahasiswa Pendidikan Fisika"
• "Pengembangan Media Video Berbasis Manim pada Materi Gelombang Elektromagnetik"
• "Desain dan Implementasi Video Pembelajaran Interaktif Menggunakan Edpuzzle"

**Metodologi:**
• Model: ADDIE, 4D, atau Borg & Gall
• Instrumen: Validasi ahli, angket respons, tes hasil belajar
• Analisis: Deskriptif kualitatif & kuantitatif

**2. EFEKTIVITAS (Eksperimen)**

**Judul Contoh:**
• "Efektivitas Video Pembelajaran Beranimasi terhadap Pemahaman Konsep Mahasiswa pada Materi Termodinamika"
• "Pengaruh Video Pembelajaran Berbasis PhET terhadap Hasil Belajar Fisika"
• "Perbandingan Efektivitas Video Animasi dan Video Demonstrasi pada Materi Listrik Dinamis"

**Metodologi:**
• Desain: Pre-test Post-test Control Group
• Analisis: N-Gain Score, Independent t-test
• Instrumen: Tes pemahaman konsep, angket

**3. PERSEPSI & ENGAGEMENT (Survei)**

**Judul Contoh:**
• "Persepsi Mahasiswa terhadap Penggunaan Video Pembelajaran Fisika di YouTube"
• "Analisis Engagement Mahasiswa dalam Video Pembelajaran Fisika Berbasis Flipped Classroom"

**Metodologi:**
• Desain: Survey/deskriptif
• Instrumen: Kuesioner, interview, analytics
• Analisis: Deskriptif, thematic analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📊 Metodologi Penelitian:**

**N-Gain Score (untuk mengukur peningkatan):**
\`\`\`
N-Gain = (Post-test - Pre-test) / (Max Score - Pre-test)

Interpretasi:
N-Gain > 0.7  → Tinggi
0.3 < N-Gain ≤ 0.7 → Sedang
N-Gain ≤ 0.3 → Rendah
\`\`\`

**Uji Efektivitas:**
\`\`\`
1. Normalitas test (Shapiro-Wilk / Kolmogorov-Smirnov)
2. Homogenitas test (Levene's Test)
3. Independent t-test (jika normal) atau Mann-Whitney U
4. Effect size (Cohen's d)
\`\`\`

**Validasi Media:**
\`\`\`
1. Validasi ahli materi (dosen fisika)
2. Validasi ahli media (dosen teknologi pendidikan)
3. Validasi ahli bahasa
4. Revisi berdasarkan feedback
5. Uji coba terbatas (small group)
6. Uji coba luas (large group)
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━

**📰 Jurnal Referensi:**

**Jurnal Nasional (Terakreditasi SINTA):**
• 📰 Jurnal Pendidikan Fisika Indonesia (JPFI) — UNNES
• 📰 Jurnal Inovasi Pendidikan Fisika (JIPF) — UNESA
• 📰 Jurnal Pendidikan Fisika (JPF) — UIN
• 📰 Momentum: Physics Education Journal — UIN
• 📰 Phyedu: Physics Education — UNY

**Jurnal Internasional:**
• 📰 Physical Review Physics Education Research (PRPER)
• 📰 Physics Education (IOP)
• 📰 Journal of Science Education and Technology
• 📰 Computers & Education
• 📰 International Journal of Science Education
• 📰 European Journal of Physics

**Kata Kunci Pencarian:**
• "video pembelajaran fisika"
• "animated video physics education"
• "multimedia physics learning"
• "instructional video effectiveness"
• "physics education technology"
• "Manim physics education"
• "flipped classroom physics"
• "PhET simulation learning"

━━━━━━━━━━━━━━━━━━━━━━━━━━

**💡 Tips Menyusun Skripsi:**

**Bab 1 (Pendahuluan):**
• Latar belakang: Masalah + solusi (video) + gap penelitian
• Rumusan masalah: Spesifik & terukur
• Tujuan: Sesuai rumusan masalah
• Manfaat: Teoretis & praktis

**Bab 2 (Tinjauan Pustaka):**
• Kajian teori: Video pembelajaran, desain instruksional, materi fisika
• Penelitian relevan: 5-10 jurnal terdahulu
• Kerangka berpikir: Visual diagram
• Hipotesis (jika kuantitatif)

**Bab 3 (Metodologi):**
• Jenis penelitian: R&D / Eksperimen / Survei
• Lokasi & subjek
• Instrumen & validasi
• Prosedur pengumpulan data
• Teknik analisis data

**Bab 4 (Hasil & Pembahasan):**
• Deskripsikan hasil
• Bandingkan dengan teori & penelitian terdahulu
• Jelaskan IMPLIKASI temuan

**Bab 5 (Penutup):**
• Kesimpulan: Menjawab rumusan masalah
• Saran: Untuk peneliti selanjutnya & praktisi

💡 **Tips:** Pilih topik yang ANDA minati, referensi tersedia, dan feasible dalam waktu & biaya!`,
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
  "Bagaimana menangani topik fisika modern dalam video?",
  "Bagaimana cara menggunakan Manim untuk fisika?",
  "Apa itu prinsip Mayer dalam multimedia learning?",
  "Bagaimana membuat rubrik penilaian video?",
  "Apa saja topik skripsi tentang video pembelajaran?",
  "Bagaimana cara menggunakan GeoGebra untuk video?"
];

export const categories = [
  { id: "tools", label: "🎬 Software & Tools", icon: "🎬" },
  { id: "desain", label: "📋 Desain Instruksional", icon: "📋" },
  { id: "produksi", label: "🎥 Teknik Produksi", icon: "🎥" },
  { id: "konten", label: "📐 Konten Fisika", icon: "📐" },
  { id: "pedagogi", label: "📚 Pedagogi & Strategi", icon: "📚" },
  { id: "platform", label: "📤 Platform & Distribusi", icon: "📤" },
  { id: "tips", label: "💡 Tips & Best Practices", icon: "💡" },
  { id: "referensi", label: "🔬 Referensi & Riset", icon: "🔬" }
];
