/**
 * ==========================================================================
 * DATA STORE - PORTOFOLIO MAHESA ERLANGGA
 * ==========================================================================
 * Berisi seluruh data jejak pengalaman, proyek/karya, dan sertifikat.
 * Anda dapat mengedit, menambah, atau mengurangi data di sini kapan saja.
 */

// --- 1. JEJAK PENGALAMAN ---
const experienceData = [
  { 
    type: 'Laboratorium', 
    title: 'Asisten Laboratorium', 
    company: 'Lab Sistem Informasi - Universitas Gunadarma', 
    period: 'Sep 2022 - Sekarang', 
    desc: 'Membimbing mahasiswa dalam praktikum mata kuliah Algoritma & Pemrograman serta Basis Data. Menguji tugas praktikum dan memberikan evaluasi komprehensif.', 
    skills: ['Algoritma', 'Basis Data', 'Mentoring', 'Problem Solving'],
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', 
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    ] 
  },
  { 
    type: 'Magang', 
    title: 'Software Engineer Intern', 
    company: 'PT Teknologi Inovasi', 
    period: 'Jan 2024 - Jun 2024', 
    desc: 'Mengembangkan fitur backend menggunakan Node.js dan mengoptimalkan query database yang meningkatkan performa aplikasi sebesar 20%. Berkolaborasi dengan tim frontend dan QA dalam sprint Agile.', 
    skills: ['Node.js', 'REST API', 'MySQL', 'Git'],
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
    ] 
  },
  { 
    type: 'Magang', 
    title: 'Game Programmer Intern', 
    company: 'Indie Game Studio', 
    period: 'Agu 2023 - Des 2023', 
    desc: 'Mengimplementasikan mekanik core gameplay untuk game 2D platformer menggunakan Unity dan C#. Menyusun sistem state machine karakter, deteksi collision presisi, dan animasi sprite.',
    skills: ['Unity 2D', 'C#', 'State Machine', 'Physics 2D']
  },
  { 
    type: 'Freelance', 
    title: 'Fullstack Web Developer', 
    company: 'Klien UMKM Lokal', 
    period: 'Mar 2023 - Mei 2023', 
    desc: 'Membangun website e-commerce responsif dari awal menggunakan React dan sistem manajemen konten sederhana. Meningkatkan kehadiran digital dan penjualan produk klien sebesar 35%.',
    skills: ['React.js', 'TailwindCSS', 'REST API', 'UI/UX']
  },
  { 
    type: 'Organisasi', 
    title: 'Kepala Divisi R&D', 
    company: 'BEM FIKTI Universitas Gunadarma', 
    period: '2022 - 2023', 
    desc: 'Memimpin tim beranggotakan 10 orang untuk mengadakan workshop teknologi bulanan, coding challenge, dan riset pengembangan inovasi teknologi bagi mahasiswa.',
    skills: ['Leadership', 'Event Organizing', 'Public Speaking']
  },
  { 
    type: 'Freelance', 
    title: 'Video Editor & Motion Designer', 
    company: 'Content Creator (YouTube & Media Sosial)', 
    period: '2022 - 2023', 
    desc: 'Mengedit video edukasi dan gameplay dengan penambahan motion graphics berkualitas tinggi menggunakan Adobe Premiere Pro dan After Effects.',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading']
  },
  { 
    type: 'Organisasi', 
    title: 'Anggota Divisi Acara', 
    company: 'Game Development Club', 
    period: '2021 - 2022', 
    desc: 'Mengorganisir turnamen Game Jam internal kampus yang diikuti oleh lebih dari 50 peserta pengembang game muda.',
    skills: ['Game Jam', 'Teamwork', 'Coordination']
  }
];

