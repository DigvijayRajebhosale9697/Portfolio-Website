let T = gsap.timeline()

T.from('.Header,.Left1,.Right1,.Nav li', {
    y: -100,
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger: 0.5
})

gsap.from('.ONE , .Container .LOGOS', {
    x: -100,
    opacity: 0,
    delay: 3,
    duration: 2,
    stagger: 1
})
gsap.from('.IMG-BOX', {
    y: 100,
    opacity: 0,
    delay: 3,
    duration: 2,
    stagger: 1,
    scale: 0
})

let T2=gsap.timeline()
T2.from('.Container2 .About ,.Container2 .Paragraph', {
    duration: 1,
    delay: 1,
    y:-200,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Container2 .About,.Container2 .Paragraph',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})

let T3=gsap.timeline()
T3.from(' #Education',{
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'#Education',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})

let T4=gsap.timeline()
T3.from('.Container4 .heading2, .Container4 .paragraph, .Skills-Section',{
    duration: 1,
    delay: 1,
    x:-200,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Container4 .heading2, .Container4 .paragraph, .Skills-Section',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})

let T5=gsap.timeline()
T3.from('.Container5 .heading2, .Container5 .Paragraph',{
    duration: 1,
    delay: 1,
    x:-200,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Container5 .heading2, .Container5 .Paragraph',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})
gsap.from('.Gallery .Box',{
    y:100,
    duration:1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:
    {
        trigger:'.Gallery ,.Box',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 10%',
        scrub:5
    }
})
gsap.from('.Sub-Container5-B , .Accordian',{
    x:-100,
    duration:1,
    opacity: 0,
    stagger: 3,
    scrollTrigger:
    {
        trigger:'.Sub-Container5-B, .Accordian',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 2%',
        scrub:5
    }
})
let TF=gsap.timeline()
TF.from('.Container-6 .heading2 ,.Left6,.Right6', {
    duration: 1,
    delay: 1,
    y:-200,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Container-6 .heading2 ,.Left6,.Right6',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})

let TFOOTER=gsap.timeline()
TFOOTER.from('.Container7 .Menu li, .Container7 .Social-icon li , .Container7 .S  ', {
    duration: 2,
    delay: 1,
    y:-300,
    opacity:0,
    stagger: 0.4,
    scrollTrigger:
    {
        trigger:'.Container7 .Menu li,.Container7 .Social-icon li ,.Container7 .S ',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'bottom 50%',
        scrub:5
    }
})


