function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

window.addEventListener('load', function () {
  const container = document.querySelector('.container');
  container.classList.add('show');
});
