/**
 * Shared site header — client-side only. Logo: main-logo.png
 */
(function () {
  const SITE = {
    brandName: "Shakib Alam",
    brandTagline: "Technology & Innovation",
    logo: "main-logo.png",
    logoFallback: "favicon.png",
    logoAlt:
      "Shakib Alam Technology & Innovation logo — SA circuit hexagon mark with Shakib Alam wordmark",
    phone: "9117492652",
    email: "alamshakib332@gmail.com",
    social: [
      {
        href: "https://www.linkedin.com/in/shakib-alam-6114a2253/",
        icon: "fa-brands fa-linkedin",
        label: "LinkedIn",
      },
      {
        href: "https://github.com/alamshaki",
        icon: "fa-brands fa-github",
        label: "GitHub",
      },
      {
        href: "mailto:alamshakib332@gmail.com",
        icon: "fa-solid fa-envelope",
        label: "Email",
      },
    ],
    whatsapp: "9117492652",
    whatsappMessage:
      "Hi Shakib! I visited your portfolio and would like to discuss a project.",
    nav: [
      { id: "home", label: "Home", href: "index.html" },
      { id: "about", label: "About", href: "about.html" },
      { id: "why", label: "Why Me", href: "why-chose.html" },
      { id: "projects", label: "Projects", href: "projects.html" },
      { id: "experience", label: "Experience", href: "index.html#experience" },
      { id: "contact", label: "Contact", href: "contact.html" },
    ],
  };

  const homeLabel = `${SITE.brandName} — ${SITE.brandTagline}, go to homepage`;

  function getCurrentPageId() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const hash = window.location.hash;
    if (file === "index.html" && hash === "#experience") return "experience";
    const fileMap = {
      "index.html": "home",
      "about.html": "about",
      "why-chose.html": "why",
      "projects.html": "projects",
      "contact.html": "contact",
    };
    return fileMap[file] || "home";
  }

  function isActive(item, currentId) {
    return item.id === currentId;
  }

  function renderLogo(extraClass = "") {
    const cls = ["logo-img", extraClass].filter(Boolean).join(" ");
    return `<a href="index.html" class="logo" aria-label="${homeLabel}">
      <img
        src="${SITE.logo}"
        alt="${SITE.logoAlt}"
        class="${cls}"
        width="220"
        height="56"
        decoding="async"
        onerror="if(!this.dataset.tried){this.dataset.tried='1';this.src='${SITE.logoFallback}';}else{this.hidden=true;this.nextElementSibling.hidden=false;}"
      />
      <span class="logo-fallback" hidden>${SITE.brandName}</span>
    </a>`;
  }

  function renderHeader() {
    const currentId = getCurrentPageId();

    const desktopNav = SITE.nav
      .map((item) => {
        const active = isActive(item, currentId) ? ' class="active"' : "";
        return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
      })
      .join("");

    const mobileNav = SITE.nav
      .map((item) => {
        const active = isActive(item, currentId) ? ' class="active"' : "";
        return `<li class="mob-nav-item"><a href="${item.href}"${active}>${item.label}</a></li>`;
      })
      .join("");

    const socialHtml = SITE.social
      .map(
        (s) =>
          `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}"><i class="${s.icon}"></i></a>`
      )
      .join("");

    return `
      <header class="site-header">
        <div class="header-inner">
          <nav class="navbar" aria-label="Main navigation">
            ${renderLogo()}

            <div class="nav-menu">
              <ul>${desktopNav}</ul>
            </div>

            <div class="navbar-actions">
              <a href="tel:${SITE.phone}" class="header-icon-btn header-phone" aria-label="Call ${SITE.phone}">
                <i class="fa-solid fa-phone"></i>
              </a>
              <div class="header-social" aria-label="Social links">${socialHtml}</div>
              <a href="contact.html" class="nav-cta">Hire Me</a>
              <button type="button" class="openmenu-icon" aria-label="Open navigation menu" aria-expanded="false">
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </nav>
        </div>

        <div class="nav-overlay" aria-hidden="true"></div>
        <aside class="mobile-navbar" aria-label="Mobile navigation" aria-hidden="true">
          <div class="mobile-nav-head">
            ${renderLogo("logo-img--drawer")}
            <button type="button" class="close-menu-icon" aria-label="Close navigation menu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <ul class="mobile-nav-list">${mobileNav}</ul>
          <div class="mobile-nav-footer">
            <a href="tel:${SITE.phone}" class="mobile-nav-cta">Call Us</a>
            <a href="contact.html" class="mobile-nav-cta">Hire Me</a>
          </div>
        </aside>
      </header>
    `;
  }

  function setMenuOpen(open) {
    const mobileMenu = document.querySelector(".mobile-navbar");
    const overlay = document.querySelector(".nav-overlay");
    const toggle = document.querySelector(".openmenu-icon");
    mobileMenu?.classList.toggle("is-open", open);
    overlay?.classList.toggle("is-visible", open);
    document.body.classList.toggle("nav-open", open);
    if (mobileMenu) mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  function openMobileMenu() {
    setMenuOpen(true);
  }

  function initMobileMenu() {
    const menuToggle = document.querySelector(".openmenu-icon");
    const closeButton = document.querySelector(".close-menu-icon");
    const overlay = document.querySelector(".nav-overlay");
    const mobileMenu = document.querySelector(".mobile-navbar");

    menuToggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      openMobileMenu();
    });
    closeButton?.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });
    overlay?.addEventListener("click", closeMobileMenu);

    document.body.addEventListener("click", (e) => {
      if (
        mobileMenu?.classList.contains("is-open") &&
        !mobileMenu.contains(e.target) &&
        !menuToggle?.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    document.querySelectorAll(".mob-nav-item a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeMobileMenu();
    });
  }

  function initScrollEffects() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function renderWhatsAppWidget() {
    const text = encodeURIComponent(SITE.whatsappMessage);
    const href = `https://wa.me/${SITE.whatsapp}?text=${text}`;
    return `
      <div class="whatsapp-widget">
        <a href="${href}" class="whatsapp-widget__btn" target="_blank" rel="noopener noreferrer" aria-label="Chat with Shakib Alam on WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    `;
  }

  function mountHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    mount.outerHTML = renderHeader() + renderWhatsAppWidget();
    initMobileMenu();
    initScrollEffects();
  }

  window.closeMobileMenu = closeMobileMenu;
  window.openMobileMenu = openMobileMenu;
  window.CloseMobileMenu = closeMobileMenu;
  window.OpenMobileMenu = openMobileMenu;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountHeader);
  } else {
    mountHeader();
  }
})();
