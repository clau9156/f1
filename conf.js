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