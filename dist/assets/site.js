const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const servicesGroup = document.querySelector('.nav-group');
const servicesToggle = document.querySelector('.nav-services-toggle');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    servicesGroup?.classList.remove('open');
    servicesToggle?.setAttribute('aria-expanded', 'false');
  }));
}
if (servicesGroup && servicesToggle) {
  servicesToggle.addEventListener('click', () => {
    const open = servicesGroup.classList.toggle('open');
    servicesToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (!servicesGroup.contains(event.target)) {
      servicesGroup.classList.remove('open');
      servicesToggle.setAttribute('aria-expanded', 'false');
    }
  });
  servicesGroup.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      servicesGroup.classList.remove('open');
      servicesToggle.setAttribute('aria-expanded', 'false');
      servicesToggle.focus();
    }
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
const form = document.querySelector('[data-contact-form]');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('[role="status"]').textContent = 'Thank you. This design concept does not send messages yet—please call or WhatsApp the clinic for assistance.';
});
