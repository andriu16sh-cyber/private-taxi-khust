// ЗАМІНИТЬ ЦІ ДАНІ НА СВОЇ
const SITE_CONFIG = {
  phoneDisplay: "+38 (000) 000-00-00",
  phoneHref: "+380000000000",
  telegramUrl: "https://t.me/your_username"
};

const phoneLinks = document.querySelectorAll("[data-phone-link]");
const phoneTexts = document.querySelectorAll("[data-phone-text]");
const telegramLinks = document.querySelectorAll("[data-telegram-link]");

phoneLinks.forEach((link) => {
  link.href = `tel:${SITE_CONFIG.phoneHref}`;
});

phoneTexts.forEach((element) => {
  element.textContent = SITE_CONFIG.phoneDisplay;
});

telegramLinks.forEach((link) => {
  link.href = SITE_CONFIG.telegramUrl;
});

document.getElementById("current-year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function closeMenu() {
  menuButton.classList.remove("active");
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

updateHeader();
