
Percakapan dengan Gemini
Buatlah sebuah PRD yang akan saya gunakan di goolge antigravity.

Saya ingin membuat landing page website pribadi saya di domain rivansyah.com.



Web tersebut berisi informasi tentang saya. Coba cari beberapa contoh website pribadi dosen yang lain, tiru poin-poin yang mereka tampilkan.



Style web: light mode, tailwindcss, shadcn ui



Tanyakan ke saya jika butuh informasi tambahan

Berikut adalah draf Product Requirements Document (PRD) yang dapat Anda gunakan sebagai acuan, baik untuk diimplementasikan sendiri maupun di- prompt ke AI coding assistant untuk membangun website di domain rivansyah.com.

Draf ini disusun dengan mengadaptasi standar portofolio akademik dosen pada umumnya, yang mencakup profil, pengajaran, penelitian, dan pengabdian masyarakat.

Product Requirements Document (PRD): Personal Website Akademik
1. Ringkasan Proyek (Executive Summary)
Pengembangan landing page dan website portofolio pribadi untuk Rivansyah Suhendra, S.Kom., M.T. di bawah domain rivansyah.com. Website ini berfungsi sebagai representasi digital profesional yang menonjolkan profil akademik, riwayat pengajaran, publikasi penelitian, serta kontribusi di bidang akademis.

2. Spesifikasi Teknis & Desain
Tema & Mode: Light Mode (Eksklusif, tanpa toggle dark mode).

CSS Framework: Tailwind CSS.

UI Library: Shadcn UI (Fokus pada desain minimalis, tipografi yang bersih, dan aksesibilitas tinggi).

Tata Letak: Single-page application (SPA) dengan navigasi smooth scrolling ke setiap section, atau multi-page sederhana.

Estetika: Profesional, bersih (clean), akademis, dan responsif (Mobile-first).

3. Struktur Halaman & Konten (Berdasarkan Benchmarking Website Dosen)
A. Hero Section (Beranda)
Elemen Visual: Foto profil profesional (menggunakan komponen Avatar dari Shadcn).

Headline: Nama lengkap beserta gelar akademik.

Sub-headline: Jabatan akademik saat ini (Junior Lecturer) di Program Studi Teknologi Informasi, Fakultas Teknik, Universitas Teuku Umar (UTU).

Call-to-Action (CTA): Tombol utama seperti "Lihat Publikasi" atau "Unduh CV" (menggunakan komponen Button dari Shadcn).

B. About Me (Profil Singkat)
Deskripsi: Paragraf naratif yang merangkum latar belakang pendidikan, ketertarikan utama, dan fokus riset.

Minat Riset (Research Interests): Machine Learning, Deep Learning, Computer Vision, dan implementasi algoritma (seperti LightGBM) untuk sektor agro dan maritim.

C. Teaching & Academic Activities (Pengajaran)
Menampilkan mata kuliah yang sedang atau pernah diampu, serta material terkait.

Format: Grid Cards (menggunakan Card Shadcn UI).

Daftar Mata Kuliah:

System Integration

Text Mining

Internet of Things (IoT)

Fitur Tambahan: Tautan opsional untuk mengunduh draf silabus atau materi presentasi.

D. Research & Projects (Penelitian & Proyek)
Menyoroti hibah, penelitian, dan publikasi yang sedang berjalan atau telah diselesaikan.

Contoh Item untuk Dimasukkan:

Sistem Klasifikasi Kualitas Ikan Pelagis menggunakan Deep Learning.

Pengembangan purwarupa Digital Storytelling berbasis Virtual Reality (VR).

Proposal PKM: Organika.

E. Community Service (Pengabdian kepada Masyarakat)
Highlight: Dokumentasi dan laporan evaluasi kegiatan mahasiswa, seperti manajemen dan pengawasan Kuliah Kerja Nyata (KKN) di wilayah Aceh Jaya.

F. Contact & Footer (Kontak)
Informasi Kontak: Alamat email profesional.

Tautan Eksternal: Profil Google Scholar, GitHub, atau LinkedIn.

Formulir Kontak: Formulir sederhana (Nama, Email, Pesan) menggunakan Form dan Input/Textarea dari Shadcn UI.

4. Komponen Shadcn UI yang Direkomendasikan
Untuk mempercepat pengembangan, berikut adalah komponen Shadcn UI yang akan diimplementasikan:

Navigation Menu: Untuk header navigasi (sticky di bagian atas).

Avatar: Untuk foto profil di Hero Section.

Button: Untuk berbagai CTA dan tautan dokumen.

Card: Untuk membungkus informasi mata kuliah, proyek riset, dan pengabdian.

