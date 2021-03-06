"use strict";

window.addEventListener("DOMContentLoaded", carAnimation);

function carAnimation() {
    gsap.to(".carDrive", {duration: 3, x: "140vw", ease: "power3.in",  scrollTrigger:{trigger:".carDrive"}});
    gsap.to("#textTitle", {duration: 3, x: "92vw", ease: "power3.in",  scrollTrigger:{trigger:"#textTitle"}});
    setTimeout(function() {
        document.querySelector("#audio").play();
        document.querySelector("#audio").volume=0.2;
        // setTimeout(function() {
        //     document.querySelector("#audio").pause();
        // },2400);
    }, 1500);
}


gsap.registerPlugin(ScrollTrigger);
gsap.from("#configDivImg", { x: "-45vw" , scrollTrigger:{
    trigger:"#triggerOne",
    scrub:true , 
    start:"top ",
    end:"bottom" 
    } });
gsap.from("#textConfig", { x: "-45vw" , scrollTrigger:{
    trigger:"#triggerOne",
    scrub:true , 

    start:"top", 
    end:"bottom" ,
    ease: "easeInOut"
    } });

gsap.from("#heritDivImg", { x: "45vw" , scrollTrigger:{
    trigger:"#triggerTwo", 
    scrub:true , 

    start:"top 70%", 
    end:"bottom 20%" } });
gsap.from("#textHerit", { x: "45vw" , scrollTrigger:{
    trigger:"#triggerTwo", 
    scrub:true , 

    start:"top 70%", 
    end:"top  40%" } });


