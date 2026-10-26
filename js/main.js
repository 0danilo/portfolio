document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuButton.textContent = open ? 'Close menu' : 'Menu';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);
const themeButton = document.querySelector('.theme-toggle');
themeButton.hidden = false;

let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch { /* Storage is optional. */ }
function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.textContent = dark ? 'Light mode' : 'Dark mode';
}
setTheme(savedTheme ? savedTheme === 'dark' : true);
themeButton.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  setTheme(dark);
  savedTheme = dark ? 'dark' : 'light';
  try { localStorage.setItem('portfolio-theme', savedTheme); } catch { /* Continue without persistence. */ }
});
