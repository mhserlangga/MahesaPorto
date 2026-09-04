/**
 * ==========================================================================
 * MAIN LOGIC - PORTOFOLIO MAHESA ERLANGGA
 * ==========================================================================
 * Berisi controller untuk typing effect, render dinamis, filter kategori,
 * kontrol modal (proyek, sertifikat, lightbox, CV), dan form submission.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. TYPING EFFECT (HERO SECTION) ---
  const roles = [
    "Game Developer", 
    "Web Programmer", 
    "Data Analyst", 
    "Multimedia Enthusiast"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typedRoleEl = document.getElementById('typed-role');

  function typeLoop() {
    if (!typedRoleEl) return;
    const current = roles[roleIdx];
    
    if (isDeleting) {
      typedRoleEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedRoleEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 45 : 110;
    if (!isDeleting && charIdx === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 500;
    }
    setTimeout(typeLoop, speed);
  }
  typeLoop();

  // --- 2. RENDER PENGALAMAN (EXPERIENCES) ---
  const expContainer = document.getElementById('experience-container');
  function renderExperiences() {
    if (!expContainer || typeof experienceData === 'undefined') return;

    expContainer.innerHTML = experienceData.map((item) => {
      let badgeStyle = "bg-slate-500/10 text-slate-400 border-slate-500/30";
      if (item.type === 'Magang') badgeStyle = "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]";
      if (item.type === 'Freelance') badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
      if (item.type === 'Organisasi') badgeStyle = "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]";
      if (item.type === 'Laboratorium') badgeStyle = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.1)]";

      const skillsHtml = item.skills ? `
        <div class="flex flex-wrap gap-2 mt-4">
          ${item.skills.map(s => `<span class="text-[11px] font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-0.5 rounded-sm">${s}</span>`).join('')}
        </div>
      ` : '';

      const imagesHtml = item.images && item.images.length > 0 ? `
        <div class="mt-5">
          <p class="text-xs text-amber-400/80 mb-2 font-serif-cinzel">✧ Foto Dokumentasi (Klik untuk zoom):</p>
          <div class="grid gap-4 ${item.images.length === 1 ? 'grid-cols-1 sm:w-2/3' : 'grid-cols-1 sm:grid-cols-2'}">
            ${item.images.map(img => `
              <div onclick="openLightbox('${img}', '${item.title} - ${item.company}')" class="relative h-36 md:h-44 rounded-sm overflow-hidden border border-slate-700/60 hover:border-amber-500/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 cursor-pointer group/img">
                <div class="absolute inset-0 bg-indigo-950/30 mix-blend-overlay z-10 group-hover/img:bg-transparent transition-colors duration-500"></div>
                <img src="${img}" alt="Dokumentasi" class="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-70 group-hover/img:opacity-100" />
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      return `
        <div class="relative group animate-fadeIn">
          <div class="absolute -left-[29px] md:-left-[45px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-[3px] border-slate-600 group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.8)] transition-all duration-300 z-10"></div>
          
          <div class="bg-slate-900/50 p-6 md:p-8 rounded-sm border border-slate-800 backdrop-blur-sm hover:border-amber-500/40 hover:shadow-[0_5px_25px_rgba(0,0,0,0.6)] transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-xl md:text-2xl font-bold text-slate-100 font-serif-cinzel group-hover:text-amber-200 transition-colors">${item.title}</h3>
                <span class="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-sm border ${badgeStyle}">${item.type}</span>
              </div>
              <div class="shrink-0 text-slate-400 bg-slate-950 px-3 py-1 border border-slate-800 text-sm tracking-wider font-medium font-serif-cinzel">${item.period}</div>
            </div>

            <div class="text-amber-500/90 font-bold mb-4 text-sm md:text-base tracking-wide flex items-center gap-2">
              <span>✦ ${item.company}</span>
            </div>
            
            <p class="text-slate-300 leading-relaxed text-justify md:text-left bg-slate-950/40 p-4 border-l-2 border-slate-800 group-hover:border-amber-500/50 transition-colors">
              "${item.desc}"
            </p>

            ${skillsHtml}
            ${imagesHtml}
          </div>
        </div>
      `;
    }).join('');
  }
  renderExperiences();

  // --- 3. RENDER KARYA & PROYEK (PROJECTS) ---
  const projectsGrid = document.getElementById('projects-grid');
  let currentCategory = 'All';

  window.renderProjects = function() {
    if (!projectsGrid || typeof projectData === 'undefined') return;

    const list = currentCategory === 'All' 
      ? projectData 
      : projectData.filter(p => p.category === currentCategory);

    projectsGrid.innerHTML = list.map(project => `
      <div class="bg-slate-900/70 rounded-sm overflow-hidden border border-slate-800 hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(245,158,11,0.2)] transition-all duration-500 group relative flex flex-col justify-between animate-fadeIn">
        <div>
          <div class="h-48 overflow-hidden relative border-b border-slate-800">
            <div class="absolute inset-0 bg-indigo-900/25 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-75 group-hover:opacity-100" />
            <span class="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-amber-400 font-serif-cinzel uppercase tracking-widest border border-amber-500/40 rounded-sm shadow-md">
              ${project.category}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors font-serif-cinzel tracking-wide mb-2.5">
              ${project.title}
            </h3>
            
            <p class="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
              ${project.desc}
            </p>
            
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${project.tech.map(t => `
                <span class="text-[11px] font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-2.5 py-1 uppercase tracking-wider rounded-sm">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 pt-2 border-t border-slate-800/70 relative z-20 flex justify-between items-center">
          <button onclick="openProjectModal(${project.id})" class="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors font-serif-cinzel cursor-pointer">
            <span>Lihat Detail</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </button>
          <span class="text-xs text-slate-500 font-serif-cinzel">✦ #${project.id}</span>
        </div>
      </div>
    `).join('');
  };
  renderProjects();

  // --- 3B. RENDER GALERI 3D MODEL (KATEGORI 3D) ---
  const modelsGrid = document.getElementById('models-grid');
  const section3DModels = document.getElementById('section-3d-models');
  const categoryHeader = document.getElementById('category-header');
  const categoryTitle = document.getElementById('category-title');
  const categoryDesc = document.getElementById('category-desc');
  const categoryBadge = document.getElementById('category-badge');

  const categoryMeta = {
    All: {
      title: 'Koleksi Seluruh Proyek & Karya Terpilih',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      desc: 'Kumpulan lengkap rekayasa perangkat lunak, game interaktif, sistem web fungsional, dan visualisasi data yang mencerminkan kapabilitas teknis serta eksplorasi lintas disiplin.',
      badge: '✧ Klik "Lihat Detail" untuk demo & mockup'
    },
    Game: {
      title: 'Hasil Proyek Game Interaktif & Simulasi',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="6"/><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/></svg>`,
      desc: 'Koleksi proyek game interaktif 2D dan 3D, perancangan gameplay mechanics, level design, dan implementasi logika fisika yang dikembangkan menggunakan <span class="text-amber-400 font-semibold">Unity 3D</span>, <span class="text-amber-400 font-semibold">Godot Engine</span>, serta pemrograman <span class="text-amber-400 font-semibold">C#</span> dan <span class="text-amber-400 font-semibold">GDScript</span>.',
      badge: '✧ Klik "Lihat Detail" untuk gameplay & info'
    },
    Web: {
      title: 'Pengembangan Website & Sistem Informasi',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      desc: 'Pengembangan aplikasi web fungsional, portal sistem informasi manajemen (SIM), dan antarmuka responsif modern yang berpusat pada pengalaman pengguna (UX) menggunakan <span class="text-amber-400 font-semibold">React</span>, <span class="text-amber-400 font-semibold">JavaScript (ES6+)</span>, <span class="text-amber-400 font-semibold">Tailwind CSS</span>, dan integrasi backend database.',
      badge: '✧ Klik "Lihat Detail" untuk fitur & arsitektur'
    },
    Multimedia: {
      title: 'Karya Multimedia, Desain & Analisis Data',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
      desc: 'Eksplorasi visualisasi data analitik, infografis statistik, perancangan antarmuka prototipe pengguna (UI/UX), dan materi multimedia digital yang dikembangkan menggunakan <span class="text-amber-400 font-semibold">Python (Pandas & Seaborn)</span>, <span class="text-amber-400 font-semibold">Figma</span>, dan tools multimedia kreatif.',
      badge: '✧ Klik "Lihat Detail" untuk visualisasi & data'
    }
  };

  function updateCategoryHeader(cat) {
    if (!categoryHeader || !categoryTitle || !categoryDesc || !categoryMeta[cat]) return;
    const meta = categoryMeta[cat];
    categoryTitle.innerHTML = `${meta.icon}<span>${meta.title}</span>`;
    categoryDesc.innerHTML = meta.desc;
    if (categoryBadge) categoryBadge.textContent = meta.badge;
  }

  window.renderModels3D = function() {
    if (!modelsGrid || typeof models3DData === 'undefined') return;

    modelsGrid.innerHTML = models3DData.map(item => `
      <div 
        onclick="openLightbox('${item.image}', '${item.title} - ${item.category} (${item.software})')" 
        class="group/model cursor-pointer bg-slate-900/80 border border-slate-800 rounded-sm overflow-hidden hover:border-amber-500/60 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(245,158,11,0.2)] transition-all duration-300 animate-fadeIn flex flex-col justify-between"
      >
        <div class="h-52 overflow-hidden relative border-b border-slate-800 bg-slate-950">
          <div class="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10 group-hover/model:bg-transparent transition-colors duration-500"></div>
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover/model:scale-105 transition-transform duration-700 opacity-85 group-hover/model:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/model:opacity-100 transition-opacity z-20 bg-slate-950/40">
            <span class="bg-slate-900/90 text-amber-300 text-xs px-3 py-1.5 border border-amber-500/50 rounded-sm font-serif-cinzel shadow-lg flex items-center gap-1.5">
              👁 Perbesar Gambar
            </span>
          </div>
          <span class="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-amber-400 font-serif-cinzel uppercase tracking-widest border border-amber-500/30 rounded-sm shadow-md">
            ${item.software}
          </span>
        </div>
        <div class="p-4 text-center bg-slate-950/70">
          <h4 class="font-bold text-slate-100 font-serif-cinzel group-hover/model:text-amber-300 transition-colors text-base tracking-wide line-clamp-1">
            ${item.title}
          </h4>
          <p class="text-xs text-slate-500 font-serif-lora mt-1 italic">
            ${item.category}
          </p>
        </div>
      </div>
    `).join('');
  };
  renderModels3D();

  window.filterProjects = function(cat) {
    currentCategory = cat;
    document.querySelectorAll('#project-filters .filter-btn').forEach(btn => {
      if (btn.textContent.trim() === cat) {
        btn.className = 'filter-btn active px-6 py-2.5 text-sm font-medium transition duration-300 font-serif-cinzel tracking-widest rounded-sm border cursor-pointer bg-amber-500/15 text-amber-300 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.25)]';
      } else {
        btn.className = 'filter-btn px-6 py-2.5 text-sm font-medium transition duration-300 font-serif-cinzel tracking-widest rounded-sm border cursor-pointer bg-slate-900/80 text-slate-400 border-slate-800 hover:border-amber-500/50 hover:text-amber-200';
      }
    });

    // Kontrol visibilitas Proyek Grid & Galeri 3D Model
    if (cat === '3D') {
      if (categoryHeader) categoryHeader.style.display = 'none';
      if (projectsGrid) projectsGrid.style.display = 'none';
      if (section3DModels) {
        section3DModels.style.display = 'block';
        section3DModels.classList.remove('mt-16', 'pt-10', 'border-t', 'border-slate-800/80');
      }
    } else if (cat === 'All') {
      if (categoryHeader) {
        categoryHeader.style.display = 'block';
        updateCategoryHeader('All');
      }
      if (projectsGrid) projectsGrid.style.display = 'grid';
      if (section3DModels) {
        section3DModels.style.display = 'block';
        section3DModels.classList.add('mt-16', 'pt-10', 'border-t', 'border-slate-800/80');
      }
      renderProjects();
    } else {
      // 'Game', 'Web', 'Multimedia'
      if (categoryHeader) {
        categoryHeader.style.display = 'block';
        updateCategoryHeader(cat);
      }
      if (projectsGrid) projectsGrid.style.display = 'grid';
      if (section3DModels) {
        section3DModels.style.display = 'none';
      }
      renderProjects();
    }
  };

  // --- 4. RENDER SERTIFIKAT (CERTIFICATES) ---
  const certsGrid = document.getElementById('certs-grid');
  function renderCerts() {
    if (!certsGrid || typeof certData === 'undefined') return;

    certsGrid.innerHTML = certData.map(cert => `
      <div onclick="openCertModal(${cert.id})" class="group cursor-pointer bg-slate-950/90 border border-slate-800 p-2.5 rounded-sm overflow-hidden hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300 animate-fadeIn">
        <div class="h-44 overflow-hidden bg-slate-900 relative border border-slate-800">
          <div class="absolute inset-0 bg-slate-900/30 z-10 group-hover:opacity-0 transition-opacity"></div>
          <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover opacity-65 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-slate-950/40">
            <span class="bg-slate-900/90 text-amber-300 text-xs px-3 py-1.5 border border-amber-500/50 rounded-sm font-serif-cinzel shadow-lg">
              👁 Buka Sertifikat
            </span>
          </div>
        </div>
        
        <div class="p-4 text-center">
          <h4 class="font-bold text-slate-200 mb-1.5 line-clamp-1 font-serif-cinzel group-hover:text-amber-300 transition-colors">
            ${cert.title}
          </h4>
          <p class="text-xs text-amber-500/80 font-medium tracking-widest uppercase font-serif-cinzel">
            ${cert.issuer} • ${cert.year}
          </p>
        </div>
      </div>
    `).join('');
  }
  renderCerts();

  // --- 5. MODAL MANAGEMENT ---
  const projModal = document.getElementById('project-modal');
  window.openProjectModal = function(id) {
    if (!projModal || typeof projectData === 'undefined') return;
    const p = projectData.find(x => x.id === id);
    if (!p) return;

    const mainImg = document.getElementById('modal-proj-image');
    mainImg.style.transition = 'opacity 0.2s ease-in-out';
    mainImg.style.opacity = '1';
    mainImg.src = p.image;
    document.getElementById('modal-proj-category').textContent = p.category;
    document.getElementById('modal-proj-title').textContent = p.title;
    document.getElementById('modal-proj-desc').textContent = p.fullDesc;
    document.getElementById('modal-proj-features').innerHTML = p.features.map(f => `<li class="flex items-start gap-2.5"><span class="text-amber-400 mt-0.5">✦</span><span>${f}</span></li>`).join('');
    document.getElementById('modal-proj-tech').innerHTML = p.tech.map(t => `<span class="text-xs font-bold text-indigo-200 bg-indigo-950/70 border border-indigo-500/40 px-3 py-1 rounded-sm uppercase tracking-wider">${t}</span>`).join('');
    
    // Render Screenshots Gallery
    const galleryContainer = document.getElementById('modal-proj-gallery-container');
    const galleryGrid = document.getElementById('modal-proj-gallery');
    if (p.screenshots && p.screenshots.length > 0) {
      galleryContainer.style.display = 'block';
      galleryGrid.innerHTML = p.screenshots.map((s, idx) => `
        <div 
          onclick="switchModalProjectImage('${s.url}', this)" 
          class="proj-thumb-item group relative h-20 sm:h-24 rounded-sm overflow-hidden border-2 ${idx === 0 ? 'border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'border-slate-800 hover:border-amber-500/60'} transition-all duration-300 cursor-pointer bg-slate-950"
          title="${s.caption}"
        >
          <img src="${s.url}" alt="${s.caption}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
          <span class="absolute bottom-1 left-1.5 right-1.5 text-[9px] text-slate-300 truncate font-serif-cinzel group-hover:text-amber-300 block">
            ${s.caption}
          </span>
        </div>
      `).join('');
    } else if (galleryContainer) {
      galleryContainer.style.display = 'none';
    }

    const demoBtn = document.getElementById('modal-proj-demo');
    if (p.demoUrl) {
      demoBtn.href = p.demoUrl;
      demoBtn.style.display = 'inline-flex';
    } else {
      demoBtn.style.display = 'none';
    }

    const repoBtn = document.getElementById('modal-proj-repo');
    if (p.githubUrl) {
      repoBtn.href = p.githubUrl;
      repoBtn.style.display = 'inline-flex';
    } else {
      repoBtn.style.display = 'none';
    }

    projModal.classList.remove('hidden');
    projModal.classList.add('flex');
  };

  window.switchModalProjectImage = function(url, thumbEl) {
    const mainImg = document.getElementById('modal-proj-image');
    if (!mainImg) return;
    
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = url;
      mainImg.style.opacity = '1';
    }, 120);

    document.querySelectorAll('.proj-thumb-item').forEach(el => {
      el.className = 'proj-thumb-item group relative h-20 sm:h-24 rounded-sm overflow-hidden border-2 border-slate-800 hover:border-amber-500/60 transition-all duration-300 cursor-pointer bg-slate-950';
    });
    if (thumbEl) {
      thumbEl.className = 'proj-thumb-item group relative h-20 sm:h-24 rounded-sm overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 cursor-pointer bg-slate-950';
    }
  };

  window.closeProjectModal = function() {
    if (projModal) {
      projModal.classList.add('hidden');
      projModal.classList.remove('flex');
    }
  };

  const certModal = document.getElementById('cert-modal');
  window.openCertModal = function(id) {
    if (!certModal || typeof certData === 'undefined') return;
    const c = certData.find(x => x.id === id);
    if (!c) return;

    document.getElementById('cert-modal-image').src = c.image;
    document.getElementById('cert-modal-title').textContent = c.title;
    document.getElementById('cert-modal-meta').textContent = `${c.issuer} — ${c.year}`;
    document.getElementById('cert-modal-desc').textContent = c.desc || '';
    certModal.classList.remove('hidden');
    certModal.classList.add('flex');
  };

  window.closeCertModal = function() {
    if (certModal) {
      certModal.classList.add('hidden');
      certModal.classList.remove('flex');
    }
  };

  const lightboxModal = document.getElementById('lightbox-modal');
  window.openLightbox = function(url, title) {
    if (!lightboxModal) return;
    document.getElementById('lightbox-img').src = url;
    document.getElementById('lightbox-title').textContent = title;
    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
  };

  window.closeLightbox = function() {
    if (lightboxModal) {
      lightboxModal.classList.add('hidden');
      lightboxModal.classList.remove('flex');
    }
  };

  const cvModal = document.getElementById('cv-modal');
  window.openCvModal = function() {
    if (cvModal) {
      cvModal.classList.remove('hidden');
      cvModal.classList.add('flex');
    }
  };

  window.closeCvModal = function() {
    if (cvModal) {
      cvModal.classList.add('hidden');
      cvModal.classList.remove('flex');
    }
  };

  // --- 6. MOBILE NAVIGATION MENU ---
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- 7. TOAST NOTIFICATION UTILITY ---
  const toast = document.getElementById('toast-notif');
  window.showToast = function(text) {
    if (!toast) return;
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.textContent = text;
    toast.classList.remove('hidden');
    setTimeout(window.hideToast, 4000);
  };

  window.hideToast = function() {
    if (toast) {
      toast.classList.add('hidden');
    }
  };

  // --- 8. SCROLL BACK TO TOP ---
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (!btt) return;
    if (window.scrollY > 400) {
      btt.classList.remove('hidden');
    } else {
      btt.classList.add('hidden');
    }
  });

  // Year dynamic
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