Badge: Untuk melabeli kata kunci penelitian (misal: Computer Vision, Agro-marine).

Accordion: Opsional, untuk menampilkan FAQ mahasiswa atau detail silabus yang bisa di-expand.

Form & Input: Untuk formulir di halaman Kontak.

Pertanyaan Lanjutan:
Untuk menyempurnakan PRD ini sebelum Anda mengeksekusinya, apakah Anda ingin menyediakan tautan khusus di website nanti (misalnya link ke repositori GitHub, publikasi jurnal/Google Scholar, atau tautan ke platform e-learning UTU)?

Buat kedalam file prd.md

File Markdown (.md) Anda sudah siap
Ikon MD
 prd 
 MD 

Saya telah menyusun Product Requirements Document (PRD) di atas ke dalam format Markdown. Dokumen tersebut sudah mencakup struktur lengkap yang sering digunakan pada website profil akademis, mulai dari data profil Anda di UTU, rincian mata kuliah yang diajarkan, hingga detail proyek-proyek spesifik (seperti penelitian pengolahan citra pada ikan pelagis, sistem VR, proyek Organika, serta dokumentasi pengabdian masyarakat di Aceh Jaya).

Dokumen ini juga sudah memuat panduan spesifikasi teknis (Tailwind CSS, Shadcn UI) dan layout yang Anda butuhkan (Light Mode) agar bisa langsung Anda implementasikan atau jadikan panduan saat men- generate kode. Silakan beri tahu saya jika ada bagian dari draf ini yang perlu diubah atau ditambahkan!




Gemini adalah AI dan dapat melakukan kesalahan.

# Product Requirements Document (PRD)
## Pengembangan Website Personal Akademik (rivansyah.com)

---

## 1. Ringkasan Proyek (Project Summary)
Dokumen ini mendefinisikan kebutuhan fungsional dan teknis untuk pengembangan website personal akademik interaktif yang akan dihosting di domain **rivansyah.com**. Website ini dirancang sebagai portofolio digital profesional untuk menampilkan profil dosen, aktivitas pengajaran, rekam jejak penelitian, serta kontribusi pengabdian kepada masyarakat.

## 2. Tujuan & Target Audiens
* **Tujuan:** Membangun *branding* akademik yang kredibel, menyediakan akses materi kuliah bagi mahasiswa, serta menyajikan portofolio riset untuk kolaborator atau reviewer hibah.
* **Target Audiens:** Mahasiswa, sesama peneliti/akademisi, institusi universitas, dan mitra industri.

## 3. Spesifikasi Teknis & Desain (Tech Stack & Style)
* **Arsitektur:** Landing page (Single Page Application dengan smooth scrolling atau multi-page sederhana).
* **Tema/Gaya:** *Light mode* eksklusif, bersih (*clean*), profesional, dan minimalis.
* **Framework CSS:** Tailwind CSS.
* **UI Library:** Shadcn UI (berbasis Radix UI dan Tailwind).
* **Responsivitas:** Wajib mendukung tampilan *mobile-first* (responsif sempurna di smartphone, tablet, dan desktop).

---

## 4. Arsitektur Informasi & Kebutuhan Fitur (Section Breakdown)

### A. Header / Navigation Bar
* **Deskripsi:** Menu navigasi melayang (*sticky*) di bagian atas halaman untuk mempermudah perpindahan antar-bagian.
* **Elemen:** Logo teks ("rivansyah.com" atau nama), tautan menu (Home, About, Teaching, Research, Community Service, Contact).
* **Komponen UI:** Shadcn `Navigation Menu`.

### B. Hero Section (Beranda)
* **Deskripsi:** Bagian utama yang pertama kali dilihat pengunjung saat membuka website.
* **Konten:**
    * Foto profil profesional (bentuk lingkaran/avatar).
    * Nama Lengkap dengan Gelar: **Rivansyah Suhendra, S.Kom., M.T.**
    * Jabatan/Afiliasi: Junior Lecturer di Program Studi Teknologi Informasi, Fakultas Teknik, Universitas Teuku Umar (UTU).
    * Call-to-Action (CTA): Tombol pintas menuju "Lihat Publikasi" atau "Hubungi Saya".
* **Komponen UI:** Shadcn `Avatar` dan Shadcn `Button`.

### C. About Me (Tentang Saya)
* **Deskripsi:** Narasi singkat mengenai latar belakang akademik, visi pengajaran, dan keahlian utama.
* **Fokus Bidang/Minat Riset (*Research Interests*):**
    * Machine Learning & Deep Learning.
    * Computer Vision & Image Processing.
    * Algoritma Data Mining (seperti Light Gradient-Boosting Machine / LightGBM).
    * Penerapan teknologi kecerdasan buatan untuk sektor Agro dan Marine (Sektor Pertanian dan Kelautan).
