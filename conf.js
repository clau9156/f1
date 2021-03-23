"use strict";

// The model of all features
const features = {
    front_wing: false,
    rear_wing: false,
    halo: false,
    driver: false
  };

document.addEventListener("DOMContentLoaded", loadSVG);

let paint="";

function loadSVG() {
    console.log("loadSVG");

    fetch("configuratorF1-01.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");

        // TODO: put the SVG into the DOM
        document.querySelector("section").innerHTML = svgData;
        // TODO: Start the animation
    startPersonalising();
    })
}

function startPersonalising() {
    console.log("startPersonalising");
    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));
    document.querySelector(".color1").addEventListener("click", clickColor1);
    document.querySelector(".color2").addEventListener("click", clickColor2);
    document.querySelector(".color3").addEventListener("click", clickColor3);
    document.querySelector(".color4").addEventListener("click", clickColor4);
    document.querySelector(".color5").addEventListener("click", clickColor5);
    document.querySelector(".color6").addEventListener("click", clickColor6);
    document.querySelector(".color7").addEventListener("click", clickColor7);
    document.querySelector(".color8").addEventListener("click", clickColor8);
    document.querySelector(".color9").addEventListener("click", clickColor9);
    document.querySelector(".color10").addEventListener("click", clickColor10);
    document.querySelector(".color11").addEventListener("click", clickColor11);
    document.querySelector(".color12").addEventListener("click", clickColor12);
    document.querySelector(".color13").addEventListener("click", clickColor13);
    document.querySelector(".color14").addEventListener("click", clickColor14);
    document.querySelector(".color15").addEventListener("click", clickColor15);
    document.querySelector(".color16").addEventListener("click", clickColor16);
    document.querySelector(".color17").addEventListener("click", clickColor17);
    document.querySelector(".color18").addEventListener("click", clickColor18);
    document.querySelector(".color19").addEventListener("click", clickColor19);
    document.querySelector(".color20").addEventListener("click", clickColor20);
  
  
    document.querySelector("#upper").addEventListener("click", click)
    document.querySelector("#lower").addEventListener("click", click)
    document.querySelector("#front").addEventListener("click", click)
    document.querySelector("#flip").addEventListener("click", click)
    document.querySelector("#floor").addEventListener("click", click)
    document.querySelector("#wheels").addEventListener("click", click)
}

function clickColor1() {
    console.log("clickColor1");
    document.querySelector(".color1").removeEventListener("click", clickColor1);
    document.querySelector(".color1").classList.add("outline");
    paint = "#02DEDC";

    carListener();
}

function clickColor2() {
    console.log("clickColor2");
    document.querySelector(".color2").removeEventListener("click", clickColor2);
    document.querySelector(".color2").classList.add("outline");
    paint = "#A6A8A7";

    carListener();
}

function clickColor3() {
    console.log("clickColor3");
    document.querySelector(".color3").removeEventListener("click", clickColor3);
    document.querySelector(".color3").classList.add("outline");
    paint = "#1E1E1E";

    carListener();
}

function clickColor4() {
    console.log("clickColor4");
    document.querySelector(".color4").removeEventListener("click", clickColor4);
    document.querySelector(".color4").classList.add("outline");
    paint = "#A60303";

    carListener();
}

function clickColor5() {
    console.log("clickColor5");
    document.querySelector(".color5").removeEventListener("click", clickColor5);
    document.querySelector(".color5").classList.add("outline");
    paint = "#FFED4B";

    carListener();
}

function clickColor6() {
    console.log("clickColor6");
    document.querySelector(".color6").removeEventListener("click", clickColor6);
    document.querySelector(".color6").classList.add("outline");
    paint = "#FD1010";

    carListener();
}

function clickColor7() {
    console.log("clickColor6");
    document.querySelector(".color7").removeEventListener("click", clickColor7);
    document.querySelector(".color7").classList.add("outline");
    paint = "#1B212F";

    carListener();
} 

