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
    "Front-End Web Developer",
    "Game Developer (Unity & Godot)", 
    "Freelance Video Editor", 
    "S1 Sistem Informasi (IPK: 3.94)"
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

  // --- 2. RENDER PENGALAMAN (PENGALAMAN KERJA & PENDIDIKAN) ---
  const workExpContainer = document.getElementById('work-experience-container');
  const eduExpContainer = document.getElementById('education-experience-container');

  function renderExperiences() {
    // 2A. Render Pengalaman Kerja (Dengan Timeline Selendang di Sisi Kiri)
    if (workExpContainer && typeof workExperienceData !== 'undefined') {
      workExpContainer.innerHTML = workExperienceData.map((item, idx) => {
        let badgeStyle = "bg-slate-500/10 text-slate-400 border-slate-500/30";
        if (item.type === 'Kontrak' || item.type === 'Laboratorium') badgeStyle = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.1)]";
        if (item.type === 'Magang') badgeStyle = "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]";
        if (item.type === 'Freelance') badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
        if (item.type === 'Volunteer' || item.type === 'Organisasi') badgeStyle = "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]";

        const skillsHtml = item.skills ? `
          <div class="flex flex-wrap gap-2 mt-4">
            ${item.skills.map(s => `<span class="text-[11px] font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-0.5 rounded-sm">${s}</span>`).join('')}
          </div>
        ` : '';

        const imagesHtml = item.images && item.images.length > 0 ? `
          <div class="mt-5">
            <div class="grid gap-4 ${item.images.length === 1 ? 'grid-cols-1 sm:w-2/3' : 'grid-cols-1 sm:grid-cols-2'}">
              ${item.images.map(img => `
                <div onclick="openLightbox('${img}', '${item.title} - ${item.company}')" class="relative h-36 md:h-44 rounded-sm overflow-hidden border border-slate-700/60 hover:border-amber-500/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 cursor-pointer group/img">
                  <div class="absolute inset-0 bg-indigo-950/30 mix-blend-overlay z-10 group-hover/img:bg-transparent transition-colors duration-500"></div>
                  <img src="${img}" alt="Dokumentasi" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover/img:scale-110 transition duration-700 opacity-70 group-hover/img:opacity-100" />
                </div>
              `).join('')}
            </div>
          </div>
        ` : '';

        return `
          <div class="relative group animate-fadeIn">
            <!-- Milestone Cakra Mandala Node for Selendang Anchor on Left Side -->
            <div class="work-timeline-node absolute -left-[27px] md:-left-[43px] top-6 z-20 flex items-center justify-center" data-index="${idx}">
              <span class="absolute w-6 h-6 rounded-full bg-amber-400/25 animate-ping pointer-events-none"></span>
              <div class="w-6 h-6 rounded-full bg-slate-950 border-2 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.7)] flex items-center justify-center group-hover:scale-125 group-hover:border-amber-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.9)] transition-all duration-300">
                <div class="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-yellow-200"></div>
              </div>
            </div>
            
            <div class="kartu-aksara p-6 md:p-8 rounded-sm">
              <div class="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4 relative z-10">
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-block text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-sm border ${badgeStyle}">${item.type}</span>
                  </div>
                  <h4 class="text-xl md:text-2xl font-bold text-slate-100 font-serif-cinzel group-hover:text-amber-200 transition-colors mb-1">${item.title}</h4>
                </div>
                <div class="shrink-0 text-slate-400 bg-slate-950 px-3 py-1 border border-slate-800 text-sm tracking-wider font-medium font-serif-cinzel self-start">${item.period}</div>
              </div>

              <div class="text-amber-500/90 font-bold mb-4 text-sm md:text-base tracking-wide flex items-center gap-2 relative z-10">
                <span>✦ ${item.company}</span>
              </div>
              
              <p class="text-slate-300 leading-relaxed text-justify md:text-left bg-slate-950/40 p-4 border-l-2 border-amber-500/40 group-hover:border-amber-400 transition-colors relative z-10">
                "${item.desc}"
              </p>

              <div class="relative z-10">
                ${skillsHtml}
                ${imagesHtml}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 2B. Render Bagian Pendidikan, Bootcamp & Pelatihan (Tanpa Garis Timeline - Kartu Aksara)
    if (eduExpContainer && typeof educationTrainingData !== 'undefined') {
      eduExpContainer.innerHTML = educationTrainingData.map((item, idx) => {
        let badgeStyle = "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
        if (item.type.includes('Bootcamp')) badgeStyle = "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]";
        if (item.type.includes('Game')) badgeStyle = "bg-purple-500/10 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]";
        if (item.type.includes('Akademik')) badgeStyle = "bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
        if (item.type.includes('Web')) badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]";

        const skillsHtml = item.skills ? `
          <div class="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-800/80">
            ${item.skills.map(s => `<span class="text-[10px] font-medium text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-sm">${s}</span>`).join('')}
          </div>
        ` : '';

        // Kartu pertama (Bootcamp 3D Game Dev - Mastered 99/100) dibuat featured span 2 kolom di layar besar
        const colSpanClass = idx === 0 ? 'md:col-span-2' : '';

        return `
          <div class="${colSpanClass} kartu-aksara p-6 md:p-7 rounded-sm flex flex-col justify-between group animate-fadeIn">
            <div class="relative z-10">
              <div class="flex flex-wrap items-start justify-between mb-3 gap-2">
                <div class="flex items-center gap-2">
                  <span class="inline-block text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-sm border ${badgeStyle}">${item.type}</span>
                </div>
                <span class="text-xs text-slate-400 bg-slate-950 px-2.5 py-1 border border-slate-800 font-serif-cinzel">${item.period}</span>
              </div>
              <h4 class="text-lg md:text-xl font-bold text-slate-100 font-serif-cinzel group-hover:text-amber-200 transition-colors mb-2">${item.title}</h4>
              <div class="text-indigo-300 font-medium mb-3 text-sm flex items-center gap-1.5">
                <span>✦ ${item.company}</span>
              </div>
              <p class="text-slate-300 text-sm leading-relaxed text-justify md:text-left">
                "${item.desc}"
              </p>
            </div>
            <div class="relative z-10">
              ${skillsHtml}
            </div>
          </div>
        `;
      }).join('');
    }

    // Trigger update path untuk timeline selendang di sisi kiri pengalaman kerja
    setTimeout(updateWorkSelendangPath, 50);
  }

  // --- 2C. KALKULASI SELENDANG TIMELINE PENGALAMAN KERJA (SISI KIRI) ---
  function updateWorkSelendangPath() {
    const wrapper = document.getElementById('work-experience-wrapper');
    if (!wrapper) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const nodes = wrapper.querySelectorAll('.work-timeline-node');
    if (!nodes.length) return;

    const points = [];
    nodes.forEach((node, idx) => {
      const nodeRect = node.getBoundingClientRect();
      const x = nodeRect.left + nodeRect.width / 2 - wrapperRect.left;
      const y = nodeRect.top + nodeRect.height / 2 - wrapperRect.top;
      points.push({ x, y, idx });
    });

    const H = wrapperRect.height;
    const nodeX = points[0].x;

    // Titik awal selendang di paling atas
    let d = `M ${nodeX.toFixed(1)} 0`;

    // Garis selendang sutra menghubungkan setiap milestone node secara vertikal dengan kelenturan sutra halus
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (i === 0) {
        d += ` L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      } else {
        const prevP = points[i - 1];
        const dy = p.y - prevP.y;
        // Kelenturan kain selendang sutra halus di sisi kiri
        const wave = (i % 2 === 0 ? 3.5 : -3.5);
        const cp1x = prevP.x + wave;
        const cp1y = prevP.y + dy * 0.35;
        const cp2x = p.x + wave;
        const cp2y = p.y - dy * 0.35;
        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      }
    }

    // Perpanjangan ke ujung selendang di bawah kartu terakhir
    const lastP = points[points.length - 1];
    const tailY = Math.min(H, lastP.y + 40);
    d += ` L ${lastP.x.toFixed(1)} ${tailY.toFixed(1)}`;

    // Terapkan ke elemen SVG
    ['work-selendang-aura', 'work-selendang-body', 'work-selendang-edge', 'work-selendang-light'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('d', d);
    });

    // Ronce Emas / Tassels di Ujung Selendang
    const tailGroup = document.getElementById('work-selendang-tail');
    if (tailGroup) {
      tailGroup.innerHTML = `
        <circle cx="${lastP.x.toFixed(1)}" cy="${tailY.toFixed(1)}" r="3.5" fill="#f59e0b" stroke="#fbbf24" stroke-width="1.2" />
        <line x1="${lastP.x.toFixed(1)}" y1="${tailY.toFixed(1)}" x2="${(lastP.x - 7).toFixed(1)}" y2="${(tailY + 16).toFixed(1)}" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" />
        <line x1="${lastP.x.toFixed(1)}" y1="${tailY.toFixed(1)}" x2="${lastP.x.toFixed(1)}" y2="${(tailY + 20).toFixed(1)}" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" />
        <line x1="${lastP.x.toFixed(1)}" y1="${tailY.toFixed(1)}" x2="${(lastP.x + 7).toFixed(1)}" y2="${(tailY + 16).toFixed(1)}" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" />
      `;
    }
  }

  // Inisialisasi dan Observer Selendang Timeline
  renderExperiences();
  setTimeout(updateWorkSelendangPath, 100);
  setTimeout(updateWorkSelendangPath, 500);
  window.addEventListener('load', updateWorkSelendangPath);
  window.addEventListener('resize', () => {
    clearTimeout(window._selendangResizeTimer);
    window._selendangResizeTimer = setTimeout(updateWorkSelendangPath, 80);
  });

  if (typeof ResizeObserver !== 'undefined' && workExpContainer) {
    const ro = new ResizeObserver(() => {
      updateWorkSelendangPath();
    });
    ro.observe(workExpContainer);
  }

  // --- 3. RENDER KARYA & PROYEK (PROJECTS) - KARTU AKSARA ---
  const projectsGrid = document.getElementById('projects-grid');
  let currentCategory = 'All';

  window.renderProjects = function() {
    if (!projectsGrid || typeof projectData === 'undefined') return;

    const list = currentCategory === 'All' 
      ? projectData 
      : projectData.filter(p => p.category === currentCategory);

    projectsGrid.innerHTML = list.map(project => `
      <div class="kartu-aksara rounded-sm overflow-hidden group relative flex flex-col justify-between animate-fadeIn">
        <div>
          <div class="h-48 overflow-hidden relative border-b border-amber-500/20">
            <div class="absolute inset-0 bg-indigo-900/25 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-75 group-hover:opacity-100" />
            <span class="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-amber-400 font-serif-cinzel uppercase tracking-widest border border-amber-500/40 rounded-sm shadow-md">
              ${project.category}
            </span>
          </div>

          <div class="p-6 relative z-10">
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
          <span class="text-xs text-amber-500/70 font-serif-cinzel">#${project.id}</span>
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

  const categoryMeta = {
    All: {
      title: 'Koleksi Seluruh Proyek & Karya Terpilih',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      desc: 'Kumpulan lengkap rekayasa perangkat lunak, game interaktif, sistem web fungsional, dan visualisasi data yang mencerminkan kapabilitas teknis serta eksplorasi lintas disiplin.'
    },
    Game: {
      title: 'Hasil Proyek Game Interaktif & Simulasi',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="6"/><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/></svg>`,
      desc: 'Koleksi proyek game interaktif 2D dan 3D, perancangan gameplay mechanics, level design, dan implementasi logika fisika yang dikembangkan menggunakan <span class="text-amber-400 font-semibold">Unity 3D</span>, <span class="text-amber-400 font-semibold">Godot Engine</span>, serta pemrograman <span class="text-amber-400 font-semibold">C#</span> dan <span class="text-amber-400 font-semibold">GDScript</span>.'
    },
    Web: {
      title: 'Pengembangan Website & Sistem Informasi',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      desc: 'Pengembangan aplikasi web fungsional, portal sistem informasi manajemen (SIM), dan antarmuka responsif modern yang berpusat pada pengalaman pengguna (UX) menggunakan <span class="text-amber-400 font-semibold">React</span>, <span class="text-amber-400 font-semibold">JavaScript (ES6+)</span>, <span class="text-amber-400 font-semibold">Tailwind CSS</span>, dan integrasi backend database.'
    },
    Multimedia: {
      title: 'Karya Multimedia, Video & Motion Graphics',
      icon: `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="14" height="12" x="2" y="6" rx="2"/><path d="m22 8-6 4 6 4V8Z"/></svg>`,
      desc: 'Eksplorasi karya video editing profesional, motion graphics 2D dinamis, bumper intro kanal YouTube, serta aset animasi digital menggunakan <span class="text-amber-400 font-semibold">Cavalry</span>, <span class="text-amber-400 font-semibold">Affinity Designer</span>, dan <span class="text-amber-400 font-semibold">Adobe Premiere Pro</span>.'
    }
  };

  function updateCategoryHeader(cat) {
    if (!categoryHeader || !categoryTitle || !categoryDesc || !categoryMeta[cat]) return;
    const meta = categoryMeta[cat];
    categoryTitle.innerHTML = `${meta.icon}<span>${meta.title}</span>`;
    categoryDesc.innerHTML = meta.desc;
  }

  window.renderModels3D = function() {
    if (!modelsGrid || typeof models3DData === 'undefined') return;

    modelsGrid.innerHTML = models3DData.map(item => `
      <div 
        onclick="openLightbox('${item.image}', '${item.title} - ${item.category} (${item.software})')" 
        class="group/model cursor-pointer kartu-aksara rounded-sm overflow-hidden animate-fadeIn flex flex-col justify-between"
      >
        <div class="h-52 overflow-hidden relative border-b border-amber-500/20 bg-slate-950">
          <div class="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10 group-hover/model:bg-transparent transition-colors duration-500"></div>
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover/model:scale-105 transition-transform duration-700 opacity-85 group-hover/model:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/model:opacity-100 transition-opacity z-20 bg-slate-950/40">
            <span class="bg-slate-900/90 text-amber-300 text-xs px-3 py-1.5 border border-amber-500/50 rounded-sm font-serif-cinzel shadow-lg flex items-center gap-1.5">
              👁 Perbesar Karya
            </span>
          </div>
          <span class="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold text-amber-400 font-serif-cinzel uppercase tracking-widest border border-amber-500/30 rounded-sm shadow-md">
            ${item.software}
          </span>
        </div>
        <div class="p-4 text-center bg-slate-950/70 relative z-10">
          <h4 class="font-bold text-slate-100 font-serif-cinzel group-hover/model:text-amber-300 transition-colors text-base tracking-wide line-clamp-1">
            ${item.title}
          </h4>
          <p class="text-xs text-amber-400/80 font-serif-lora mt-1 italic">
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
      if (typeof animateModelsCards === 'function') animateModelsCards();
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
      if (typeof animateProjectsCards === 'function') animateProjectsCards();
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
      if (typeof animateProjectsCards === 'function') animateProjectsCards();
    }

    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 50);
  };

  // --- 4. RENDER SERTIFIKAT (CERTIFICATES) ---
  const certsGrid = document.getElementById('certs-grid');
  function renderCerts() {
    if (!certsGrid || typeof certData === 'undefined') return;

    certsGrid.innerHTML = certData.map(cert => `
      <div onclick="openCertModal(${cert.id})" class="group cursor-pointer kartu-aksara p-2.5 rounded-sm overflow-hidden animate-fadeIn">
        <div class="h-44 overflow-hidden bg-slate-900 relative border border-slate-800 rounded-sm">
          <div class="absolute inset-0 bg-slate-900/30 z-10 group-hover:opacity-0 transition-opacity"></div>
          <img src="${cert.image}" alt="${cert.title}" loading="lazy" decoding="async" class="w-full h-full object-cover opacity-65 group-hover:opacity-100 group-hover:scale-105 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-slate-950/40">
            <span class="bg-slate-900/90 text-amber-300 text-xs px-3 py-1.5 border border-amber-500/50 rounded-sm font-serif-cinzel shadow-lg">
              👁 Buka Sertifikat
            </span>
          </div>
        </div>
        
        <div class="p-4 text-center relative z-10">
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
      const demoSpan = demoBtn.querySelector('span');
      if (demoSpan) {
        demoSpan.textContent = p.demoText || 'Buka Demo / Live Preview';
      }
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

  // Close any active modal when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProjectModal();
      window.closeCertModal();
      window.closeLightbox();
      window.closeCvModal();
    }
  });

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

  // ==========================================================================
  // 9. OPTIMIZED GSAP & SCROLLTRIGGER ANIMATION SYSTEM
  // ==========================================================================

  window.animateProjectsCards = function() {
    const cards = document.querySelectorAll('#projects-grid > div');
    if (!cards.length || typeof gsap === 'undefined') return;
    gsap.fromTo(cards, 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
        clearProps: "transform,opacity"
      }
    );
  };

  window.animateModelsCards = function() {
    const mCards = document.querySelectorAll('#models-grid > div');
    if (!mCards.length || typeof gsap === 'undefined') return;
    gsap.fromTo(mCards,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
        clearProps: "transform,opacity"
      }
    );
  };

  function initGsapAnimations() {
    if (typeof gsap === 'undefined') {
      console.warn("GSAP library not loaded.");
      return;
    }
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // --- 9A. HERO ENTRANCE TIMELINE ---
    const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (document.getElementById('hero-gunungan')) {
      heroTl.from('#hero-gunungan', {
        opacity: 0,
        duration: 1.0,
        clearProps: "opacity"
      }, 0.1);
    }

    if (document.getElementById('hero-portal')) {
      heroTl.from('#hero-portal', {
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        clearProps: "transform,opacity"
      }, 0.2);
    }

    heroTl
      .from('#hero-badge', { y: -15, opacity: 0, duration: 0.5, clearProps: "transform,opacity" }, 0.3)
      .from('#hero-heading', { y: 20, opacity: 0, duration: 0.6, clearProps: "transform,opacity" }, 0.45)
      .from('#hero-role-box', { y: 15, opacity: 0, duration: 0.5, clearProps: "transform,opacity" }, 0.6)
      .from('#hero-desc', { y: 15, opacity: 0, duration: 0.5, clearProps: "transform,opacity" }, 0.7)
      .from('#hero-cta', { y: 15, opacity: 0, duration: 0.5, clearProps: "transform,opacity" }, 0.8)
      .from('#hero-socials > *', { y: 10, opacity: 0, stagger: 0.06, duration: 0.4, clearProps: "transform,opacity" }, 0.9);

    // --- 9B. BATIK SECTION DIVIDERS REVEAL ---
    document.querySelectorAll('.batik-section-divider').forEach(divider => {
      const lineL = divider.querySelector('.divider-line-l');
      const lineR = divider.querySelector('.divider-line-r');
      const gem = divider.querySelector('.divider-gem');

      if (lineL && lineR && gem) {
        gsap.set(lineL, { transformOrigin: "right center" });
        gsap.set(lineR, { transformOrigin: "left center" });

        const divTl = gsap.timeline({
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });

        divTl
          .from(gem, { scale: 0, opacity: 0, duration: 0.45, ease: "back.out(1.5)", clearProps: "transform,opacity" })
          .from([lineL, lineR], { scaleX: 0, opacity: 0, duration: 0.6, ease: "power2.out", clearProps: "transform,opacity" }, "-=0.2");
      }
    });

    // --- 9C. SECTION HEADERS REVEAL ---
    const headers = [
      '#profile-header',
      '#experience-header',
      '#work-sub-header',
      '#edu-sub-header',
      '#project-header',
      '#certs-header',
      '#contact-header'
    ];
    headers.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform,opacity"
        });
      }
    });

    // --- 9D. PROFILE SECTION (CLEAN & GLITCH-FREE) ---
    if (document.getElementById('profile-bio-card')) {
      gsap.from('#profile-bio-card', {
        scrollTrigger: {
          trigger: '#profile-bio-card',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    if (document.getElementById('profile-details-grid')) {
      gsap.from('#profile-details-grid > div', {
        scrollTrigger: {
          trigger: '#profile-details-grid',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    // --- 9E. EXPERIENCE SECTION ---
    const workItems = document.querySelectorAll('#work-experience-container > div');
    workItems.forEach(item => {
      const node = item.querySelector('.work-timeline-node');
      const card = item.querySelector('.kartu-aksara');

      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
            onEnter: () => {
              if (node) {
                node.classList.add('node-pulse-active');
                setTimeout(() => node.classList.remove('node-pulse-active'), 1200);
              }
            }
          },
          x: 25,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform,opacity"
        });
      }

      if (node) {
        gsap.from(node, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          scale: 0.5,
          opacity: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
          clearProps: "transform,opacity"
        });
      }
    });

    // Education & Training Cards Grid
    const eduCards = document.querySelectorAll('#education-experience-container > div');
    if (eduCards.length) {
      gsap.from(eduCards, {
        scrollTrigger: {
          trigger: '#education-experience-container',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.08,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    // --- 9F. PROJECTS SECTION ---
    const projectCards = document.querySelectorAll('#projects-grid > div');
    if (projectCards.length) {
      gsap.from(projectCards, {
        scrollTrigger: {
          trigger: '#projects-grid',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.06,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    // 3D Models
    const modelCards = document.querySelectorAll('#models-grid > div');
    if (modelCards.length) {
      gsap.from(modelCards, {
        scrollTrigger: {
          trigger: '#models-grid',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.06,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    // --- 9G. CERTIFICATES SECTION ---
    const certCards = document.querySelectorAll('#certs-grid > div');
    if (certCards.length) {
      gsap.from(certCards, {
        scrollTrigger: {
          trigger: '#certs-grid',
          start: "top 88%",
          toggleActions: "play none none none"
        },
        y: 25,
        opacity: 0,
        stagger: 0.06,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    // --- 9H. CONTACT SECTION (NO SNAPPING, GLITCH-FREE) ---
    if (document.getElementById('contact-gunungan-l')) {
      gsap.from('#contact-gunungan-l', {
        scrollTrigger: {
          trigger: '#contact',
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "opacity"
      });
    }

    if (document.getElementById('contact-gunungan-r')) {
      gsap.from('#contact-gunungan-r', {
        scrollTrigger: {
          trigger: '#contact',
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "opacity"
      });
    }

    if (document.getElementById('contact-status-card')) {
      gsap.from('#contact-status-card', {
        scrollTrigger: {
          trigger: '#contact-status-card',
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }

    const contactItems = document.querySelectorAll('#contact-cards-grid > a');
    if (contactItems.length) {
      gsap.from(contactItems, {
        scrollTrigger: {
          trigger: '#contact-cards-grid',
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "transform,opacity"
      });
    }
  }

  // Run GSAP initializations
  initGsapAnimations();
});
