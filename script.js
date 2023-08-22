const Accordians=document.querySelectorAll(".Accordian");

Accordians.forEach(Accordian =>{
    const icon = Accordian.querySelector(".icon");
    const Answer=Accordian.querySelector(".Answer");

    Accordian.addEventListener("click", ()=>{
        icon.classList.toggle("Active");
        Answer.classList.toggle("Active");
    })
})