* **Komponen UI:** Teks paragraf dikombinasikan dengan Shadcn `Badge` untuk label keahlian/topik riset.

### D. Teaching & Academic Activities (Pengajaran)
* **Deskripsi:** Menampilkan daftar mata kuliah yang diampu beserta transparansi informasi pendukung bagi mahasiswa.
* **Mata Kuliah Utama:**
    1.  *System Integration* (Integrasi Sistem)
    2.  *Text Mining* (Penambangan Teks)
    3.  *Internet of Things* (IoT)
* **Fitur per Mata Kuliah:** Kartu informasi berisi deskripsi singkat mata kuliah, tautan unduh silabus/RPS, atau tautan ke sistem e-learning universitas.
* **Komponen UI:** Grid susunan menggunakan Shadcn `Card` dan `Button` untuk unduhan.

### E. Research & Projects (Penelitian & Proyek)
* **Deskripsi:** Portofolio riset, proyek pengembangan perangkat lunak, atau pengajuan paten/hibah.
* **Daftar Proyek / Hasil Riset Penting:**
    * *Sistem Klasifikasi Kualitas Ikan Pelagis Menggunakan Deep Learning* (Fokus pada optimasi industri maritim).
    * *Purwarupa Sistem Digital Storytelling Berbasis Virtual Reality (VR)*.
    * *Proposal PKM / Inovasi Produk:* Organika.
* **Komponen UI:** Shadcn `Card` dengan visualisasi status proyek (Selesai / Sedang Berjalan) menggunakan `Badge`. Tautan ke repositori GitHub atau Google Scholar jika tersedia.

### F. Community Service (Pengabdian Masyarakat)
* **Deskripsi:** Ruang untuk mendokumentasikan kontribusi sosial dan bimbingan lapangan masyarakat.
* **Highlight Aktivitas:**
    * Manajemen, monitoring, dan laporan evaluasi kegiatan Kuliah Kerja Nyata (KKN) mahasiswa di wilayah Aceh Jaya.
* **Komponen UI:** Layout grid gambar dan deskripsi teks ringkas.

### G. Contact & Footer (Kontak)
* **Deskripsi:** Memudahkan mahasiswa atau mitra luar untuk menghubungi pemilik website.
* **Elemen:**
    * Alamat email institusi/profesional.
    * Tautan ke media sosial profesional (LinkedIn, GitHub, Google Scholar).
    * Formulir Pesan: Input nama, email, dan pesan teks.
* **Komponen UI:** Shadcn `Form`, `Input`, `Textarea`, dan `Button`.

---

## 5. Pemetaan Komponen Shadcn UI yang Diperlukan

| Komponen Shadcn UI | Penempatan Halaman | Fungsi Utama |
| :--- | :--- | :--- |
| `Navigation Menu` | Header | Navigasi antar-*section* halaman dengan efek *smooth scroll*. |
| `Avatar` | Hero Section | Menampilkan foto profil akademis secara rapi. |
| `Button` | Hero, Teaching, Contact | Tombol aksi (Unduh CV, Kirim Pesan, Tautan Jurnal). |
| `Card` | Teaching, Research | Pembungkus informasi tiap mata kuliah dan judul penelitian. |
| `Badge` | About, Research | Label penanda kata kunci teknologi (misal: *Computer Vision*, *IoT*). |
| `Form` / `Input` / `Textarea` | Contact Section | Form validasi input untuk pesan pengunjung. |

## 6. Kebutuhan Non-Fungsional (Non-Functional Requirements)
1.  **Aksesibilitas (Accessibility):** Memenuhi standar elemen HTML semantik agar mudah dibaca oleh *screen reader*.
2.  **Kecepatan Performa:** Optimasi aset gambar (seperti foto profil dan dokumentasi KKN) menggunakan format webp agar *loading time* di bawah 2 detik.
3.  **SEO Friendly:** Penataan tag meta (Title, Description, Keywords) yang dioptimasi untuk nama "Rivansyah Suhendra" dan kata kunci akademis universitas agar mudah terindeks Google.

## 7. Pengembangan Masa Depan (Future Roadmap)
* Integrasi API otomatis dengan Google Scholar untuk memperbarui daftar publikasi secara real-time.
* Penambahan halaman blog (*Content Management*) berbasis MDX untuk membagikan artikel opini teknologi atau catatan kuliah/tutorial bagi mahasiswa.