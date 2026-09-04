/**
 * ==========================================================================
 * DATA STORE - PORTOFOLIO MAHESA ERLANGGA WILLYANNANDA
 * ==========================================================================
 * Sumber Data Resmi: S1 Sistem Informasi Universitas Gunadarma (IPK: 3.94)
 * Mencakup Jejak Pengalaman, Proyek/Karya, Sertifikasi Resmi, dan Aset 3D.
 * Menggunakan aset lokal resmi dari direktori assets/
 */

// --- 1. JEJAK PENGALAMAN KERJA & PROFESIONAL (DENGAN TIMELINE SELENDANG) ---
const workExperienceData = [
  { 
    type: 'Kontrak', 
    title: 'Asisten Laboratorium Sistem Informasi (LabSI)', 
    company: 'Universitas Gunadarma — Penanggung Jawab | Depok', 
    period: 'Maret 2024 – Juli 2026', 
    desc: 'Mengelola aktivitas praktikum dan memastikan operasional laboratorium berjalan lancar. Melakukan pengolahan data praktikum, administrasi user, serta manajemen hak akses sistem. Mengembangkan materi praktikum bersama dosen dan staf laboratorium.', 
    skills: ['Manajemen Lab', 'Administrasi User', 'Pengolahan Data', 'Mentoring Praktikum'],
    images: [
      'assets/labsi/lab-sesi-praktikum.jpg',
      'assets/labsi/lab-tim-asisten.jpg'
    ] 
  },
  { 
    type: 'Magang', 
    title: 'Magang Game Developer', 
    company: 'PT Kalanara Group Indonesia | Depok', 
    period: 'Januari 2026 – Maret 2026', 
    desc: 'Mengimplementasikan desain Illustrator menggunakan Krita ke dalam game dan menganimasikan elemen desain sesuai kebutuhan game. Mempelajari tools pada Unity serta memahami alur pembuatan sistem game dan prototipenya. Melakukan pengujian fungsional dan quality assurance (QA) pada game set.', 
    skills: ['Unity Engine', 'Krita', 'Illustrator', '2D Animation', 'Quality Assurance (QA)'],
    images: [
      'assets/kalanara/kalanara.jpeg'
    ] 
  },
  { 
    type: 'Freelance', 
    title: 'Freelance Video Editor', 
    company: 'Nontonlagi Channel (YouTube: @nontonlagichannel2102)', 
    period: 'April 2023 – Februari 2026', 
    desc: 'Mengedit video cut to cut sesuai voice over lengkap dengan subtitle selama hampir 3 tahun. Menambahkan footage, backsound, sound effect, dan video effect pendukung konten untuk jutaan penonton.',
    skills: ['Adobe Premiere Pro', 'CapCut', 'Audio Sync', 'Motion Effects', 'Storytelling'],
    images: [
      'assets/nontonlagi/nontonlagi.jpg'
    ]
  },
  { 
    type: 'Volunteer', 
    title: 'Project Development', 
    company: 'Onceblind', 
    period: '2021 – 2022', 
    desc: 'Merancang dan menjalankan acara webinar teknologi interaktif dengan mengundang narasumber profesional untuk berbagi wawasan industri bagi para peserta.',
    skills: ['Project Planning', 'Event Organizing', 'Komunikasi', 'Kerja Sama Tim']
  }
];