// --- 2. KARYA & PROYEK (DENGAN GALERI GAMBAR) ---
const projectData = [
  { 
    id: 1, 
    title: 'Clear Room', 
    category: 'Game', 
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800', 
    desc: 'Game 3D Survival Horror dengan atmosfer ruang bawah tanah yang mencekam, dikembangkan menggunakan Unity 3D.', 
    fullDesc: 'Clear Room adalah game aksi survival horror first-person dengan pencahayaan dinamis dan atmosfer tegang. Pemain terjebak dalam fasilitas bawah tanah misterius dan harus memecahkan teka-teki lingkungan sambil menghindari entitas supranatural menggunakan peralatan terbatas.',
    features: [
      'Sistem AI patroli dan pendeteksi suara monster dinamis',
      'Pencahayaan real-time volumetrik & audio spasial 3D',
      'Mekanisme manajemen inventory & baterai senter',
      'Puzzle lingkungan berbasis interaksi objek fisika'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
        caption: 'Poster & Cover Utama Game'
      },
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
        caption: 'Gameplay Eksplorasi Koridor Bawah Tanah'
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
        caption: 'Pencahayaan Dinamis & Atmosfer Horor'
      },
      {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        caption: 'Level Design & Pengujian Puzzle di Unity Editor'
      }
    ],
    tech: ['Unity 3D', 'C#', 'Blender', 'Spatial Audio'],
    demoUrl: 'https://itch.io',
    githubUrl: 'https://github.com'
  },
  { 
    id: 2, 
    title: 'Pemilahan Sampah', 
    category: 'Game', 
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800', 
    desc: 'Game edukasi interaktif untuk anak-anak mengenai cara memilah sampah organik, anorganik, dan B3.', 
    fullDesc: 'Game casual interaktif yang dibuat dengan Godot Engine untuk menanamkan kepedulian lingkungan sejak dini. Anak-anak diajak memilah berbagai objek sampah ke tempat sampah yang sesuai dalam batas waktu tertentu dengan sistem reward yang menyenangkan.',
    features: [
      'Kontrol drag & drop intuitif dan responsif',
      'Sistem skor combo dan tingkat kesulitan bertahap',
      'Efek suara lucu dan visual penuh warna',
      'Kuis edukasi ringkas di akhir setiap level'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
        caption: 'Karakter & Desain Lingkungan Game'
      },
      {
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        caption: 'Mekanik Drag & Drop Pemilahan Sampah'
      },
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        caption: 'Level Pemilahan Sampah Elektronik & B3'
      },
      {
        url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
        caption: 'Hasil Evaluasi Edukasi & Skor Akhir'
      }
    ],
    tech: ['Godot Engine', 'GDScript', 'Aseprite', '2D Physics'],
    demoUrl: 'https://itch.io',
    githubUrl: 'https://github.com'
  },
  { 
    id: 3, 
    title: 'PAKEEET!', 
    category: 'Game', 
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800', 
    desc: 'Game 3D Platformer seru dimana pemain menjadi kurir ekspres melewati berbagai rintangan kocak.', 
    fullDesc: 'Game aksi komedi 3D yang menguji ketangkasan pemain sebagai kurir paket di lingkungan perkotaan yang penuh rintangan tak terduga (anjing galak, genangan air, hingga tangga licin). Paket memiliki tingkat kerusakan yang mempengaruhi bayaran misi!',
    features: [
      'Controller karakter fisika 3D dengan ragdoll kocak',
      'Sistem degradasi kondisi paket real-time',
      'Peta semi open-world dengan jalan pintas rahasia',
      'Time-attack mode dengan leaderboard lokal'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800',
        caption: 'Karakter Kurir & Paket Bawaan'
      },
      {
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
        caption: 'Aksi Parkour Melompati Atap Rumah'
      },
      {
        url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=800',
        caption: 'Fisika Ragdoll Lucu Saat Terpeleset'
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
        caption: 'Hasil Pengantaran & Rating Paket Pelanggan'
      }
    ],
    tech: ['Unity 3D', 'C#', 'Ragdoll Physics', 'Cinemachine'],
    demoUrl: 'https://itch.io',
    githubUrl: 'https://github.com'
  },
  { 
    id: 4, 
    title: 'Vistaland Property', 
    category: 'Web', 
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', 
    desc: 'Website company profile dan katalog properti modern untuk agen real estate lokal.', 
    fullDesc: 'Platform web katalog properti lengkap dengan antarmuka modern, sistem filter lokasi dan harga, kalkulator simulasi KPR, serta integrasi chat langsung ke agen penjualan.',
    features: [
      'Filter pencarian multi-kriteria (harga, tipe, kamar, lokasi)',
      'Kalkulator simulasi estimasi cicilan KPR interaktif',
      'Galeri foto virtual tour dan denah lantai interaktif',
      'Integrasi formulir pesan WhatsApp instan'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        caption: 'Halaman Beranda & Pencarian Properti'
      },
      {
        url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800',
        caption: 'Daftar Katalog Unit Rumah & Apartemen'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        caption: 'Halaman Detail Properti & Denah'
      },
      {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
        caption: 'Kalkulator Simulasi Cicilan KPR'
      }
    ],
    tech: ['React.js', 'TailwindCSS', 'Firebase', 'Lucide Icons'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  { 
    id: 5, 
    title: 'Prediksi Harga RAM Komputer', 
    category: 'Web', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    desc: 'Analisis dan simulasi prediksi fluktuasi harga RAM komputer menggunakan machine learning.', 
    fullDesc: 'Proyek data science dan web dashboard yang mengolah ribuan data historis harga komponen RAM (DDR4 & DDR5). Memanfaatkan model regresi untuk memprediksi tren harga pasar berdasarkan kapasitas, kecepatan (MHz), dan brand.',
    features: [
      'Pembersihan & Exploratory Data Analysis (EDA) komprehensif',
      'Perbandingan algoritma Random Forest vs Gradient Boosting',
      'Dashboard interaktif dengan grafik visualisasi tren',
      'Kalkulator prediksi harga komponen secara instan'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        caption: 'Dashboard Analisis Data Komponen Hardware'
      },
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
        caption: 'Grafik Tren Harga Historis RAM DDR4 & DDR5'
      },
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        caption: 'Visualisasi Matriks Korelasi & Feature Importance'
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        caption: 'Formulir Prediksi Harga Berdasarkan Spesifikasi'
      }
    ],
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Chart.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  { 
    id: 6, 
    title: 'Dokumenter: Industri Game Indie', 
    category: 'Multimedia', 
    image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&q=80&w=800', 
    desc: 'Video dokumenter dan motion graphic mengenai geliat perkembangan industri game indie di Indonesia.', 
    fullDesc: 'Karya visual dokumenter berdurasi 12 menit yang membedah ekosistem kreator game lokal Indonesia, dilengkapi infografis data animasi, visualisasi statistik pasar, dan teknik editing sinematik.',
    features: [
      'Animasi motion graphics 2D/3D untuk visualisasi data',
      'Desain suara sinematik dan tata suara imersif',
      'Color grading bertema cyberpunk fantasy',
      'Penyusunan narasi dokumenter informatif dan inspiratif'
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&q=80&w=800',
        caption: 'Poster Visual Dokumenter Industri Game'
      },
      {
        url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
        caption: 'Timeline Penyuntingan Video di Premiere Pro'
      },
      {
        url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
        caption: 'Perancangan Aset Motion Graphic di After Effects'
      },
      {
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
        caption: 'Hasil Akhir Color Grading & Komposisi Sinematik'
      }
    ],
    tech: ['Adobe Premiere Pro', 'After Effects', 'Audition', 'Illustrator'],
    demoUrl: 'https://youtube.com',
    githubUrl: 'https://github.com'
  }
];

