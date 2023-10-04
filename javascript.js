function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

window.addEventListener('load', function () {
  const container = document.querySelector('.container');
  container.classList.add('show');
});

const Accordians = document.querySelectorAll(".Accordian");

Accordians.forEach(Accordian => {
  const icon = Accordian.querySelector(".icon");
  const Answer = Accordian.querySelector(".Answer");

  Accordian.addEventListener("click", () => {
    icon.classList.toggle("Active");
    Answer.classList.toggle("Active");
  })
})

let intro = document.querySelector(".Intro");
let LogoHeader = document.querySelector(".Logo-Header");
let LogoSpan = document.querySelectorAll(".LO");
let Header = document.querySelector('.Header')
window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    LogoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      Header.style = 'position: fixed;'
    }, 3500)

    setTimeout(() => {

      LogoSpan.forEach((span, idx) => {

        setTimeout(() => {

          span.classList.remove('active');
          span.classList.add('Fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh'
    }, 2500)
  });
});