// --- 1B. PENDIDIKAN NONFORMAL, BOOTCAMP & PELATIHAN ---
const educationTrainingData = [
  { 
    type: 'Bootcamp 3D', 
    title: 'Bootcamp 3D Game Development Batch #1', 
    company: 'Codelamp Indonesia | Online (Nilai 99/100 - Mastered)', 
    period: 'September – November 2025', 
    desc: 'Mempelajari Game Design Document (GDD), mekanik game, dan level design. Pembuatan 3D asset menggunakan Blender (modelling, retopology, UV mapping, texturing, rigging & animation). Mengintegrasikan asset ke dalam Unity Engine (scripting C# & UI). Lulus dengan nilai akhir 99/100 (Predikat: Mastered).',
    skills: ['Blender 3D', 'Unity 3D', 'C# Scripting', '3D Asset Pipeline', 'GDD Design']
  },
  { 
    type: 'Game Course', 
    title: 'Game Programmer — Agate Game Course Batch 8', 
    company: 'Agate Academy | Online', 
    period: 'Agustus – September 2025', 
    desc: 'Memahami fundamental Unity untuk membuat mekanik game dan user interface. Mengimplementasikan AI programming untuk pergerakan musuh (enemy AI) pada proyek game Spy Game AI (Pac-Man Like) serta melakukan debugging program untuk mengoptimalkan fungsionalitas game.',
    skills: ['Unity Fundamental', 'Enemy AI Programming', 'C#', 'Game UI', 'Code Debugging']
  },
  { 
    type: 'Akademik', 
    title: 'Pelatihan Komputerisasi & Database LepKom', 
    company: 'Lembaga Pengembangan Komputerisasi (LepKom) Gunadarma | Depok', 
    period: 'November 2022 – Juni 2026', 
    desc: 'Mendalami dasar pemrograman desktop, SQL, dan Oracle Database (tingkat pemula hingga menengah) untuk pengolahan dan manajemen data (input, update, query data, manajemen user & hak akses). Mempelajari pemrograman berorientasi objek (OOP) serta implementasi dan pengembangan aplikasi berbasis database.',
    skills: ['SQL & Oracle DB', 'Java Desktop', 'OOP Concept', 'Database Administration']
  },
  { 
    type: 'Kursus Web', 
    title: 'Kelas FullStack Web Developer', 
    company: 'Codepolitan | Online', 
    period: 'Agustus 2024', 
    desc: 'Memahami penggunaan Git untuk kolaborasi tim. Mempelajari Front-End: HTML, CSS, JavaScript, Tailwind, Vue.js, dan React.js, serta Back-End: PHP, MySQL, dan Laravel.',
    skills: ['Git', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Vue.js', 'React.js', 'PHP', 'MySQL', 'Laravel']
  },
  { 
    type: 'Bootcamp', 
    title: 'FullStack Development', 
    company: 'PKS Digital School | Online', 
    period: 'Oktober – Desember 2021', 
    desc: 'Mempelajari Front-End Web Development (HTML, CSS, JavaScript, Vue.js) dan Back-End Web Development (PHP, MySQL, Laravel). Menyelesaikan project akhir aplikasi web bersama tim kolaboratif.',
    skills: ['HTML5/CSS3', 'JavaScript', 'Vue.js', 'PHP', 'MySQL', 'Laravel', 'Team Project']
  }
];

// Backwards compatibility
const experienceData = [...workExperienceData, ...educationTrainingData];

// --- 2. KARYA & PROYEK (DENGAN GALERI GAMBAR ASLI & TAUTAN NYATA) ---
const projectData = [
  { 
    id: 1, 
    title: 'PAKEEET! : Kurir Antar Paket', 
    category: 'Game', 
    image: 'assets/paket/pakeett-keyart.jpg', 
    desc: 'Game kurir antar paket 3D platformer yang dikembangkan sebagai proyek unggulan dari Codelamp Indonesia.', 
    fullDesc: 'PAKEEET! adalah game aksi platformer 3D bertema komedi kurir ekspres yang dikembangkan sebagai proyek resmi dari Codelamp Indonesia. Menguji ketangkasan pemain sebagai kurir yang harus mengantarkan barang di lingkungan perkotaan penuh rintangan tak terduga dengan sistem degradasi kondisi paket yang mempengaruhi bayaran misi. Game ini dapat dimainkan langsung di Itch.io.',
    features: [
      'Proyek resmi Codelamp Indonesia (Dapat dimainkan di seryxss.itch.io/pakeeet)',
      'Controller karakter fisika 3D dinamis dengan animasi ragdoll responsif',
      'Sistem degradasi dan pemantauan kondisi paket real-time',
      'Peta semi open-world perkotaan dengan rute jalan pintas rahasia'
    ],
    screenshots: [
      {
        url: 'assets/paket/pakeett-keyart.jpg',
        caption: 'Key Art & Menu Utama PAKEEET!'
      },
      {
        url: 'assets/paket/pakeett-gameplay.jpg',
        caption: 'Gameplay 3D Aksi Kurir Antar Paket'
      },
      {
        url: 'assets/paket/pakeett-kontrol.jpg',
        caption: 'Panduan Kontrol & Mekanik Ragdoll'
      }
    ],
    tech: ['Unity 3D', 'C#', 'Blender', 'Ragdoll Physics', 'Cinemachine'],
    demoUrl: 'https://seryxss.itch.io/pakeeet',
    demoText: 'Mainkan di Itch.io',
    githubUrl: 'https://github.com/Patrick-Alex21/Final-Project-Bootcamp3D'
  },
  { 
    id: 2, 
    title: 'Clear Room', 
    category: 'Game', 
    image: 'assets/clearroom/clearroom-menu.jpg', 
    desc: 'Game 3D Survival Horror dengan atmosfer ruang bawah tanah yang mencekam, dikembangkan menggunakan Unity 3D.', 
    fullDesc: 'Clear Room adalah game aksi survival horror first-person dengan pencahayaan dinamis dan atmosfer tegang. Pemain terjebak dalam fasilitas bawah tanah misterius dan harus memecahkan teka-teki lingkungan sambil menghindari entitas supranatural menggunakan peralatan terbatas. Game ini dapat dimainkan langsung di Itch.io.',
    features: [
      'Sistem AI patroli dan pendeteksi suara monster dinamis',
      'Pencahayaan real-time volumetrik & audio spasial 3D',
      'Mekanisme manajemen inventory & baterai senter',
      'Puzzle lingkungan berbasis interaksi objek fisika'
    ],
    screenshots: [
      {
        url: 'assets/clearroom/clearroom-menu.jpg',
        caption: 'Menu Utama & Atmosfer Horror Clear Room'
      },
      {
        url: 'assets/clearroom/clearroom-gameplay.jpg',
        caption: 'Gameplay Eksplorasi Koridor Bawah Tanah'
      },
      {
        url: 'assets/clearroom/clearroom-panduan.jpg',
        caption: 'Panduan Kontrol & Mekanik Bertahan Hidup'
      }
    ],
    tech: ['Unity 3D', 'C#', 'Blender', 'Spatial Audio'],
    demoUrl: 'https://mhserlangga.itch.io/clear-room',
    demoText: 'Mainkan di Itch.io',
    githubUrl: 'https://github.com/mhserlangga/Mahesa-Erlangga-Pac-man-like'
  },
  { 
    id: 3, 
    title: 'Pemilahan Sampah', 
    category: 'Game', 
    image: 'assets/sampah/sampah-menu.jpg', 
    desc: 'Game edukasi interaktif untuk anak-anak mengenai cara memilah sampah organik, anorganik, dan B3 menggunakan Godot Engine dan Inkscape.', 
    fullDesc: 'Game casual interaktif yang dibuat dengan Godot Engine untuk menanamkan kepedulian lingkungan sejak dini. Seluruh aset visual 2D dirancang menggunakan Inkscape. Anak-anak diajak memilah berbagai objek sampah ke tempat sampah yang sesuai dalam batas waktu tertentu dengan sistem reward yang menyenangkan.',
    features: [
      'Kontrol drag & drop intuitif dan responsif',
      'Desain aset grafis 2D ramah anak menggunakan Inkscape',
      'Sistem skor combo dan tingkat kesulitan bertahap',
      'Kuis edukasi ringkas di akhir setiap level'
    ],
    screenshots: [
      {
        url: 'assets/sampah/sampah-menu.jpg',
        caption: 'Menu Utama Game Pemilahan Sampah'
      },
      {
        url: 'assets/sampah/sampah-gameplay.jpg',
        caption: 'Gameplay Edukasi Pemilahan Sampah Interaktif'
      },
      {
        url: 'assets/sampah/sampah-materi-organik.jpg',
        caption: 'Materi Edukasi Sampah Organik & Anorganik'
      },
      {
        url: 'assets/sampah/sampah-materi-ringkas.jpg',
        caption: 'Ringkasan Materi & Evaluasi Pembelajaran'
      }
    ],
    tech: ['Godot Engine', 'GDScript', 'Inkscape', '2D Physics'],
    demoUrl: 'https://mhserlangga.itch.io/pemilahan-sampah',
    demoText: 'Mainkan di Itch.io',
    githubUrl: 'https://github.com/mhserlangga/pemilahan-sampah'
  },
  { 
    id: 4, 
    title: 'EduScore — SIM Penilaian Siswa', 
    category: 'Web', 
    image: 'assets/eduscore/eduscore-login.jpg', 
    desc: 'Sistem Informasi Penilaian Siswa Berbasis Web yang dibangun menggunakan PHP dan MySQL murni untuk proyek uji kompetensi Lembaga Sertifikasi Profesi (LSP).', 
    fullDesc: 'EduScore adalah sistem informasi penilaian siswa berbasis web yang dirancang dan dibangun menggunakan PHP dan MySQL untuk memenuhi standar uji kompetensi Lembaga Sertifikasi Profesi (LSP). Sistem ini mengintegrasikan manajemen data akademik sekolah dengan pembagian hak akses terpisah untuk Administrator, Guru, dan Siswa, memungkinkan kalkulasi nilai otomatis dan pembuatan rekapitulasi rapor digital.',
    features: [
      'Proyek resmi uji kompetensi LSP (Lembaga Sertifikasi Profesi)',
      'Dashboard terpisah dengan hak akses spesifik untuk Admin, Guru, dan Siswa',
      'Manajemen input nilai tugas, ulangan harian, UTS, dan UAS secara terstruktur',
      'Kalkulasi otomatis bobot nilai akhir dan transkrip rapor siswa siap cetak'
    ],
    screenshots: [
      {
        url: 'assets/eduscore/eduscore-login.jpg',
        caption: 'Halaman Login Sistem EduScore'
      },
      {
        url: 'assets/eduscore/eduscore-admin.jpg',
        caption: 'Dashboard Administrator & Manajemen User'
      },
      {
        url: 'assets/eduscore/eduscore-guru.jpg',
        caption: 'Input Nilai Tugas & Ujian oleh Guru'
      },
      {
        url: 'assets/eduscore/eduscore-siswa.jpg',
        caption: 'Transkrip Nilai Akademik Siswa'
      },
      {
        url: 'assets/eduscore/eduscore-laporan.jpg',
        caption: 'Rekapitulasi Rapor Siswa Siap Cetak'
      }
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/mhserlangga/LSP_SistemNilai'
  },
  { 
    id: 5, 
    title: 'Vistaland Property', 
    category: 'Web', 
    image: 'assets/vistaland/vistaland-beranda.jpg', 
    desc: 'Website katalog properti dan company profile perumahan modern yang dibangun menggunakan PHP dan MySQL.', 
    fullDesc: 'Vistaland Property adalah platform web showcase katalog perumahan modern yang dibangun menggunakan arsitektur PHP dan basis data MySQL. Dirancang untuk memudahkan calon pembeli mengeksplorasi tipe-tipe unit hunian, detail spesifikasi bangunan, denah ruangan, serta informasi kontak langsung agen pemasaran.',
    features: [
      'Katalog tipe unit hunian modern (spesifikasi luas tanah & bangunan)',
      'Sistem autentikasi & login pengguna terintegrasi berbasis PHP & MySQL',
      'Antarmuka bersih, responsif, dan elegan di desktop maupun mobile',
      'Navigasi ringkas informasi perumahan dan simulasi kontak agen'
    ],
    screenshots: [
      {
        url: 'assets/vistaland/vistaland-beranda.jpg',
        caption: 'Beranda & Katalog Properti Modern'
      },
      {
        url: 'assets/vistaland/vistaland-tipe-unit.jpg',
        caption: 'Detail Tipe Unit & Spesifikasi Bangunan'
      },
      {
        url: 'assets/vistaland/vistaland-login.jpg',
        caption: 'Halaman Login & Autentikasi Pengguna'
      }
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Web'],
    githubUrl: 'https://github.com/mhserlangga/Vistaland'
  },
  { 
    id: 6, 
    title: 'Prediksi Harga RAM Komputer (DDR3 & DDR4)', 
    category: 'Web', 
    image: 'assets/ram/ram-dashboard.jpg', 
    desc: 'Sistem analisis data dan dashboard web simulasi prediksi fluktuasi harga RAM DDR3 dan DDR4 berbasis machine learning.', 
    fullDesc: 'Proyek data analytics dan perancangan dashboard web interaktif yang mengolah ribuan baris data harga pasar modul memori RAM komputer tipe DDR3 dan DDR4. Memanfaatkan algoritma machine learning untuk memprediksi tren dan estimasi harga pasar berdasarkan kapasitas, kecepatan frekuensi (MHz), dan faktor spesifikasi teknis.',
    features: [
      'Pembersihan dataset & komparasi analitik memori RAM DDR3 dan DDR4',
      'Dashboard analitik web visual dengan grafik komparasi tren harga',
      'Visualisasi statistik korelasi antar-parameter memori RAM',
      'Kalkulator simulasi estimasi harga komponen secara instan'
    ],
    screenshots: [
      {
        url: 'assets/ram/ram-dashboard.jpg',
        caption: 'Dashboard Analisis & Prediksi Harga RAM (DDR3 & DDR4)'
      }
    ],
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Machine Learning', 'DDR3 & DDR4', 'Web Dashboard'],
    githubUrl: 'https://github.com/mhserlangga/Prediksi-Harga-RAM'
  },
  { 
    id: 7, 
    title: 'Produksi Video Nontonlagi Channel', 
    category: 'Multimedia', 
    image: 'assets/nontonlagi/nontonlagi.jpg', 
    desc: 'Penyuntingan video cut-to-cut profesional, audio mixing, dan efek visual untuk kanal YouTube Nontonlagi (@nontonlagichannel2102).', 
    fullDesc: 'Karya multimedia profesional selama hampir 3 tahun (April 2023 – Februari 2026) sebagai Freelance Video Editor untuk Nontonlagi Channel (YouTube: @nontonlagichannel2102). Bertanggung jawab atas proses penyuntingan video cut-to-cut presisi mengikuti voice over, sinkronisasi subtitle, pemilihan footage menarik, penataan backsound dan sound effect, serta penambahan motion graphics yang dinamis untuk ratusan ribu penonton.',
    features: [
      'Penyuntingan video cut-to-cut presisi mengikuti tempo narasi voice over',
      'Penyusunan subtitle terpadu yang mudah dibaca dan engaging',
      'Penyelarasan audio, balancing sound effects, dan musik latar',
      'Penerapan visual effects, transisi mulus, dan color styling pendukung konten'
    ],
    screenshots: [
      {
        url: 'assets/nontonlagi/nontonlagi.jpg',
        caption: 'Kanal YouTube Resmi Nontonlagi Channel (@nontonlagichannel2102)'
      }
    ],
    tech: ['Adobe Premiere Pro', 'CapCut', 'Sound Design', 'Video Effects', 'YouTube Production'],
    demoUrl: 'https://www.youtube.com/@nontonlagichannel2102',
    demoText: 'Buka Kanal YouTube'
  }
];

// --- 3. SERTIFIKAT & PENGHARGAAN RESMI (ASLI SESUAI BERKAS ASSETS) ---
const certData = [
  { 
    id: 1, 
    title: 'Sertifikat Kelulusan — Bootcamp 3D Game Development Batch #1', 
    issuer: 'Codelamp Indonesia', 
    year: 'Desember 2025', 
    image: 'assets/sertifikat/sert-codelamp-kelulusan.jpg',
    desc: 'Lulus dengan nilai akhir 99/100 (Predikat: Mastered). Menguasai Game Design Document (GDD), mekanik game, level design, 3D asset Blender (modelling, retopology, texturing, rigging & animation), serta integrasi Unity Engine C#.'
  },
  { 
    id: 2, 
    title: 'Certificate of Completion — Membuat Game dengan AI Programming', 
    issuer: 'Agate Academy (Agate Game Course Batch 8, No. 601/APR/ACM.00/IX/2025)', 
    year: 'September 2025', 
    image: 'assets/sertifikat/sert-agate.jpg',
    desc: 'Penyelesaian kursus intensif Agate Academy: fundamental Unity, pembuatan mekanik game dan UI, pemrograman kecerdasan buatan musuh (Enemy AI), serta optimasi debugging program.'
  },
  { 
    id: 3, 
    title: 'Full Stack Web Development', 
    issuer: 'PKS Digital School (No. 1419/PKS/DigiS/XII/2021)', 
    year: 'Desember 2021', 
    image: 'assets/sertifikat/sert-pks-fullstack.jpg',
    desc: 'Pelatihan pengembangan web end-to-end: Front-End (HTML, CSS, JavaScript, Vue.js), Back-End (PHP, MySQL, Laravel), dan penyelesaian proyek akhir aplikasi web secara kolaboratif bersama tim.'
  },
  { 
    id: 4, 
    title: 'Intro to Data Analytics', 
    issuer: 'RevoU', 
    year: 'Januari 2024', 
    image: 'assets/sertifikat/Sertifikat Data Analyst RevoU.jpg',
    desc: 'Sertifikasi kompetensi analisis data: data cleaning, exploratory data analysis (EDA), visualisasi data statistik, dan perumusan wawasan analitik bisnis berbasis data.'
  },
  { 
    id: 5, 
    title: 'Javascript Programming Language Fundamental', 
    issuer: 'LepKom Universitas Gunadarma (No. 958541)', 
    year: '2024', 
    image: 'assets/sertifikat/sert-lepkom-javascript.jpg',
    desc: 'Sertifikasi kompetensi fundamental bahasa pemrograman JavaScript, struktur data algoritma, manipulasi DOM dinamis, dan asynchronous programming.'
  },
  { 
    id: 6, 
    title: 'Pemrograman Berorientasi Objek (Java OOP)', 
    issuer: 'LepKom Universitas Gunadarma (No. 429503)', 
    year: '2025', 
    image: 'assets/sertifikat/sert-lepkom-oop.jpg',
    desc: 'Sertifikasi penguasaan konsep OOP fundamental dan lanjutan: Class, Object, Inheritance, Polymorphism, Encapsulation, dan Abstraction.'
  },
  { 
    id: 7, 
    title: 'Implementasi Perancangan Aplikasi Berorientasi Objek', 
    issuer: 'LepKom Universitas Gunadarma (No. 658226)', 
    year: '2026', 
    image: 'assets/sertifikat/sert-lepkom-implementasi.jpg',
    desc: 'Sertifikasi implementasi arsitektur perangkat lunak berbasis OOP, integrasi sistem basis data relasional, dan perancangan antarmuka aplikasi.'
  },
  { 
    id: 8, 
    title: 'Oracle Database (Tingkat Menengah)', 
    issuer: 'LepKom Universitas Gunadarma (No. 591240)', 
    year: '2025', 
    image: 'assets/sertifikat/sert-lepkom-oracle-menengah.jpg',
    desc: 'Sertifikasi penguasaan sistem basis data relasional Oracle: PL/SQL, Triggers, Stored Procedures, fungsi agregat, dan optimasi query data relasional kompleks.'
  },
  { 
    id: 9, 
    title: 'Oracle Database (Tingkat Pemula)', 
    issuer: 'LepKom Universitas Gunadarma (No. 849646)', 
    year: '2024', 
    image: 'assets/sertifikat/sert-lepkom-oracle-pemula.jpg',
    desc: 'Sertifikasi dasar arsitektur basis data Oracle: Data Definition Language (DDL), Data Manipulation Language (DML), dan perancangan skema relasional tabel.'
  },
  { 
    id: 10, 
    title: 'Microsoft SQL Server (Tingkat Menengah)', 
    issuer: 'LepKom Universitas Gunadarma (No. 211201)', 
    year: '2025', 
    image: 'assets/sertifikat/sert-lepkom-sqlserver-menengah.jpg',
    desc: 'Penguasaan lanjutan T-SQL Microsoft SQL Server: Joins kompleks, Subqueries, Stored Procedures, Views, dan manajemen integritas transaksi data.'
  },
  { 
    id: 11, 
    title: 'Microsoft SQL Server (Tingkat Pemula)', 
    issuer: 'LepKom Universitas Gunadarma (No. 449706)', 
    year: '2024', 
    image: 'assets/sertifikat/sert-lepkom-sqlserver-pemula.jpg',
    desc: 'Fundamental sistem basis data Microsoft SQL Server: instalasi database, pembuatan tabel, relasi foreign key antar tabel, dan operasi query SQL.'
  },
  { 
    id: 12, 
    title: 'Pemrograman Desktop Dasar', 
    issuer: 'LepKom Universitas Gunadarma (No. 622136)', 
    year: '2023', 
    image: 'assets/sertifikat/sert-lepkom-desktop.jpg',
    desc: 'Sertifikasi kompetensi pembuatan aplikasi desktop grafis (GUI) interaktif dengan integrasi input data, event handling, dan pemrosesan logika antarmuka.'
  },
  { 
    id: 13, 
    title: 'Database Management System (DBMS)', 
    issuer: 'LepKom Universitas Gunadarma (No. 242306)', 
    year: '2023', 
    image: 'assets/sertifikat/sert-lepkom-dbms.jpg',
    desc: 'Konsep dasar sistem manajemen basis data, normalisasi tabel relasional, Entity Relationship Diagram (ERD), dan pemodelan relasional data praktikum.'
  }
];

// --- 4. KARYA 3D MODEL (GALERI ASET ASLI BLENDER DARI ASSETS/3D) ---
const models3DData = [
  {
    id: 1,
    title: 'Donat & Cangkir Kopi Stylized',
    category: 'Stylized Food & Props',
    software: 'Blender 3D',
    image: 'assets/3d/3d-donat.jpg'
  },
  {
    id: 2,
    title: 'Es Krim Cone 3D',
    category: 'Stylized Food Props',
    software: 'Blender 3D',
    image: 'assets/3d/3d-es-krim.jpg'
  },
  {
    id: 3,
    title: 'Avatar 3D Laki-laki (Male Icon)',
    category: 'Character Icon & UI Asset',
    software: 'Blender 3D',
    image: 'assets/3d/3d-ikon-laki-laki.jpg'
  },
  {
    id: 4,
    title: 'Avatar 3D Perempuan (Female Icon)',
    category: 'Character Icon & UI Asset',
    software: 'Blender 3D',
    image: 'assets/3d/3d-ikon-perempuan.jpg'
  },
  {
    id: 5,
    title: 'Karakter Low-Poly Humanoid',
    category: 'Low-Poly Game Character',
    software: 'Blender 3D',
    image: 'assets/3d/3d-karakter-lowpoly.jpg'
  },
  {
    id: 6,
    title: 'Kursi Kayu Klasik',
    category: 'Furniture & Interior Props',
    software: 'Blender 3D',
    image: 'assets/3d/3d-kursi-kayu.jpg'
  },
  {
    id: 7,
    title: 'Set Komputer PC & Monitor',
    category: 'Hard Surface Electronics',
    software: 'Blender 3D',
    image: 'assets/3d/3d-perangkat-komputer.jpg'
  },
  {
    id: 8,
    title: 'Rigging & Character Posing 3D',
    category: 'Rigging & Skeleton Animation',
    software: 'Blender 3D',
    image: 'assets/3d/3d-rigging-posing.jpg'
  },
  {
    id: 9,
    title: 'Set Meja & Kursi Modular',
    category: 'Environment & Office Props',
    software: 'Blender 3D',
    image: 'assets/3d/3d-set-meja-kursi.jpg'
  },
  {
    id: 10,
    title: 'Tempat Tidur Minimalis',
    category: 'Interior & Architecture Props',
    software: 'Blender 3D',
    image: 'assets/3d/3d-tempat-tidur.jpg'
  }
];
