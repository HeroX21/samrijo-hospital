const siteConfig = {
  hospitalName: "Samrijo Hospital",
  tagline: "Excellence of Caring",
  location: "Burari, Delhi",
  phonePrimary: "+91 9319662944",
  phoneSecondary: "+91 9818085784",
  phoneLink: "tel:+919319662944",
  whatsappNumber: "919319662944",
  whatsappGeneral: "https://wa.me/919319662944?text=Hello%20I%20would%20like%20to%20book%20a%20consultation%20with%20Samrijo%20Hospital",
  address: "Main Burari Rd, near Janta Medicos, Delhi",
  workingHours: {
    opd: "9 AM - 9 PM",
    hospital: "24/7",
  },
};

const navItems = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About Us", href: "about.html", key: "about" },
  { label: "Services", href: "services.html", key: "services" },
  { label: "Contact", href: "contact.html", key: "contact" },
];

const services = [
  {
    title: "Piles",
    description: "Advanced laser care for hemorrhoids focused on less pain, less bleeding, and faster recovery.",
    benefits: ["Reduced discomfort after treatment", "Day-care friendly procedures", "Guided recovery and follow-up"],
  },
  {
    title: "Fistula",
    description: "Modern fistula treatment planning with precise evaluation and surgeon-led long-term care.",
    benefits: ["Focus on lower recurrence", "Protection of surrounding tissue", "Clear post-operative guidance"],
  },
  {
    title: "Fissure",
    description: "Targeted relief for anal fissures with expert assessment, conservative care, and surgery when needed.",
    benefits: ["Faster pain relief", "Minimally invasive options", "Diet and lifestyle counseling"],
  },
  {
    title: "Pilonidal Sinus",
    description: "Reliable surgical treatment for recurring pilonidal sinus infections near the tailbone.",
    benefits: ["Cleaner wound care", "Reduced recurrence risk", "Quicker return to movement"],
  },
  {
    title: "Varicose Veins",
    description: "Advanced treatment for painful, swollen veins to improve comfort, circulation, and confidence.",
    benefits: ["Improved leg comfort", "Better cosmetic appearance", "Short recovery timelines"],
  },
  {
    title: "Kidney Stone",
    description: "Stone management guided by size, location, and symptoms for safe removal and fast relief.",
    benefits: ["Pain-focused treatment plans", "Faster return to routine", "Advice for recurrence prevention"],
  },
  {
    title: "Gallbladder Stone",
    description: "Laparoscopic gallbladder stone treatment for symptom relief and smoother digestive recovery.",
    benefits: ["Smaller incisions", "Reduced hospital stay", "Structured recovery support"],
  },
  {
    title: "Hernia",
    description: "Comprehensive hernia surgery using modern repair techniques tailored to each patient.",
    benefits: ["Strong and precise repair", "Reduced post-op strain", "Early mobility support"],
  },
  {
    title: "Appendix",
    description: "Timely appendix surgery with careful diagnosis and minimally invasive intervention where appropriate.",
    benefits: ["Early symptom relief", "Laparoscopic approach when suitable", "Close recovery observation"],
  },
  {
    title: "Liver Surgery",
    description: "Specialized surgical care for liver conditions with detailed evaluation and coordinated treatment planning.",
    benefits: ["High-precision surgical planning", "Multidisciplinary decision making", "Attentive inpatient monitoring"],
  },
  {
    title: "Thyroid Surgery",
    description: "Trusted surgical management for thyroid disorders with emphasis on safety and recovery confidence.",
    benefits: ["Detailed pre-op assessment", "Careful surgical precision", "Post-surgery hormone guidance"],
  },
  {
    title: "Breast Surgery",
    description: "Sensitive, patient-first breast surgery care with thorough counseling and individualized treatment.",
    benefits: ["Respectful clinical support", "Clear treatment communication", "Thoughtful post-op follow-up"],
  },
  {
    title: "Abdominal TB",
    description: "Expert evaluation and surgical support for abdominal tuberculosis complications when clinically indicated.",
    benefits: ["Coordinated medical-surgical care", "Focused symptom management", "Recovery planning with follow-up"],
  },
  {
    title: "Prostate Enlargement",
    description: "Advanced care for enlarged prostate symptoms to improve urinary comfort and quality of life.",
    benefits: ["Relief from urinary obstruction", "Modern procedural options", "Better day-to-day comfort"],
  },
];

