function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

window.addEventListener('load', function () {
  const container = document.querySelector('.container');
  container.classList.add('show');
});

const Accordians=document.querySelectorAll(".Accordian");

Accordians.forEach(Accordian =>{
    const icon = Accordian.querySelector(".icon");
    const Answer=Accordian.querySelector(".Answer");

    Accordian.addEventListener("click", ()=>{
        icon.classList.toggle("Active");
        Answer.classList.toggle("Active");
    })
})
