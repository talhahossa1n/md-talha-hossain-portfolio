// ─── Theme toggle ────────────────────────────────────────
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  applyTheme(isDark ? "light" : "dark");
});

// ─── Sticky nav ─────────────────────────────────────────────
const nav = document.getElementById("main-nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  },
  { passive: true },
);

// ─── Hamburger ──────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// ─── Scroll reveal (IntersectionObserver) ───────────────────
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

revealEls.forEach((el) => observer.observe(el));

// ─── Skill tags hover cycle ──────────────────────────────────
document.querySelectorAll(".skill-card").forEach((card) => {
  const tags = card.querySelectorAll(".sk-tag");
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        tags.forEach((t, i) => {
          setTimeout(() => t.classList.add("active"), i * 60);
          setTimeout(() => t.classList.remove("active"), i * 60 + 600);
        });
        io.unobserve(card);
      }
    },
    { threshold: 0.5 },
  );
  io.observe(card);
});

// ─── Reduced motion ──────────────────────────────────────────
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}