function whatsappLink(serviceName) {
  const message = `Hello I want more details about ${serviceName}`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function currentPage() {
  return document.body.dataset.page || "home";
}

function renderNavbar() {
  const host = document.getElementById("site-navbar");
  if (!host) {
    return;
  }

  const page = currentPage();
  host.innerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="glass-panel rounded-[1.6rem] border border-white/70 px-5 py-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
          <div class="flex items-center justify-between gap-4">
            <a href="index.html" class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-lg font-extrabold text-white shadow-lg shadow-blue-500/20">S</div>
              <div>
                <p class="font-display text-base font-bold text-slate-950 sm:text-lg">${siteConfig.hospitalName}</p>
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">${siteConfig.tagline}</p>
              </div>
            </a>
            <nav class="hidden items-center gap-7 lg:flex">
              ${navItems
                .map(
                  (item) => `
                    <a href="${item.href}" class="nav-link text-sm font-bold ${item.key === page ? "nav-link-active" : ""}">${item.label}</a>
                  `
                )
                .join("")}
            </nav>
            <div class="hidden items-center gap-3 lg:flex">
              <a href="${siteConfig.phoneLink}" class="btn-secondary text-sm">Call Now</a>
              <a href="${siteConfig.whatsappGeneral}" target="_blank" rel="noopener" class="btn-primary text-sm">WhatsApp</a>
            </div>
            <button id="mobile-menu-button" class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 lg:hidden" aria-label="Toggle navigation">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16"></path>
              </svg>
            </button>
          </div>
          <div id="mobile-menu" class="hidden pt-4 lg:hidden">
            <div class="divider-fade mb-4"></div>
            <nav class="flex flex-col gap-3">
              ${navItems
                .map(
                  (item) => `
                    <a href="${item.href}" class="rounded-2xl px-4 py-3 text-sm font-bold ${item.key === page ? "bg-blue-50 text-blue-700" : "bg-slate-50 text-slate-700"}">${item.label}</a>
                  `
                )
                .join("")}
            </nav>
            <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href="${siteConfig.phoneLink}" class="btn-secondary text-sm">Call Now</a>
              <a href="${siteConfig.whatsappGeneral}" target="_blank" rel="noopener" class="btn-primary text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;

  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  if (button && menu) {
    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) {
    return;
  }

  host.innerHTML = `
    <footer class="mt-20 bg-slate-950 text-white">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:px-8">
        <div>
          <div class="mb-5 flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 text-lg font-extrabold text-white">S</div>
            <div>
              <p class="font-display text-xl font-bold">${siteConfig.hospitalName}</p>
              <p class="text-sm text-blue-200">${siteConfig.tagline}</p>
            </div>
          </div>
          <p class="max-w-md text-sm leading-7 text-slate-300">
            Premium surgical care in Burari, Delhi, with a focus on laser, laparoscopic, and patient-centered treatment pathways that support safer recovery.
          </p>
          <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <span class="info-chip !bg-slate-900 !text-blue-100 !border-blue-900/80">OPD: ${siteConfig.workingHours.opd}</span>
            <span class="info-chip !bg-slate-900 !text-blue-100 !border-blue-900/80">Hospital: ${siteConfig.workingHours.hospital}</span>
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg font-semibold">Quick Links</h3>
          <div class="mt-5 grid gap-3 text-sm">
            ${navItems.map((item) => `<a class="footer-link" href="${item.href}">${item.label}</a>`).join("")}
          </div>
        </div>
        <div>
          <h3 class="font-display text-lg font-semibold">Contact Info</h3>
          <div class="mt-5 grid gap-4 text-sm leading-7 text-slate-300">
            <p>${siteConfig.address}</p>
            <a class="footer-link" href="${siteConfig.phoneLink}">${siteConfig.phonePrimary}</a>
            <a class="footer-link" href="tel:+919818085784">${siteConfig.phoneSecondary}</a>
            <a class="footer-link" href="${siteConfig.whatsappGeneral}" target="_blank" rel="noopener">WhatsApp Consultation</a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; <span data-current-year></span> ${siteConfig.hospitalName}. All rights reserved.</p>
          <p>Advanced laser and laparoscopic surgery in Burari, Delhi.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingButtons() {
  const host = document.getElementById("floating-actions");
  if (!host) {
    return;
  }

  host.innerHTML = `
    <div class="floating-stack">
      <a class="floating-call" href="${siteConfig.phoneLink}" aria-label="Call Samrijo Hospital now">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.85 12.85 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.85 12.85 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        Call Now
      </a>
      <a class="floating-whatsapp" href="${siteConfig.whatsappGeneral}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.51 0 .17 5.34.17 11.9c0 2.1.55 4.16 1.59 5.97L0 24l6.32-1.66a11.88 11.88 0 0 0 5.74 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.43Zm-8.45 18.3h-.01a9.95 9.95 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.91 9.91 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.03 7.04 2.91a9.87 9.87 0 0 1 2.9 7.03c0 5.49-4.46 9.95-9.96 9.95Zm5.46-7.44c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.19.3-.77.98-.94 1.18-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.41-1.48-.89-.79-1.49-1.76-1.66-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.45 0 1.44 1.06 2.84 1.2 3.04.15.2 2.08 3.18 5.05 4.46.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.78-.73 2.03-1.43.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.57-.35Z"></path>
        </svg>
        WhatsApp
      </a>
    </div>
  `;
}

function compactServiceCard(service, index) {
  return `
    <article class="service-card reveal p-7">
      <div class="mb-4 flex items-center justify-between gap-4">
        <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">Specialty Care</span>
        <span class="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 class="font-display text-xl font-bold text-slate-950">${service.title}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-600">${service.description}</p>
      <ul class="mt-5 space-y-2 text-sm text-slate-700">
        ${service.benefits
          .slice(0, 2)
          .map(
            (benefit) => `
              <li class="flex items-start gap-2">
                <span class="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                <span>${benefit}</span>
              </li>
            `
          )
          .join("")}
      </ul>
      <div class="mt-6 flex flex-wrap gap-3">
        <a href="${whatsappLink(service.title)}" target="_blank" rel="noopener" class="btn-primary text-sm">WhatsApp</a>
        <a href="services.html" class="btn-secondary text-sm">View Details</a>
      </div>
    </article>
  `;
}

function fullServiceCard(service, index) {
  return `
    <article class="service-card reveal flex h-full flex-col p-7">
      <div class="flex items-center justify-between gap-4">
        <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">Advanced Surgery</span>
        <span class="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 class="mt-5 font-display text-2xl font-bold text-slate-950">${service.title}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-600">${service.description}</p>
      <div class="mt-6">
        <p class="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">Benefits</p>
        <ul class="mt-4 space-y-3">
          ${service.benefits
            .map(
              (benefit) => `
                <li class="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 13 4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>${benefit}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
      <div class="mt-7 pt-2">
        <a href="${whatsappLink(service.title)}" target="_blank" rel="noopener" class="btn-primary w-full text-sm">Ask About ${service.title}</a>
      </div>
    </article>
  `;
}

function renderServiceGrids() {
  document.querySelectorAll("[data-service-grid]").forEach((grid) => {
    const mode = grid.dataset.serviceGrid;
    const limit = Number(grid.dataset.limit || services.length);
    const selectedServices = mode === "featured" ? services.slice(0, limit) : services;

    grid.innerHTML = selectedServices
      .map((service, index) => (mode === "featured" ? compactServiceCard(service, index) : fullServiceCard(service, index)))
      .join("");
  });
}

function populateServiceSelect() {
  const select = document.getElementById("service-select");
  if (!select) {
    return;
  }

  const options = services
    .map((service) => `<option value="${service.title}">${service.title}</option>`)
    .join("");
  select.insertAdjacentHTML("beforeend", options);
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function animateCounter(counter) {
  const target = Number(counter.dataset.counter || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1500;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);
    counter.textContent = `${new Intl.NumberFormat("en-IN").format(value)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = `${new Intl.NumberFormat("en-IN").format(target)}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  renderFloatingButtons();
  renderServiceGrids();
  populateServiceSelect();
  setupReveal();
  setupCounters();
  setCurrentYear();
});