// --- 3. SERTIFIKAT & PENGHARGAAN ---
const certData = [
  { 
    id: 1, 
    title: 'Kontrol Game Action Unreal Engine', 
    issuer: 'Dicoding Academy', 
    year: '2023', 
    image: 'https://images.unsplash.com/photo-1589330694653-efa6475320c1?auto=format&fit=crop&q=80&w=800',
    desc: 'Sertifikasi kompetensi penguasaan Blueprint Visual Scripting, Character Controller, dan Animasi Tempur di Unreal Engine 5.'
  },
  { 
    id: 2, 
    title: 'Masterclass Agate: Game Design Fundamental', 
    issuer: 'Agate Academy', 
    year: '2023', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    desc: 'Pelatihan intensif konsep core loop, game economy balancing, level design, dan player psychology oleh mentor industri game Agate.'
  },
  { 
    id: 3, 
    title: 'Data Analysis with Python', 
    issuer: 'Coursera / IBM', 
    year: '2022', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Sertifikasi analisis data menggunakan Python, manipulasi data dengan Pandas & NumPy, serta pembangunan model prediksi machine learning dasar.'
  }
];

// --- 4. KARYA 3D MODEL (GALERI ASET GAME & BLENDER) ---
const models3DData = [
  {
    id: 1,
    title: 'Low-Poly Dungeon Props Kit',
    category: 'Environment & Props Game',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Sci-Fi Modular Plasma Rifle',
    category: 'Hard Surface Weapon Model',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Cyberpunk Alley Modular Set',
    category: 'Environment Architecture',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Stylized Medieval House',
    category: 'Stylized Building & Props',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Autonomous Combat Mecha Scout',
    category: '3D Robot Character Concept',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Underground Facility Modular Props',
    category: 'Survival Horror Assets',
    software: 'Blender 3D',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800'
  }
];

