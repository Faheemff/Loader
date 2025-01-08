let tl = gsap.timeLine;

let text = document.querySelector('.text')
let span = document.querySelectorAll('span');


// span.forEach((element)=> {
//     gsap.from(element, {
//         x:-40,
//         opacity: 0,
//         duration: 1,
//         ease: 'elastic.inOut(1, 0.3)',
//         stagger: 1
//     })
// })

gsap.from(span, {
    y: 40,
    opacity: 0,
    duration: 0.1,
    stagger: 0.5
});
