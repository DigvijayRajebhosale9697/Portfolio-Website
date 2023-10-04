let T = gsap.timeline()

T.from('.Header,.Left1,.Right1,.Nav li', {
    y: -100,
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger: 0.5
})

gsap.from('.ONE , .Container .LOGOS', {
    y: 100,
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
        markers:true,
        start:'top 50%',
        end:'top 10%',
        scrub:5
    }
})

let T4=gsap.timeline()
T3.from('.Container4 .heading2, .Container4 .paragraph, .Skills-Section',{
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Container4 .heading2, .Container4 .paragraph, .Skills-Section',
        scroller:'body',
        markers:true,
        start:'top 60%',
        end:'top 10%',
        scrub:5
    }
})