function clickColor8() {
    console.log("clickColor6");
    document.querySelector(".color8").removeEventListener("click", clickColor8);
    document.querySelector(".color8").classList.add("outline");
    paint = "#003B39";

    carListener();
}

function clickColor9() {
    console.log("clickColor6");
    document.querySelector(".color9").removeEventListener("click", clickColor9);
    document.querySelector(".color9").classList.add("outline");
    paint = "#009CA1";

    carListener();
}

function clickColor10() {
    console.log("clickColor6");
    document.querySelector(".color10").removeEventListener("click", clickColor10);
    document.querySelector(".color10").classList.add("outline");
    paint = "#BF0B5F";

    carListener();
}

function clickColor11() {
    console.log("clickColor6");
    document.querySelector(".color11").removeEventListener("click", clickColor11);
    document.querySelector(".color11").classList.add("outline");
    paint = "#FF2800";

    carListener();
}

function clickColor12() {
    console.log("clickColor6");
    document.querySelector(".color12").removeEventListener("click", clickColor12);
    document.querySelector(".color12").classList.add("outline");
    paint = "#570B1F";

    carListener();
}


function clickColor13() {
    console.log("clickColor6");
    document.querySelector(".color13").removeEventListener("click", clickColor13);
    document.querySelector(".color13").classList.add("outline");
    paint = "#E4EBF2";

    carListener();
}

function clickColor14() {
    console.log("clickColor6");
    document.querySelector(".color14").removeEventListener("click", clickColor14);
    document.querySelector(".color14").classList.add("outline");
    paint = "#47080B";

    carListener();
}

function clickColor15() {
    console.log("clickColor6");
    document.querySelector(".color15").removeEventListener("click", clickColor15);
    document.querySelector(".color15").classList.add("outline");
    paint = "#FC8814";

    carListener();
}

function clickColor16() {
    console.log("clickColor6");
    document.querySelector(".color16").removeEventListener("click", clickColor16);
    document.querySelector(".color16").classList.add("outline");
    paint = "#0665FF";

    carListener();
}

function clickColor17() {
    console.log("clickColor6");
    document.querySelector(".color17").removeEventListener("click", clickColor17);
    document.querySelector(".color17").classList.add("outline");
    paint = "#003286";

    carListener();
}

function clickColor18() {
    console.log("clickColor6");
    document.querySelector(".color18").removeEventListener("click", clickColor18);
    document.querySelector(".color18").classList.add("outline");
    paint = "#01D4FD";

    carListener();
}

function clickColor19() {
    console.log("clickColor6");
    document.querySelector(".color19").removeEventListener("click", clickColor19);
    document.querySelector(".color19").classList.add("outline");
    paint = "#FFFFFF";

    carListener();
}

function clickColor20() {
    console.log("clickColor6");
    document.querySelector(".color20").removeEventListener("click", clickColor20);
    document.querySelector(".color20").classList.add("outline");
    paint = "black";

    carListener();
}

function carListener() {

    document.querySelector("#upper").addEventListener("click", clickUpper);
    document.querySelector("#lower").addEventListener("click", clickLower);
    document.querySelector("#front").addEventListener("click", clickFront);
    document.querySelector("#flip").addEventListener("click", clickFlip);
    document.querySelector("#floor").addEventListener("click", clickFloor);
    document.querySelector("#wheels").addEventListener("click", clickWheels);

}

function clickUpper() {
    console.log("Click Upper");
    document.querySelector("#upper").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function clickLower() {
    console.log("Click Lower");
    document.querySelector("#lower").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function clickFront() {
    console.log("Click Front");
    document.querySelector("#front").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function clickFlip() {
    console.log("Click Flip");
    document.querySelector("#flip").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function clickFloor() {
    console.log("Click Floor");
    document.querySelector("#floor").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function clickWheels() {
    console.log("Click Wheels");
    document.querySelector("#wheels").setAttribute("fill", paint);
    removeEventListeners();
    startPersonalising();
}

function toggleOption() {

}